import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://juscelinogermano.adv.br"),
  title:
    "Juscelino Germano Oliveira — Advogado | Família, Consumidor & Servidores · 5,0 ★ (28 avaliações no Google) · Bocaiúva - MG",
  description:
    "Juscelino Germano Oliveira — Advogado em Bocaiúva - MG. Atuação dedicada e humanizada em Direito de Família, Direito do Consumidor e Servidores Públicos. Sede na Rua Luís Inácio Silveira, n° 1385 - Centro, Bocaiúva - MG. Nota máxima 5,0 estrelas no Google com 28 avaliações. Atendimento presencial e online para todo o Brasil. WhatsApp: (38) 99849-1504.",
  keywords: [
    "Juscelino Germano Oliveira Advogado",
    "Juscelino Germano Oliveira",
    "Juscelino Oliveira Advogado Bocaiúva",
    "Advogado em Bocaiúva MG",
    "Advocacia Bocaiúva Minas Gerais",
    "Direito de Família Bocaiúva",
    "Divórcio Bocaiúva",
    "Pensão Alimentícia Bocaiúva MG",
    "Inventário em Cartório Bocaiúva",
    "Direito do Consumidor Bocaiúva",
    "Advogado Servidores Públicos Bocaiúva",
    "Advogado Cível Bocaiúva",
    "Melhor Advogado Bocaiúva MG",
    "Consultoria Jurídica Bocaiúva",
    "Advocacia online Minas Gerais",
    "Dr Juscelino Germano",
    "OAB MG Bocaiúva",
  ],
  authors: [{ name: "Juscelino Germano Oliveira — Advogado" }],
  creator: "Juscelino Germano Oliveira",
  publisher: "Juscelino Germano Oliveira — Advogado",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=jg1", sizes: "any" },
      { url: "/icon-32x32.png?v=jg1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=jg1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=jg1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=jg1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=jg1",
    apple: [{ url: "/apple-icon.png?v=jg1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://juscelinogermano.adv.br",
    title:
      "Juscelino Germano Oliveira — Advogado | 5,0 ★ (28 avaliações no Google)",
    description:
      "Advocacia dedicada, ética e com atendimento humanizado em Direito de Família, Consumidor e Servidores Públicos. Sede em Bocaiúva - MG. WhatsApp: (38) 99849-1504.",
    siteName: "Juscelino Germano Oliveira — Advogado",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 367,
        alt: "Juscelino Germano Oliveira — Advogado",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Juscelino Germano Oliveira — Advogado",
    alternateName: "Dr. Juscelino Germano Oliveira Advocacia",
    telephone: "+55-38-99849-1504",
    url: "https://juscelinogermano.adv.br",
    image: "https://juscelinogermano.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Luís Inácio Silveira, n° 1385 - Centro",
      addressLocality: "Bocaiúva",
      addressRegion: "MG",
      postalCode: "39390-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
    },
    areaServed: [
      "Bocaiúva",
      "Montes Claros",
      "Engenheiro Navarro",
      "Francisco Dumont",
      "Olhos-d'Água",
      "Glaucilândia",
      "Norte de Minas",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5538998491504",
      "https://www.instagram.com/juscelinoadv",
      "https://www.instagram.com/ojuscelinogermano/",
      "https://www.google.com/search?q=Juscelino+Germano+Oliveira+%E2%80%94+Advogado%0ABocai%C3%BAva+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=jg1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=jg1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=jg1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=jg1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=jg1" />
        <link rel="shortcut icon" href="/favicon.ico?v=jg1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=jg1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#181c22] selection:text-[#f1ce89] bg-[#faf9f5] text-[#111317]">
        {children}
      </body>
    </html>
  );
}
