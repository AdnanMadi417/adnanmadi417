"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { DIFFERENTIATORS } from "@/constants/differentiators";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Differentiators() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 max-[768px]:px-4 max-[768px]:py-12">
      <div className="mx-auto mb-14 max-w-[640px] text-center">
        <SectionHeading
          eyebrow="Why Work With Me"
          headline="Built for Teams That Can't Afford to Guess"
          subtext="Anyone can write code that works in a demo. Here's what I bring once it's live and someone else's business depends on it."
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {DIFFERENTIATORS.map((d) => (
          <motion.div
            key={d.title}
            variants={item}
            className="group flex h-full flex-col rounded-2xl border border-card bg-white p-7 transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(3,72,209,0.1)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(3,72,209,0.1)] text-2xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <Icon icon={d.icon} />
            </div>
            <h3 className="mb-3 font-montserrat text-base leading-snug font-bold tracking-tight text-ink md:text-lg">
              {d.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{d.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
