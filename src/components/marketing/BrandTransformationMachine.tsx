"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Layout, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

const PHASES = [
  {
    name: "01. Invisible",
    description: "Competing on price. Blending in. Seen as a commodity.",
    brandName: "Acme Consulting LLC",
    tagline: "We provide business consulting services.",
    price: "$50 / hr",
    bgColor: "#E5E5E5",
    textColor: "#555555",
    fontFamily: "sans-serif",
    uiComplexity: 1,
  },
  {
    name: "02. Positioned",
    description: "Finding the niche. Sharpening the message. Standing for something.",
    brandName: "Acme Strategic",
    tagline: "Growth consulting for B2B tech companies.",
    price: "$150 / hr",
    bgColor: "#D1D5DB",
    textColor: "#374151",
    fontFamily: "var(--font-body)",
    uiComplexity: 2,
  },
  {
    name: "03. Designed",
    description: "Visuals match the value. Looking professional and established.",
    brandName: "Vanguard",
    tagline: "Scaling B2B tech through strategic growth.",
    price: "$5,000 / project",
    bgColor: "#9CA3AF",
    textColor: "#111827",
    fontFamily: "var(--font-heading)",
    uiComplexity: 3,
  },
  {
    name: "04. Systemized",
    description: "Consistent touchpoints. A cohesive ecosystem of brand assets.",
    brandName: "Vanguard Partners",
    tagline: "The growth engine for enterprise tech.",
    price: "$15,000 / engagement",
    bgColor: "#FFFFFF",
    textColor: "#111814",
    fontFamily: "var(--font-heading)",
    uiComplexity: 4,
  },
  {
    name: "05. Premium",
    description: "Commanding authority. Signaling luxury and absolute trust.",
    brandName: "Vanguard",
    tagline: "Unlocking enterprise leverage.",
    price: "$50,000 minimum",
    bgColor: "#27332C",
    textColor: "#4B6355",
    fontFamily: "var(--font-heading)",
    uiComplexity: 5,
  },
  {
    name: "06. Market Leader",
    description: "Category category. Unquestionable dominance. The safe choice.",
    brandName: "VANGUARD",
    tagline: "The architecture of market leadership.",
    price: "By Invitation",
    bgColor: "#111814",
    textColor: "#C6A56B",
    fontFamily: "var(--font-display)",
    uiComplexity: 6,
  },
];

