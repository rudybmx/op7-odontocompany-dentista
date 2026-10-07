const fs = require('fs');
const tsx = fs.readFileSync('src/app/page.tsx', 'utf8');
const start = tsx.indexOf('<section className="numbers-section-new"');
const end = tsx.indexOf('<section className="support-section"');
const section = tsx.substring(start, end);
const divsOpen = (section.match(/<div[^>]*>/g) || []).length;
// subtracting self-closing divs like <div />
const divsSelfClosing = (section.match(/<div[^>]*\/>/g) || []).length;
const divsClose = (section.match(/<\/div>/g) || []).length;
console.log('Numbers div balance:', divsOpen - divsSelfClosing - divsClose);
