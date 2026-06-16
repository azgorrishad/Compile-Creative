"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const outcomes = [
  {
    metric: "3x",
    label: "Pricing Leverage",
    insight: "When Aria Milano's brand identity aligned with their product quality, they were able to raise their baseline price by 300% without increasing customer acquisition cost. Premium perception justifies premium pricing.",
    client: "Aria Milano"
  },
  {
    metric: "140%",
    label: "Conversion Lift",
    insight: "SumiCo was losing visitors because their site looked like a generic Shopify store. By injecting character-driven branding into the UI, trust increased instantly, leading to a 140% lift in direct sales.",
    client: "SumiCo"
  },
  {
    metric: "Category",
    label: "Leadership",
    insight: "Flex City didn't need better clothes; they needed a better community architecture. Positioning them as a cultural anchor rather than an apparel brand created fierce loyalty and organic growth.",
    client: "Flex City"
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
            <span className="text-[var(--gold)] italic">We sell business outcomes.</span>
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
          Case Study: {outcome.client}
        </span>
      </div>
    </motion.div>
  );
}
