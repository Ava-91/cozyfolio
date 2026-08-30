import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cozyfolio.vercel.app"),
  title: { default: "Ava — Cozyfolio", template: "%s • Cozyfolio" },
  description: "Ava's developer portfolio: cozy interfaces, local-first tools, and oddly specific software.",
  applicationName: "Cozyfolio",
  authors: [{ name: "Ava", url: "https://github.com/Ava-91" }],
  creator: "Ava",
  publisher: "Ava",
  category: "technology",
  keywords: ["Ava", "developer portfolio", "Next.js", "React", "TypeScript", "Python", "local-first", "GitHub"],
  alternates: { canonical: "https://cozyfolio.vercel.app" },
  openGraph: {
    title: "Ava — Cozyfolio",
    description: "Building cozy internet things and oddly specific tools.",
    siteName: "Cozyfolio",
    url: "https://cozyfolio.vercel.app",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ava — Cozyfolio",
    description: "Building cozy internet things and oddly specific tools.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-text">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
