"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorytellingTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Statement 1: 0 to 0.33
  const op1 = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.33], [0, 1, 1, 0]);
  const sc1 = useTransform(scrollYProgress, [0, 0.33], [0.95, 1.05]);

  // Statement 2: 0.33 to 0.66
  const op2 = useTransform(scrollYProgress, [0.33, 0.43, 0.58, 0.66], [0, 1, 1, 0]);
  const sc2 = useTransform(scrollYProgress, [0.33, 0.66], [0.95, 1.05]);

  // Statement 3: 0.66 to 1
  const op3 = useTransform(scrollYProgress, [0.66, 0.76, 0.9, 1], [0, 1, 1, 0]);
  const sc3 = useTransform(scrollYProgress, [0.66, 1], [0.95, 1.05]);

  return (
    <section ref={containerRef} className="relative bg-[var(--bg-forest)]" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
        
        {/* Statement 1 */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ opacity: op1, scale: sc1 }}
        >
          <h2 className="font-heading text-[var(--text-inverse)]" style={{ fontSize: "clamp(2rem, 5vw, 5rem)", lineHeight: 1.1 }}>
            Most businesses don't have a<br />
            <span className="text-[var(--text-muted)] italic">marketing problem.</span>
          </h2>
        </motion.div>

        {/* Statement 2 */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ opacity: op2, scale: sc2 }}
        >
          <h2 className="font-heading text-[var(--gold)]" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1.1 }}>
            They have a<br />
            perception problem.
          </h2>
        </motion.div>

        {/* Statement 3 */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-center px-4"
          style={{ opacity: op3, scale: sc3 }}
        >
          <h2 className="font-heading text-[var(--text-inverse)]" style={{ fontSize: "clamp(2rem, 5vw, 5rem)", lineHeight: 1.1 }}>
            That's where we come in.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
