const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldSection = content.indexOf('<section className="market-section" id="mercado">');
const endMarker = '<section className="compare-section" id="comparativo">';
const endIdx = content.indexOf(endMarker);

if (oldSection === -1 || endIdx === -1) {
  console.error('Markers not found');
  process.exit(1);
}

const newSection = `<section className="market-section-new" id="mercado">
  {/* Background radial glows */}
  <div className="mkt-glow mkt-glow--right" />
  <div className="mkt-glow mkt-glow--left" />

  <div className="mkt-inner">
    {/* ── Coluna esquerda ── */}
    <div className="mkt-left">
      <div className="mkt-eyebrow">
        <div className="mkt-eyebrow-line" />
        <span>O MERCADO</span>
      </div>

      <h2 className="mkt-headline">
        Odontologia: o mercado que{" "}
        <span className="mkt-badge">nunca para</span>
      </h2>

      <p className="mkt-body">
        A saúde bucal não é sazonal. É uma necessidade contínua, impulsionada por uma
        população em crescimento e uma conscientização cada vez maior sobre a importância
        estética e funcional da odontologia.
      </p>

      <ul className="mkt-list">
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <strong>214 milhões de pessoas</strong> fazem do Brasil o 2º maior mercado odontológico do mundo, atrás só dos EUA.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            O setor fatura <strong>R$ 30 bilhões por ano</strong> e cresce mesmo em períodos de crise econômica.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            Com <strong>+100 mil implantes por ano</strong>, a OdontoCompany captura o segmento de maior ticket do setor.
          </div>
        </li>
        <li className="mkt-item">
          <div className="mkt-check">
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            Você <strong>não precisa ser dentista</strong> — o modelo foi desenhado para gestores e investidores.
          </div>
        </li>
      </ul>
    </div>

    {/* ── Coluna direita: Bento Grid ── */}
    <div className="mkt-grid">
      <div className="mkt-card">
        <div className="mkt-card-icon">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2C8.5 2 5 5 5 9c0 2 .8 3.8 2 5l2 6c.3.8 1 1 1 1h4c0 0 .7-.2 1-1l2-6c1.2-1.2 2-3 2-5 0-4-3.5-7-7-7z"/>
          </svg>
        </div>
        <div className="mkt-card-num mkt-card-num--lime">+1.000</div>
        <div className="mkt-card-label">UNIDADES EM TODOS OS ESTADOS DO BRASIL</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--green">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className="mkt-card-num">+6M</div>
        <div className="mkt-card-label">CLIENTES ATIVOS NA REDE</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--teal">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
          </svg>
        </div>
        <div className="mkt-card-num">+100k</div>
        <div className="mkt-card-label">IMPLANTES DENTÁRIOS POR ANO</div>
      </div>

      <div className="mkt-card">
        <div className="mkt-card-icon mkt-card-icon--soft">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/>
            <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
            <path d="M16 3.5a4 4 0 0 1 0 7" opacity="0.5"/>
          </svg>
        </div>
        <div className="mkt-card-num">+13k</div>
        <div className="mkt-card-label">DENTISTAS INSCRITOS NA PLATAFORMA</div>
      </div>
    </div>
  </div>
</section>
`;

const before = content.substring(0, oldSection);
const after = content.substring(endIdx);
fs.writeFileSync('src/app/page.tsx', before + newSection + after, 'utf8');
console.log('Done! Lines:', (before + newSection + after).split('\n').length);
