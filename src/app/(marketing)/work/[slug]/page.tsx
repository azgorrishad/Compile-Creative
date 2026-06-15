"use client";

import { useRef, use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects, Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) return notFound();

  const currentIndex = projects.findIndex(
    (p) => p.slug === resolvedParams.slug
  );
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen pt-24">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none">
        <div className="section-container py-8 flex justify-between pointer-events-auto">
          <Link
            href="/#work"
            className="text-white hover:opacity-70 transition flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back
          </Link>
        </div>
      </div>

      <HeroSection project={project} />
      <TransformationSection project={project} />
      <SituationSection project={project} />
      <ThinkingSection project={project} />
      <SolutionSection project={project} />
      <VisualShowcase project={project} />
      <ResultSection project={project} />
      <InsightSection project={project} />
      <NextProjectSection nextProject={nextProject} />
    </main>
  );
}

/* ── Hero ── */
function HeroSection({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] overflow-hidden flex flex-col justify-end pb-24"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
      <div className="section-container relative z-10 text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          <p className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--gold)] mb-6">
            {project.industry} — Case Study
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading tracking-tight mb-8">
            {project.title}
          </h1>
          <div className="flex gap-4 flex-wrap">
            {project.deliverables.map((f: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 border border-white/20 rounded-full text-sm font-display font-medium tracking-wide"
              >
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Transformation Statement ── */
function TransformationSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-base)]">
      <div className="section-container max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
          className="text-3xl md:text-5xl font-heading italic leading-snug text-[var(--text-primary)]"
        >
          {project.transformation}
        </motion.p>
      </div>
    </section>
  );
}

/* ── The Situation ── */
function SituationSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-base)]">
      <div className="section-container grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--text-muted)] block mb-4">
            01. The Situation
          </span>
          <h2 className="text-4xl md:text-5xl font-heading tracking-tight">
            What was broken.
          </h2>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <ul className="space-y-4">
            {project.before.map((item: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex items-start gap-4 text-xl md:text-2xl leading-relaxed text-[var(--text-muted)]"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--sage)] mt-3 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Before vs After Thinking ── */
function ThinkingSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-forest)] text-white">
      <div className="section-container">
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--gold)] block mb-12">
          02. The Shift in Thinking
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="p-10 md:p-16 bg-white/5"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-white/40 block mb-6">
              Before Strategy
            </span>
            <p className="text-2xl md:text-3xl font-heading italic text-white/40 line-through decoration-1">
              &ldquo;{project.thinking.before}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="p-10 md:p-16 bg-[var(--gold)]/10"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--gold)] block mb-6">
              After Strategy
            </span>
            <p className="text-2xl md:text-3xl font-heading italic text-[var(--gold)]">
              &ldquo;{project.thinking.after}&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── The Solution ── */
function SolutionSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-base)]">
      <div className="section-container grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--text-muted)] block mb-4">
            03. Strategic Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-heading tracking-tight">
            What we built.
          </h2>
        </div>
        <div className="md:col-span-8 md:col-start-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[var(--text-muted)]">
              {project.solution.text}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--border)] pt-12">
            {project.deliverables.map((h: string, i: number) => (
              <div key={i}>
                <div className="text-[var(--sage)] font-display text-sm font-semibold mb-2">
                  0{i + 1}
                </div>
                <div className="font-medium font-heading">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Visual Showcase ── */
function VisualShowcase({ project }: { project: Project }) {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <div className="section-container mb-16">
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--text-muted)] block mb-4">
          04. Visual Showcase
        </span>
        <h2 className="text-4xl md:text-5xl font-heading tracking-tight">
          The execution.
        </h2>
      </div>
      <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-12">
        {project.visuals.map((src: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease }}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[var(--bg-forest)]/5 rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Project Visual"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── The Result ── */
function ResultSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-base)]">
      <div className="section-container text-center max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--sage)] block mb-8">
          05. The Result
        </span>
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-3xl md:text-5xl font-heading tracking-tight text-[var(--text-primary)] leading-tight"
        >
          {project.result}
        </motion.p>
      </div>
    </section>
  );
}

/* ── Key Insight ── */
function InsightSection({ project }: { project: Project }) {
  return (
    <section className="section-padding bg-[var(--bg-forest)] text-white relative overflow-hidden">
      <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-[var(--gold)] block mb-8">
          Key Insight
        </span>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="text-2xl md:text-4xl leading-snug font-heading italic text-white"
        >
          &ldquo;{project.insight}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

/* ── Next Project ── */
function NextProjectSection({ nextProject }: { nextProject: Project }) {
  return (
    <section className="h-[70vh] bg-black text-white relative flex items-center justify-center overflow-hidden group cursor-pointer">
      <Link
        href={`/work/${nextProject.slug}`}
        className="absolute inset-0 z-20"
      />

      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
        <Image
          src={nextProject.heroImage}
          alt="Next Project"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 text-center">
        <span className="text-xs uppercase tracking-[0.2em] font-display font-semibold text-white/50 block mb-6">
          Next Project
        </span>
        <h2 className="text-5xl md:text-8xl font-heading tracking-tight group-hover:scale-105 transition-transform duration-700 ease-out flex items-center gap-6 justify-center">
          {nextProject.title}{" "}
          <ArrowRight className="w-12 h-12 md:w-20 md:h-20 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700" />
        </h2>
      </div>
    </section>
  );
}
