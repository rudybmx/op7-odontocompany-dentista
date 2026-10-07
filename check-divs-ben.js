const fs = require('fs');
const tsx = fs.readFileSync('src/app/page.tsx', 'utf8');
const start = tsx.indexOf('<section className="benefits-section-new"');
const end = tsx.indexOf('<section className="numbers-section-new"');
const section = tsx.substring(start, end);
const divsOpen = (section.match(/<div[^>]*>/g) || []).length;
const divsSelfClosing = (section.match(/<div[^>]*\/>/g) || []).length;
const divsClose = (section.match(/<\/div>/g) || []).length;
console.log('Benefits div balance:', divsOpen - divsSelfClosing - divsClose);
