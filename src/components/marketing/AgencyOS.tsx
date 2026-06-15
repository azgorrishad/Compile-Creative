"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { UserPlus, Compass, Layers, CheckSquare, TrendingUp } from "lucide-react";

const steps = [
  { id: "lead", name: "Lead", icon: <UserPlus className="w-6 h-6" />, desc: "Automated qualification and discovery routing." },
  { id: "strategy", name: "Strategy", icon: <Compass className="w-6 h-6" />, desc: "Deep positioning and business architecture." },
  { id: "execution", name: "Execution", icon: <Layers className="w-6 h-6" />, desc: "High-fidelity brand and product engineering." },
  { id: "review", name: "Review", icon: <CheckSquare className="w-6 h-6" />, desc: "Frictionless multi-tier approval pipelines." },
  { id: "growth", name: "Growth", icon: <TrendingUp className="w-6 h-6" />, desc: "Post-launch scaling and metric optimization." },
];

export default function AgencyOS() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps for the "platform" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="agency-os" className="bg-[var(--bg-base)] py-32 relative overflow-hidden">
      <div className="section-container">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-[var(--text-primary)] mb-6"
          >
            The Agency Operating System.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-muted)] font-medium"
          >
            Every project. Every file. Every approval. Every milestone. <br className="hidden md:block" />
            <span className="text-[var(--sage)]">Visible from one place.</span>
          </motion.p>
        </div>

        {/* Animated Platform Visual */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Connector Line */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-[var(--border)] hidden md:block">
            <motion.div 
              className="h-full bg-[var(--sage)]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              
              return (
                <div 
                  key={step.id} 
                  className="relative flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Icon Node */}
                  <motion.div 
                    layout
                    className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 z-10 transition-colors duration-500 shadow-sm ${
                      isActive ? 'bg-[var(--sage)] text-white scale-110 shadow-xl' : 
                      isPast ? 'bg-white border-2 border-[var(--sage)] text-[var(--sage)]' : 
                      'bg-white border border-[var(--border)] text-[var(--text-muted)] group-hover:border-[var(--sage)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="glow"
                        className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(40,56,48,0.4)]"
                      />
                    )}
                    <span className="relative z-10">{step.icon}</span>
                  </motion.div>

                  {/* Text Details */}
                  <div className="text-center">
                    <h3 className={`font-display font-semibold text-xl mb-2 transition-colors duration-300 ${
                      isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                    }`}>
                      {step.name}
                    </h3>
                    <motion.div 
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
