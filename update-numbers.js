const fs = require('fs');

// --- PAGE.TSX UPDATE ---
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const startMarker = '<section className="numbers-section" id="numeros">';
const startIdx = content.indexOf(startMarker);
const endMarker = '<section className="support-section" id="suporte">';
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('Markers not found in page.tsx');
  process.exit(1);
}

const newSection = `<section className="numbers-section-new" id="numeros">
  {/* Background Glow */}
  <div className="num-bg-glow"></div>
  
  <div className="num-container">
    <div className="num-grid-layout">
      {/* Left Column */}
      <div className="num-text-side">
        {/* Eyebrow */}
        <div className="num-eyebrow">
          <div className="num-eyebrow-line"></div>
          <span>O modelo financeiro</span>
        </div>
        
        {/* Headline */}
        <h2 className="num-title">
          Os números da <br/><span className="num-highlight-text">sua futura franquia</span>
        </h2>
        
        {/* Subtitle */}
        <p className="num-sub">
          Projeções baseadas na média da rede. Valores sujeitos ao mercado local e à gestão do franqueado.
        </p>
        
        {/* Checklist */}
        <div className="num-checklist">
          <div className="num-check-item animate-fade-up delay-100">
            <div className="num-check-icon">
              <svg fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5L5 8.5L12.5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <p>Investimento inclui tudo: taxa de franquia, reforma do imóvel, equipamentos e capital de giro inicial.</p>
          </div>
          
          <div className="num-check-item animate-fade-up delay-200">
            <div className="num-check-icon">
              <svg fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5L5 8.5L12.5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <p>Ponto de equilíbrio a partir do 6º mês de operação, antes de completar o primeiro semestre.</p>
          </div>
          
          <div className="num-check-item animate-fade-up delay-300">
            <div className="num-check-icon">
              <svg fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5L5 8.5L12.5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <p>Modelos de clínica para diferentes portes de cidade, de cidades médias a capitais.</p>
          </div>
          
          <div className="num-check-item animate-fade-up delay-400">
            <div className="num-check-icon">
              <svg fill="none" height="10" viewBox="0 0 14 10" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 5L5 8.5L12.5 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <p>Alta recorrência de clientes, tratamentos odontológicos geram retorno contínuo e fidelização natural.</p>
          </div>
        </div>
        
        {/* Button */}
        <div className="num-cta-wrap">
          <button className="num-cta-btn">
            Receber projeção da minha cidade
          </button>
        </div>
      </div>
      
      {/* Right Column: 2x2 Grid */}
      <div className="num-kpi-grid">
        {/* Card 1 */}
        <div className="num-card dark animate-scale-up delay-200">
          <div className="num-card-icon">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>attach_money</span>
          </div>
          <div>
            <h3 className="num-card-val lime">R$ 450k</h3>
            <p className="num-card-label light">Investimento total a partir de (franquia + reforma + equipamentos + giro)</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="num-card light animate-scale-up delay-300 push-down">
          <div className="num-card-icon green">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
          </div>
          <div>
            <h3 className="num-card-val green">R$ 1,4M</h3>
            <p className="num-card-label dark-dim">Faturamento médio por ano (R$ 60k a R$ 120k por mês)</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="num-card light animate-scale-up delay-400">
          <div className="num-card-icon green">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>pie_chart</span>
          </div>
          <div>
            <h3 className="num-card-val green">20–30%</h3>
            <p className="num-card-label dark-dim">Lucratividade média mensal (após período de maturação)</p>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="num-card dark animate-scale-up delay-500 push-down">
          <div className="num-card-icon">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
          </div>
          <div>
            <h3 className="num-card-val lime">18 meses</h3>
            <p className="num-card-label light">Prazo médio de retorno do investimento</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);
fs.writeFileSync('src/app/page.tsx', before + newSection + after, 'utf8');

// --- GLOBALS.CSS UPDATE ---
let cssContent = fs.readFileSync('src/app/globals.css', 'utf8');
const cssStartMarker = '/* ─── S5: NÚMEROS / MODELO ─── */';
const cssEndMarker = '/* ─── S6: SUPORTE ─── */';

const cssStartIdx = cssContent.indexOf(cssStartMarker);
const cssEndIdx = cssContent.indexOf(cssEndMarker);

if (cssStartIdx === -1 || cssEndIdx === -1) {
  console.error('Markers not found in globals.css');
  process.exit(1);
}

const newCss = `/* ─── S5: NÚMEROS / MODELO (Stitch Premium) ─── */
.numbers-section-new {
  position: relative;
  background-color: #ffffff;
  padding: 120px 0;
  overflow: hidden;
  z-index: 1;
}

