"use client";

import CtaFunnel from "@/components/CtaFunnel";
import BrazilMap from "@/components/BrazilMap";

export default function CtaSection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg-glow" />
      <div className="container">
        <div className="cta-inner">
          <div className="cta-copy-glass cta-copy-glass--light">
            <h2 className="cta-title">
                        Sua clínica pode ser a próxima,{" "}
                        <em>consulte agora</em>
                      </h2>
            <BrazilMap />
          </div>
          <CtaFunnel light />
        </div>
      </div>
    </section>
  );
}
