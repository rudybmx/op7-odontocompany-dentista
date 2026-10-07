const fs = require('fs');

const oldPage = fs.readFileSync('page_original.tsx', 'utf8');
const curPage = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldStart = oldPage.indexOf('<section className="numbers-section" id="numeros">');
const oldEnd = oldPage.indexOf('<section className="support-section" id="suporte">');
const oldSection = oldPage.substring(oldStart, oldEnd);

const curStart = curPage.indexOf('<section className="numbers-section-new" id="numeros">');
const curEnd = curPage.indexOf('<section className="support-section" id="suporte">');

if (oldStart === -1 || oldEnd === -1 || curStart === -1 || curEnd === -1) {
    console.error("Could not find section markers");
    process.exit(1);
}

const before = curPage.substring(0, curStart);
const after = curPage.substring(curEnd);

fs.writeFileSync('src/app/page.tsx', before + oldSection + after, 'utf8');

// For CSS, we just remove the block we added
const curCss = fs.readFileSync('src/app/globals.css', 'utf8');
const cssStart = curCss.indexOf('/* ─── S5: NÚMEROS / MODELO (Stitch Premium) ─── */');
const cssEnd = curCss.indexOf('/* ─── S6: SUPORTE ─── */');

if (cssStart !== -1 && cssEnd !== -1) {
    const oldCssPart = `/* ─── S5: NÚMEROS / MODELO ─── */
.numbers-section { background: white; }
.numbers-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
@media (max-width: 991px) { .numbers-layout { grid-template-columns: 1fr; gap: 48px; } }
.numbers-text-side { display: flex; flex-direction: column; gap: 24px; }
.numbers-checklist { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
.numbers-check-item { display: flex; gap: 16px; align-items: flex-start; }
.numbers-check-item svg { width: 24px; height: 24px; color: var(--green-600); flex-shrink: 0; margin-top: 2px; }
.numbers-check-item p { font-family: var(--sans); font-size: 16px; color: var(--slate-700); line-height: 1.6; }
.numbers-cta-row { margin-top: 16px; }

.kpi-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
@media (max-width: 500px) { .kpi-cards { grid-template-columns: 1fr; } }
.kpi-card { border-radius: var(--radius); padding: 32px; display: flex; flex-direction: column; justify-content: space-between; min-height: 180px; }
.kpi-card.dark { background: var(--green-900); color: white; }
.kpi-card.light { background: var(--off-white); border: 1px solid var(--gray-200); }
.kpi-card-val { font-family: var(--sans); font-size: 36px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 8px; }
.kpi-card.dark .kpi-card-val { color: var(--lime); }
.kpi-card.light .kpi-card-val { color: var(--green-900); }
.kpi-card-desc { font-family: var(--sans); font-size: 14px; line-height: 1.5; }
.kpi-card.dark .kpi-card-desc { color: var(--gray-300); }
.kpi-card.light .kpi-card-desc { color: var(--slate-600); }

`;
    const cssBefore = curCss.substring(0, cssStart);
    const cssAfter = curCss.substring(cssEnd);
    fs.writeFileSync('src/app/globals.css', cssBefore + oldCssPart + cssAfter, 'utf8');
}

console.log("Reverted successfully");
