"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-[var(--bg-base)] py-32 md:py-48 overflow-hidden relative border-t border-[var(--border)]">
      <div className="section-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Copy Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-sm uppercase tracking-widest text-[var(--sage)] mb-6 block"
            >
              The Foundation
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight text-[var(--text-primary)] mb-12"
            >
              Why Compile Creative Exists.
            </motion.h2>

            <div className="prose prose-xl prose-stone max-w-none text-[var(--text-muted)] space-y-8">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-[var(--text-primary)] font-medium">Most agencies deliver assets.</span><br/>
                Most businesses need leverage.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Compile Creative exists to bridge strategy, design, systems, and growth. We don't just build websites or create logos. We build digital infrastructure that drives revenue.
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-2xl md:text-3xl font-heading font-medium text-[var(--text-primary)] leading-tight pt-8 border-t border-[var(--border)]">
                We help businesses become more valuable, more recognizable, and easier to scale.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-col gap-2"
            >
              <h3 className="text-xl font-heading font-medium text-[var(--text-primary)]">Saleh Azgor Rishad</h3>
              <p className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest leading-relaxed">
                Founder • Strategist<br/>
                Beauty, Fragrance & Lifestyle Expertise
              </p>
            </motion.div>
          </div>

          {/* Philosophy Column */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:px-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl text-[var(--text-primary)] mb-8"
            >
              The Philosophy.
            </motion.h3>
            <ul className="flex flex-col gap-6">
              {[
                "Decoration is not design.",
                "Perception precedes pricing.",
                "Strategy creates leverage.",
                "Systems compound."
              ].map((tenet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 text-lg md:text-xl text-[var(--text-muted)]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  {tenet}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image src="/founder-1.jpg" alt="Saleh Azgor Rishad" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 33vw" />
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
