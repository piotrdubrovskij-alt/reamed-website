import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
