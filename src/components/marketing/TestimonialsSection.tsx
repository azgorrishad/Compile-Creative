"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--bg-base)] relative overflow-hidden" id="testimonials">
      <div className="section-container relative z-10">
        
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-32 text-center"
        >
          <span className="chapter-label text-[var(--sage)]">
            Client Outcomes
          </span>
        </motion.div>

        {/* Single featured editorial testimonial */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="text-8xl md:text-9xl font-heading text-[var(--gold)] opacity-30 leading-none h-16 md:h-24"
          >
            &quot;
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="text-2xl md:text-4xl lg:text-5xl font-heading leading-[1.3] text-[var(--text-primary)] mb-16"
          >
            They didn&apos;t just redesign our website. They fundamentally rewired how we communicate our value to the market. Our sales cycle shortened by 40% in the first quarter.
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="flex flex-col items-center"
          >
            <p className="font-display font-semibold tracking-wider uppercase text-sm mb-2 text-[var(--text-primary)]">
              Marcus Chen
            </p>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Founder & CEO, Nexus OS
            </p>
            <div className="flex gap-2">
              <span className="pill-tag">B2B SaaS</span>
              <span className="pill-tag text-[var(--sage)] border-[var(--sage)]/30">Series B</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Subtle background abstract */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--sage)]/5 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}
