import type { Metadata } from "next";
import { Syne, Outfit, Montserrat } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────────
   Premium Typography Configuration
   ───────────────────────────────────────────── */

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/* ─────────────────────────────────────────────
   SEO Metadata
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "SHANI — Creative Digital Specialist | Muhammad Salman",
  description:
    "Premium creative digital portfolio by Muhammad Salman. Specializing in Graphic Design, Video Production, Web Development, and Meta Ads Management. High-end agency-level work.",
  keywords: [
    "creative digital specialist",
    "graphic design",
    "video production",
    "web development",
    "meta ads",
    "Muhammad Salman",
    "Shani",
    "branding agency",
  ],
  authors: [{ name: "Muhammad Salman" }],
  openGraph: {
    title: "SHANI — Creative Digital Specialist",
    description:
      "Premium creative digital portfolio by Muhammad Salman. High-end agency-level work.",
    type: "website",
  },
};

/* ─────────────────────────────────────────────
   Root Layout
   ───────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090B] text-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
