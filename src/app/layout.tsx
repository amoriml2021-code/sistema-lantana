
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Lantana | Gestão da Qualidade",
  description: "Sistema de controle de formulários e conformidade dos colaboradores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
