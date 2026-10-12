import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionPreloader from "@/components/SessionPreloader";
import BottomNav from "@/components/BottomNav";
import GoldProgressBar from "@/components/GoldProgressBar";
import GlowingParticles from "@/components/GlowingParticles";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "GRUPO VALU — Préstamos Personales y Garantía Vehicular en Perú",
    template: "%s | GRUPO VALU",
  },
  description:
    "Tu solución financiera fácil, rápida y segura. Préstamos personales al instante y préstamos con garantía vehicular sin dejar de usar tu auto. GRUPO VALU (RUC: 20616559363).",
  keywords: [
    "préstamos personales",
    "préstamo vehicular",
    "crédito rápido Perú",
    "garantía de auto",
    "Procustodia",
    "financiera Perú",
    "GRUPO VALU",
    "crédito al instante",
    "dinero rápido",
    "RUC 20616559363",
  ],
  authors: [{ name: "GRUPO VALU" }],
  metadataBase: new URL("https://grupovalu.pe"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GRUPO VALU — Tu Solución Financiera de Confianza",
    description:
      "Préstamos personales al instante y préstamos con garantía vehicular en todo el Perú. Rápido, transparente y seguro. RUC: 20616559363.",
    url: "https://grupovalu.pe",
    siteName: "GRUPO VALU",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GRUPO VALU — Préstamos Personales y Garantía Vehicular",
        type: "image/jpeg",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GRUPO VALU — Préstamos Personales y Garantía Vehicular",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRUPO VALU — Préstamos Rápidos y Seguros",
    description:
      "Consigue tu préstamo en minutos. Préstamos personales y con garantía vehicular. RUC: 20616559363.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionPreloader>
          <div className="relative flex min-h-screen flex-col">{children}</div>
          {/* Bottom Navigation Mobile — aparece en todas las páginas, solo <1024px */}
          <GoldProgressBar />
          <GlowingParticles />
          <BottomNav />
        </SessionPreloader>
      </body>
    </html>
  );
}
