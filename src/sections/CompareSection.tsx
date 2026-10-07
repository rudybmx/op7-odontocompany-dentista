"use client";

export default function CompareSection() {
  return (
    <section className="compare-section-new" id="comparativo">
      <div className="cmp-glow" />

      <div className="cmp-inner">
        <header className="cmp-header">
          <div className="section-kicker section-kicker--dark">Por que OdontoCompany?</div>
          <h2 className="cmp-title">
            A OdontoCompany é a melhor opção quando{" "}
            <em>comparada ao mercado</em>.
          </h2>
          <p className="cmp-sub">
            Abrir clínica solo vs. OdontoCompany — <em>qual vale mais a pena?</em>
          </p>
        </header>

        <div className="cmp-table-container group">
          <div className="cmp-table-glow group-hover:opacity-50" />

          <div className="cmp-table-card">
            <div className="cmp-table-scroll">
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th className="th-empty"></th>
                    <th className="th-highlight rounded-t-lg">OdontoCompany</th>
                    <th>Clínica Solo</th>
                    <th>Associação</th>
                    <th>Consultório</th>
                    <th>Multiunidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-label">Faturamento mensal médio</td>
                    <td className="td-highlight">
                      <span className="td-badge">R$ 60–120k</span>
                    </td>
                    <td className="td-dim">R$ 15–40k</td>
                    <td className="td-dim">R$ 10–25k</td>
                    <td className="td-dim">R$ 5–15k</td>
                    <td className="td-dim">R$ 120k+</td>
                  </tr>
                  <tr>
                    <td className="td-label">Prazo de retorno</td>
                    <td className="td-highlight font-semibold">18–24 meses</td>
                    <td className="td-dim">Indefinido</td>
                    <td className="td-dim">Indefinido</td>
                    <td className="td-dim">Indefinido</td>
                    <td className="td-dim">Variável</td>
                  </tr>
                  <tr>
                    <td className="td-label">Suporte de gestão</td>
                    <td className="td-highlight">Completo</td>
                    <td className="td-dim">Sozinho</td>
                    <td className="td-dim">Sozinho</td>
                    <td className="td-dim">Sozinho</td>
                    <td className="td-dim">Parcial</td>
                  </tr>
                  <tr>
                    <td className="td-label">Marca e marketing</td>
                    <td className="td-highlight">Nacional + TV</td>
                    <td className="td-dim">Local</td>
                    <td className="td-dim">Local</td>
                    <td className="td-dim">Nenhum</td>
                    <td className="td-dim">Nacional + TV</td>
                  </tr>
                  <tr>
                    <td className="td-label">Modelo validado</td>
                    <td className="td-highlight rounded-b-lg font-semibold">
                      35 anos + 1.000 un.
                    </td>
                    <td className="td-dim">Sem garantia</td>
                    <td className="td-dim">Sem garantia</td>
                    <td className="td-dim">Sem garantia</td>
                    <td className="td-dim">Comprovado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="cmp-disclaimer">
          * Valores médios estimados. Resultados variam conforme mercado,
          localização e gestão do franqueado. Metodologia OdontoCompany
          Franchising.
        </p>

        <div className="cmp-cta-area">
          <a className="cmp-cta-btn group" href="#cta">
            <span className="cmp-cta-shimmer group-hover:animate-shimmer" />
            <span className="cmp-cta-content">
              Receber plano de negócio
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
