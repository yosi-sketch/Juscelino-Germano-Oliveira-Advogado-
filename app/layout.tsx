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
  themeColor: "#190d08",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alesaniamenezes.adv.br"),
  title:
    "Escritório de Advocacia Alesânia Menezes | Dra. Alesânia Menezes · Família, Cível & Direito Público · Pres. Com. Mulher Advogada OAB/MG · 5,0 ★ (31 avaliações) · Pompéu - MG",
  description:
    "Escritório De Advocacia Alesânia Menezes — Liderado pela Dra. Alesânia Menezes, Advogada com Pós-graduação em Direito Público e Direito das Mulheres, e Presidente da Comissão da Mulher Advogada da OAB/MG. Atuação de excelência e acolhimento humanizado em Direito de Família e Sucessões, Direito Cível, Direito das Mulheres e Consultoria Jurídica. Sede na R. Olegário Maciel, 182 - Centro, Pompéu - MG. Atendimento presencial e digital para todo o Brasil. WhatsApp: (37) 99961-7913.",
  keywords: [
    "Alesânia Menezes Advocacia",
    "Escritório de Advocacia Alesânia Menezes",
    "Alesânia Menezes",
    "Dra Alesânia Menezes",
    "Advogada em Pompéu MG",
    "Advocacia Pompéu Minas Gerais",
    "Direito de Família Pompéu",
    "Divórcio em Cartório Pompéu",
    "Pensão Alimentícia Pompéu MG",
    "Inventário em Cartório Pompéu",
    "Direito das Mulheres",
    "Comissão da Mulher Advogada OAB MG",
    "Direito Público Pompéu",
    "Advogado Cível Pompéu",
    "Melhor Advogado Pompéu MG",
    "Consultoria Jurídica Pompéu",
    "Advocacia online Minas Gerais",
  ],
  authors: [{ name: "Escritório De Advocacia Alesânia Menezes - Dra. Alesânia Menezes" }],
  creator: "Escritório De Advocacia Alesânia Menezes",
  publisher: "Escritório De Advocacia Alesânia Menezes",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=am1", sizes: "any" },
      { url: "/icon-32x32.png?v=am1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=am1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=am1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=am1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=am1",
    apple: [{ url: "/apple-icon.png?v=am1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://alesaniamenezes.adv.br",
    title:
      "Escritório de Advocacia Alesânia Menezes | Dra. Alesânia Menezes · 5,0 ★ (31 avaliações no Google)",
    description:
      "Advocacia de excelência, ética e atendimento humanizado em Direito de Família, Sucessões, Cível e Direito Público. Pres. Comissão da Mulher Advogada OAB/MG. Sede em Pompéu - MG. WhatsApp: (37) 99961-7913.",
    siteName: "Escritório De Advocacia Alesânia Menezes",
    images: [
      {
        url: "/logo-badge.png",
        width: 1024,
        height: 1024,
        alt: "Escritório De Advocacia Alesânia Menezes — Advocacia Especializada",
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
    name: "Escritório De Advocacia Alesânia Menezes",
    alternateName: "Dra. Alesânia Menezes Advocacia Especializada",
    telephone: "+55-37-99961-7913",
    url: "https://tinyurl.com/advocacia-alesania-menezes-wpp",
    image: "https://alesaniamenezes.adv.br/logo-badge.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Olegário Maciel, 182 - CENTRO",
      addressLocality: "Pompéu",
      addressRegion: "MG",
      postalCode: "35640-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    areaServed: [
      "Pompéu",
      "Curvelo",
      "Sete Lagoas",
      "Martinho Campos",
      "Abaeté",
      "Felixlândia",
      "Pitangui",
      "Belo Horizonte",
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
      "https://wa.me/5537999617913",
      "https://tinyurl.com/advocacia-alesania-menezes-wpp",
      "https://www.instagram.com/alesaniamenezes/",
      "https://www.google.com/search?q=Ales%C3%A2nia+Menezes+%E2%80%94+Advocacia%0APomp%C3%A9u+%C2%B7+MG",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=am1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=am1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=am1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=am1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=am1" />
        <link rel="shortcut icon" href="/favicon.ico?v=am1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=am1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#361a10] selection:text-[#f9efcb] bg-[#fdfbf7] text-[#1a0f0a]">
        {children}
      </body>
    </html>
  );
}
