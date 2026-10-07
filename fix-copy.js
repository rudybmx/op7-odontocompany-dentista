const fs = require('fs');
const path = require('path');

function processText(text) {
  // Replace em dashes
  text = text.replace(/\s*—\s*/g, ', ');
  // Replace AI phrases
  text = text.replace(/No entanto[,]?/gi, 'Mas');
  text = text.replace(/Além disso[,]?\s*/gi, '');
  text = text.replace(/Vale ressaltar que\s*/gi, '');
  text = text.replace(/É importante destacar que\s*/gi, '');
  text = text.replace(/É importante destacar\s*/gi, '');
  text = text.replace(/Dessa forma[,]?\s*/gi, 'Por isso, ');
  text = text.replace(/Portanto[,]?\s*/gi, '');
  
  // Remove exclamation marks
  text = text.replace(/!+/g, '.');
  
  // Remove double spaces and trailing whitespaces
  text = text.replace(/  +/g, ' ');
  text = text.replace(/\s+\n/g, '\n');
  
  return text;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Basic text replacement outside of tags
  // This is a naive but effective way for JSX files if we're careful.
  // Actually, let's just run processText on the whole file, but carefully 
  // to avoid breaking code like `className="..."` which shouldn't have these phrases anyway.
  
  // Let's protect the imports and code structure by only replacing text inside >...<
  content = content.replace(/>([^<]+)</g, (match, p1) => {
    return '>' + processText(p1) + '<';
  });

  // Also fix text inside {"..."} if any
  content = content.replace(/\{"([^"]+)"\}/g, (match, p1) => {
    return '{"' + processText(p1) + '"}';
  });

  // Also fix placeholder="..." and other text attributes
  content = content.replace(/placeholder="([^"]+)"/g, (match, p1) => {
    return 'placeholder="' + processText(p1) + '"';
  });

  // Ensure sentence case for headlines
  // We'll just do a global check for uppercase words that look like ALL CAPS sentences
  // The prompt says: "Headlines: sentence case only (not ALL CAPS unless it's a label/eyebrow)"
  // It's hard to distinguish headlines from labels programmatically, but I will manually fix headlines in the CSS or the text.

  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  path.join(__dirname, 'src', 'app', 'page.tsx'),
  path.join(__dirname, 'src', 'components', 'CtaFunnel.tsx')
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    processFile(f);
    console.log('Processed', f);
  }
});
