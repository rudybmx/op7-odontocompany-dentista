import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-brand",
  subsets: ["latin"],
  display: "swap",
});

const brandLogo =
  "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/logo_odontocompany%20(2).svg";

const pageTitle = "OdontoCompany Franquias — Para Dentistas";
const pageDescription =
  "Você já domina a odontologia. Agora é hora de dominar o negócio. Marca, método, captação e gestão para transformar experiência clínica em crescimento real.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  icons: {
    icon: brandLogo,
    shortcut: brandLogo,
    apple: brandLogo,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://odcdentista.op7pages.website/",
    siteName: "OdontoCompany Franquias",
    images: [
      {
        url: brandLogo,
        alt: "OdontoCompany Franchising",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [brandLogo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
