"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero3DScene = dynamic(() => import("./Hero3DScene"), { ssr: false });

const HeroContent = ({ isMask = false, setIsHovered }: { isMask?: boolean, setIsHovered: (v: boolean) => void }) => {
  const ease = [0.16, 1, 0.3, 1] as const;
  
  return (
    <div className="section-container relative z-10 w-full min-h-[95vh] flex flex-col justify-center pt-24 lg:pt-32 pb-20 pointer-events-none">
      {/* Protective gradient for text readability - using radial to reveal the edges */}
      {!isMask && (
        <div 
          className="absolute inset-0 -z-10 pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse 60% 80% at 30% 50%, var(--bg-base) 40%, transparent 100%)' }}
        />
      )}
      <div
        className={`max-w-5xl ${isMask ? 'pointer-events-none' : 'pointer-events-auto'}`}
        onMouseEnter={() => !isMask && setIsHovered(true)}
        onMouseLeave={() => !isMask && setIsHovered(false)}
      >
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-6"
        >
          <span className={`chapter-label ${
            isMask ? "text-[var(--bg-forest)]" : "text-[var(--sage)]"
          }`}>
            Strategy · Design · Growth
          </span>
        </motion.div>

        {/* Main headline — editorial Cormorant */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className={`font-heading tracking-tight text-6xl md:text-7xl lg:text-[6.5rem] mb-12 leading-[1.02] max-w-[900px] ${
            isMask ? "text-[var(--bg-forest)]" : "text-[var(--text-primary)]"
          }`}
        >
          Build brands worth more tomorrow than they are today.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className={`text-lg md:text-xl max-w-xl mb-10 leading-relaxed ${
            isMask ? "text-[var(--bg-forest)]/80" : "text-[var(--text-muted)]"
          }`}
        >
          Compile Creative helps ambitious founders build premium perception, stronger positioning, and scalable growth systems that increase business value over time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 ${isMask ? 'pointer-events-none' : 'pointer-events-auto'}`}
        >
          <a
            href="#book"
            className={`group w-full sm:w-auto ${
              isMask
                ? "bg-[var(--bg-forest)] text-[var(--sage)] px-8 py-4 rounded-xl font-display text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2"
                : "gold-btn"
            }`}
          >
            <span>Book Strategy Audit</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="#work"
            className={`w-full sm:w-auto flex justify-center ${
              isMask
                ? "text-[var(--bg-forest)] border border-[var(--bg-forest)]/30 px-8 py-4 rounded-xl font-display text-sm font-semibold tracking-wide"
                : "outline-btn"
            }`}
          >
            View Selected Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const maskSize = useSpring(isHovered ? 1700 : 40, springConfig);
  const clipPath = useMotionTemplate`circle(${maskSize}px at ${smoothX}px ${smoothY}px)`;

  useEffect(() => {
    setIsMounted(true);

    const style = document.createElement("style");
    style.innerHTML = `.hero-section, .hero-section * { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const el = containerRef.current;
    if (el) el.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, [mouseX, mouseY]);



  return (
    <section
      ref={containerRef}
      className="hero-section relative min-h-[95vh] overflow-hidden cursor-none"
    >
      {/* LAYER 1: Background scene */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>
      <div className="relative z-10 w-full">
        <HeroContent setIsHovered={setIsHovered} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 pointer-events-none"
      >
        <span className="chapter-label text-[var(--text-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>

      {/* LAYER 2: Sage mask reveal - Disabled on Mobile for performance */}
      {isMounted && (
        <motion.div
          className="absolute inset-0 z-20 bg-[var(--sage)] pointer-events-none hidden md:block"
          style={{ clipPath }}
        >
          <HeroContent isMask setIsHovered={setIsHovered} />
        </motion.div>
      )}

    </section>
  );
}
