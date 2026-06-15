"use client";

import { motion } from "motion/react";

export default function PipelinePage() {
  const leads = [
    { name: "Vanguard Partners", value: "$12,000", stage: "Closing" },
    { name: "Nova Athletics", value: "$8,500", stage: "Proposal Sent" },
    { name: "Luxe Botanicals", value: "$15,000", stage: "Discovery Call" },
    { name: "TechFlow SaaS", value: "$20,000", stage: "Initial Outreach" }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold mb-2">Sales Pipeline</h1>
        <p className="text-text-secondary">Track leads and incoming revenue.</p>
      </div>
      
      <div className="clay-card p-8">
        <div className="space-y-4">
          {leads.map((lead, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: i * 0.1 }}
              className="flex justify-between items-center p-4 rounded-xl bg-white/50 hover:bg-white shadow-[var(--clay-shadow-in)] transition-colors"
            >
              <div>
                <h4 className="font-bold text-lg">{lead.name}</h4>
                <p className="text-accent font-mono font-bold">{lead.value}</p>
              </div>
              <span className="px-4 py-2 rounded-full text-xs font-bold bg-white shadow-[var(--clay-shadow-out)] text-text-primary">
                {lead.stage}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}