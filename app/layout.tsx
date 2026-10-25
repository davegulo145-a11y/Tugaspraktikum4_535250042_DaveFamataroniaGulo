import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nusa Digital — Solusi Digital untuk Bisnis",
    template: "%s | Nusa Digital",
  },
  description: "Nusa Digital membantu bisnis berkembang melalui solusi digital yang kreatif dan terukur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
