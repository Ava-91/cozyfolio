import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ava-91.github.io"),
  title: {
    default: "Cozyfolio",
    template: "%s • Cozyfolio",
  },
  description:
    "A cozy portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Crafted with late-night ideas, smooth animations, and lots of coffee.",
  applicationName: "Cozyfolio",
  authors: [{ name: "Ava" }],
  creator: "Ava",
  keywords: [
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Frontend",
    "Web Developer",
    "UI",
    "GitHub",
  ],
  openGraph: {
    title: "Cozyfolio",
    description:
      "Building cozy internet things, one commit at a time.",
    siteName: "Cozyfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#0D1117] text-[#E6EDF3] antialiased selection:bg-sky-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}