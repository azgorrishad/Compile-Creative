"use client";

import { motion } from "motion/react";
import { Search, Crosshair, Hammer, Rocket, LineChart, Scaling } from "lucide-react";

export default function ProcessSection() {
  const stages = [
    {
      id: "01",
      title: "Discover",
      icon: Search,
      why: "To uncover hidden bottlenecks.",
      desc: "We map your current architecture, analyze market positioning, and identify exact points of friction preventing scale."
    },
    {
      id: "02",
      title: "Position",
      icon: Crosshair,
      why: "To make competition irrelevant.",
      desc: "We define a category of one. By adjusting your messaging and visual identity, we instantly increase perceived enterprise value."
    },
    {
      id: "03",
      title: "Build",
      icon: Hammer,
      why: "To create the growth engine.",
      desc: "We engineer the assets—from high-converting digital platforms to robust backend workflows—that will carry your new positioning."
    },
    {
      id: "04",
      title: "Launch",
      icon: Rocket,
      why: "To capture market share.",
      desc: "We deploy the new systems into the market with precision timing, capturing immediate attention and generating initial traction."
    },
    {
      id: "05",
      title: "Optimize",
      icon: LineChart,
      why: "To maximize conversion rates.",
      desc: "We analyze live user data, A/B testing critical funnels to squeeze maximum ROI out of every interaction."
    },
    {
      id: "06",
      title: "Scale",
      icon: Scaling,
      why: "To dominate the category.",
      desc: "With a proven, optimized engine, we introduce automation and targeted growth systems to scale without breaking operations."
    }
  ];

  return (
    <section id="system" className="section-padding bg-[var(--bg-base)]">
      <div className="section-container">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">The Growth System.</h2>
          <p className="text-xl text-[var(--text-muted)]">
            A proprietary, six-stage methodology designed to systematically increase your business&apos;s value and operational efficiency.
          </p>
        </div>

        {/* Desktop Pipeline View */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-[45px] left-0 w-full h-1 bg-gradient-to-r from-[var(--sage)]/20 via-[var(--sage)] to-[var(--gold)]" />
          
          <div className="grid grid-cols-6 gap-6 relative">
            {stages.map((stage, i) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Node */}
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[var(--bg-base)] shadow-[0_0_0_2px_var(--border)] flex items-center justify-center relative z-10 mb-8">
                  <stage.icon size={32} className="text-[var(--sage)]" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--forest)] text-white rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-lg">
                    {stage.id}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">{stage.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--gold)] font-semibold mb-4 h-8 flex items-center justify-center">
                    {stage.why}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical View */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-[var(--sage)]/20 via-[var(--sage)] to-[var(--gold)]" />

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Node */}
                <div className="absolute top-0 left-[-20px] w-12 h-12 bg-white rounded-full border-4 border-[var(--bg-base)] shadow-[0_0_0_2px_var(--border)] flex items-center justify-center z-10">
                  <span className="font-mono text-xs font-bold text-[var(--sage)]">{stage.id}</span>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[var(--border-light)] shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <stage.icon size={20} className="text-[var(--sage)]" strokeWidth={2} />
                    <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{stage.title}</h3>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--gold)] font-semibold mb-3">
                    Why: {stage.why}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
