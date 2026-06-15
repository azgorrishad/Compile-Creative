"use client";

import { motion } from "motion/react";

export default function ClientPortalPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold mb-2">Client Overview</h1>
        <p className="text-text-secondary">Your project dashboard and deliverables.</p>
      </div>
      
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="clay-card p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <span className="text-accent text-3xl">✦</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Welcome to your Portal</h2>
        <p className="text-text-secondary max-w-md">
          Your project timeline, assets, and invoices will appear here once the discovery phase is complete.
        </p>
      </motion.div>
    </div>
  );
}