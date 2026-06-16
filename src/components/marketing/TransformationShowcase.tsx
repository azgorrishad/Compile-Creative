"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function TransformationShowcase() {
  return (
    <section className="bg-[var(--bg-base)] py-24 md:py-40" id="work">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="chapter-label mb-8 block text-[var(--sage)]"
          >
            Selected Engagements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-headline"
          >
            We don't build portfolios.<br/>
            <span className="text-[var(--text-muted)] italic">We build business assets.</span>
          </motion.h2>
        </div>

        {/* The Projects */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ease = [0.16, 1, 0.3, 1] as const;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="flex flex-col gap-12 group mb-10">
      
      {/* Strategic Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Title & Industry */}
        <div className="md:col-span-4 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <span className="font-display text-[var(--sage)] text-sm uppercase tracking-widest font-semibold mb-4 block">
              {project.industry}
            </span>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)]">
              {project.title}
            </h3>
          </motion.div>
        </div>

        {/* The Strategy */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex flex-col gap-3"
          >
            <h4 className="font-display text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">The Challenge</h4>
            <p className="text-[var(--text-primary)] leading-relaxed">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex flex-col gap-3"
          >
            <h4 className="font-display text-xs uppercase tracking-widest text-[var(--sage)] font-semibold">The Strategic Shift</h4>
            <p className="text-[var(--text-primary)] leading-relaxed">{project.strategicMove}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex flex-col gap-3 md:col-span-2 pt-6 border-t border-[var(--border-light)]"
          >
            <h4 className="font-display text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">The Outcome</h4>
            <p className="font-heading text-2xl md:text-3xl text-[var(--text-primary)] italic leading-snug">"{project.outcome}"</p>
          </motion.div>

        </div>
      </div>

      {/* Visual Component - Large, full width */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease, delay: 0.5 }}
        className="w-full relative aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-xl bg-[var(--bg-surface)] mt-4"
      >
        <motion.div className="absolute inset-0 w-full h-[120%]" style={{ y: imageY }}>
          <Image 
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
      </motion.div>

    </div>
  );
}
