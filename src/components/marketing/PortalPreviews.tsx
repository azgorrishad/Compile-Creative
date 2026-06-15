"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BarChart, CheckCircle2, MessageSquare, LayoutGrid, Zap } from "lucide-react";

export default function PortalPreviews() {
  return (
    <div className="bg-[var(--bg-base)] py-32 overflow-hidden border-t border-[var(--border)]">
      <div className="section-container">
        


        {/* Client Portal */}
        <PreviewSection 
          title="The Client Portal"
          subtitle="Clients never wonder what is happening. Total transparency, zero friction."
          features={["Project Tracking", "Milestones & Approvals", "File Handoffs", "Invoicing"]}
          reversed={true}
          DashboardUI={<ClientMock />}
        />



      </div>
    </div>
  );
}

function PreviewSection({ title, subtitle, features, reversed, DashboardUI }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [reversed ? -15 : 15, reversed ? 15 : -15]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -5]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24 min-h-[80vh] py-24 border-b border-[var(--border)] last:border-0`}>
      
      {/* Copy Side */}
      <div className="flex-1 space-y-8">
        <h3 className="text-4xl md:text-5xl font-display font-semibold text-[var(--text-primary)] tracking-tight">
          {title}
        </h3>
        <p className="text-xl text-[var(--text-muted)] font-medium leading-relaxed max-w-lg">
          {subtitle}
        </p>
        <ul className="space-y-4">
          {features.map((feat: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-[var(--text-primary)] font-medium">
              <CheckCircle2 className="text-[var(--sage)] w-5 h-5" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* 3D Dashboard Mock Side */}
      <div className="flex-1 w-full perspective-[2000px]">
        <motion.div 
          style={{ rotateY, rotateX, y }}
          className="relative w-full aspect-[4/3] rounded-xl border border-[var(--border)] shadow-2xl bg-[var(--bg-base)] overflow-hidden flex flex-col"
        >
          {/* Mock Browser Header */}
          <div className="h-10 bg-[var(--bg-surface)] border-b border-[var(--border)] flex items-center px-4 gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          
          {/* Dashboard Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-16 md:w-48 bg-[var(--bg-forest)] shrink-0 border-r border-[var(--border)] hidden sm:flex flex-col items-center md:items-start md:px-4 py-6 gap-6">
              <div className="w-8 h-8 rounded bg-white/10 md:w-32"></div>
              <div className="w-8 h-4 rounded bg-white/10 md:w-24"></div>
              <div className="w-8 h-4 rounded bg-white/10 md:w-20"></div>
              <div className="w-8 h-4 rounded bg-white/10 md:w-28"></div>
            </div>
            
            {/* Main Area */}
            <div className="flex-1 p-6 overflow-hidden bg-white/50">
              {DashboardUI}
            </div>
          </div>

        </motion.div>
      </div>

    </div>
  );
}

function ClientMock() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-16 bg-[var(--sage)] rounded border border-[var(--border)] shadow-sm p-4 flex items-center justify-between text-white">
        <div className="w-32 h-4 bg-white/20 rounded"></div>
        <div className="w-16 h-6 bg-white/30 rounded-full"></div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded border border-gray-100 p-4 h-32">
             <div className="w-20 h-4 bg-gray-200 rounded mb-4"></div>
             <div className="space-y-2">
               <div className="w-full h-2 bg-[var(--gold)]/30 rounded"></div>
               <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
             </div>
          </div>
          <div className="bg-white rounded border border-gray-100 p-4 flex-1">
            <div className="w-24 h-4 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-2 mb-2"><div className="w-6 h-6 bg-gray-200 rounded-full"></div><div className="w-32 h-8 bg-gray-100 rounded"></div></div>
            <div className="flex gap-2 justify-end"><div className="w-24 h-8 bg-[var(--sage)]/20 rounded"></div><div className="w-6 h-6 bg-[var(--sage)] rounded-full"></div></div>
          </div>
        </div>
        <div className="bg-white rounded border border-gray-100 p-4 flex flex-col gap-3">
          <div className="w-20 h-4 bg-gray-200 rounded mb-2"></div>
          {[1,2,3,4].map(i => (
            <div key={i} className="flex gap-3 items-center border border-gray-100 p-2 rounded">
              <div className="w-8 h-8 bg-blue-50 rounded"></div>
              <div className="flex-1 h-3 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


