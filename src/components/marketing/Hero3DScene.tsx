"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { Layers, Sparkles, Box, Activity, Target, Workflow, Zap, Globe, Shield, BarChart3, Hexagon, Diamond } from "lucide-react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Deterministic positions for particles/nodes
   (avoids hydration mismatch from Math.random)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PARTICLES = [
  { top: 12, left: 18, z: -180, dur: 5, yRange: 15, delay: 0 },
  { top: 35, left: 72, z: 100, dur: 6, yRange: -20, delay: 0.5 },
  { top: 68, left: 25, z: -80, dur: 7, yRange: 25, delay: 1 },
  { top: 22, left: 55, z: 200, dur: 4.5, yRange: -18, delay: 1.5 },
  { top: 78, left: 60, z: -120, dur: 5.5, yRange: 22, delay: 0.3 },
  { top: 50, left: 85, z: 50, dur: 6.5, yRange: -12, delay: 0.8 },
  { top: 15, left: 40, z: 150, dur: 8, yRange: 30, delay: 0.2 },
  { top: 85, left: 45, z: -50, dur: 4, yRange: -25, delay: 1.2 },
  { top: 42, left: 15, z: 80, dur: 7.5, yRange: 18, delay: 0.6 },
  { top: 60, left: 78, z: -150, dur: 5, yRange: -15, delay: 0.9 },
  { top: 28, left: 90, z: 60, dur: 6, yRange: 20, delay: 1.8 },
  { top: 90, left: 30, z: -200, dur: 5.5, yRange: -28, delay: 0.4 },
];

