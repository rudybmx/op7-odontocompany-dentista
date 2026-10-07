import { BRAZIL_MAP_SVG } from "./brazilMapSvg";

type Pin = {
  x: number;
  y: number;
  city: string;
  hub?: boolean;
};

// Pins decorativos espalhados pelas 5 regiões, ponderados para o Sudeste
// (foco de expansão da rede). Coordenadas no espaço do viewBox 613x639.
const PINS: Pin[] = [
  // Norte
  { x: 285, y: 80, city: "Boa Vista" },
  { x: 360, y: 108, city: "Macapá" },
  { x: 185, y: 185, city: "Manaus" },
  { x: 358, y: 158, city: "Belém" },
  { x: 160, y: 280, city: "Porto Velho" },
  { x: 60, y: 262, city: "Rio Branco" },
  { x: 388, y: 290, city: "Palmas" },
  // Nordeste
  { x: 415, y: 158, city: "São Luís" },
  { x: 448, y: 205, city: "Teresina" },
  { x: 538, y: 180, city: "Fortaleza" },
  { x: 580, y: 198, city: "Natal" },
  { x: 582, y: 218, city: "João Pessoa" },
  { x: 575, y: 245, city: "Recife", hub: true },
  { x: 560, y: 262, city: "Maceió" },
  { x: 548, y: 285, city: "Aracaju" },
  { x: 520, y: 320, city: "Salvador", hub: true },
  // Centro-Oeste
  { x: 265, y: 345, city: "Cuiabá" },
  { x: 300, y: 425, city: "Campo Grande" },
  { x: 372, y: 378, city: "Goiânia" },
  { x: 400, y: 358, city: "Brasília", hub: true },
  // Sudeste (mais denso)
  { x: 412, y: 398, city: "Uberlândia" },
  { x: 462, y: 400, city: "Belo Horizonte", hub: true },
  { x: 490, y: 390, city: "Gov. Valadares" },
  { x: 505, y: 420, city: "Vitória" },
  { x: 392, y: 470, city: "São Paulo", hub: true },
  { x: 378, y: 460, city: "Campinas" },
  { x: 402, y: 448, city: "Ribeirão Preto" },
  { x: 470, y: 458, city: "Rio de Janeiro", hub: true },
  // Sul
  { x: 360, y: 508, city: "Curitiba", hub: true },
  { x: 335, y: 492, city: "Londrina" },
  { x: 372, y: 548, city: "Florianópolis" },
  { x: 312, y: 600, city: "Porto Alegre", hub: true },
];

export default function BrazilMap() {
  return (
    <div className="brazil-map" role="img" aria-label="Mapa do Brasil com unidades OdontoCompany espalhadas por todas as regiões">
      <div
        className="brazil-map__states-layer"
        dangerouslySetInnerHTML={{ __html: BRAZIL_MAP_SVG }}
      />
      <svg
        className="brazil-map__pins"
        viewBox="0 0 613 639"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {PINS.map((p, i) => (
          <g
            key={p.city + i}
            className={`brazil-pin${p.hub ? " brazil-pin--hub" : ""}`}
            transform={`translate(${p.x} ${p.y})`}
          >
            <title>{p.city}</title>
            {p.hub && <circle className="brazil-pin__pulse" cx={0} cy={-12} r={6} />}
            <path
              className="brazil-pin__drop"
              d="M0 0 C -5.2 -8 -6.4 -13.6 0 -18 C 6.4 -13.6 5.2 -8 0 0 Z"
            />
            <circle className="brazil-pin__dot" cx={0} cy={-12} r={2.3} />
          </g>
        ))}
      </svg>
      <p className="brazil-map__caption">
        <strong>+2.000 unidades</strong> espalhadas por todos os estados do Brasil
      </p>
    </div>
  );
}
