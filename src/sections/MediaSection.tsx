"use client";

import { useRef, useState } from "react";

interface MediaVideoCardProps {
  src: string;
  label?: string;
}

function MediaVideoCard({ src, label }: MediaVideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <div>
      <div className="media-vidcard">
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          playsInline
          controls={playing}
          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        />
        {!playing && (
          <div
            onClick={handlePlay}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(12,36,34,0.55)",
              backdropFilter: "blur(2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* pulse ring */}
            <div
              style={{
                position: "absolute",
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                animation: "ping 1.6s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            {/* play button */}
            <div
              style={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                border: "2px solid rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                style={{ width: 28, height: 28, marginLeft: 4 }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        )}
      </div>
      {label && (
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--gray-500)", marginTop: 10 }}>
          {label}
        </p>
      )}
    </div>
  );
}

export default function MediaSection() {
  return (
    <section className="media-section-redesign" id="midia">
      <div className="media-inner">
        <div className="media-header">
          <div className="section-kicker section-kicker--light">Poder de mídia</div>
          <h2 className="media-title">
            Sua franquia no horário{" "}
            <em className="italic-teal">nobre da TV aberta</em>
          </h2>
          <p className="media-sub">
            Nenhum outro franqueado no setor odontológico tem esse diferencial.
            Enquanto seus concorrentes locais pagam por anúncio, seus pacientes
            já ouviram sobre a OdontoCompany na TV.
          </p>
        </div>

        <div className="media-video-grid">
          <MediaVideoCard
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/video_ratinho.mp4"
            label="Programa do Ratinho · SBT"
          />
          <MediaVideoCard
            src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/video_patricia_abravanel.mp4"
            label="Patrícia Abravanel · SBT"
          />
        </div>

        <div className="media-content-block">
          <h3 className="media-content-title">
            A presença da marca onde o Brasil assiste, escuta e compartilha.
          </h3>
          <p className="media-content-sub">
            A OdontoCompany busca estar presente na TV aberta e no dia a dia
            das pessoas, impactando milhões de brasileiros em todo o país.
          </p>
          <p className="media-content-sub">
            Nossa marca se destaca com ações de merchandising e publicidade
            nos principais canais, integrando TV, redes sociais e campanhas
            de performance.
          </p>
          <button
            className="media-box-btn"
            onClick={() =>
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Quero ser um franqueado
          </button>

          <div className="media-press-box">
            <p className="media-press-title">Veja o que a imprensa já falou sobre a OdontoCompany :</p>
            <div className="media-press-logos">
              <a href="https://exame.com/negocios/franquias-com-receita-recorrente-conheca-20-negocios-com-fluxo-continuo-de-faturamento/" target="_blank" rel="noopener noreferrer" className="media-press-link">
                <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logos/exame-logo-0.png" alt="Exame" className="media-press-logo" />
              </a>
              <a href="https://www.portaldofranchising.com.br/noticias/franquias-atraem-pais-e-filhos/" target="_blank" rel="noopener noreferrer" className="media-press-link">
                <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logos/ABF_LOGO2023.png" alt="ABF Portal do Franchising" className="media-press-logo" />
              </a>
              <a href="https://guiadafarmacia.com.br/materia/oral-care-saude-comeca-pela-boca/" target="_blank" rel="noopener noreferrer" className="media-press-link">
                <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logos/Logotipo-Guia-da-Farmacia-Digital.png" alt="Guia da Farmácia" className="media-press-logo" />
              </a>
              <a href="https://www.terra.com.br/vida-e-estilo/conheca-5-procedimentos-esteticos-realizados-por-dentistas,c2d59c7e46c718bbab3b82d3e907f65duqrmbfy0.html" target="_blank" rel="noopener noreferrer" className="media-press-link">
                <img src="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logos/Terra_Logo.png" alt="Terra" className="media-press-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
