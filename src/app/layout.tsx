import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Grana XP",
  description: "Transforme sua vida financeira em um Jogo na Vida Real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-zinc-950 text-zinc-50">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}