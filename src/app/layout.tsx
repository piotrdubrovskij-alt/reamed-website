import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ReaMed — Kineziтerapijos klinika Vilniuje",
  description:
    "ReaMed — profesionali kineziтerapijos klinika Vilniuje. Reabilitacija, gydymas judesiu, stuburo ir sąnarių korekcija.",
  keywords: ["kineziтerapija", "reabilitacija", "Vilnius", "stuburas", "ReaMed"],
  openGraph: {
    title: "ReaMed — Kineziтerapijos klinika",
    description: "Profesionali kineziтerapijos klinika Vilniuje",
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
        {children}
      </body>
    </html>
  );
}
