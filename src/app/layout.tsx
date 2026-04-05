import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  title: "ReaMed — Kineziterapijos ir reabilitacijos klinika Vilniuje",
  description:
    "ReaMed — šiuolaikinė kineziterapijos ir reabilitacijos klinika Vilniuje. Stuburo ir kaklo skausmai, sporto traumos, sąnarių problemos, pooperacinis atsistatymas.",
  keywords: [
    "kineziterapija",
    "reabilitacija",
    "Vilnius",
    "stuburo skausmas",
    "sporto traumos",
    "manualinė terapija",
    "ReaMed",
  ],
  openGraph: {
    title: "ReaMed — Kineziterapijos klinika Vilniuje",
    description:
      "Šiuolaikinė kineziterapijos ir reabilitacijos klinika Vilniuje.",
    url: "https://reamed.lt",
    siteName: "ReaMed",
    locale: "lt_LT",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "ReaMed",
  description:
    "Kineziterapijos ir reabilitacijos klinika Vilniuje. Stuburo ir kaklo skausmai, sporto traumos, sąnarių problemos, pooperacinis atsistatymas.",
  url: "https://reamed.lt",
  telephone: "+370601343040",
  email: "info@reamed.lt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olimpiečių g. 1A-7",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.6872,
    longitude: 25.2797,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  medicalSpecialty: "PhysicalTherapy",
  image: "https://reamed.lt/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://www.manodaktaras.lt/widget/css/mydocwidget.css"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Script
          src="https://www.manodaktaras.lt/widget/js/mydocwidget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
