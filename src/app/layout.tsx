import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const titulo = "Marjana Dallagnol | Método RQE® — Terapeuta Estrutural Sistêmica";
const descricao =
  "Reorganizo a estrutura que sustenta e repete os padrões que travam a sua vida. Terapia estrutural sistêmica online e presencial em Passo Fundo/RS.";
const site = "https://marjana-dallagnol.vercel.app";

export const metadata: Metadata = {
  // metadataBase e o que transforma o opengraph-image em URL absoluta:
  // WhatsApp e redes sociais ignoram og:image relativo
  metadataBase: new URL(site),
  title: titulo,
  description: descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site,
    siteName: "Marjana Dallagnol · Espaço Terapêutico",
    title: titulo,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${karla.variable}`} style={{ fontFamily: "var(--font-karla), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
