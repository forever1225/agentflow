import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentFlow — Tu negocio responde en WhatsApp 24/7",
  description: "Crea un agente de IA que atiende clientes, agenda citas y responde dudas en WhatsApp Business. Sin código. Desde $29/mes.",
  openGraph: {
    title: "AgentFlow — Agentes de IA para WhatsApp Business",
    description: "Atiende clientes 24/7 con IA. Agenda citas automáticamente. Multi-idioma y voz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
