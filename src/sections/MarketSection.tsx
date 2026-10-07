"use client";

export default function MarketSection() {
  return (
    <section className="market-section-new" id="mercado">
      <div className="section-kicker section-kicker--dark">O mercado</div>
      <div className="mkt-inner">
        <div className="mkt-left">
          <h2 className="mkt-headline">
            MERCADO DE{" "}
            <span className="mkt-highlight">ODONTOLOGIA</span>
          </h2>

          <p className="mkt-body">
            A saúde bucal não é sazonal. É uma necessidade contínua, impulsionada
            pelo envelhecimento da população, pelo crescimento da demanda por
            serviços odontológicos e por uma conscientização cada vez maior sobre
            a importância estética e funcional da odontologia. Nesse cenário, o{" "}
            <span className="mkt-emphasis">Brasil</span> se destaca globalmente,
            à frente de mercados maduros como{" "}
            <span className="mkt-emphasis">EUA</span> e{" "}
            <span className="mkt-emphasis">União Europeia</span>.
          </p>

          <ul className="mkt-list">
            <li className="mkt-item">
              <div className="mkt-check">
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                O setor fatura <strong>R$ 30 bilhões por ano</strong> e cresce
                mesmo em períodos de crise econômica.
              </div>
            </li>
            <li className="mkt-item">
              <div className="mkt-check">
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                Com <strong>+100 mil implantes por ano</strong>, a OdontoCompany
                captura o segmento de maior ticket do setor.
              </div>
            </li>
          </ul>
        </div>

        <div className="mkt-grid">
          <div className="mkt-card">
            <div className="mkt-card-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 5 5 5 9c0 2 .8 3.8 2 5l2 6c.3.8 1 1 1 1h4c0 0 .7-.2 1-1l2-6c1.2-1.2 2-3 2-5 0-4-3.5-7-7-7z" />
              </svg>
            </div>
            <div className="mkt-card-label">Todas as especialidades em um só lugar</div>
          </div>

          <div className="mkt-card">
            <div className="mkt-card-icon mkt-card-icon--green">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="mkt-card-num">+25M</div>
            <div className="mkt-card-label">SORRISOS TRANSFORMADOS</div>
          </div>

          <div className="mkt-card">
            <div className="mkt-card-icon mkt-card-icon--teal">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
              </svg>
            </div>
            <div className="mkt-card-label">Tenha uma clínica sempre cheia</div>
          </div>

          <div className="mkt-card">
            <div className="mkt-card-icon mkt-card-icon--soft">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.5a4 4 0 0 1 0 7" opacity="0.5" />
              </svg>
            </div>
            <div className="mkt-card-label">Estamos presentes em todos os Estados do Brasil</div>
          </div>
        </div>
      </div>
    </section>
  );
}
