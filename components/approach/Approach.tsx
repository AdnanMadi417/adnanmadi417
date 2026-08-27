"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import { APPROACH_STEPS } from "@/constants/approach";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Approach() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="approach"
      className="mx-auto max-w-6xl px-8 py-20 max-[768px]:px-4 max-[768px]:py-12"
    >
      <div className="mx-auto mb-20 max-w-[640px] text-center md:mb-28">
        <SectionHeading
          eyebrow="Approach"
          headline="How I Work"
          subtext="Shipping fast doesn't mean skipping security, testing, or ownership of what's already in production."
        />
      </div>

      <div ref={timelineRef} className="relative">
        <div className="absolute top-4 left-11 hidden h-[calc(100%-2rem)] w-px bg-card md:block">
          <motion.div
            style={{ scaleY: lineScaleY, originY: 0 }}
            className="h-full w-full bg-blue-600"
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:gap-12"
            >
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex items-center gap-5"
              >
                <span
                  className="shrink-0 font-montserrat text-5xl leading-none font-black text-transparent sm:text-6xl"
                  style={{ WebkitTextStroke: "1.5px rgba(29,29,31,0.18)" }}
                >
                  {step.step}
                </span>
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-blue-600 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <Icon icon={step.icon} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="flex flex-col justify-center"
              >
                <p className="mb-1 text-sm font-semibold text-muted">
                  {step.subtitle}
                </p>
                <h3 className="mb-4 font-montserrat text-2xl font-black tracking-tight text-ink uppercase">
                  {step.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {step.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + bi * 0.08,
                        ease: EASE,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                      <span className="text-base leading-relaxed text-muted">
                        <span className="font-bold text-ink">{bullet.bold}</span>
                        {bullet.rest}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
