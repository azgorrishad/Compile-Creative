"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Magnetic displacement (for snapping to buttons)
  // Spring physics for buttery smooth movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.3 };
  
  // The final cursor position combines the mouse position and the magnetic pull
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Hide native cursor globally
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const moveCursor = (e: MouseEvent) => {
      // Update base mouse position
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Hand over control to Hero mask if inside hero-section
      if (target.closest('.hero-section')) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // Detect links or buttons
      const interactable = target.closest("a") || target.closest("button") || target.getAttribute("role") === "button" || target.closest(".editorial-card");
      
      if (interactable) {
        setIsHovering(true);
        
        // Custom text labels based on data attribute or context
        if (interactable.hasAttribute('data-cursor-text')) {
          setHoverText(interactable.getAttribute('data-cursor-text')!);
        } else if (interactable.closest('.portfolio-row')) {
          setHoverText("Explore");
        } else {
          setHoverText(null);
        }

        // Magnetic effect logic (optional enhancement for gold-btn)
        if (interactable.classList.contains("gold-btn")) {
          const rect = interactable.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Add a subtle magnetic pull towards the center of the button
          const distanceX = e.clientX - centerX;
          const distanceY = e.clientY - centerY;
          
          // Only apply magnetic pull if close to center
          if (Math.abs(distanceX) < rect.width / 2 && Math.abs(distanceY) < rect.height / 2) {
            // Apply a fraction of the distance as a pull
            mouseX.set(centerX + distanceX * 0.2);
            mouseY.set(centerY + distanceY * 0.2);
          }
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
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: 40,
        height: 40,
        opacity: isHidden ? 0 : 1,
        // When not showing text, use difference mode. When showing text, use solid background so text is readable
        mixBlendMode: hoverText ? "normal" : "difference",
        backgroundColor: hoverText ? "var(--gold)" : "#FFFFFF"
      }}
      animate={{
        scale: isHovering ? (hoverText ? 2.5 : 3.5) : 1,
      }}
      transition={{ 
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 }
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
  );
}
