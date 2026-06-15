"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Portfolio", href: "#work" },
  { label: "Method", href: "#method" },
  { label: "Thinking", href: "#thinking" },
  { label: "About", href: "#strategist" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 244, 238, 0)", "rgba(245, 244, 238, 0.97)"]
  );

  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]"
        style={{ opacity: borderOpacity }}
      />

      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="/compile-logo.png"
            alt="Compile Creative"
            width={180}
            height={180}
            className={`w-auto mix-blend-multiply contrast-125 brightness-105 transition-all duration-500 ${
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            }`}
            priority
          />
        </Link>

        {/* Navigation — Syne font */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="hidden lg:block font-display text-[0.75rem] font-semibold tracking-[0.05em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            Client Portal
          </Link>
          <a href="#book" className="gold-btn text-xs py-2.5 px-5">
            <span>Book Strategy Audit</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}