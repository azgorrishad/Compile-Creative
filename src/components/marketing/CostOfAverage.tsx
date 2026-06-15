"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   THE COST OF LOOKING AVERAGE
   ─────────────────────────────────────────────────────────────
   A 7-phase sticky-scroll narrative designed to make founders
   feel the weight of perception before they see any portfolio.

   Scroll bands (each ~14% of total scroll):
     Phase 1:  0  – 14%   "marketing problem"
     Phase 2:  14 – 28%   "perception problem"
     Phase 3:  28 – 42%   "average brands → price"
     Phase 4:  42 – 56%   "premium brands → trust"
     Phase 5:  56 – 70%   "leaders → meaning"
     Phase 6:  70 – 84%   "decided before a word"
     Phase 7:  84 – 100%  "three seconds" (finale)
   ───────────────────────────────────────────────────────────── */

type Phase = {
  number: string;
  text: string;
  emphasis: string;
  sub?: string;
  isClosure?: boolean;
};

const PHASES: Phase[] = [
  {
    number: "01",
    text: "Most businesses think they have a",
    emphasis: "marketing problem.",
    sub: "",
  },
  {
    number: "02",
    text: "Most businesses actually have a",
    emphasis: "perception problem.",
    sub: "",
  },
  {
    number: "03",
    text: "Average brands compete on",
    emphasis: "price.",
    sub: "And price is the easiest thing for competitors to undercut.",
  },
  {
    number: "04",
    text: "Premium brands compete on",
    emphasis: "trust.",
    sub: "Trust is earned through perception — before a single transaction.",
  },
  {
    number: "05",
    text: "Category leaders compete on",
    emphasis: "meaning.",
    sub: "Meaning is the only advantage that compounds over time.",
  },
  {
    number: "06",
    text: "Your customers decide what you're worth",
    emphasis: "before they read a single word.",
    sub: "",
  },
  {
    number: "07",
    text: "",
    emphasis: "So what does your brand communicate\nin the first three seconds?",
    sub: "",
    isClosure: true,
  },
];

const TOTAL_PHASES = PHASES.length;
const PHASE_BAND = 1 / TOTAL_PHASES; // ~0.1428

