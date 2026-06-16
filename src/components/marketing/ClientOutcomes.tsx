"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const outcomes = [
  {
    metric: "Premium",
    label: "Positioning",
    insight: "We elevate brands out of the commodity trap. By signaling higher perceived value through meticulous design systems, you are no longer competing on price.",
    client: "Strategic Advantage"
  },
  {
    number: "Brand",
    metric: "Consistency",
    label: "Architecture",
    insight: "Fragmented brands lose trust. We architect rigorous visual ecosystems that ensure every single touchpoint reinforces a singular, unbreakable narrative.",
    client: "Operational Scale"
  },
  {
    number: "Market",
    metric: "Differentiation",
    label: "Defensibility",
    insight: "Looking like everyone else is the fastest way to become irrelevant. We build distinctive assets that command attention and create a moat around your business.",
    client: "Long-Term Equity"
  }
];

export default function ClientOutcomes() {
  return (
    <section className="section-padding bg-[var(--bg-forest)] text-[var(--text-inverse)]" id="outcomes">
      <div className="section-container">
        
        <div className="mb-20 md:mb-32">
          <span className="chapter-label text-[var(--gold)]">The Evidence</span>
          <h2 className="editorial-headline text-[var(--text-inverse)] mt-4 max-w-3xl">
            We don't sell design.<br/>
            <span className="text-[var(--gold)] italic">We build perception.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-16">
          {outcomes.map((outcome, i) => (
            <OutcomeCard key={i} outcome={outcome} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function OutcomeCard({ outcome, index }: { outcome: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col space-y-6"
    >
      <div className="border-l border-[var(--gold)] pl-6">
        <h3 className="font-heading text-5xl md:text-6xl text-[var(--gold)] tracking-tight mb-2">
          {outcome.metric}
        </h3>
        <p className="font-display tracking-widest uppercase text-xs text-white/50">
          {outcome.label}
        </p>
      </div>
      
      <p className="text-white/70 leading-relaxed text-lg font-heading italic">
        "{outcome.insight}"
      </p>

      <div className="pt-4 border-t border-white/10">
        <span className="font-display text-xs tracking-widest uppercase text-white/40">
          Result: {outcome.client}
        </span>
      </div>
    </motion.div>
  );
}
