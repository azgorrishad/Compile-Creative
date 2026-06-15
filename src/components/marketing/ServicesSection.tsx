"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const services = [
    {
      category: "Strategy",
      outcome: "We define the territory you will own. By clarifying your positioning and understanding market gaps, we ensure your business competes in a category of one.",
      capabilities: ["Brand Positioning", "Market Research", "Competitive Analysis", "Financial Modeling"]
    },
    {
      category: "Creative",
      outcome: "We translate strategy into premium assets that command higher prices. Every visual touchpoint is engineered to increase perceived enterprise value.",
      capabilities: ["Visual Identity Systems", "Packaging Design", "Content Creation", "UX/UI Architecture"]
    },
    {
      category: "Growth",
      outcome: "We build the engines that capture market share. Predictable, data-driven acquisition systems that lower CAC and increase LTV.",
      capabilities: ["Marketing Systems", "Conversion Optimization", "Campaign Management", "Retention Frameworks"]
    },
    {
      category: "Systems",
      outcome: "We eliminate operational friction. By building robust internal architectures, we allow your team to handle 10x the volume without breaking.",
      capabilities: ["Workflow Engineering", "CRM Implementation", "Operational Infrastructure", "Data Pipelines"]
    },
    {
      category: "Automation",
      outcome: "We disconnect your time from your revenue. Integrating AI and process automation to scale your margins, not just your headcount.",
      capabilities: ["AI Integration", "Process Automation", "Scaling Tools", "Custom Tooling"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container max-w-5xl">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Business Outcomes. <br/><span className="text-[var(--text-muted)] text-3xl md:text-4xl">Not just deliverables.</span></h2>
          <p className="text-xl text-[var(--text-primary)] font-medium">
            Our capabilities are organized around the results they generate for your business.
          </p>
        </div>

        <div className="border-t border-[var(--border)]">
          {services.map((service, idx) => {
            const isActive = activeTab === idx;
            
            return (
              <div key={idx} className="border-b border-[var(--border)] group">
                <button 
                  onClick={() => setActiveTab(isActive ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none transition-colors group-hover:bg-[var(--bg-base)] px-4 -mx-4 rounded-lg"
                >
                  <h3 className={`text-3xl md:text-4xl font-display font-medium transition-colors ${isActive ? 'text-[var(--sage)]' : 'text-[var(--text-primary)]'}`}>
                    {service.category}
                  </h3>
                  <div className="text-[var(--text-muted)] flex-shrink-0 ml-4">
                    {isActive ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-4 -mx-4 flex flex-col md:flex-row gap-8 lg:gap-16">
                        
                        <div className="md:w-1/2">
                          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--gold)] mb-4">The Outcome</h4>
                          <p className="text-lg text-[var(--text-primary)] leading-relaxed">
                            {service.outcome}
                          </p>
                        </div>

                        <div className="md:w-1/2">
                          <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">Core Capabilities</h4>
                          <ul className="space-y-3">
                            {service.capabilities.map((cap, i) => (
                              <li key={i} className="flex items-center gap-3 text-[var(--text-primary)] font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--sage)]" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#book" className="inline-flex items-center gap-2 text-[var(--text-primary)] font-semibold hover:text-[var(--sage)] transition-colors group">
            Discuss your specific needs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
