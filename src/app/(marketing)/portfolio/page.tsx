import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Compile Creative",
  description:
    "Explore Compile Creative's work — branding, web design, marketing systems, and automation projects across beauty, SaaS, fragrance, real estate, and more.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
