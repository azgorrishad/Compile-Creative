"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   INSIDE THE THINKING
   Horizontal-scroll pinned storytelling section.
   Vertical scroll → horizontal translateX across 5 panels.
   ═══════════════════════════════════════════════════════ */

// ── Redacted brief lines ──
const briefLines: { text: string; redacted?: boolean }[] = [
  { text: "Client: ██████████ Industries", redacted: false },
  { text: "Sector: Premium hospitality & lifestyle" },
  { text: "Objective: Complete brand repositioning" },
  { text: "Current revenue: $██M annually", redacted: false },
  { text: "Target audience: UHNW individuals, 35–55" },
  { text: "██████████████████████████████", redacted: true },
  { text: "Key challenge: perceived as outdated" },
  { text: "Timeline: 14 weeks" },
  { text: "Budget: $███,███", redacted: false },
  { text: "██████████████████████", redacted: true },
  { text: "Competitive landscape: 3 direct competitors" },
  { text: "████████████████████████████████", redacted: true },
];

// ── Annotations for the brief ──
const briefAnnotations = [
  { text: "This is what matters →", top: "12%", left: "62%", rotate: -3 },
  { text: "Huge opportunity here", top: "42%", left: "58%", rotate: 2 },
  { text: "Why do they feel this?", top: "62%", left: "65%", rotate: -1.5 },
  { text: "← Not enough time", top: "72%", left: "58%", rotate: 4 },
];

// ── Rejected directions ──
const rejectedDirections = [
  {
    gradient: "linear-gradient(135deg, #8FA3AD, #B4C5CC)",
    reason: "Too safe",
    note: "Blends in with every other premium brand. No tension. No memory.",
  },
  {
    gradient: "linear-gradient(135deg, #FF6B6B, #FFB347)",
    reason: "Too trendy",
    note: "Will feel dated in 18 months. Following, not leading.",
  },
  {
    gradient: "linear-gradient(135deg, #2C1810, #5C3A28)",
    reason: "Wrong audience",
    note: "Speaks to legacy wealth. Alienates the next-gen buyer.",
  },
];

// ── Color swatches for panel 4 ──
const colorSwatches = [
  { name: "Forest", hex: "#27332C", var: "--bg-forest" },
  { name: "Sage", hex: "#4B6355", var: "--sage" },
  { name: "Gold", hex: "#C6A56B", var: "--gold" },
  { name: "Ivory", hex: "#F5F4EE", var: "--bg-base" },
  { name: "Dark Sage", hex: "#1E2A23", var: "--bg-dark-sage" },
  { name: "Gold Light", hex: "#D4BA8A", var: "--gold-light" },
];

// ── Type specimens for panel 4 ──
const typeSpecimens = [
  { name: "Syne", role: "Display · Labels · Navigation", sample: "Aa", className: "font-display" },
  { name: "Cormorant Garamond", role: "Headlines · Pull Quotes", sample: "Aa", className: "font-heading" },
  { name: "Inter", role: "Body · Descriptions · UI", sample: "Aa", className: "font-body" },
];

// ── Final system palette ──
const finalPalette = [
  { name: "Primary", hex: "#27332C" },
  { name: "Secondary", hex: "#4B6355" },
  { name: "Accent", hex: "#C6A56B" },
  { name: "Background", hex: "#F5F4EE" },
  { name: "Surface", hex: "#EDECE6" },
];

