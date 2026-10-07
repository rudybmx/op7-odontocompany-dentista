const fs = require('fs');
const path = require('path');

// ─── 1. PATCH globals.css ───────────────────────────────────────────────────
const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Fix media-layout: align-items: stretch → flex-start
// so the left box doesn't stretch to match right column height
css = css.replace(
  /\.media-layout\s*\{[^}]*\}/,
  `.media-layout {
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: flex-start; margin-bottom: 64px;
}`
);

// Fix media-box-dark: no height, no flex grow
css = css.replace(
  /\.media-box-dark\s*\{[^}]*\}/,
  `.media-box-dark {
  background: #2D7270; border-radius: 24px; padding: 40px; color: white;
}`
);

// Fix media-box-btn: auto width, left-aligned
css = css.replace(
  /\.media-box-btn\s*\{[^}]*\}/,
  `.media-box-btn {
  display: inline-block;
  align-self: flex-start;
  width: auto;
  background: var(--green-500) !important;
  color: white !important;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  padding: 16px 36px;
  border-radius: 9999px;
  box-shadow: 0 4px 15px rgba(56, 181, 74, 0.3);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 24px;
}`
);

// Fix the right card: use image as full cover background
// Replace eliana-img, eliana-green-box, eliana-desc-text, eliana-logo-wrap styles
css = css.replace(
  /\.media-image-side\s*\{[^}]*\}/,
  `.media-image-side { position: relative; display: flex; align-items: stretch; min-height: 600px; }`
);

css = css.replace(
  /\.media-eliana-card\s*\{[\s\S]*?\}(?=\n\.eliana-img)/,
  `.media-eliana-card {
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid var(--gray-200);
  background: #2D7270;
}`
);

css = css.replace(
  /\.eliana-img\s*\{[\s\S]*?\}(?=\n\.eliana-green-box)/,
  `.eliana-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
  pointer-events: none;
  display: block;
}`
);

// The testimonial needs to float over the image at the bottom
css = css.replace(
  /\.eliana-testimonial-floating\s*\{[\s\S]*?\}(?=\n\.eliana-test-icon-wrap)/,
  `.eliana-testimonial-floating {
  position: relative;
  z-index: 10;
  background: white;
  margin: 0 24px 24px;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  gap: 16px;
  align-items: center;
}`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('SUCCESS: globals.css patched!');

// ─── 2. PATCH page.tsx ───────────────────────────────────────────────────────
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');

// Replace the entire eliana-card contents
// The pattern between <div className="media-eliana-card"> and </div>\n      </div>
const cardPattern = /(<div className="media-eliana-card">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\n\s*<div className="media-stats-divider">)/;
const match = page.match(cardPattern);
if (match) {
  const newCardContent = `<div className="media-eliana-card">
          {/* Official Eliana ODC image - already contains text overlay and logo */}
          <img
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/eliana_odc.png"
            alt="Eliana - Embaixadora OdontoCompany"
            className="eliana-img"
          />
          
          {/* Testimonial Box overlaying the bottom of the image */}
          <div className="eliana-testimonial-floating">
            <div className="eliana-test-icon-wrap">
              <svg className="eliana-tv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <div className="eliana-test-content">
              <p className="eliana-test-quote">"A marca já chega com credibilidade. Os pacientes já conheciam a clínica pela TV."</p>
              <span className="eliana-test-author">Marcela S., Franqueada há 2 anos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    \n    <div className="media-stats-divider">`;

  page = page.replace(cardPattern, newCardContent);
  console.log('SUCCESS: page.tsx eliana card simplified to image-only!');
} else {
  // Fallback: just replace the image src and remove duplicate elements
  page = page.replace(
    /<img src="[^"]*eliana[^"]*" alt="Eliana"[^/]*\/>/,
    `<img
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/eliana_odc.png"
            alt="Eliana - Embaixadora OdontoCompany"
            className="eliana-img"
          />`
  );
  console.log('SUCCESS (fallback): image URL updated in page.tsx');
}

fs.writeFileSync(pagePath, page, 'utf8');
console.log('All done!');
