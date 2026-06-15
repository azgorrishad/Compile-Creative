"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-[var(--bg-base)] py-32 md:py-48 overflow-hidden relative border-t border-[var(--border)]">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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
              <p className="text-[var(--text-muted)] font-mono text-sm uppercase tracking-wider">
                Founder • Strategist • Creative Director • Growth Systems Thinker
              </p>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-sm overflow-hidden"
            >
              <Image src="/founder-1.jpg" alt="Saleh Azgor Rishad" fill className="object-cover" priority />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-12 -left-12 w-2/3 aspect-square rounded-sm overflow-hidden border-8 border-[var(--bg-base)] hidden md:block shadow-2xl"
            >
              <Image src="/founder-2.jpg" alt="Compile Creative Strategy" fill className="object-cover" />
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