export default function InsideTheThinking() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress → horizontal translation
  // 5 panels, translate from 0% to -80% (each panel ≈ 20% of track)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section className="bg-[var(--bg-surface)]" id="thinking">
      {/* ── Section Intro (static, above the pinned area) ── */}
      <div className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="chapter-label mb-6 block text-[var(--sage)]">
              Inside The Thinking
            </span>
            <h2 className="editorial-headline">
              How we think.
              <br />
              Why we choose.
              <br />
              <span className="text-[var(--text-muted)]">What we reject.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ── Horizontal Scroll Pinned Container ── */}
      <div ref={sectionRef} className="relative" style={{ height: "500vh" }}>
        {/* Sticky viewport — stays fixed while user scrolls */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Horizontal track — translates based on scrollYProgress */}
          <motion.div
            style={{ x }}
            className="flex h-full"
            // 5 panels × 100vw = 500vw total
          >
            {/* ════════════════════════════════════════
                PANEL 01 — THE BRIEF
               ════════════════════════════════════════ */}
            <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-16 lg:px-24">
              {/* Background panel number */}
              <span
                className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none select-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                01
              </span>

              <div className="relative z-10 flex w-full max-w-5xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
                {/* Brief card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg-forest)] p-8 shadow-2xl md:p-10"
                >
                  {/* Card header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[var(--sage)] pb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--sage)]">
                      Project Brief — Confidential
                    </span>
                    <span className="font-mono text-xs text-[var(--sage)]/60">
                      v2.4
                    </span>
                  </div>

                  {/* Brief lines */}
                  <div className="space-y-2.5">
                    {briefLines.map((line, i) => (
                      <div key={i} className="relative">
                        <p
                          className={`font-mono text-sm leading-relaxed ${
                            line.redacted
                              ? "select-none text-transparent"
                              : "text-[var(--text-inverse)]/80"
                          }`}
                        >
                          {line.text}
                        </p>
                        {line.redacted && (
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <div
                              className="h-4 rounded-sm bg-[var(--sage)]"
                              style={{ width: `${60 + ((i * 17) % 30)}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Stamp */}
                  <div className="mt-8 flex items-center gap-3 border-t border-[var(--sage)]/30 pt-6">
                    <div className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--gold)]">
                      Active Engagement
                    </span>
                  </div>
                </motion.div>

                {/* Floating annotations */}
                <div className="relative hidden h-80 w-80 lg:block">
                  {briefAnnotations.map((ann, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.15,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute font-display text-sm font-medium text-[var(--sage)] md:text-base"
                      style={{
                        top: ann.top,
                        left: ann.left,
                        transform: `rotate(${ann.rotate}deg)`,
                      }}
                    >
                      {ann.text}
                    </motion.span>
                  ))}
                  {/* Connector lines */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 320 320"
                    fill="none"
                  >
                    <motion.path
                      d="M20 60 Q 80 50, 160 45"
                      stroke="var(--sage)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                    <motion.path
                      d="M20 150 Q 100 140, 150 138"
                      stroke="var(--sage)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 1 }}
                    />
                  </svg>

                  {/* Panel label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-0 left-0"
                  >
                    <h3 className="font-heading text-3xl text-[var(--text-primary)] md:text-4xl">
                      The Brief
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-[var(--text-muted)]">
                      Every project starts here. We read between the lines — what
                      the client says, and what they actually need.
                    </p>
                  </motion.div>
                </div>

                {/* Mobile panel label */}
                <div className="lg:hidden">
                  <h3 className="font-heading text-3xl text-[var(--text-primary)]">
                    The Brief
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Every project starts here. We read between the lines.
                  </p>
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════
                PANEL 02 — REJECTED DIRECTIONS
               ════════════════════════════════════════ */}
            <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-16 lg:px-24">
              <span
                className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none select-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                02
              </span>

              <div className="relative z-10 w-full max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12"
                >
                  <h3 className="font-heading text-4xl text-[var(--text-primary)] md:text-5xl">
                    Rejected Directions
                  </h3>
                  <p className="mt-3 max-w-lg text-[var(--text-muted)]">
                    What we chose <em>not</em> to do is as important as what we
                    did. These directions were explored, debated, and killed.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                  {rejectedDirections.map((dir, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40, rotate: -1 }}
                      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative"
                    >
                      {/* Mockup card */}
                      <div className="relative overflow-hidden rounded-xl border border-[var(--border)]">
                        {/* Gradient placeholder mockup */}
                        <div
                          className="flex h-52 items-center justify-center md:h-60"
                          style={{ background: dir.gradient }}
                        >
                          {/* Abstract mockup shapes */}
                          <div className="flex flex-col items-center gap-3 opacity-30">
                            <div className="h-6 w-28 rounded bg-white/40" />
                            <div className="h-3 w-40 rounded bg-white/20" />
                            <div className="h-3 w-32 rounded bg-white/20" />
                            <div className="mt-2 h-8 w-20 rounded-md bg-white/30" />
                          </div>
                        </div>

                        {/* Red X overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            width="120"
                            height="120"
                            viewBox="0 0 120 120"
                            className="opacity-60"
                          >
                            <line
                              x1="20"
                              y1="20"
                              x2="100"
                              y2="100"
                              stroke="#DC2626"
                              strokeWidth="6"
                              strokeLinecap="round"
                            />
                            <line
                              x1="100"
                              y1="20"
                              x2="20"
                              y2="100"
                              stroke="#DC2626"
                              strokeWidth="6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Rejection reason */}
                      <div className="mt-4">
                        <span
                          className="inline-block font-display text-sm font-semibold uppercase tracking-wider text-red-600"
                          style={{ transform: "rotate(-1deg)" }}
                        >
                          {dir.reason}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                          {dir.note}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════
                PANEL 03 — THE POSITIONING DECISION
               ════════════════════════════════════════ */}
            <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-16 lg:px-24">
              <span
                className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none select-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                03
              </span>

              <div className="relative z-10 w-full max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12"
                >
                  <h3 className="font-heading text-4xl text-[var(--text-primary)] md:text-5xl">
                    The Positioning Decision
                  </h3>
                  <p className="mt-3 max-w-lg text-[var(--text-muted)]">
                    Before a single pixel is placed, we map the strategic
                    territory. Position first. Design second.
                  </p>
                </motion.div>

                {/* 2×2 Matrix */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mx-auto aspect-square w-full max-w-lg"
                >
                  {/* Axes */}
                  {/* Vertical axis */}
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--border)]" />
                  {/* Horizontal axis */}
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--border)]" />

                  {/* Axis labels */}
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    Modern
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    Traditional
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 -rotate-90 font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    Accessible
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rotate-90 font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    Premium
                  </span>

                  {/* Quadrant labels */}
                  <span className="absolute left-[15%] top-[20%] text-xs text-[var(--text-muted)]/50">
                    Affordable Modern
                  </span>
                  <span className="absolute right-[10%] top-[20%] text-xs text-[var(--text-muted)]/50">
                    Premium Modern
                  </span>
                  <span className="absolute bottom-[20%] left-[15%] text-xs text-[var(--text-muted)]/50">
                    Mass Market
                  </span>
                  <span className="absolute bottom-[20%] right-[10%] text-xs text-[var(--text-muted)]/50">
                    Heritage Luxury
                  </span>

                  {/* Competitor dots (muted) */}
                  {[
                    { x: "35%", y: "30%", label: "Comp A" },
                    { x: "60%", y: "65%", label: "Comp B" },
                    { x: "72%", y: "40%", label: "Comp C" },
                  ].map((comp, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{ left: comp.x, top: comp.y }}
                    >
                      <div className="h-3 w-3 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]" />
                      <span className="ml-4 whitespace-nowrap font-mono text-[10px] text-[var(--text-muted)]/60">
                        {comp.label}
                      </span>
                    </div>
                  ))}

                  {/* Chosen position — animated gold dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.6,
                      type: "spring",
                      damping: 25,
                      stiffness: 200,
                      mass: 0.5,
                    }}
                    className="absolute"
                    style={{ right: "22%", top: "25%" }}
                  >
                    {/* Pulse ring */}
                    <div className="absolute -inset-3 animate-ping rounded-full bg-[var(--gold)]/20" />
                    <div className="relative h-5 w-5 rounded-full bg-[var(--gold)] shadow-[0_0_20px_rgba(198,165,107,0.5)]" />

                    {/* Annotation arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="absolute left-8 top-0 w-48"
                    >
                      <span
                        className="block font-display text-sm font-semibold text-[var(--gold)]"
                        style={{ transform: "rotate(-2deg)" }}
                      >
                        ← We position here
                      </span>
                      <span className="mt-1 block text-xs text-[var(--text-muted)]">
                        Premium-modern with editorial restraint. Unapologetically
                        elevated.
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* ════════════════════════════════════════
                PANEL 04 — VISUAL EXPLORATIONS
               ════════════════════════════════════════ */}
            <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-16 lg:px-24">
              <span
                className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none select-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                04
              </span>

              <div className="relative z-10 w-full max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12"
                >
                  <h3 className="font-heading text-4xl text-[var(--text-primary)] md:text-5xl">
                    Visual Explorations
                  </h3>
                  <p className="mt-3 max-w-lg text-[var(--text-muted)]">
                    The moodboard. Color, type, texture — every choice narrowing
                    toward the system.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Color swatches */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-xl border border-[var(--border-light)] bg-white p-6 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      Color Palette
                    </span>
                    <div className="grid grid-cols-3 gap-3">
                      {colorSwatches.map((swatch, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.08,
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div
                            className="mb-2 aspect-square w-full rounded-lg border border-[var(--border-light)]"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <p className="font-display text-xs font-medium text-[var(--text-primary)]">
                            {swatch.name}
                          </p>
                          <p className="font-mono text-[10px] text-[var(--text-muted)]">
                            {swatch.hex}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Type specimens */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl border border-[var(--border-light)] bg-white p-6 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      Typography System
                    </span>
                    <div className="space-y-6">
                      {typeSpecimens.map((type, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + i * 0.12,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-center gap-5 border-b border-[var(--border-light)] pb-5 last:border-0 last:pb-0"
                        >
                          <span
                            className={`${type.className} text-4xl text-[var(--text-primary)] md:text-5xl`}
                          >
                            {type.sample}
                          </span>
                          <div>
                            <p className="font-display text-sm font-semibold text-[var(--text-primary)]">
                              {type.name}
                            </p>
                            <p className="text-xs text-[var(--text-muted)]">
                              {type.role}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Texture references */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl border border-[var(--border-light)] bg-white p-6 md:col-span-2 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      Texture & Mood References
                    </span>
                    <div className="grid grid-cols-4 gap-3">
                      {/* Texture swatches using CSS patterns */}
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[var(--bg-forest)] to-[var(--sage)]" />
                      <div
                        className="aspect-[4/3] rounded-lg"
                        style={{
                          background:
                            "repeating-linear-gradient(45deg, var(--bg-surface), var(--bg-surface) 2px, transparent 2px, transparent 8px)",
                          backgroundColor: "var(--bg-base)",
                        }}
                      />
                      <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)]" />
                      <div
                        className="aspect-[4/3] rounded-lg"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 40%, var(--sage) 0%, var(--bg-dark-sage) 70%)",
                        }}
                      />
                    </div>
                    {/* Handwritten annotation */}
                    <p
                      className="mt-4 font-display text-sm text-[var(--sage)]"
                      style={{ transform: "rotate(-1deg)" }}
                    >
                      Warm minimalism. Natural tones. Nothing synthetic.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════
                PANEL 05 — THE FINAL SYSTEM
               ════════════════════════════════════════ */}
            <div className="relative flex h-full w-screen shrink-0 items-center justify-center px-8 md:px-16 lg:px-24">
              <span
                className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 font-display text-[20rem] font-bold leading-none select-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                05
              </span>

              <div className="relative z-10 w-full max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12"
                >
                  <h3 className="font-heading text-4xl text-[var(--text-primary)] md:text-5xl">
                    The Final System
                  </h3>
                  <p className="mt-3 max-w-lg text-[var(--text-muted)]">
                    Every decision traced back to strategy. Nothing decorative.
                    Everything intentional.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                  {/* Logo placeholder */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col rounded-xl border border-[var(--border-light)] bg-white p-6 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      Brandmark
                    </span>
                    <div className="flex flex-1 items-center justify-center rounded-lg bg-[var(--bg-forest)] p-8">
                      {/* Abstract logo shape */}
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="h-1 w-8 rounded-full bg-[var(--gold)]" />
                          <div className="h-1 w-6 rounded-full bg-[var(--gold)]/60" />
                          <div className="h-1 w-4 rounded-full bg-[var(--gold)]/30" />
                        </div>
                        <span className="font-display text-xl font-semibold tracking-tight text-[var(--text-inverse)]">
                          BRAND
                        </span>
                      </div>
                    </div>
                    <p
                      className="mt-4 font-display text-xs text-[var(--sage)]"
                      style={{ transform: "rotate(-1.5deg)" }}
                    >
                      Reduced to essence. No decoration.
                    </p>
                  </motion.div>

                  {/* Color palette */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl border border-[var(--border-light)] bg-white p-6 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      System Palette
                    </span>
                    <div className="space-y-2">
                      {finalPalette.map((color, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="h-8 w-8 shrink-0 rounded-md border border-[var(--border-light)]"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="flex flex-1 items-center justify-between">
                            <span className="text-sm text-[var(--text-primary)]">
                              {color.name}
                            </span>
                            <span className="font-mono text-[10px] text-[var(--text-muted)]">
                              {color.hex}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Type hierarchy */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-xl border border-[var(--border-light)] bg-white p-6 md:p-8"
                  >
                    <span className="mb-5 block font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                      Type Hierarchy
                    </span>
                    <div className="space-y-4">
                      <div>
                        <span className="font-heading text-3xl leading-tight text-[var(--text-primary)]">
                          Display
                        </span>
                        <p className="font-mono text-[10px] text-[var(--text-muted)]">
                          Cormorant Garamond · 3.5–7rem
                        </p>
                      </div>
                      <div className="h-px bg-[var(--border-light)]" />
                      <div>
                        <span className="font-display text-xl text-[var(--text-primary)]">
                          Label Text
                        </span>
                        <p className="font-mono text-[10px] text-[var(--text-muted)]">
                          Syne · 0.75rem · Uppercase
                        </p>
                      </div>
                      <div className="h-px bg-[var(--border-light)]" />
                      <div>
                        <span className="text-base text-[var(--text-primary)]">
                          Body copy for readability and clarity across all
                          contexts.
                        </span>
                        <p className="font-mono text-[10px] text-[var(--text-muted)]">
                          Inter · 1.125rem · 1.7 leading
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Final annotation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-12 border-t border-[var(--border)] pt-8"
                >
                  <p
                    className="font-display text-lg text-[var(--sage)] md:text-xl"
                    style={{ transform: "rotate(-0.5deg)" }}
                  >
                    &ldquo;Every decision traced back to strategy. Nothing here is
                    accidental.&rdquo;
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Scroll progress indicator ── */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-3">
              {["01", "02", "03", "04", "05"].map((num, i) => (
                <PanelDot key={num} index={i} progress={scrollYProgress} label={num} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Panel Dot Indicator ── */
function PanelDot({
  index,
  progress,
  label,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  label: string;
}) {
  // Each panel occupies ~20% of scroll progress
  const start = index * 0.2;
  const end = (index + 1) * 0.2;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start, mid - 0.05, mid, mid + 0.05, end],
    [0.3, 0.6, 1, 0.6, 0.3]
  );

  const scale = useTransform(
    progress,
    [start, mid - 0.05, mid, mid + 0.05, end],
    [1, 1, 1.3, 1, 1]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="flex flex-col items-center gap-1"
    >
      <div className="h-2 w-2 rounded-full bg-[var(--sage)]" />
      <span className="font-mono text-[9px] text-[var(--text-muted)]">{label}</span>
    </motion.div>
  );
}
