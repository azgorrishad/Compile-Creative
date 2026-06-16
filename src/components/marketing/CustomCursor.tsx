"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  // Raw mouse coordinates for the dot (instant)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing ring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Hide native cursor globally
    // We only hide cursor on non-touch devices to ensure mobile stays clean
    if (window.matchMedia("(pointer: fine)").matches) {
      const style = document.createElement("style");
      style.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(style);

      const moveCursor = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        
        // Hide in hero to let Hero handle it
        if (target.closest('.hero-section')) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }

        const interactable = target.closest("a") || target.closest("button") || target.getAttribute("role") === "button";
        
        if (interactable) {
          setIsHovering(true);
          if (interactable.hasAttribute('data-cursor-text')) {
            setHoverText(interactable.getAttribute('data-cursor-text')!);
          } else {
            setHoverText(null);
          }
        } else {
          setIsHovering(false);
          setHoverText(null);
        }
      };

      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
        document.head.removeChild(style);
      };
    }
  }, [mouseX, mouseY]);

  if (!isMounted) return null;
  
  // Do not render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Trailing Ring (or expanded background) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center border border-white/50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 48,
          height: 48,
          opacity: isHidden ? 0 : (isHovering && !hoverText ? 0 : 0.5),
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? (hoverText ? 2.5 : 0) : 1,
          backgroundColor: hoverText ? "var(--gold)" : "rgba(0,0,0,0)",
          borderColor: hoverText ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)"
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.2 }
        }}
      >
        {hoverText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[0.4rem] font-display font-bold uppercase tracking-widest text-[var(--bg-forest)] pointer-events-none"
            style={{ transformOrigin: "center" }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>

      {/* Main Dot (instant) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-white mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? (hoverText ? 0 : 4) : 1,
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 400, damping: 25 },
        }}
      />
    </>
  );
}