export default function BrandTransformationMachine() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate which phase is currently active
  const activePhaseIndex = useTransform(scrollYProgress, (v) => {
    return Math.min(Math.floor(v * PHASES.length), PHASES.length - 1);
  });

  // Smooth transitions between values
  const bgProgress = useTransform(scrollYProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    PHASES.map(p => p.bgColor)
  );

  // Layout changes
  const cardBorderRadius = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "12px", "0px"]);
  const cardShadow = useTransform(scrollYProgress, [0, 0.5, 1], ["0px 0px 0px rgba(0,0,0,0)", "0px 20px 40px rgba(0,0,0,0.1)", "0px 40px 100px rgba(198,165,107,0.15)"]);

  return (
    <section ref={containerRef} className="relative bg-[var(--bg-base)]" style={{ height: `${PHASES.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Header / Context */}
        <div className="absolute top-12 left-0 right-0 text-center z-20 px-6">
          <span className="chapter-label text-[var(--sage)]">The Compile Creative Effect</span>
          <h2 className="text-3xl md:text-4xl font-heading mt-4 text-[var(--text-primary)]">The Brand Transformation Machine</h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto mt-2">Scroll to see how perception changes valuation.</p>
        </div>

        {/* Dynamic Display Area */}
        <div className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 mt-20">
          
          {/* Left: The Narrative */}
          <div className="flex flex-col space-y-12">
            {PHASES.map((phase, i) => (
              <PhaseNarrative 
                key={i} 
                index={i} 
                phase={phase} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>

          {/* Right: The Brand Simulation */}
          <motion.div 
            className="w-full aspect-square md:aspect-video lg:aspect-square relative flex flex-col items-center justify-center p-8 border border-[var(--border)] overflow-hidden"
            style={{ 
              backgroundColor: bgProgress,
              borderRadius: cardBorderRadius,
              boxShadow: cardShadow
            }}
          >
            {/* Ambient Background Glow for later phases */}
            <PhaseGlow scrollYProgress={scrollYProgress} />

            <div className="z-10 text-center w-full">
              {/* Dynamic Logo/Name */}
              <BrandName activePhaseIndex={activePhaseIndex} />
              
              {/* Dynamic Tagline */}
              <Tagline activePhaseIndex={activePhaseIndex} />
              
              {/* Dynamic UI Representation */}
              <UIComplexity activePhaseIndex={activePhaseIndex} />
              
              {/* Dynamic Price Tag */}
              <PriceTag activePhaseIndex={activePhaseIndex} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function PhaseNarrative({ index, phase, scrollYProgress }: any) {
  const start = index / PHASES.length;
  const end = (index + 1) / PHASES.length;
  
  const p1 = Math.max(0, start - 0.1);
  const p2 = Math.max(0, start + 0.05);
  const p3 = Math.min(1, end - 0.05);
  const p4 = Math.min(1, end + 0.1);
  
  // Ensure array is strictly monotonically non-decreasing after clamping
  // If p1 == p2, Framer Motion handles it gracefully.
  const input = [p1, Math.max(p1, p2), Math.max(p1, Math.max(p2, p3)), Math.max(p1, Math.max(p2, Math.max(p3, p4)))];
  
  const opacity = useTransform(scrollYProgress, input, [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, input, [20, 0, 0, -20]);

  return (
    <motion.div 
      className="absolute max-w-sm left-6 lg:left-auto"
      style={{ opacity, y, pointerEvents: "none" }}
    >
      <h3 className="font-display text-sm tracking-widest uppercase text-[var(--gold)] mb-4">{phase.name}</h3>
      <p className="font-heading text-3xl md:text-4xl text-[var(--text-primary)] leading-tight">
        {phase.description}
      </p>
    </motion.div>
  );
}

function PhaseGlow({ scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.4]);
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        background: "radial-gradient(circle at 50% 50%, var(--gold-light) 0%, transparent 70%)",
        mixBlendMode: "overlay"
      }}
    />
  );
}

function BrandName({ activePhaseIndex }: { activePhaseIndex: any }) {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const unsubscribe = activePhaseIndex.on("change", (v: number) => setPhase(v));
    return () => unsubscribe();
  }, [activePhaseIndex]);

  const p = PHASES[phase] || PHASES[0];

  return (
    <motion.h1 
      className="transition-all duration-500 ease-out-expo"
      style={{ 
        fontFamily: p.fontFamily,
        color: p.textColor,
        fontSize: phase < 2 ? "1.5rem" : phase < 4 ? "2.5rem" : phase === 5 ? "3.5rem" : "3rem",
        letterSpacing: phase === 5 ? "0.2em" : "normal",
        textTransform: phase === 5 ? "uppercase" : "none"
      }}
    >
      {p.brandName}
    </motion.h1>
  );
}

function Tagline({ activePhaseIndex }: { activePhaseIndex: any }) {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const unsubscribe = activePhaseIndex.on("change", (v: number) => setPhase(v));
    return () => unsubscribe();
  }, [activePhaseIndex]);

  const p = PHASES[phase] || PHASES[0];

  return (
    <motion.p 
      className="mt-4 transition-all duration-500 ease-out-expo max-w-xs mx-auto"
      style={{ 
        color: phase > 3 ? "rgba(255,255,255,0.6)" : "inherit",
        opacity: 0.8,
        fontFamily: phase > 1 ? "var(--font-body)" : "sans-serif"
      }}
    >
      {p.tagline}
    </motion.p>
  );
}

function PriceTag({ activePhaseIndex }: { activePhaseIndex: any }) {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const unsubscribe = activePhaseIndex.on("change", (v: number) => setPhase(v));
    return () => unsubscribe();
  }, [activePhaseIndex]);

  const p = PHASES[phase] || PHASES[0];

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500"
      style={{
        backgroundColor: phase > 3 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        border: phase === 5 ? "1px solid var(--gold)" : "1px solid transparent",
        color: p.textColor
      }}
    >
      <TrendingUp size={16} />
      <span className="font-display text-sm font-semibold tracking-wide">{p.price}</span>
    </motion.div>
  );
}

function UIComplexity({ activePhaseIndex }: { activePhaseIndex: any }) {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const unsubscribe = activePhaseIndex.on("change", (v: number) => setPhase(v));
    return () => unsubscribe();
  }, [activePhaseIndex]);

  const p = PHASES[phase] || PHASES[0];

  if (p.uiComplexity < 3) return null;

  return (
    <div className="mt-8 flex justify-center gap-4 opacity-50 transition-all duration-500">
      <div className={`p-3 rounded-lg ${phase > 3 ? 'bg-white/10' : 'bg-black/5'}`}>
        <Globe size={phase > 4 ? 24 : 20} color={p.textColor} />
      </div>
      {p.uiComplexity > 3 && (
        <div className={`p-3 rounded-lg ${phase > 3 ? 'bg-white/10' : 'bg-black/5'}`}>
          <Layout size={phase > 4 ? 24 : 20} color={p.textColor} />
        </div>
      )}
      {p.uiComplexity > 4 && (
        <div className={`p-3 rounded-lg ${phase > 3 ? 'bg-white/10' : 'bg-black/5'}`}>
          <ShieldCheck size={phase > 4 ? 24 : 20} color={p.textColor} />
        </div>
      )}
    </div>
  );
}