.num-bg-glow {
  position: absolute;
  top: 50%;
  right: 25%;
  width: 600px;
  height: 600px;
  background: rgba(181, 232, 0, 0.05);
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  transform: translateY(-50%);
  z-index: -1;
}

.num-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.num-grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
}
@media (min-width: 1024px) {
  .num-grid-layout {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }
}

.num-text-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.num-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
}
.num-eyebrow-line {
  height: 2px; width: 32px;
  background: var(--lime);
}
.num-eyebrow span {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 700;
  color: var(--green-800);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.num-title {
  font-family: var(--serif);
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--green-900);
  letter-spacing: -0.04em;
}
.num-title br { display: none; }
@media (min-width: 1024px) {
  .num-title br { display: block; }
}

.num-highlight-text {
  font-style: italic;
  font-weight: 700;
  color: var(--lime);
  background: var(--green-900);
  padding: 0 8px;
  border-radius: 4px;
}

.num-sub {
  font-family: var(--sans);
  font-size: 18px;
  line-height: 1.6;
  color: var(--slate-600);
  max-width: 500px;
}

.num-checklist {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 8px;
  margin-bottom: 24px;
}

.num-check-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.num-check-icon {
  margin-top: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(181, 232, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--green-900);
}
.num-check-item p {
  font-family: var(--sans);
  font-size: 16px;
  color: var(--slate-700);
  line-height: 1.6;
}

.num-cta-btn {
  background: var(--lime);
  color: var(--green-900);
  font-family: var(--sans);
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 14px 0 rgba(181,232,0,0.39);
}
.num-cta-btn:hover {
  box-shadow: 0 6px 20px rgba(181,232,0,0.23);
  transform: translateY(-4px);
}

.num-kpi-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 640px) {
  .num-kpi-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.num-card {
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  transition: transform 300ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 300ms cubic-bezier(0.25, 1, 0.5, 1);
}
.num-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(181, 232, 0, 0.2);
}

.num-card.push-down {
  margin-top: 0;
}
@media (min-width: 640px) {
  .num-card.push-down {
    margin-top: 32px;
  }
}

.num-card.dark {
  background: rgba(16, 20, 21, 0.95);
  backdrop-filter: blur(24px);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}
.num-card.light {
  background: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.num-card-icon {
  display: flex;
}
.num-card-icon span {
  font-size: 28px;
}
.num-card.dark .num-card-icon {
  color: var(--lime);
}
.num-card.light .num-card-icon {
  color: var(--green-900);
}

.num-card-val {
  font-family: var(--serif);
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -0.03em;
}
.num-card-val.lime { color: var(--lime); }
.num-card-val.green { color: var(--green-900); }

.num-card-label {
  font-family: var(--sans);
  font-size: 13px;
  line-height: 1.4;
}
.num-card-label.light { color: rgba(255, 255, 255, 0.7); }
.num-card-label.dark-dim { color: var(--slate-600); }

/* Animations */
.animate-scale-up {
  animation: scaleUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  opacity: 0;
}
@keyframes scaleUpFade {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

@media (prefers-reduced-motion: reduce) {
  .animate-fade-up, .animate-scale-up {
    animation: none;
    opacity: 1;
  }
  .num-card:hover { transform: none; }
}
`;

const cssBefore = cssContent.substring(0, cssStartIdx);
const cssAfter = cssContent.substring(cssEndIdx);
fs.writeFileSync('src/app/globals.css', cssBefore + newCss + cssAfter, 'utf8');

console.log('Numbers section updated successfully');
