"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  return (
    <section className="relative bg-[var(--bg-forest)] text-[var(--bg-base)] overflow-hidden py-32 md:py-48" id="contact">
      <div className="section-container relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto">
            Let&apos;s build something your competitors <span className="text-[var(--gold)] italic">can&apos;t replicate.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xl md:text-2xl text-[var(--bg-base)]/70">
            Start with a 30-minute strategy audit. No pitch deck. No pressure. Just clarity on your positioning and the exact systems you need to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#book" className="gold-btn px-10 py-5 text-sm">
            Book Your Strategy Audit
            <ArrowRight size={18} />
          </a>
          <Link href="#work" className="text-[var(--bg-base)]/70 hover:text-[var(--gold)] font-display font-semibold tracking-wide text-sm uppercase transition-colors">
            Or explore our work
          </Link>
        </motion.div>

      </div>

      {/* Cinematic subtle animated background rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full border border-[var(--sage)]/30"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full border border-[var(--sage)]/20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[1000px] h-[1000px] rounded-full border border-[var(--sage)]/10"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}
