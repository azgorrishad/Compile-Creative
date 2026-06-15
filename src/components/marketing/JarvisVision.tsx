"use client";

import { motion } from "motion/react";
import { Zap, Bot, BrainCircuit, BarChart4, Network } from "lucide-react";

export default function JarvisVision() {
  return (
    <section className="bg-black text-white py-32 md:py-48 relative overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--gold)]/20 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        
        {/* Core Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--gold)] mb-12 shadow-[0_0_80px_rgba(200,165,100,0.2)]"
        >
          <Zap size={40} className="drop-shadow-lg" />
        </motion.div>

        {/* Headlines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-mono text-white/50 mb-4 tracking-widest uppercase">
            Today: Agency Operating System
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 drop-shadow-sm">
            Tomorrow: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[#D4AF37]/50">AI-Powered</span> <br className="hidden md:block"/>Agency Infrastructure.
          </h3>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
            We are engineering the next evolution of Compile Creative: The Jarvis Kernel. Autonomous agents seamlessly integrated into our OS to multiply output, precision, and strategy.
          </p>
        </motion.div>

        {/* Feature Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-24">
          <FeatureCard 
            icon={<Bot />}
            title="AI Project Assistant"
            desc="Context-aware agents drafting briefs, organizing assets, and unblocking the team in real-time."
            delay={0.3}
          />
          <FeatureCard 
            icon={<BarChart4 />}
            title="Automated Reporting"
            desc="Synthesizing multi-channel analytics into strategic narratives, delivered automatically."
            delay={0.4}
          />
          <FeatureCard 
            icon={<Network />}
            title="Workflow Automation"
            desc="Frictionless handoffs. When design is approved, development tasks are created instantly."
            delay={0.5}
          />
          <FeatureCard 
            icon={<BrainCircuit />}
            title="Founder Intelligence"
            desc="Predictive modeling on agency health, pipeline forecasting, and capacity planning."
            delay={0.6}
          />
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-left hover:bg-white/10 transition-colors"
    >
      <div className="text-[var(--gold)] mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-white/60 leading-relaxed text-sm font-medium">{desc}</p>
    </motion.div>
  );
}
