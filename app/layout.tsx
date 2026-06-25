import type { Metadata } from "next";
import { DM_Sans, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rubina Carlson",
  description: "AI builder. Content and B2B growth strategist. Head of Marketing at 90 Seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-navy">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
