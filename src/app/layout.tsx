import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GEERS — HEAR DIFFERENT",
  description:
    "GEERS XEEX — Hören ist kein Hilfsmittel. Es ist ein Statement. Your signal. Your rules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
