import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dante Pangione | DevOps Engineer",
  description: "IT Engineer EFZ specialising in DevOps Engineering — infrastructure, containerisation, CI/CD, and cloud automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
        {/* Vercel Tracking Components */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}