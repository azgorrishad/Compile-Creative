"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(16, duration / end);
      
      const timer = setInterval(() => {
        start += Math.max(1, Math.ceil(end / (duration / 16)));
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function TrustSignals() {
  const stats = [
    { label: "Revenue Generated", value: 12, prefix: "$", suffix: "M+" },
    { label: "Projects Completed", value: 40, suffix: "+" },
    { label: "Systems Built", value: 200, suffix: "+" },
    { label: "Industries Served", value: 12, suffix: "+" },
    { label: "Countries Reached", value: 15, suffix: "+" }
  ];

  return (
    <section className="py-20 border-b border-[var(--border)] bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left relative w-full md:w-auto"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[var(--sage)] mb-3">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              <p className="font-mono text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">{stat.label}</p>
              
              {/* Vertical Divider (Hidden on last item and mobile) */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[var(--border)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
