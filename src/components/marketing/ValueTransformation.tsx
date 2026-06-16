"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  "Product Quality",
  "Brand Perception",
  "Customer Trust",
  "Premium Pricing",
  "Market Authority",
  "Business Value"
];

export default function ValueTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-[var(--bg-forest)] border-t border-white/5" style={{ height: `${STEPS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Headline */}
        <div className="absolute top-24 left-0 right-0 text-center px-4 z-20">
          <h2 className="font-heading text-[var(--gold)] text-2xl md:text-4xl italic">
            What if your brand looked as valuable as your product?
          </h2>
        </div>

        {/* Morphing Words */}
        <div className="relative w-full h-40 flex items-center justify-center">
          {STEPS.map((step, i) => (
            <StepWord 
              key={i} 
              step={step} 
              index={i} 
              totalSteps={STEPS.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Decorative subtle lines */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1px] h-32 bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
      </div>
    </section>
  );
}

function StepWord({ step, index, scrollYProgress, totalSteps }: any) {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;

  const p1 = Math.max(0, start - 0.05);
  const p2 = Math.max(0, start + 0.05);
  const p3 = Math.min(1, end - 0.05);
  const p4 = Math.min(1, end + 0.05);

  const input = [
    p1,
    Math.max(p1, p2),
    Math.max(p1, Math.max(p2, p3)),
    Math.max(p1, Math.max(p2, Math.max(p3, p4)))
  ];

  const isLast = index === totalSteps - 1;
  const opacityArray = isLast ? [0, 1, 1, 1] : [0, 1, 1, 0];
  const yArray = isLast ? [40, 0, 0, 0] : [40, 0, 0, -40];

  const opacity = useTransform(scrollYProgress, input, opacityArray);
  const y = useTransform(scrollYProgress, input, yArray);
  const scale = useTransform(scrollYProgress, input, isLast ? [0.95, 1, 1, 1] : [0.95, 1, 1, 1.05]);
  
  const color = isLast ? "var(--gold)" : "var(--text-inverse)";

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center text-center w-full"
      style={{ opacity, y, scale }}
    >
      <h3 
        className="font-heading tracking-tight w-full"
        style={{ 
          fontSize: "clamp(3rem, 8vw, 7rem)", 
          lineHeight: 1,
          color 
        }}
      >
        {step}
      </h3>
    </motion.div>
  );
}
