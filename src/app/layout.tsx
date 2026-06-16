import type { Metadata } from "next";
import { Syne, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700", "800"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-heading", weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Compile Creative — Strategic Growth & Brand Positioning",
  description: "We help ambitious founders build premium perception, stronger positioning, and scalable growth systems that increase business value over time.",
  openGraph: {
    title: "Compile Creative — Premium Perception",
    description: "Build brands worth more tomorrow than they are today.",
    url: "https://compilecreative.com",
    siteName: "Compile Creative",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Compile Creative Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compile Creative",
    description: "Build brands worth more tomorrow than they are today.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}