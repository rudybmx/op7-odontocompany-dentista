const fs = require('fs');

// --- UPDATE PAGE.TSX ---
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldSection = content.indexOf('<section className="compare-section" id="comparativo">');
const endMarker = '<section className="benefits-section" id="vantagens">';
const endIdx = content.indexOf(endMarker);

if (oldSection === -1 || endIdx === -1) {
  console.error('Markers not found');
  process.exit(1);
}

const newSection = `<section className="compare-section-new" id="comparativo">
  {/* Ambient Glow */}
  <div className="cmp-glow" />

  <div className="cmp-inner">
    {/* Header Section */}
    <header className="cmp-header">
      <div className="cmp-eyebrow">
        <div className="cmp-eyebrow-line" />
        <span>Por que OdontoCompany?</span>
      </div>
      <h2 className="cmp-title">
        Quanto rende R$ 450k nos <em>diferentes investimentos</em>?
      </h2>
      <p className="cmp-sub">
        Antes de decidir, compare o retorno da sua franquia com outras formas de aplicar o mesmo capital.
      </p>
    </header>

    {/* Table Container */}
    <div className="cmp-table-container group">
      {/* Outer blurred glow */}
      <div className="cmp-table-glow group-hover:opacity-50" />
      
      <div className="cmp-table-card">
        <div className="cmp-table-scroll">
          <table className="cmp-table">
            <thead>
              <tr>
                <th className="th-empty"></th>
                <th className="th-highlight rounded-t-lg">OdontoCompany</th>
                <th>Tesouro IPCA+</th>
                <th>FII médio</th>
                <th>CDB 120% CDI</th>
                <th>Clínica solo</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="td-label">Renda mensal média</td>
                <td className="td-highlight">
                  <span className="td-badge">R$ 9–36k</span>
                </td>
                <td>R$ 2.700</td>
                <td>R$ 2.250</td>
                <td>R$ 3.500</td>
                <td className="td-dim">R$ 3–8k*</td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="td-label">Retorno do capital</td>
                <td className="td-highlight font-semibold">18–24 meses</td>
                <td>~14 anos</td>
                <td>~17 anos</td>
                <td>~11 anos</td>
                <td className="td-dim">Indefinido</td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="td-label">Gestão necessária</td>
                <td className="td-highlight">Com suporte total</td>
                <td>Zero</td>
                <td>Zero</td>
                <td>Zero</td>
                <td className="td-dim">100% sozinho</td>
              </tr>
              {/* Row 4 */}
              <tr>
                <td className="td-label">Marca e marketing</td>
                <td className="td-highlight">Incluso + Eliana</td>
                <td className="td-dim">-</td>
                <td className="td-dim">-</td>
                <td className="td-dim">-</td>
                <td className="td-dim">Por conta</td>
              </tr>
              {/* Row 5 */}
              <tr>
                <td className="td-label">Modelo validado</td>
                <td className="td-highlight rounded-b-lg font-semibold">35 anos + 1.000 un.</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Sim</td>
                <td className="td-dim">Sem garantia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    <p className="cmp-disclaimer">
      * Valores médios estimados. Resultados variam conforme mercado, localização e gestão do franqueado. Metodologia OdontoCompany Franchising.
    </p>

    {/* CTA Area */}
    <div className="cmp-cta-area">
      <a className="cmp-cta-btn group" href="#contato">
        <span className="cmp-cta-shimmer group-hover:animate-shimmer" />
        <span className="cmp-cta-content">
          Simular meu investimento
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </a>
    </div>
  </div>
</section>
`;

const before = content.substring(0, oldSection);
const after = content.substring(endIdx);
fs.writeFileSync('src/app/page.tsx', before + newSection + after, 'utf8');

// --- UPDATE GLOBALS.CSS ---
let cssContent = fs.readFileSync('src/app/globals.css', 'utf8');

const cssStart = cssContent.indexOf('/* ─── S3: COMPARATIVO ─── */');
const cssEndMarker = '/* ─── S4: VANTAGENS ─── */';
const cssEnd = cssContent.indexOf(cssEndMarker);

if (cssStart === -1 || cssEnd === -1) {
  console.error('CSS Markers not found');
  process.exit(1);
}

