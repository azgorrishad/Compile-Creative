"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  magnetism?: number;
}

export default function MagneticButton({ 
  children, 
  href, 
  onClick, 
  className = "btn-primary", 
  style,
  magnetism = 40 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Calculate movement based on magnetism strength
    const x = (middleX / width) * magnetism;
    const y = (middleY / height) * magnetism;
    
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const MotionWrapper = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: "inline-block", ...style }}
      className={`interactive ${className}`}
      onClick={onClick}
    >
      <motion.span
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return <Link href={href} style={{ textDecoration: "none" }}>{MotionWrapper}</Link>;
  }

  return MotionWrapper;
}
