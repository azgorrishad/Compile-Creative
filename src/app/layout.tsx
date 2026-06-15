import type { Metadata } from "next";
import { Syne, Cormorant_Garamond, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700", "800"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-heading", weight: ["300", "400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Compile Creative — Strategic Growth Partner",
  description: "We partner with ambitious founders to strengthen positioning, eliminate operational friction, and create systems that increase enterprise value.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}