const newCss = `/* ─── S3: COMPARATIVO (Stitch Premium) ─── */
.compare-section-new {
  background: var(--green-900);
  position: relative;
  overflow: hidden;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cmp-glow {
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(181, 232, 0, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  filter: blur(120px);
}

.cmp-inner {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.cmp-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 768px;
  margin: 0 auto;
  align-items: center;
}

.cmp-eyebrow {
  display: flex; align-items: center; gap: 16px;
  justify-content: center;
}
.cmp-eyebrow-line { width: 32px; height: 1px; background: var(--lime); }
.cmp-eyebrow span {
  font-family: var(--sans);
  font-size: 14px; font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--lime);
}

.cmp-title {
  font-family: var(--serif);
  font-size: 56px; font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--white);
}
.cmp-title em {
  font-style: italic;
  color: var(--lime);
}

.cmp-sub {
  font-family: var(--sans);
  font-size: 18px; line-height: 1.6;
  color: rgba(224, 227, 229, 0.8);
}

/* Tabela */
.cmp-table-container {
  position: relative;
  width: 100%;
}

.cmp-table-glow {
  position: absolute;
  top: -2px; right: -2px; bottom: -2px; left: -2px;
  background: linear-gradient(90deg, rgba(181, 232, 0, 0.2), transparent);
  border-radius: 20px;
  filter: blur(8px);
  opacity: 0.3;
  transition: opacity 0.5s;
}

.cmp-table-card {
  position: relative;
  background: rgba(16, 20, 21, 0.4);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
}

.cmp-table-scroll {
  width: 100%;
  overflow-x: auto;
}
.cmp-table-scroll::-webkit-scrollbar { height: 6px; }
.cmp-table-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 4px; }
.cmp-table-scroll::-webkit-scrollbar-thumb { background: rgba(181, 232, 0, 0.3); border-radius: 4px; }

.cmp-table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  white-space: nowrap;
  min-width: 800px;
}

.cmp-table th {
  padding: 24px;
  font-family: var(--sans);
  font-size: 14px; font-weight: 500;
  color: var(--white);
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(16, 20, 21, 0.5);
}
.cmp-table th.th-empty { width: 25%; }

/* Coluna highlight (OdontoCompany) */
.th-highlight, .td-highlight {
  background: linear-gradient(180deg, rgba(181, 232, 0, 0.08) 0%, transparent 100%);
  border-left: 1px solid var(--lime);
  border-right: 1px solid var(--lime);
  position: relative;
}
.th-highlight::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--lime), transparent);
  box-shadow: 0 0 10px var(--lime);
}
.th-highlight {
  font-family: var(--serif) !important;
  font-size: 20px !important;
  color: var(--lime) !important;
  border-top: 1px solid var(--lime);
}

.cmp-table td {
  padding: 24px;
  font-family: var(--sans);
  font-size: 16px;
  color: var(--white);
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.3s;
}
.cmp-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.cmp-table td.td-label {
  text-align: left;
  color: rgba(224, 227, 229, 0.8);
}
.cmp-table td.td-dim {
  color: rgba(224, 227, 229, 0.5);
}

.td-highlight {
  color: var(--lime) !important;
  border-bottom-color: transparent !important;
}

.td-badge {
  background: rgba(181, 232, 0, 0.1);
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid rgba(181, 232, 0, 0.3);
  font-weight: 700;
}

.cmp-disclaimer {
  font-family: var(--sans);
  font-size: 12px;
  color: rgba(224, 227, 229, 0.6);
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

/* CTA */
.cmp-cta-area { display: flex; justify-content: center; margin-top: 16px; }
.cmp-cta-btn {
  position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  padding: 16px 32px;
  font-family: var(--sans);
  font-size: 16px; font-weight: 700;
  color: var(--green-900);
  background: var(--lime);
  border-radius: 9999px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 0 40px -10px rgba(181, 232, 0, 0.5);
  text-decoration: none;
}
.cmp-cta-btn:hover { transform: scale(1.05); }
.cmp-cta-btn:active { transform: scale(0.95); }

.cmp-cta-shimmer {
  position: absolute; inset: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transform: translateX(-100%);
}
@keyframes shimmer { 100% { transform: translateX(100%); } }
.group-hover\\:animate-shimmer { animation: shimmer 1.5s infinite; }

.cmp-cta-content {
  position: relative; display: flex; align-items: center; gap: 8px;
}

`;

const cssBefore = cssContent.substring(0, cssStart);
const cssAfter = cssContent.substring(cssEnd);

fs.writeFileSync('src/app/globals.css', cssBefore + newCss + cssAfter, 'utf8');

console.log('Update finished');
