"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

/* ── Stage Data ── */
const stages = [
  {
    number: "01",
    title: "Observe",
    tagline:
      "We study your market, competitors, and customers before touching a single pixel.",
    description:
      "Deep research into brand perception, competitive landscape, and customer psychology. We interview stakeholders, audit existing assets, and map the market territory.",
  },
  {
    number: "02",
    title: "Position",
    tagline:
      "We find the gap between what you do and what your market believes.",
    description:
      "Strategic positioning that creates clear differentiation. We define the narrative that makes your brand impossible to ignore and difficult to replicate.",
  },
  {
    number: "03",
    title: "Design",
    tagline:
      "Every visual decision is a strategic decision. Nothing is decoration.",
    description:
      "Brand identity, digital experience, and communication systems built from strategy — not trends. Each element earns its place.",
  },
  {
    number: "04",
    title: "Deploy",
    tagline: "Systems that work without you. Processes that scale.",
    description:
      "Launch with confidence. We build the infrastructure, documentation, and workflows that let your brand operate consistently at any scale.",
  },
  {
    number: "05",
    title: "Refine",
    tagline: "Measure. Learn. Optimize. The brand evolves.",
    description:
      "Ongoing measurement and iteration. We track perception shifts, engagement patterns, and business metrics to continuously refine the brand system.",
  },
];

const STAGE_COUNT = stages.length;

/* ── Spring config ── */
const spring = { damping: 25, stiffness: 200, mass: 0.5 };

/* ── Individual Stage ── */
function Stage({
  stage,
  index,
  scrollYProgress,
}: {
  stage: (typeof stages)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const stageStart = index / STAGE_COUNT;
  const stageMid = (index + 0.35) / STAGE_COUNT;
  const stageEnd = (index + 1) / STAGE_COUNT;

  /* Derived active state (0 → 1 → 0) */
  const rawActive = useTransform(scrollYProgress, (v) => {
    if (v < stageStart) return 0;
    if (v >= stageStart && v < stageMid) return (v - stageStart) / (stageMid - stageStart);
    if (v >= stageMid && v < stageEnd) return 1;
    return Math.max(0, 1 - (v - stageEnd) / 0.05);
  });
  const active = useSpring(rawActive, spring);

  /* Content transforms */
  const contentOpacity = useTransform(active, [0, 0.5, 1], [0.25, 0.8, 1]);
  const contentY = useTransform(active, [0, 1], [12, 0]);
  const taglineOpacity = useTransform(active, [0, 0.6, 1], [0, 0.6, 1]);
  const descOpacity = useTransform(active, [0, 0.7, 1], [0, 0.5, 1]);
  const bigNumberOpacity = useTransform(active, [0, 1], [0.03, 0.08]);

  /* Dot fill */
  const dotScale = useTransform(active, [0, 1], [0, 1]);
  const dotBorder = useTransform(active, [0, 0.5], ["rgba(75,99,85,0.25)", "rgba(75,99,85,1)"]);

  return (
    <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-6 md:gap-10 min-h-[60vh] py-16 md:py-24">
      {/* ── Timeline Dot ── */}
      <div className="relative flex justify-center pt-2">
        <motion.div
          style={{ borderColor: dotBorder }}
          className="relative z-10 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 bg-[var(--bg-base)] flex items-center justify-center shrink-0"
        >
          <motion.div
            style={{ scale: dotScale }}
            className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[var(--sage)]"
          />
        </motion.div>
      </div>

      {/* ── Stage Content ── */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative">
        {/* Background Number */}
        <motion.span
          style={{ opacity: bigNumberOpacity }}
          className="absolute -top-8 -left-2 md:-top-12 md:-left-6 font-heading text-[100px] md:text-[150px] leading-none select-none pointer-events-none text-[var(--text-primary)]"
          aria-hidden="true"
        >
          {stage.number}
        </motion.span>

        {/* Stage Number Label */}
        <span className="chapter-label mb-3 block text-[var(--sage)]">
          Stage {stage.number}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] mb-4 tracking-tight">
          {stage.title}
        </h3>

        {/* Tagline */}
        <motion.p
          style={{ opacity: taglineOpacity }}
          className="font-heading italic text-lg md:text-xl lg:text-2xl text-[var(--text-primary)] mb-5 leading-snug max-w-xl"
        >
          {stage.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          style={{ opacity: descOpacity }}
          className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-lg"
        >
          {stage.description}
        </motion.p>
      </motion.div>
    </div>
  );
}

/* ── Main Component ── */
export default function CompileMethod() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Progress bar height — smoothed */
  const smoothProgress = useSpring(scrollYProgress, spring);
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      className="bg-[var(--bg-base)] relative"
    >
      {/* ── Section Header ── */}
      <div className="section-container section-padding pb-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="chapter-label mb-6 block"
          >
            The Method
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-headline mb-6"
          >
            The Compile Method.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-muted)] font-heading italic"
          >
            Five stages. One system. No shortcuts.
          </motion.p>
        </div>
      </div>

      {/* ── Scroll-tracked Timeline Container ── */}
      <div
        ref={containerRef}
        className="section-container relative"
        style={{ minHeight: "300vh" }}
      >
        {/* ── Vertical Timeline Track ── */}
        <div
          className="absolute top-0 bottom-0 left-[calc(1.5rem+8px)] md:left-[calc(3rem+18px)] lg:left-[calc(5rem+18px)] w-[2px] z-0"
          style={{ background: "var(--border-light)" }}
        >
          {/* Progress Fill */}
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-[var(--sage)] origin-top"
          />
        </div>

        {/* ── Sticky Stage Container ── */}
        <div className="relative z-10">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="sticky top-0"
              style={{
                /* Stagger the sticky top so stages stack slightly */
                top: `${index * 2}rem`,
              }}
            >
              <div className="bg-[var(--bg-base)]">
                <Stage
                  stage={stage}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
