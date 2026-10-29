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
  themeColor: "#0b0f17",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://giliardadv.com.br"),
  title:
    "Ronaldo Giliard Advocacia e Consultoria Jurídica | Cível & Criminal · Dr. Ronaldo Giliard · OAB/MG 218.682 · 5,0 ★ (35 avaliações) · Campo Belo - MG",
  description:
    "Ronaldo Giliard Advocacia e Consultoria Jurídica — Liderado pelo Dr. Ronaldo Giliard (OAB/MG 218.682), Bacharel em Direito pela PUC Minas Arcos-MG. Atuação de excelência e alta agilidade em Direito Cível, Defesa Criminal e Consultoria Jurídica. Sede na R. João Pinheiro, 356 - Centro, Campo Belo - MG. Atendimento presencial e online em todo o Brasil. WhatsApp: (35) 99745-8013.",
  keywords: [
    "Ronaldo Giliard Advocacia",
    "Ronaldo Giliard",
    "Dr Ronaldo Giliard",
    "Ronaldo Giliard Advogado",
    "Advogado em Campo Belo MG",
    "Advocacia Campo Belo Minas Gerais",
    "Advogado Criminalista Campo Belo",
    "Advogado Cível Campo Belo",
    "Direito Penal Campo Belo",
    "Defesa Criminal Campo Belo",
    "Flagrante e Audiência de Custódia Campo Belo",
    "Indenização e Danos Morais Campo Belo",
    "Direito de Família e Divórcio Campo Belo",
    "Inventário em Cartório Campo Belo",
    "Consultoria Jurídica Campo Belo MG",
    "OAB MG 218682",
    "PUC Minas Arcos Direito",
    "Melhor Advogado Campo Belo",
    "Advocacia online Minas Gerais e Brasil",
  ],
  authors: [{ name: "Ronaldo Giliard Advocacia e Consultoria Jurídica - Dr. Ronaldo Giliard" }],
  creator: "Ronaldo Giliard Advocacia",
  publisher: "Ronaldo Giliard Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=rg1", sizes: "any" },
      { url: "/icon-32x32.png?v=rg1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=rg1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=rg1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=rg1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=rg1",
    apple: [{ url: "/apple-icon.png?v=rg1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://giliardadv.com.br",
    title:
      "Ronaldo Giliard Advocacia e Consultoria Jurídica | Cível & Criminal · 5,0 ★ (35 avaliações)",
    description:
      "Defesa jurídica estratégica, ágil e resolutiva em Direito Cível e Criminal. Dr. Ronaldo Giliard (OAB/MG 218.682). Sede em Campo Belo - MG e atendimento digital nacional. WhatsApp: (35) 99745-8013.",
    siteName: "Ronaldo Giliard Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Ronaldo Giliard Advocacia e Consultoria Jurídica — Cível e Criminal",
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
    name: "Ronaldo Giliard Advocacia e Consultoria Jurídica - Dr. Ronaldo Giliard",
    alternateName: "Dr. Ronaldo Giliard Advogado | Ronaldo Giliard Advocacia Cível e Criminal",
    telephone: "+55-35-99745-8013",
    url: "https://giliardadv.com.br",
    image: "https://giliardadv.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. João Pinheiro, 356 - Centro",
      addressLocality: "Campo Belo",
      addressRegion: "MG",
      postalCode: "37270-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "35",
    },
    areaServed: [
      "Campo Belo",
      "Candeias",
      "Cristais",
      "Santana do Jacaré",
      "Aguanil",
      "Perdões",
      "Boa Esperança",
      "Lavras",
      "Formiga",
      "Arcos",
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
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5535997458013",
      "https://www.instagram.com/giliardadv/",
      "https://www.google.com/search?q=Ronaldo+Giliard+Advocacia+e+Consultoria+Jur%C3%ADdica%0ACampo+Belo+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=rg1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=rg1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=rg1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=rg1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=rg1" />
        <link rel="shortcut icon" href="/favicon.ico?v=rg1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=rg1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#0f172a] selection:text-[#ffffff] bg-[#f8fafc] text-[#0b0f17]">
        {children}
      </body>
    </html>
  );
}
