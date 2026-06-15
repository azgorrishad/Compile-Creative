"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function WhyCompileCreative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const aiItems = [
    "More ideas", "More options", "Faster production", "Faster experimentation", "Lower execution costs"
  ];

  const expertItems = [
    "Strategic decisions", "Market positioning", "Brand clarity", "Business judgment", "Growth systems"
  ];

  // Animation: "Thousands of possibilities" collapsing into one
  const pathScale = useTransform(scrollYProgress, [0, 0.4], [10, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  
  return (
    <section ref={containerRef} className="section-padding bg-[var(--bg-forest)] text-[var(--text-inverse)] overflow-hidden relative">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-8"
          >
            Why hire experts when <span className="text-gold">AI can do the work?</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-xl md:text-2xl text-[var(--border-light)] font-light space-y-2 mb-8"
          >
            <p>AI can generate ideas.</p>
            <p>AI can generate logos.</p>
            <p>AI can generate websites.</p>
            <p>AI can generate content.</p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-medium"
          >
            Choosing the right direction for your business still requires experience, judgment, and strategy.
          </motion.p>
        </div>

        {/* Abstract Animation: Many paths to one */}
        <div className="relative h-40 mb-24 flex justify-center items-center">
          <motion.div 
            style={{ scaleY: pathScale, opacity: pathOpacity }}
            className="w-1 h-full bg-gold origin-bottom relative"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(198,165,107,0.8)]" />
          </motion.div>
          {/* Multiple faded lines representing AI scatter */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
            className="absolute inset-0 flex justify-center items-center gap-4"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-[var(--border-light)]/20 transform" style={{ rotate: `${(i - 5) * 15}deg` }} />
            ))}
          </motion.div>
        </div>

        {/* Split Screen */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto mb-24">
          <div className="bg-[var(--bg-dark-sage)] p-8 md:p-12 rounded-xl border border-[var(--sage)]">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[var(--border-light)] mb-8">What AI Gives You</h3>
            <ul className="space-y-6">
              {aiItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="bg-[var(--bg-forest)] p-1 rounded-sm"><Check size={16} className="text-white/50" /></div>
                  <span className="text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white text-[var(--text-primary)] p-8 md:p-12 rounded-xl">
            <h3 className="font-mono text-sm uppercase tracking-widest text-[var(--text-muted)] mb-8">What Experts Give You</h3>
            <ul className="space-y-6">
              {expertItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="bg-gold/20 text-gold p-1 rounded-sm"><Check size={16} strokeWidth={3} /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="max-w-3xl mx-auto text-center border-t border-[var(--sage)] pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-2xl font-display"
          >
            <p className="text-[var(--border-light)]">AI creates possibilities.</p>
            <p className="text-gold font-semibold text-3xl">Experts create outcomes.</p>
            <p className="pt-6">Compile Creative combines both.</p>
            <p className="text-lg font-body text-[var(--text-muted)] mt-4">We use AI to move faster. We use expertise to make sure your business moves in the right direction.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
