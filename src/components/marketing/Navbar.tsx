"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#work" },
  { label: "Method", href: "#method" },
  { label: "Thinking", href: "#thinking" },
  { label: "About", href: "#strategist" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

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

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden lg:block font-display text-[0.75rem] font-semibold tracking-[0.05em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            Client Portal
          </Link>
          <a href="#book" className="gold-btn text-xs py-2.5 px-5 hidden md:flex items-center min-h-[44px]">
            <span>Book Strategy Audit</span>
          </a>
          
          <button 
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 relative z-[60] text-[var(--text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} className="text-[var(--bg-base)]" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[var(--text-primary)] z-50 flex flex-col justify-center items-center p-6"
          >
            <div className="flex flex-col items-center gap-10 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-heading text-4xl text-[var(--bg-base)] flex items-center justify-center min-h-[44px] w-full px-8 py-4"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (navLinks.length * 0.1), duration: 0.5 }}
                className="w-full mt-8"
              >
                <a 
                  href="#book" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex justify-center py-5 bg-[var(--gold)] text-[var(--bg-forest)] rounded-xl font-display font-semibold uppercase tracking-widest text-sm min-h-[44px]"
                >
                  Book Strategy Audit
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}