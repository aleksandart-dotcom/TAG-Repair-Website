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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TAG Repair Center | Truck & Trailer Repair",
  description:
    "Premium truck and trailer repair support built to reduce downtime and keep fleets moving.",
  icons: {
    icon: "/logo-tag-repair-center.png",
    apple: "/logo-tag-repair-center.png",
  },
  openGraph: {
    title: "TAG Repair Center | Truck & Trailer Repair",
    description:
      "Premium truck and trailer repair support built to reduce downtime and keep fleets moving.",
    images: [
      {
        url: "/logo-tag-repair-center.png",
        width: 512,
        height: 512,
        alt: "TAG Repair Center Logo - Since 2012",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
