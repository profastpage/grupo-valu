import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones Virtual",
  description:
    "Libro de Reclamaciones Virtual de GRUPO VALU (RUC: 20616559363). Conforme al Código de Protección y Defensa del Consumidor de la República del Perú.",
  alternates: { canonical: "/libro-de-reclamaciones" },
  openGraph: {
    title: "Libro de Reclamaciones Virtual | GRUPO VALU",
    description:
      "Canal oficial de atención de quejas y reclamos de GRUPO VALU (RUC: 20616559363). Conforme a la normativa de INDECOPI.",
    url: "/libro-de-reclamaciones",
    siteName: "GRUPO VALU",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GRUPO VALU — Libro de Reclamaciones Virtual",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libro de Reclamaciones Virtual | GRUPO VALU",
    description: "Canal oficial de quejas y reclamos de GRUPO VALU (RUC: 20616559363).",
    images: ["/og-image.jpg"],
  },
};

export default function LibroReclamacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
