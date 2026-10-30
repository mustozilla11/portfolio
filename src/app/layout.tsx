import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustafa Özlü | Full-Stack & Mobile Developer | AI/LLM Researcher",
  description:
    "Mustafa Özlü - Kişisel Geliştirici Portfolyosu, Projeler, Sistem Mimarisi, Araştırmalar ve CV. Flutter, React Native, FastAPI, Rust ve LLM Entegrasyonu.",
  keywords: [
    "Mustafa Özlü",
    "Full-Stack Developer",
    "Mobile Developer",
    "Flutter",
    "React Native",
    "FastAPI",
    "Rust",
    "LLM Researcher",
    "MIS Senior",
    "Oneiro",
    "Çiftçiden",
    "SAYZEK",
  ],
  authors: [{ name: "Mustafa Özlü" }],
  openGraph: {
    title: "Mustafa Özlü | Full-Stack & Mobile Developer | AI/LLM Researcher",
    description:
      "Ultra-modern tek sayfalık portfolyo ve interaktif CV. Mobil, Arka Uç Sistemler ve Yapay Zeka Mimarisi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-black text-[#F5F5F7] font-sans antialiased selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
