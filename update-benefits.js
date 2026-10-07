const fs = require('fs');

// --- UPDATE PAGE.TSX ---
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldSection = content.indexOf('<section className="benefits-section" id="vantagens">');
const endMarker = '<section className="numbers-section" id="numeros">';
const endIdx = content.indexOf(endMarker);

if (oldSection === -1 || endIdx === -1) {
  console.error('Markers not found');
  process.exit(1);
}

const newSection = `<section className="benefits-section-new" id="vantagens">
  {/* Ambient background blur elements for light theme */}
  <div className="ben-bg-shape shape-1" />
  <div className="ben-bg-shape shape-2" />

  <div className="ben-inner">
    {/* Header */}
    <div className="ben-header fade-up-item">
      <div className="ben-eyebrow">
        <div className="ben-line" />
        <span>O que você recebe</span>
        <div className="ben-line" />
      </div>
      <h2 className="ben-title">
        Tudo que você precisa para <span className="ben-highlight-text">ter sucesso</span>
      </h2>
      <p className="ben-sub">
        Você cuida da gestão do negócio. A OdontoCompany cuida de todo o resto.
      </p>
    </div>

    {/* Grid */}
    <div className="ben-grid">
      {/* Card 1 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '100ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Marketing nacional com a Eliana</h3>
        <p className="ben-card-desc">Campanhas nas maiores emissoras do país. Sua clínica aparece na TV, rádio e mídia digital.</p>
      </div>

      {/* Card 2 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '200ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Modelo de baixíssimo risco</h3>
        <p className="ben-card-desc">+1.000 unidades operando. Franquias têm 90% de sobrevivência em 5 anos.</p>
      </div>

      {/* Card 3 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '300ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Você não precisa ser dentista</h3>
        <p className="ben-card-desc">O franqueado é o gestor. Apoiamos na contratação do responsável técnico.</p>
      </div>

      {/* Card 4 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '400ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Tecnologia e CRM inclusos</h3>
        <p className="ben-card-desc">Software de gestão, agendamento digital e plataforma exclusiva.</p>
      </div>

      {/* Card 5 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '500ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Universidade corporativa</h3>
        <p className="ben-card-desc">Capacitação completa para você e sua equipe: operacional, comercial e clínico.</p>
      </div>

      {/* Card 6 */}
      <div className="ben-card fade-up-item" style={{ animationDelay: '600ms' }}>
        <div className="ben-card-topbar" />
        <div className="ben-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h3 className="ben-card-title">Suporte de ponta a ponta</h3>
        <p className="ben-card-desc">Da escolha do ponto comercial à inauguração. Especialistas em obras e mercado.</p>
      </div>
    </div>
  </div>
</section>
`;

const before = content.substring(0, oldSection);
const after = content.substring(endIdx);
fs.writeFileSync('src/app/page.tsx', before + newSection + after, 'utf8');

// --- UPDATE GLOBALS.CSS ---
let cssContent = fs.readFileSync('src/app/globals.css', 'utf8');

const cssStart = cssContent.indexOf('/* ─── S4: VANTAGENS ─── */');
const cssEndMarker = '/* ─── S5: NÚMEROS / MODELO ─── */';
const cssEnd = cssContent.indexOf(cssEndMarker);

if (cssStart === -1 || cssEnd === -1) {
  console.error('CSS Markers not found');
  process.exit(1);
}

const newCss = `/* ─── S4: VANTAGENS (Light Glass Premium) ─── */
.benefits-section-new {
  position: relative;
  background-color: #f8fafc;
  padding: 120px 0;
  overflow: hidden;
  z-index: 1;
}

/* Ambient shapes for light background */
.ben-bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
}
.ben-bg-shape.shape-1 {
  width: 500px; height: 500px;
  background: rgba(181, 232, 0, 0.4);
  top: -10%; left: -10%;
}
.ben-bg-shape.shape-2 {
  width: 600px; height: 600px;
  background: rgba(10, 46, 26, 0.15);
  bottom: -20%; right: -10%;
}

.ben-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.ben-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px auto;
}
.ben-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}
.ben-line { width: 32px; height: 1px; background: var(--green-900); }
.ben-eyebrow span {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-900);
}
.ben-title {
  font-family: var(--serif);
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--slate-900);
  letter-spacing: -0.04em;
  margin-bottom: 24px;
}
.ben-highlight-text {
  color: var(--green-900);
  font-style: italic;
  display: inline-block;
  position: relative;
}
.ben-highlight-text::after {
  content: '';
  position: absolute;
  bottom: 8px; left: 0; right: 0;
  height: 8px;
  background: rgba(181, 232, 0, 0.4);
  z-index: -1;
}

.ben-sub {
  font-family: var(--sans);
  font-size: 18px;
  line-height: 1.6;
  color: var(--slate-600);
}

/* Grid */
.ben-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

/* Light Glass Cards */
.ben-card {
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

/* Hover effects */
.ben-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(181, 232, 0, 0.3);
  background: rgba(255, 255, 255, 0.85);
}

.ben-card-topbar {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--lime), var(--green-900));
  opacity: 0;
  transition: opacity 0.4s;
}
.ben-card:hover .ben-card-topbar {
  opacity: 1;
}

.ben-icon-wrap {
  width: 56px; height: 56px;
  background: #ffffff;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: var(--green-900);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: all 0.4s;
}
.ben-card:hover .ben-icon-wrap {
  transform: scale(1.1);
  color: var(--lime);
  background: var(--green-900);
}

.ben-card-title {
  font-family: var(--sans);
  font-size: 20px;
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 12px;
  transition: color 0.3s;
}
.ben-card:hover .ben-card-title {
  color: var(--green-900);
}

.ben-card-desc {
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--slate-600);
  flex-grow: 1;
}

/* Animations */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up-item {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

`;

const cssBefore = cssContent.substring(0, cssStart);
const cssAfter = cssContent.substring(cssEnd);

fs.writeFileSync('src/app/globals.css', cssBefore + newCss + cssAfter, 'utf8');

console.log('Benefits section update finished');
