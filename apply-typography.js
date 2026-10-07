const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Replace Google Fonts
// Ensure we remove old fonts if there were any, but index.html didn't have an @import in globals.css, it was in HTML maybe.
// We will add the @import at the top.
css = css.replace(/@import "tailwindcss";/g, "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');\n@import \"tailwindcss\";");

// 2. Add Tailwind Theme Config
const themeInline = `
@theme inline {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-sans: 'Inter', sans-serif;
  
  --text-label: 12px;
  --text-label--line-height: 1.4;
  --text-label--letter-spacing: 0.1em;

  --text-small: 14px;
  --text-small--line-height: 1.5;
  --text-small--letter-spacing: 0;

  --text-base: 16px;
  --text-base--line-height: 1.65;
  --text-base--letter-spacing: 0;

  --text-lead: 20px;
  --text-lead--line-height: 1.5;
  --text-lead--letter-spacing: -0.01em;

  --text-h3: 26px;
  --text-h3--line-height: 1.2;
  --text-h3--letter-spacing: -0.02em;

  --text-h2: 42px;
  --text-h2--line-height: 1.1;
  --text-h2--letter-spacing: -0.025em;

  --text-h1: 68px;
  --text-h1--line-height: 1.05;
  --text-h1--letter-spacing: -0.035em;
}
`;

// replace existing @theme inline if any
if (css.includes('@theme inline {')) {
  css = css.replace(/@theme inline \{[\s\S]*?\}/, themeInline.trim());
} else {
  css = css.replace(/@import "tailwindcss";/, "@import \"tailwindcss\";\n" + themeInline);
}

// 3. Global removals
// Remove DM Sans and DM Serif variables
css = css.replace(/--serif:[^;]+;/g, "--serif: var(--font-heading);");
css = css.replace(/--sans:[^;]+;/g, "--sans: var(--font-sans);");

// 4. Specific Mappings
// Hero headline -> font-heading text-h1
css = css.replace(/\.hero-headline \{[\s\S]*?\}/g, (match) => {
  return `.hero-headline {\n  @apply font-heading text-h1 font-[700];\n  color: var(--white); margin-bottom: 24px;\n}`;
});

// Section titles -> font-heading text-h2
css = css.replace(/\.section-title \{[\s\S]*?\}/g, (match) => {
  return `.section-title {\n  @apply font-heading text-h2 font-[700];\n  color: var(--green-900); margin-bottom: 16px;\n}`;
});
css = css.replace(/\.video-headline \{[\s\S]*?\}/g, (match) => {
  return `.video-headline {\n  @apply font-heading text-h2 font-[700];\n  color: var(--white); margin-bottom: 16px;\n}`;
});
css = css.replace(/\.cta-title \{[\s\S]*?\}/g, (match) => {
  return `.cta-title {\n  @apply font-heading text-h2 font-[700];\n  color: white; margin-bottom: 20px;\n}`;
});

// Card titles -> font-heading text-h3
const h3Classes = ['.benefit-title', '.support-item-title', '.t-name', '.faq-q-text'];
h3Classes.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    return match.replace(/font-size:[^;]+;/, '@apply font-heading text-h3 font-[600];');
  });
});

// Subtitles / lead text -> font-sans text-lead
const leadClasses = ['.hero-sub', '.section-sub', '.video-sub', '.cta-sub'];
leadClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    let replaced = match.replace(/font-size:[^;]+;/, '@apply font-sans text-lead font-[400];');
    replaced = replaced.replace(/line-height:[^;]+;/, ''); // using text-lead line height
    return replaced;
  });
});

// Body paragraphs -> font-sans text-base
const bodyClasses = ['.market-point-text', '.benefit-desc', '.check-text', '.support-item-desc', '.faq-answer-inner', '.t-quote'];
bodyClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    let replaced = match.replace(/font-size:[^;]+;/, '@apply font-sans text-base font-[400];');
    replaced = replaced.replace(/line-height:[^;]+;/, '');
    return replaced;
  });
});

// Labels / eyebrows -> font-sans text-label uppercase tracking-[0.1em] font-semibold
const labelClasses = ['.section-eyebrow span', '.hero-eyebrow span', '.video-eyebrow span', '.market-card-label', '.kpi-card-label', '.t-role', '.t-tag'];
labelClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    let replaced = match.replace(/font-size:[^;]+;/, '@apply font-sans text-label uppercase font-[600];');
    replaced = replaced.replace(/font-weight:[^;]+;/, '');
    replaced = replaced.replace(/letter-spacing:[^;]+;/, '');
    replaced = replaced.replace(/text-transform:[^;]+;/, '');
    return replaced;
  });
});

// Stat values (numbers) -> font-heading text-h2 tabular-nums
const statClasses = ['.market-card-val', '.kpi-card-val', '.support-num', '.media-stat-val', '.cta-mini-val', '.t-result-val'];
statClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    let replaced = match.replace(/font-size:[^;]+;/, '@apply font-heading text-h2 tabular-nums font-[700];');
    replaced = replaced.replace(/font-family:[^;]+;/, '');
    return replaced;
  });
});

// Small print / trust lines -> font-sans text-small
const smallClasses = ['.form-trust span', '.compare-note', '.footer-info', '.footer-legal', '.video-duration', '.form-label'];
smallClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    return match.replace(/font-size:[^;]+;/, '@apply font-sans text-small font-[400];');
  });
});

// Fix specific font weights as requested
// Form labels: Inter 500
css = css.replace(/\.form-label \{[\s\S]*?\}/g, (match) => {
  return match.replace(/font-\[400\]/, 'font-[500]'); // overriding the one above
});

// Button text: Inter 600
const btnClasses = ['.btn-primary', '.btn-ghost', '.btn-solid-green', '.form-submit'];
btnClasses.forEach(cls => {
  const regex = new RegExp("\\" + cls + "\\s*\\{[^}]+\\}", "g");
  css = css.replace(regex, (match) => {
    return match.replace(/font-size:[^;]+;/, '@apply font-sans text-base font-[600];').replace(/font-weight:[^;]+;/, '');
  });
});

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Applied golden ratio typography to globals.css!');
