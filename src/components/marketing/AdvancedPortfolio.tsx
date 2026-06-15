"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN PORTFOLIO SECTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function AdvancedPortfolio() {
  const featured = projects.filter((p) => p.type === "featured");
  const compact = projects.filter((p) => p.type === "compact");

  return (
    <section id="work" className="bg-[var(--bg-base)]">
      {/* Section Header */}
      <div className="section-container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-4"
        >
          <span className="chapter-label text-[var(--sage)]">
            Chapter 03 — The Work
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="editorial-headline mb-6"
        >
          Business Transformations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed"
        >
          We don&apos;t show what we designed. We show what changed.
        </motion.p>
      </div>

      {/* Featured Case Studies */}
      {featured.map((project, index) => (
        <FeaturedCaseStudy
          key={project.slug}
          project={project}
          index={index}
        />
      ))}

      {/* Compact Cards Section */}
      <div className="section-container py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span className="chapter-label text-[var(--sage)] mb-4 block">
            More Transformations
          </span>
          <h3
            className="font-heading tracking-tight text-[var(--text-primary)]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            Every engagement, a shift in thinking.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {compact.map((project, index) => (
            <CompactCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FEATURED CASE STUDY
   Full transformation story layout
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function FeaturedCaseStudy({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = index % 2 !== 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const bgClass = isDark
    ? "bg-[var(--bg-forest)] text-[var(--bg-base)]"
    : "bg-[var(--bg-base)] text-[var(--text-primary)]";

  const accentClass = isDark ? "text-[var(--gold)]" : "text-[var(--sage)]";
  const accentBg = isDark
    ? "bg-[var(--gold)]/10 border-[var(--gold)]/20"
    : "bg-[var(--sage)]/10 border-[var(--sage)]/20";
  const mutedClass = isDark
    ? "text-[var(--bg-base)]/60"
    : "text-[var(--text-muted)]";
  const borderClass = isDark
    ? "border-[var(--bg-base)]/10"
    : "border-[var(--border)]";

  return (
    <div ref={containerRef} className={`${bgClass} py-24 md:py-32`}>
      <div className="section-container">
        {/* ── Row 1: Chapter Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <span className={`chapter-label ${accentClass}`}>
            Case Study 0{index + 1}
          </span>
        </motion.div>

        {/* ── Row 2: Hero Image ── */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl mb-16"
          data-cursor-text="Explore"
        >
          <Link
            href={`/work/${project.slug}`}
            className="absolute inset-0 z-20"
          />
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 -top-[12%] -bottom-[12%]"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* ── Row 3: Title + Industry + Transformation ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className={`flex items-center gap-3 mb-5`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${mutedClass}`}
            >
              {project.industry}
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="editorial-headline mb-6"
          >
            <Link
              href={`/work/${project.slug}`}
              className={`hover:${accentClass} transition-colors duration-300`}
            >
              {project.title}
            </Link>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-xl md:text-2xl font-heading italic max-w-3xl"
            style={{ lineHeight: 1.4 }}
          >
            {project.transformation}
          </motion.p>
        </div>

        {/* ── Row 4: Two-Column Grid — Situation + Deliverables ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* The Situation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
          >
            <h4
              className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${mutedClass} mb-6`}
            >
              The Situation
            </h4>
            <ul className="space-y-3">
              {project.before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="flex items-start gap-3 text-base md:text-lg leading-relaxed"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[var(--gold)]" : "bg-[var(--sage)]"} mt-2.5 shrink-0`}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What We Changed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <h4
              className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${mutedClass} mb-6`}
            >
              What We Changed
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.deliverables.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease }}
                  className={`px-5 py-2.5 rounded-full text-sm font-display font-medium border ${accentBg} ${accentClass}`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Row 5: Before vs After Thinking ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden mb-20 border ${borderClass}`}
        >
          {/* Before */}
          <div
            className={`p-8 md:p-10 ${isDark ? "bg-[var(--bg-base)]/5" : "bg-[var(--bg-forest)]/[0.03]"}`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${mutedClass} block mb-4`}
            >
              Before Strategy
            </span>
            <p className="text-lg md:text-xl font-heading italic opacity-60 line-through decoration-1">
              &ldquo;{project.thinking.before}&rdquo;
            </p>
          </div>

          {/* After */}
          <div
            className={`p-8 md:p-10 ${isDark ? "bg-[var(--gold)]/5" : "bg-[var(--sage)]/5"}`}
          >
            <span
              className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${accentClass} block mb-4`}
            >
              After Strategy
            </span>
            <p className={`text-lg md:text-xl font-heading italic ${accentClass}`}>
              &ldquo;{project.thinking.after}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* ── Row 6: The Result ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className={`border-t ${borderClass} pt-10 mb-16`}
        >
          <h4
            className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${mutedClass} mb-5`}
          >
            The Result
          </h4>
          <p className="text-xl md:text-2xl font-heading leading-relaxed max-w-4xl">
            {project.result}
          </p>
        </motion.div>

        {/* ── Row 7: Key Insight ── */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className={`relative pl-8 border-l-2 ${isDark ? "border-[var(--gold)]" : "border-[var(--sage)]"} mb-16`}
        >
          <span
            className={`text-xs uppercase tracking-[0.2em] font-display font-semibold ${accentClass} block mb-4`}
          >
            Key Insight
          </span>
          <p
            className="font-heading italic text-xl md:text-2xl leading-relaxed max-w-3xl"
            style={{ lineHeight: 1.5 }}
          >
            {project.insight}
          </p>
        </motion.blockquote>

        {/* ── Row 8: CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <Link
            href={`/work/${project.slug}`}
            className={`group inline-flex items-center gap-4 font-display font-semibold tracking-wide text-sm uppercase ${accentClass}`}
          >
            View Full Case Study
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   COMPACT TRANSFORMATION CARD
   Quick-scan format for smaller projects
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function CompactCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="group"
    >
      <Link href={`/work/${project.slug}`} className="block">
        {/* Image */}
        <div
          className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6"
          data-cursor-text="View"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        {/* Industry */}
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--text-muted)] block mb-2">
          {project.industry}
        </span>

        {/* Title */}
        <h4 className="text-xl font-heading tracking-tight text-[var(--text-primary)] mb-3 group-hover:text-[var(--sage)] transition-colors">
          {project.title}
        </h4>

        {/* Transformation */}
        <p className="text-base text-[var(--text-muted)] font-heading italic leading-relaxed mb-5">
          {project.transformation}
        </p>

        {/* Before → After Thinking */}
        <div className="space-y-2 mb-5">
          <p className="text-sm text-[var(--text-muted)] line-through decoration-1 opacity-60">
            &ldquo;{project.thinking.before}&rdquo;
          </p>
          <p className="text-sm text-[var(--sage)] font-medium">
            &ldquo;{project.thinking.after}&rdquo;
          </p>
        </div>

        {/* Key Insight */}
        <p className="text-sm font-display text-[var(--text-muted)] leading-relaxed border-l-2 border-[var(--sage)]/40 pl-4 italic">
          {project.insight}
        </p>
      </Link>
    </motion.div>
  );
}
