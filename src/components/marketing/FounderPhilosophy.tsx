"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FounderPhilosophy() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className="section-padding bg-[var(--bg-base)]" id="philosophy">
      <div className="section-container">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-6"
        >
          <span className="chapter-label">The Foundation</span>
        </motion.div>

        {/* Editorial headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="editorial-headline mb-16 md:mb-24 max-w-3xl"
        >
          Why Compile Creative Exists.
        </motion.h2>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease }}
              className="text-lg leading-relaxed text-[var(--text-primary)] mb-8"
            >
              Most agencies deliver assets. A logo. A website. A brand guide
              that sits in a Google Drive folder and slowly gathers digital dust.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-lg leading-relaxed text-[var(--text-muted)] mb-10"
            >
              Most businesses don&apos;t need more assets. They need leverage.
              They need someone who understands that design is a strategic tool
              — not a production service. That positioning is the foundation
              of every visual decision. That systems compound while one-off
              deliverables decay.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="pull-quote mb-10"
            >
              Compile Creative exists to bridge strategy, design, systems,
              and growth — so every decision increases the value of your
              business.
            </motion.blockquote>

            {/* AI vs Expert — integrated as a subtle contrast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="border-t border-[var(--border)] pt-8"
            >
              <p className="text-sm text-[var(--text-muted)] mb-4 font-display font-semibold tracking-wide uppercase">
                The difference
              </p>
              <div className="space-y-3">
                {[
                  ["AI generates options.", "We make decisions."],
                  ["AI produces assets.", "We create positioning."],
                  ["AI follows prompts.", "We identify opportunities."],
                ].map(([ai, expert], i) => (
                  <div key={i} className="flex items-start gap-4 text-sm">
                    <span className="text-[var(--text-muted)] line-through decoration-[var(--border)] min-w-[180px]">
                      {ai}
                    </span>
                    <span className="text-[var(--text-primary)] font-medium">
                      {expert}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease }}
            className="order-1 lg:order-2 relative overflow-hidden rounded-xl"
          >
            <motion.div
              className="relative aspect-[4/5] w-full"
              style={{ y: imageY }}
            >
              <Image
                src="/founder-2.jpg"
                alt="Strategic thinking in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
              <p className="text-xs font-display font-semibold tracking-widest uppercase text-white/70">
                Saleh Azgor Rishad
              </p>
              <p className="text-[0.65rem] text-white/50 mt-1">
                Founder · Strategist · Creative Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
