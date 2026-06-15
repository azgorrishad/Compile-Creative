"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { flagshipProjects } from "@/data/mock/projects";

export default function CaseStudies() {
  // Take top 2 projects for the homepage case studies preview
  const caseStudies = flagshipProjects.slice(0, 2);

  return (
    <section className="section-padding bg-white relative">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">Strategy in Action.</h2>
            <p className="text-xl text-[var(--text-muted)]">
              Deep dives into how we identify bottlenecks, engineer solutions, and drive measurable enterprise growth.
            </p>
          </div>
          <Link href="/case-studies" className="hidden md:flex outline-btn mt-8 md:mt-0">
            View All Case Studies
          </Link>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {caseStudies.map((study) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="editorial-card p-0 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Visual Side */}
                <div className={`lg:col-span-5 ${study.coverColor} p-12 flex flex-col justify-between relative`}>
                  <div className="relative z-10">
                    <span className="pill-tag bg-white/50 backdrop-blur-md text-[var(--text-primary)] border-white mb-6">
                      {study.category}
                    </span>
                    <h3 className="text-4xl font-display font-semibold mt-4 text-[var(--text-primary)]">{study.name}</h3>
                  </div>
                  
                  <div className="mt-24 relative z-10">
                    <p className="font-mono text-sm uppercase tracking-widest text-[var(--text-primary)]/60 mb-2">Key Metric</p>
                    <p className="text-5xl font-display font-semibold text-[var(--sage)]">{study.metrics}</p>
                  </div>
                  
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                {/* Content Side - Timeline Layout */}
                <div className="lg:col-span-7 p-8 md:p-16 bg-white relative">
                  
                  <div className="absolute left-[39px] md:left-[71px] top-16 bottom-16 w-px bg-[var(--border-light)] hidden sm:block" />

                  <div className="space-y-12">
                    {/* Problem */}
                    <div className="relative pl-0 sm:pl-12">
                      <div className="hidden sm:block absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-[var(--border)] border-2 border-white z-10" />
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">01. The Problem</h4>
                      <p className="text-xl text-[var(--text-primary)] font-medium leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Strategy */}
                    <div className="relative pl-0 sm:pl-12">
                      <div className="hidden sm:block absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] border-2 border-white z-10" />
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">02. The Strategy</h4>
                      <p className="text-lg text-[var(--text-muted)] leading-relaxed">{study.strategy}</p>
                    </div>

                    {/* Outcome */}
                    <div className="relative pl-0 sm:pl-12">
                      <div className="hidden sm:block absolute left-[-6px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--sage)] border-2 border-white z-10" />
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">03. The Outcome</h4>
                      <p className="text-lg text-[var(--text-primary)] leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-[var(--border-light)] pl-0 sm:pl-12">
                    <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-[var(--sage)] font-semibold hover:text-[var(--sage-dark)] transition-colors group">
                      Read Full Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/case-studies" className="outline-btn w-full">
            View All Case Studies
          </Link>
        </div>

      </div>
    </section>
  );
}
