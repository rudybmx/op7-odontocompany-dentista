export type VideoKey = "expansao" | "paulo" | "clinica";

export const videos: Record<VideoKey, string> = {
  expansao: "https://www.youtube.com/embed/gqA9E_jak6w?autoplay=1",
  paulo: "https://www.youtube.com/embed/vJQ7fZJZSKE?autoplay=1",
  clinica: "https://www.youtube.com/embed/XhGBWs60bTE?autoplay=1",
};

export interface VideoItem {
  key: VideoKey;
  embed: string;
  tabLabel: string;
  cardTitle: string;
  cardSubtitle: string;
  duration?: string;
}

/** Deriva o id do YouTube a partir da url de embed. */
export function youtubeId(embed: string): string {
  return embed.split("/embed/")[1]?.split("?")[0] ?? "";
}

/** Thumb maxres do YouTube a partir da url de embed. */
export function youtubeThumb(embed: string): string {
  return `https://img.youtube.com/vi/${youtubeId(embed)}/maxresdefault.jpg`;
}

export const videoItems: VideoItem[] = [
  {
    key: "paulo",
    embed: videos.paulo,
    tabLabel: "Dr. Paulo Zahr",
    cardTitle: "Assista agora",
    cardSubtitle: "Como funciona a franquia OdontoCompany",
    duration: "3:42",
  },
  {
    key: "expansao",
    embed: videos.expansao,
    tabLabel: "Expansão e modelo",
    cardTitle: "Expansão e modelo",
    cardSubtitle: "O modelo de negócio e o suporte na prática",
    duration: "4:10",
  },
  {
    key: "clinica",
    embed: videos.clinica,
    tabLabel: "Tour pela clínica",
    cardTitle: "Tour pela clínica",
    cardSubtitle: "Por dentro de uma unidade OdontoCompany",
    duration: "2:58",
  },
];

export interface Speaker {
  name: string;
  role: string;
  img: string;
}

export const speakers: Record<"expansao" | "paulo", Speaker> = {
  expansao: {
    name: "Felipe Naresi",
    role: "COO da OdontoCompany",
    img: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/felipe_naresi.jpg",
  },
  paulo: {
    name: "Dr. Paulo Zahr",
    role: "CEO & Fundador da OdontoCompany",
    img: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/paulo_zahr.jpg",
  },
};
