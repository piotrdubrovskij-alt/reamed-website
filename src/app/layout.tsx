import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Onest: variable font (one file for all weights); latin-ext covers ąčęėįšųūž.
const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reamed.lt"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
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
  telephone: "+37060134304",
  email: "info@reamed.lt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Olimpiečių g. 1A-7",
    addressLocality: "Vilnius",
    postalCode: "09200",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 54.6900422,
    longitude: 25.2899553,
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
  sameAs: ["https://www.google.com/maps?cid=5379242466351535503"],
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
      </head>
      <body className={`${onest.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
