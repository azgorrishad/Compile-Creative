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
    <section className="section-padding bg-[var(--bg-base)] border-t border-[var(--border)]" id="philosophy">
      <div className="section-container">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-6"
        >
          <span className="chapter-label">Meet The Strategist</span>
        </motion.div>

        {/* Editorial headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="editorial-headline mb-16 md:mb-24 max-w-4xl leading-tight"
        >
          Most agencies sell deliverables.<br />
          <span className="text-[var(--text-muted)] italic">I focus on perception.</span>
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
              className="text-2xl md:text-3xl leading-relaxed text-[var(--text-primary)] mb-8 font-heading italic"
            >
              "Because perception changes pricing. Pricing changes margins. Margins change businesses."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-lg leading-relaxed text-[var(--text-muted)] mb-12"
            >
              As a strategic advisor, my role is to identify where your brand is losing leverage and engineer systems that recapture it. We don't just build beautiful assets; we construct premium perception that justifies higher pricing, builds immediate trust, and positions you as the unquestionable leader in your category.
            </motion.p>

            {/* The Compile Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="border-t border-[var(--border)] pt-8"
            >
              <h3 className="text-sm text-[var(--text-primary)] mb-6 font-display font-semibold tracking-wide uppercase">
                The Compile Philosophy
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Decoration is not design.", desc: "Design without positioning is merely decoration. Every visual decision must aggressively support a business outcome." },
                  { title: "Perception precedes pricing.", desc: "Premium pricing begins with premium perception. If you look like a commodity, you will be priced like one." },
                  { title: "Strategy creates leverage.", desc: "Strategy is the deliberate architecture of an unfair advantage. If you are competing fairly, your strategy has failed." },
                  { title: "Systems compound.", desc: "One-off deliverables decay. Cohesive brand systems and architectures compound in value over time." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[var(--text-primary)] font-heading text-xl">
                      {item.title}
                    </span>
                    <span className="text-[var(--text-muted)] text-sm">
                      {item.desc}
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
              className="relative aspect-[3/4] w-full"
              style={{ y: imageY }}
            >
              <Image
                src="/founder-2.jpg"
                alt="Saleh Azgor Rishad - Strategic Advisor"
                fill
                className="object-cover contrast-[1.05] saturate-[0.85] sepia-[0.1] hover:saturate-100 hover:sepia-0 transition-all duration-[1s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p className="text-sm font-display font-semibold tracking-widest uppercase text-[var(--gold)]">
                Saleh Azgor Rishad
              </p>
              <p className="text-xs text-white/70 mt-2 tracking-wide uppercase font-display">
                Strategic Advisor · Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
