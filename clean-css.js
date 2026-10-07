const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Remove orphaned CSS rules for elements that no longer exist in the HTML
const orphanedRules = [
  /\.eliana-green-box\s*\{[^}]*\}\n/g,
  /\.eliana-green-box h3\s*\{[^}]*\}\n/g,
  /\.eliana-soft-text\s*\{[^}]*\}\n/g,
  /\.eliana-desc-text\s*\{[^}]*\}\n/g,
  /\.text-green-main\s*\{[^}]*\}\n/g,
  /\.eliana-logo-wrap\s*\{[^}]*\}\n/g,
  /\.eliana-logo-svg\s*\{[^}]*\}\n/g,
];

orphanedRules.forEach(r => {
  css = css.replace(r, '');
});

// Clean up the mobile media query block – remove references to removed elements
// Replace the @media (max-width: 576px) block
const mobileBlock = /@media \(max-width: 576px\) \{[\s\S]*?\n\}/;
const cleanMobileBlock = `@media (max-width: 576px) {
  .media-eliana-card {
    min-height: 480px;
  }
  .eliana-testimonial-floating {
    margin: 0 12px 16px;
    padding: 14px;
    gap: 12px;
  }
  .media-box-dark {
    padding: 24px;
  }
  .media-box-btn {
    align-self: stretch;
    text-align: center;
  }
}`;

if (mobileBlock.test(css)) {
  css = css.replace(mobileBlock, cleanMobileBlock);
  console.log('SUCCESS: Mobile media query cleaned up!');
} else {
  console.log('INFO: Mobile media query not found, skipping.');
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('SUCCESS: Orphaned CSS rules removed!');
