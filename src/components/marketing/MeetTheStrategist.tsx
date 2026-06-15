"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const timelineEntries = [
  {
    year: "2019",
    description:
      "Started questioning why most brand agencies deliver assets instead of outcomes.",
  },
  {
    year: "2021",
    description:
      "Led the first brand transformation that doubled a client's perceived value in 90 days.",
  },
  {
    year: "2023",
    description:
      "Founded Compile Creative to bridge the gap between strategy and design.",
  },
  {
    year: "2025",
    description:
      "The Compile Method crystallized into a repeatable system for building premium brands.",
  },
];

export default function MeetTheStrategist() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="strategist"
      ref={sectionRef}
      className="relative bg-[var(--bg-forest)] py-28 md:py-40 overflow-hidden"
    >
      {/* Subtle radial gradient for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(75,99,85,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Chapter Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="chapter-label text-[var(--gold)] mb-16 block"
        >
          Meet The Strategist
        </motion.span>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* LEFT COLUMN — Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full overflow-hidden rounded-[1rem]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <motion.div
                ref={imageRef}
                className="absolute inset-[-8%] w-[116%] h-[116%]"
                style={{ y: imageY }}
              >
                <Image
                  src="/founder-1.jpg"
                  alt="Saleh Azgor Rishad — Founder & Creative Director of Compile Creative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </motion.div>

              {/* Subtle bottom vignette over image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(39,51,44,0.35) 0%, transparent 40%)",
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Quote + Name + Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            {/* Signature Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-l-[3px] border-[var(--gold)] pl-6 md:pl-8 mb-10"
            >
              <p
                className="font-heading italic text-[var(--text-inverse)] leading-snug"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                }}
              >
                &lsquo;Most brands don&rsquo;t have a design problem. They have
                a perception problem.&rsquo;
              </p>
            </motion.blockquote>

            {/* Founder Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-14 pl-6 md:pl-8"
            >
              <h3 className="font-display text-lg md:text-xl font-semibold text-[var(--text-inverse)] tracking-wide">
                Saleh Azgor Rishad
              </h3>
              <p className="text-[var(--text-muted)] text-sm mt-1 tracking-wide">
                Founder &amp; Creative Director
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6 md:pl-8">
              {/* Vertical connecting line */}
              <div
                className="absolute top-2 bottom-2 left-[calc(1.5rem+5px)] md:left-[calc(2rem+5px)] w-px"
                style={{ backgroundColor: "var(--border-light)" }}
              />

              <div className="flex flex-col gap-10">
                {timelineEntries.map((entry, i) => (
                  <motion.div
                    key={entry.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Dot on timeline */}
                    <div className="relative flex-shrink-0 flex items-center justify-center">
                      <span
                        className="block w-[11px] h-[11px] rounded-full relative z-10"
                        style={{ backgroundColor: "var(--sage)" }}
                      />
                    </div>

                    {/* Year + Description */}
                    <div className="flex-1 -mt-1">
                      <span
                        className="font-heading font-semibold block mb-1"
                        style={{
                          color: "var(--gold)",
                          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                        }}
                      >
                        {entry.year}
                      </span>
                      <p className="text-[var(--text-inverse)] text-[0.95rem] leading-relaxed opacity-85">
                        {entry.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
