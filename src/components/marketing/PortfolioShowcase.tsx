"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { flagshipProjects } from "@/data/mock/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Horizontal scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="work" className="h-[400vh] relative bg-[var(--bg-surface)]">
      
      {/* Sticky header */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16">
        
        {/* Intro Text (Fades out as we scroll) */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="w-full z-10 px-6 md:px-12 max-w-7xl mx-auto pointer-events-none mb-8 md:mb-12 shrink-0"
        >
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-4">The Flagship Work.</h2>
          <p className="text-xl text-[var(--text-muted)] max-w-lg">
            We don&apos;t build portfolios. We build case studies in market dominance.
          </p>
        </motion.div>

        {/* Horizontal scrolling track */}
        <motion.div style={{ x, opacity }} className="flex gap-8 px-6 md:px-12 w-fit shrink-0 pb-12">
          {flagshipProjects.map((project) => (
            <div 
              key={project.id} 
              className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] shrink-0 group relative overflow-hidden editorial-card flex flex-col"
            >
              {/* Cover Image Area */}
              <div className={`w-full h-1/2 md:h-[60%] ${project.coverColor} relative transition-transform duration-700 group-hover:scale-105 origin-bottom`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay content on hover */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-2">The Outcome</h4>
                  <p className="text-white font-medium text-lg leading-snug">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col grow justify-between bg-white z-10">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-display font-semibold text-[var(--text-primary)]">{project.name}</h3>
                    <span className="text-[var(--sage)] font-bold text-xl">{project.metrics}</span>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="pill-tag bg-[var(--bg-base)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[var(--text-muted)] line-clamp-2">
                    <strong className="text-[var(--text-primary)] font-medium">Challenge: </strong> 
                    {project.challenge}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--border-light)] mt-4">
                  <Link href={`/case-studies`} className="inline-flex items-center gap-2 text-[var(--text-primary)] font-semibold hover:text-[var(--sage)] transition-colors">
                    Explore Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* End card */}
          <div className="w-[40vw] h-[60vh] shrink-0 flex flex-col items-center justify-center p-12 text-center bg-[var(--bg-base)] rounded-8 border border-[var(--border)]">
            <h3 className="text-3xl font-display font-semibold mb-4">Ready for your transformation?</h3>
            <a href="#book" className="gold-btn mt-4">Book Strategy Audit</a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
