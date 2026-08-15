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

export const metadata: Metadata = {
  title: "Marjana Dallagnol | Método RQE® — Terapeuta Estrutural Sistêmica",
  description:
    "Reorganizo a estrutura que sustenta e repete os padrões que travam a sua vida. Terapia estrutural sistêmica online e presencial em Passo Fundo/RS.",
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
