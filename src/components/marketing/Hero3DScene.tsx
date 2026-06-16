"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const particles = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  x: Math.random() * 120 - 10,
  y: Math.random() * 120 - 10,
  z: Math.random() * 2000 - 1000,
  size: Math.random() * 4 + 2,
  parallaxSpeedX: (Math.random() - 0.5) * 150,
  parallaxSpeedY: (Math.random() - 0.5) * 150,
  opacity: Math.random() * 0.3 + 0.05,
  type: i % 4 === 0 ? 'plus' : i % 4 === 1 ? 'ring' : 'dot',
}));

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Global rotation based on mouse
  const globalRotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const globalRotateY = useTransform(smoothX, [-1, 1], [-10, 10]);

  // Parallax translation for individual layers
  const bgX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const bgY = useTransform(smoothY, [-1, 1], [-20, 20]);
  
  const mgX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const mgY = useTransform(smoothY, [-1, 1], [-40, 40]);
  
  const fgX = useTransform(smoothX, [-1, 1], [-70, 70]);
  const fgY = useTransform(smoothY, [-1, 1], [-70, 70]);

  // Scroll animations
  const scrollY = useMotionValue(0);
  const scaleScroll = useTransform(scrollY, [0, 500], [0.85, 0.7]);
  const opacityScroll = useTransform(scrollY, [0, 400], [1, 0]);
  const yScroll = useTransform(scrollY, [0, 500], [0, -100]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY, scrollY]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden flex items-center justify-center" style={{ perspective: '2000px' }}>
      
      {/* 3D Container - Scaled to 0.85 for balance */}
      <motion.div 
        style={{ 
          rotateX: globalRotateX,
          rotateY: globalRotateY,
          scale: scaleScroll,
          y: yScroll,
          opacity: opacityScroll,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full h-full"
      >
        
        {/* GRID BACKGROUND */}
        <div 
          className="absolute inset-[-20%] border border-[var(--sage)]/5 rounded-[40px]"
          style={{
            backgroundImage: `linear-gradient(var(--sage) 1px, transparent 1px), linear-gradient(90deg, var(--sage) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
            opacity: 0.05,
            transform: 'translateZ(-100px)'
          }}
        />

        {/* 3D PARTICLES SYSTEM */}
        {mounted && particles.map((p) => (
          <Particle key={p.id} p={p} smoothX={smoothX} smoothY={smoothY} />
        ))}

        {/* ═══════════════════════════════════════
            SLAB 1: SYSTEM GEOMETRY
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(50px)' }}
          className="absolute right-[15%] top-[20%] w-64 bg-white/80 backdrop-blur-3xl rounded-3xl shadow-[0_40px_80px_rgba(39,51,44,0.12)] border border-white/60 p-8"
        >
          <motion.div animate={{ y: [-10, 10, -10], rotateZ: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 border-[3px] border-[var(--bg-forest)] rounded-full border-t-transparent animate-spin" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-2 border-[2px] border-[var(--sage)] rounded-full border-b-transparent animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--gold)] rounded-full shadow-[0_0_10px_var(--gold)]" />
              </div>
            </div>
            <div className="h-1.5 w-1/2 bg-[var(--sage)]/20 rounded-full mx-auto mb-3" />
            <div className="h-1.5 w-1/3 bg-[var(--sage)]/10 rounded-full mx-auto" />
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            SLAB 2: ARCHITECTURE PLATFORM
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: bgX, y: bgY, transform: 'translateZ(-60px)' }}
          className="absolute right-[5%] top-[48%] w-[350px] bg-[var(--bg-base)]/85 backdrop-blur-md rounded-2xl shadow-lg border border-[var(--sage)]/10 p-5"
        >
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <div className="flex items-center gap-4 border-b border-[var(--sage)]/10 pb-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--sage)]/10 flex items-center justify-center">
                <div className="w-4 h-4 bg-[var(--sage)] rounded-sm opacity-60" />
              </div>
              <div>
                <div className="text-[0.65rem] font-bold tracking-widest text-[var(--sage)] uppercase mb-1">Architecture</div>
                <div className="text-sm font-medium text-[var(--bg-forest)]">Headless System</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/50">
                <div className="h-2 w-16 bg-[var(--sage)]/20 rounded" />
                <div className="h-2 w-8 bg-[var(--sage)]/40 rounded" />
              </div>
              <div className="flex justify-between items-center bg-white/40 p-3 rounded-lg border border-white/50">
                <div className="h-2 w-20 bg-[var(--sage)]/20 rounded" />
                <div className="h-2 w-10 bg-[var(--sage)]/40 rounded" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            SLAB 3: LIVE METRICS TICKER
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(200px)' }}
          className="absolute right-[25%] bottom-[25%] w-56 bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(39,51,44,0.1)] border border-white/50 p-5"
        >
          <motion.div animate={{ y: [-6, 6, -6], rotateZ: [1, -1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 rounded-md bg-[var(--gold)]/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-[var(--gold)] rounded-sm" />
              </div>
              <div className="text-[0.65rem] font-bold tracking-widest text-[var(--bg-forest)] uppercase flex-1">Live</div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-[var(--text-muted)]">Revenue</span>
                  <span className="font-bold text-[var(--bg-forest)]">↑ 24.8%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--sage)]/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "30%" }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="h-full bg-[var(--sage)]"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-[var(--text-muted)]">CAC</span>
                  <span className="font-bold text-[var(--gold)]">↓ 31.2%</span>
                </div>
                <div className="h-1.5 w-full bg-[var(--sage)]/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "80%" }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
                    className="h-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            SLAB 4: TRUST BADGE
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(100px)' }}
          className="absolute right-[35%] top-[10%] w-36 bg-white/50 backdrop-blur-xl rounded-xl shadow-md border border-white/40 p-3"
        >
          <motion.div animate={{ y: [-4, 4, -4], rotateZ: [-1, 1, -1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--bg-forest)] flex items-center justify-center text-white text-[10px] font-bold">C</div>
              <div className="h-1.5 w-12 bg-[var(--sage)]/30 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            PERIPHERAL OBJECT 1: TOP LEFT WIREFRAME
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: bgX, y: bgY, transform: 'translateZ(-200px)' }}
          className="absolute left-[5%] top-[15%] w-32 h-32 opacity-15"
        >
          <motion.div animate={{ rotateX: 360, rotateY: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0 border border-[var(--bg-forest)] rounded-full" style={{ transform: 'rotateX(0deg)' }} />
            <div className="absolute inset-0 border border-[var(--bg-forest)] rounded-full" style={{ transform: 'rotateX(45deg)' }} />
            <div className="absolute inset-0 border border-[var(--bg-forest)] rounded-full" style={{ transform: 'rotateX(90deg)' }} />
            <div className="absolute inset-0 border border-[var(--bg-forest)] rounded-full" style={{ transform: 'rotateX(135deg)' }} />
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            PERIPHERAL OBJECT 2: FAR RIGHT GLASS SPHERE
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: fgX, y: fgY, transform: 'translateZ(400px)' }}
          className="absolute -right-[5%] top-[30%] w-40 h-40 opacity-70"
        >
          <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-white/5 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-white/30" />
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            PERIPHERAL OBJECT 3: BOTTOM LEFT ABSTRACT
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: mgX, y: mgY, transform: 'translateZ(-50px)' }}
          className="absolute left-[10%] bottom-[20%] w-48 h-48 opacity-20"
        >
          <motion.div animate={{ rotateZ: 360, scale: [1, 1.05, 1] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--sage)]" fill="currentColor">
              <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            PERIPHERAL OBJECT 4: BOTTOM RIGHT CARD
            ═══════════════════════════════════════ */}
        <motion.div
          style={{ x: bgX, y: bgY, transform: 'translateZ(-150px)' }}
          className="absolute right-[10%] bottom-[5%] w-32 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 p-4 opacity-70"
        >
          <motion.div animate={{ y: [-8, 8, -8], rotateZ: [2, -2, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="h-1.5 w-1/2 bg-[var(--sage)]/30 rounded-full mb-3" />
            <div className="h-1.5 w-full bg-[var(--sage)]/20 rounded-full mb-2" />
            <div className="h-1.5 w-3/4 bg-[var(--sage)]/20 rounded-full" />
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

function Particle({ p, smoothX, smoothY }: { p: any, smoothX: any, smoothY: any }) {
  const px = useTransform(smoothX, [-1, 1], [-p.parallaxSpeedX, p.parallaxSpeedX]);
  const py = useTransform(smoothY, [-1, 1], [-p.parallaxSpeedY, p.parallaxSpeedY]);
  
  return (
    <motion.div
      style={{ x: px, y: py, transform: `translateZ(${p.z}px)` }}
      className="absolute pointer-events-none"
      initial={{ left: `${p.x}%`, top: `${p.y}%`, opacity: p.opacity }}
    >
      <motion.div 
        animate={{ 
          y: [0, -40, 0], 
          scale: [1, 1.4, 1],
          rotateZ: p.type === 'plus' ? [0, 180, 360] : [0, 0, 0] 
        }} 
        transition={{ 
          duration: 3 + Math.random() * 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: Math.random() * 2 
        }}
      >
        {p.type === 'dot' && (
          <div style={{ width: p.size, height: p.size }} className="bg-[var(--sage)] rounded-full shadow-[0_0_12px_var(--sage)]" />
        )}
        {p.type === 'ring' && (
          <div style={{ width: p.size * 1.5, height: p.size * 1.5 }} className="border-[1.5px] border-[var(--gold)] rounded-full opacity-80" />
        )}
        {p.type === 'plus' && (
          <div className="relative text-[var(--sage)] opacity-60 font-light" style={{ fontSize: p.size * 2, lineHeight: 1 }}>+</div>
        )}
      </motion.div>
    </motion.div>
  );
}