/* Helper: scroll band for a given phase index */
function band(i: number) {
  const start = i * PHASE_BAND;
  const end = (i + 1) * PHASE_BAND;
  return { start, end };
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function CostOfAverage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Progress bar ─────────────────────────────────────────── */
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* ── Chapter label fade ───────────────────────────────────── */
  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.92, 1],
    [0, 1, 1, 0.3]
  );

  /* ── Phase number indicator ───────────────────────────────── */
  const phaseNumberOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.88, 0.95],
    [0, 0.4, 0.4, 0]
  );

  /* ── Vertical rule (left decorative line) ─────────────────── */
  const ruleHeight = useTransform(scrollYProgress, [0, 0.08], ["0%", "100%"]);
  const ruleOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.9, 1],
    [0, 1, 1, 0]
  );

  /* ── Bottom gradient reveal at finale ─────────────────────── */
  const bottomGradientOpacity = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 0.6]
  );

  return (
    <section
      id="cost-of-average"
      ref={containerRef}
      className="relative"
      style={{ height: `${TOTAL_PHASES * 100}vh` }}
    >
      {/* ── Sticky viewport ────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--bg-forest)]">
        {/* ── Ambient grain texture ─────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        {/* ── Top vignette ──────────────────────────────────── */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[var(--bg-forest)] to-transparent z-[1]" />

        {/* ── Chapter label ─────────────────────────────────── */}
        <motion.div
          className="absolute top-10 left-0 right-0 z-30 flex justify-center md:top-14"
          style={{ opacity: labelOpacity }}
        >
          <span className="chapter-label text-[var(--gold)] tracking-[0.3em]">
            The Cost Of Looking Average
          </span>
        </motion.div>

        {/* ── Left decorative vertical rule ─────────────────── */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          style={{ opacity: ruleOpacity }}
        >
          <div className="relative h-40 w-[1px] bg-white/[0.06]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--gold)]/40"
              style={{ height: ruleHeight }}
            />
          </div>
        </motion.div>

        {/* ── Progress indicator (right edge) ──────────────── */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3 md:right-10">
          <div className="relative h-28 w-[1.5px] rounded-full bg-white/[0.07]">
            <motion.div
              className="absolute bottom-0 left-0 w-full rounded-full"
              style={{
                height: progressHeight,
                background:
                  "linear-gradient(to top, var(--gold), var(--sage))",
              }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-[var(--gold)]"
              style={{
                bottom: progressHeight,
                boxShadow: "0 0 12px rgba(198, 165, 107, 0.5)",
              }}
            />
          </div>
        </div>

        {/* ── Phase number watermark ────────────────────────── */}
        <PhaseWatermark
          scrollYProgress={scrollYProgress}
          opacity={phaseNumberOpacity}
        />

        {/* ── Phases 1–7 ───────────────────────────────────── */}
        {PHASES.map((phase, i) => (
          <PhaseSlide
            key={i}
            index={i}
            phase={phase}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* ── Bottom vignette ──────────────────────────────── */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-forest)] to-transparent z-[1]" />

        {/* ── Closing radial glow (finale) ─────────────────── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            opacity: bottomGradientOpacity,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(198,165,107,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHASE SLIDE
   Each phase cross-fades in/out within its scroll band with
   subtle vertical parallax. The finale phase gets a slight
   scale entrance and a decorative underline sweep.
   ═══════════════════════════════════════════════════════════════ */
function PhaseSlide({
  index,
  phase,
  scrollYProgress,
}: {
  index: number;
  phase: Phase;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const { start, end } = band(index);
  const mid = start + (end - start) * 0.5;

  /* Fade in → hold → fade out */
  const fadeIn = start + PHASE_BAND * 0.08;
  const holdStart = start + PHASE_BAND * 0.25;
  const holdEnd = end - PHASE_BAND * 0.3;
  const fadeOut = end - PHASE_BAND * 0.05;

  const isLast = index === TOTAL_PHASES - 1;

  const opacity = useTransform(
    scrollYProgress,
    isLast
      ? [fadeIn, holdStart, 1.0]        // last phase stays visible
      : [fadeIn, holdStart, holdEnd, fadeOut],
    isLast ? [0, 1, 1] : [0, 1, 1, 0]
  );

  /* Subtle vertical parallax: rise up, settle, drift away */
  const y = useTransform(
    scrollYProgress,
    isLast
      ? [fadeIn, holdStart, 1.0]
      : [fadeIn, holdStart, fadeOut],
    isLast ? [40, 0, 0] : [35, 0, -15]
  );

  /* Finale scale */
  const scale = useTransform(
    scrollYProgress,
    [fadeIn, holdStart],
    isLast ? [0.94, 1] : [1, 1]
  );

  /* Decorative underline sweep (finale only) */
  const underlineWidth = useTransform(
    scrollYProgress,
    [holdStart, holdStart + PHASE_BAND * 0.4],
    ["0%", "50%"]
  );

  const underlineOpacity = useTransform(
    scrollYProgress,
    [holdStart, holdStart + PHASE_BAND * 0.3],
    [0, 1]
  );

  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center justify-center px-6 md:px-12"
      style={{ opacity, y, scale }}
    >
      <div className="max-w-[920px] text-center">
        {/* ── Sub-number ──────────────────────────────────── */}
        {!phase.isClosure && (
          <div
            className="mb-6 font-display text-[var(--gold)]/30 text-[0.7rem] tracking-[0.35em] uppercase"
          >
            {phase.number} / 07
          </div>
        )}

        {/* ── Main statement ──────────────────────────────── */}
        {phase.isClosure ? (
          /* Finale — full italic emphasis */
          <div>
            {phase.emphasis.split("\n").map((line, li) => (
              <p
                key={li}
                className="font-heading italic text-[var(--gold)] leading-[1.15]"
                style={{
                  fontSize: "clamp(2rem, 4.8vw, 4rem)",
                }}
              >
                {line}
              </p>
            ))}

            {/* Decorative sweep */}
            <motion.div
              className="mx-auto mt-10 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent"
              style={{
                width: underlineWidth,
                opacity: underlineOpacity,
              }}
            />
          </div>
        ) : (
          /* Standard phase — text + emphasized word */
          <>
            <p
              className="font-heading text-[var(--text-inverse)] leading-[1.12]"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 3.6rem)",
              }}
            >
              {phase.text}{" "}
              <span
                className="text-[var(--gold)] font-medium"
                style={{
                  textShadow: "0 0 40px rgba(198,165,107,0.15)",
                }}
              >
                {phase.emphasis}
              </span>
            </p>

            {/* Subtext — the strategic explanation */}
            {phase.sub && (
              <p
                className="mt-6 text-[var(--text-inverse)]/40 leading-relaxed max-w-[600px] mx-auto"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.875rem, 1.2vw, 1.05rem)",
                  letterSpacing: "0.01em",
                }}
              >
                {phase.sub}
              </p>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHASE WATERMARK
   A large, ghostly number in the background that shifts
   based on which phase is active. Uses deterministic positions
   to avoid hydration issues.
   ═══════════════════════════════════════════════════════════════ */
function PhaseWatermark({
  scrollYProgress,
  opacity,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  opacity: ReturnType<typeof useTransform>;
}) {
  /* Map scroll progress to phase number string */
  const displayNumber = useTransform(scrollYProgress, (v) => {
    const idx = Math.min(
      Math.floor(v * TOTAL_PHASES),
      TOTAL_PHASES - 1
    );
    return PHASES[idx]?.number ?? "01";
  });

  /* Subtle vertical drift */
  const watermarkY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center select-none"
      style={{ opacity }}
    >
      <motion.span
        className="font-display text-white/[0.02] leading-none"
        style={{
          fontSize: "clamp(14rem, 30vw, 28rem)",
          fontWeight: 800,
          y: watermarkY,
          letterSpacing: "-0.04em",
        }}
      >
        {displayNumber}
      </motion.span>
    </motion.div>
  );
}
