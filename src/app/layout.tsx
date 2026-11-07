import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Providers } from "./providers";
import { OG_IMAGE } from "@/lib/seo";
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
  // No url here: every page sets its own og:url and canonical through pageMetadata()
  // (src/lib/seo.ts), otherwise all pages would point to the home page.
  openGraph: {
    title: "ReaMed — Kineziterapijos klinika Vilniuje",
    description:
      "Šiuolaikinė kineziterapijos ir reabilitacijos klinika Vilniuje.",
    siteName: "ReaMed",
    locale: "lt_LT",
    type: "website",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://reamed.lt/#clinic",
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  medicalSpecialty: "PhysicalTherapy",
  isAcceptingNewPatients: true,
  knowsLanguage: ["lt", "en", "ru"],
  logo: "https://reamed.lt/logo.png",
  image: "https://reamed.lt/og/reamed-og.png",
  sameAs: [
    "https://www.google.com/maps?cid=5379242466351535503",
    "https://www.instagram.com/reamedklinika/",
    "https://www.facebook.com/reamedklinika/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // data-scroll-behavior lets Next turn off the smooth scroll from globals.css
  // while it moves a new page to the top.
  return (
    <html lang="lt" data-scroll-behavior="smooth">
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
