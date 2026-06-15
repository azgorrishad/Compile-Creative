"use client";

import { motion } from "motion/react";

export default function WhyNotAI() {
  return (
    <section id="system" className="bg-[var(--bg-forest)] text-[var(--bg-base)] py-32 md:py-48 overflow-hidden">
      <div className="section-container">
        
        <div className="max-w-4xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-tight"
          >
            Why hire experts when AI can do the work?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mb-32">
          <ComparisonRow ai="AI gives options." expert="Experts make decisions." delay={0.1} />
          <ComparisonRow ai="AI generates assets." expert="Experts create positioning." delay={0.2} />
          <ComparisonRow ai="AI follows prompts." expert="Experts identify opportunities." delay={0.3} />
          <ComparisonRow ai="AI produces content." expert="Experts build systems." delay={0.4} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl border-t border-white/20 pt-16"
        >
          <h3 className="text-3xl md:text-5xl font-heading font-medium leading-tight mb-8">
            <span className="text-white/40 block mb-2">AI creates possibilities.</span>
            <span className="text-[var(--gold)] block mb-2">Experts create outcomes.</span>
            <span className="text-white">Compile Creative combines both.</span>
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

function ComparisonRow({ ai, expert, delay }: { ai: string, expert: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-4 border-l-2 border-[var(--gold)]/30 pl-8"
    >
      <p className="text-xl md:text-2xl font-body text-white/50">{ai}</p>
      <p className="text-2xl md:text-3xl font-heading font-medium text-white">{expert}</p>
    </motion.div>
  );
}