const CONNECTION_LINES = [
  { x1: 150, y1: 200, x2: 500, y2: 150, delay: 0 },
  { x1: 300, y1: 100, x2: 650, y2: 350, delay: 0.5 },
  { x1: 100, y1: 400, x2: 700, y2: 300, delay: 1 },
  { x1: 400, y1: 50, x2: 200, y2: 500, delay: 1.5 },
  { x1: 550, y1: 200, x2: 350, y2: 600, delay: 2 },
];

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 35, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax layers
  const fgX = useTransform(smoothMouseX, [-0.5, 0.5], [90, -90]);
  const fgY = useTransform(smoothMouseY, [-0.5, 0.5], [90, -90]);
  const mgX = useTransform(smoothMouseX, [-0.5, 0.5], [50, -50]);
  const mgY = useTransform(smoothMouseY, [-0.5, 0.5], [50, -50]);
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [-25, 25]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [-25, 25]);
  const deepX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const deepY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  // 3D rotation
  const globalRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [18, -18]);
  const globalRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-22, 22]);

  const { scrollYProgress } = useScroll();
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-visible flex items-center justify-end pr-[5%] lg:pr-[10%]" style={{ perspective: '2000px' }}>
      
      {/* ═══════════════════════════════════════
          LAYER 0: DEEP BACKGROUND EFFECTS
          ═══════════════════════════════════════ */}
      
      {/* Dynamic Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          x: deepX, y: deepY,
          backgroundImage: `
            linear-gradient(to right, var(--sage) 1px, transparent 1px),
            linear-gradient(to bottom, var(--sage) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 70% 50%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 70% 50%, black 10%, transparent 60%)'
        }}
      />

      {/* Radial dot field underneath */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0"
        style={{
          x: bgX, y: bgY,
          backgroundImage: 'radial-gradient(circle at center, var(--gold) 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 60% 40%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 60% 40%, black 0%, transparent 70%)'
        }}
      />

      {/* Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[15%] w-[900px] h-[900px] bg-[var(--sage)]/30 rounded-full blur-[180px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute right-[25%] bottom-[5%] w-[700px] h-[700px] bg-[var(--gold)]/20 rounded-full blur-[140px]"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute right-[40%] top-[40%] w-[500px] h-[500px] bg-[var(--forest)]/20 rounded-full blur-[120px]"
      />


      {/* ═══════════════════════════════════════
          LAYER 1: CONNECTION LINES (SVG)
          ═══════════════════════════════════════ */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        <svg className="w-full h-full overflow-visible">
          {CONNECTION_LINES.map((line, i) => (
            <motion.line
              key={`conn-${i}`}
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              stroke="var(--sage)"
              strokeWidth="1"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0], strokeDashoffset: [0, -50] }}
              transition={{ 
                pathLength: { duration: 3, delay: line.delay, ease: "easeOut" },
                opacity: { duration: 6, delay: line.delay, repeat: Infinity },
                strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            />
          ))}

          {/* Animated Bezier Curves */}
          <motion.path
            d="M 100 400 C 300 100, 500 700, 700 200"
            fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="8 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -100] }}
            transition={{ pathLength: { duration: 3 }, strokeDashoffset: { duration: 12, repeat: Infinity, ease: "linear" } }}
          />
          <motion.path
            d="M 200 600 C 400 200, 600 800, 800 300"
            fill="none" stroke="var(--sage)" strokeWidth="1" strokeDasharray="4 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -80] }}
            transition={{ pathLength: { duration: 4, delay: 1 }, strokeDashoffset: { duration: 15, repeat: Infinity, ease: "linear" } }}
          />
          <motion.path
            d="M 50 200 Q 400 50, 750 500"
            fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="3 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: [0, -60] }}
            transition={{ pathLength: { duration: 3.5, delay: 2 }, strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </motion.div>


      {/* ═══════════════════════════════════════
          LAYER 2: MAIN 3D SCENE
          ═══════════════════════════════════════ */}
      <motion.div 
        style={{ 
          rotateX: globalRotateX,
          rotateY: globalRotateY,
          scale: scaleScroll,
          y: yScroll,
          opacity: opacityScroll,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full max-w-[950px] h-[950px] z-20 pointer-events-none"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
        >

        {/* ── 3D Orbital Rings ── */}
        <motion.div 
          style={{ x: deepX, y: deepY, transform: 'translateZ(-300px)' }} 
          className="absolute top-[15%] left-[5%] w-[700px] h-[700px] rounded-full border border-[var(--sage)]/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          style={{ x: bgX, y: bgY, transform: 'translateZ(-200px)' }} 
          className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full border border-[var(--sage)]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          style={{ x: bgX, y: bgY, transform: 'translateZ(-100px)' }} 
          className="absolute top-[25%] left-[15%] w-[500px] h-[500px] rounded-full border border-[var(--gold)]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          style={{ x: mgX, y: mgY, transform: 'translateZ(0px)' }} 
          className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full border border-[var(--gold)]/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />

        {/* ── Floating Particles / Nodes ── */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-[var(--gold)]/60' : i % 3 === 1 ? 'bg-[var(--sage)]/50' : 'bg-white/40'}`}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: i % 4 === 0 ? 6 : i % 4 === 1 ? 4 : i % 4 === 2 ? 8 : 3,
              height: i % 4 === 0 ? 6 : i % 4 === 1 ? 4 : i % 4 === 2 ? 8 : 3,
              filter: 'blur(1px)',
              transform: `translateZ(${p.z}px)`,
            }}
            animate={{
              y: [0, p.yRange, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* ── Geometric Shapes (floating diamonds/hexagons) ── */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(180px)' }}
          className="absolute top-[8%] left-[45%] opacity-20"
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Diamond className="w-16 h-16 text-[var(--gold)] stroke-1" />
        </motion.div>
        <motion.div
          style={{ x: bgX, y: bgY, transform: 'translateZ(-80px)' }}
          className="absolute bottom-[25%] left-[8%] opacity-15"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Hexagon className="w-20 h-20 text-[var(--sage)] stroke-1" />
        </motion.div>
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(300px)' }}
          className="absolute top-[65%] right-[5%] opacity-25"
          animate={{ rotate: 180, y: [0, -15, 0] }}
          transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Diamond className="w-10 h-10 text-[var(--gold)] stroke-1" />
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 1: BRAND STRATEGY
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(50px)' }}
          className="absolute left-0 lg:-left-[15%] top-[20%] w-64 bg-white/80 backdrop-blur-3xl rounded-3xl shadow-[0_40px_80px_rgba(39,51,44,0.12)] border border-white/60 p-8"
        >
          <motion.div animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <div className="flex justify-between items-center mb-8">
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-[9px] font-bold tracking-widest uppercase text-[var(--sage)] bg-[var(--sage)]/10 px-3 py-1 rounded-full border border-[var(--sage)]/20">Brand</div>
            </div>
            <div className="flex justify-center mb-6">
              <span className="font-display text-8xl text-[var(--text-primary)] leading-none tracking-tight" style={{ transform: 'translateZ(25px)' }}>Aa</span>
            </div>
            <div className="space-y-4 pt-4 border-t border-[var(--border-light)]">
              <div className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider mb-2">Palette</div>
              <div className="flex gap-2" style={{ transform: 'translateZ(15px)' }}>
                <motion.div className="w-8 h-8 rounded-full bg-[var(--forest)] shadow-md" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="w-8 h-8 rounded-full bg-[var(--sage)] shadow-md -ml-3" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
                <motion.div className="w-8 h-8 rounded-full bg-[var(--gold)] shadow-md -ml-3" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 2: DIGITAL INFRASTRUCTURE
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(280px)' }}
          className="absolute right-0 lg:right-[5%] bottom-[18%] w-[320px] bg-[var(--bg-forest)]/95 backdrop-blur-3xl rounded-3xl shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/10 p-2"
        >
          <motion.div animate={{ y: [12, -12, 12], rotateX: [4, -4, 4], rotateY: [-3, 3, -3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="w-full h-full border border-white/5 rounded-[22px] p-6 text-white" style={{ transform: 'translateZ(35px)' }}>
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <Workflow className="w-4 h-4 text-white/30" />
              </div>
              <div className="flex items-center gap-4 mb-6" style={{ transform: 'translateZ(25px)' }}>
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-[var(--gold)]/20 flex items-center justify-center border border-[var(--gold)]/30"
                  animate={{ boxShadow: ['0 0 0px rgba(193,167,119,0)', '0 0 20px rgba(193,167,119,0.3)', '0 0 0px rgba(193,167,119,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Layers className="w-7 h-7 text-[var(--gold)]" />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-white tracking-wide">Enterprise UX</div>
                  <div className="text-xs text-white/50 mt-1">Component System</div>
                </div>
              </div>
              <div className="space-y-3" style={{ transform: 'translateZ(12px)' }}>
                <div className="h-12 w-full bg-gradient-to-r from-[var(--gold)]/20 to-transparent rounded-lg border border-[var(--gold)]/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '400%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="h-16 w-full bg-white/5 rounded-lg p-3 flex gap-2">
                  <motion.div className="h-full w-1/3 bg-white/10 rounded" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="h-full w-2/3 bg-white/5 rounded" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 3: BUSINESS OUTCOMES
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(140px)' }}
          className="absolute right-[12%] top-[8%] w-80 bg-white/65 backdrop-blur-2xl rounded-3xl shadow-xl border border-white p-6"
        >
          <motion.div animate={{ y: [-8, 8, -8], rotateZ: [1, -1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
            <div className="flex justify-between items-center mb-6" style={{ transform: 'translateZ(25px)' }}>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[var(--sage)]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-muted)]">Conversion</span>
              </div>
              <motion.span 
                className="text-sm font-bold text-[var(--gold)] bg-[var(--gold)]/10 px-2 py-1 rounded-md"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >+340%</motion.span>
            </div>
            <div className="h-32 w-full border-b border-l border-[var(--sage)]/20 relative">
              <svg className="w-full h-full overflow-visible absolute inset-0 z-10" style={{ transform: 'translateZ(35px)' }}>
                <motion.path
                  d="M 0 100 Q 50 100, 100 60 T 200 40 T 300 -10"
                  fill="none" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                />
                {/* Pulse dot at end of curve */}
                <motion.circle
                  cx="300" cy="-10" r="5" fill="var(--sage)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 1], scale: [0, 1, 1] }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                />
                <motion.circle
                  cx="300" cy="-10" r="5" fill="var(--sage)"
                  animate={{ r: [5, 15, 5], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                />
              </svg>
              <svg className="w-full h-full overflow-visible absolute inset-0 z-0 opacity-20">
                <motion.path
                  d="M 0 100 Q 50 100, 100 60 T 200 40 T 300 -10 L 300 100 Z"
                  fill="url(#chart-gradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--sage)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 4: ARCHITECTURE PLATFORM
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: bgX, y: bgY, transform: 'translateZ(-60px)' }}
          className="absolute left-[28%] top-[42%] w-[350px] bg-[var(--bg-base)]/85 backdrop-blur-md rounded-2xl shadow-lg border border-[var(--sage)]/10 p-5"
        >
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <div className="flex items-center gap-4 border-b border-[var(--sage)]/10 pb-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--sage)]/10 flex items-center justify-center">
                <Box className="w-5 h-5 text-[var(--sage)]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">Architecture</div>
                <div className="text-[10px] text-[var(--text-muted)]">Headless System</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="bg-white rounded-lg p-3 border border-[var(--border-light)] shadow-sm"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Activity className="w-4 h-4 text-[var(--gold)] mb-2" />
                <div className="h-1.5 w-1/2 bg-[var(--border)] rounded mb-1" />
                <div className="h-1.5 w-3/4 bg-[var(--border)] rounded" />
              </motion.div>
              <motion.div 
                className="bg-white rounded-lg p-3 border border-[var(--border-light)] shadow-sm"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Layers className="w-4 h-4 text-[var(--sage)] mb-2" />
                <div className="h-1.5 w-2/3 bg-[var(--border)] rounded mb-1" />
                <div className="h-1.5 w-1/2 bg-[var(--border)] rounded" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 5: LIVE METRICS TICKER
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(200px)' }}
          className="absolute left-[5%] bottom-[30%] w-56 bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(39,51,44,0.1)] border border-white/50 p-5"
        >
          <motion.div animate={{ y: [-6, 6, -6], rotateZ: [1, -1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-8 h-8 rounded-lg bg-[var(--gold)]/15 flex items-center justify-center"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-[var(--gold)]" />
              </motion.div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Live</div>
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500 ml-auto"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <div className="space-y-3" style={{ transform: 'translateZ(15px)' }}>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Revenue</span>
                <motion.span 
                  className="text-xs font-bold text-[var(--sage)]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >↑ 24.8%</motion.span>
              </div>
              <div className="h-1.5 w-full bg-[var(--border-light)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[var(--sage)] to-[var(--gold)] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[var(--text-muted)] font-mono">CAC</span>
                <motion.span className="text-xs font-bold text-[var(--gold)]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>↓ 31.2%</motion.span>
              </div>
              <div className="h-1.5 w-full bg-[var(--border-light)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--sage)] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '58%' }}
                  transition={{ duration: 2.2, ease: "easeOut", delay: 1.5 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 6: GLOBAL REACH
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: deepX, y: deepY, transform: 'translateZ(-180px)' }}
          className="absolute right-[30%] bottom-[8%] w-44 bg-[var(--bg-forest)]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-4"
        >
          <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="flex items-center gap-2 mb-3 text-white/80">
              <Globe className="w-4 h-4 text-[var(--gold)]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Reach</span>
            </div>
            <div className="flex gap-2 mb-2" style={{ transform: 'translateZ(10px)' }}>
              {[85, 62, 45, 78, 55, 90, 40].map((h, i) => (
                <motion.div
                  key={`bar-${i}`}
                  className="w-3 bg-gradient-to-t from-[var(--gold)]/60 to-[var(--sage)]/60 rounded-sm"
                  initial={{ height: 0 }}
                  animate={{ height: h * 0.4 }}
                  transition={{ duration: 0.8, delay: 2 + i * 0.1, ease: "easeOut" }}
                />
              ))}
            </div>
            <div className="text-[9px] text-white/40 font-mono">7 markets active</div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 7: TRUST BADGE (tiny, floating)
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(100px)' }}
          className="absolute left-[20%] top-[5%] w-36 bg-white/50 backdrop-blur-xl rounded-xl shadow-md border border-white/40 p-3"
        >
          <motion.div animate={{ y: [-4, 4, -4], rotateZ: [-1, 1, -1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--sage)]" />
              <div>
                <div className="text-[9px] font-bold text-[var(--text-primary)] tracking-wide">Verified</div>
                <div className="text-[8px] text-[var(--text-muted)]">Strategic Partner</div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* ═══════════════════════════════════════
            SLAB 8: MINI BAR CHART
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(350px)' }}
          className="absolute right-[25%] top-[35%] w-40 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg border border-white/50 p-4"
        >
          <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}>
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-[var(--sage)]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Growth</span>
            </div>
            <div className="flex items-end gap-1.5 h-12" style={{ transform: 'translateZ(20px)' }}>
              {[30, 45, 38, 60, 52, 75, 68, 90].map((h, i) => (
                <motion.div
                  key={`growth-${i}`}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[var(--sage)]/80 to-[var(--sage)]/30"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 1.5 + i * 0.08, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}
