"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { STATS } from "@/constants/stats";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 max-[768px]:px-4 max-[768px]:py-12">
      <div className="mb-14 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-card bg-white px-4 py-2 text-xs font-semibold text-muted"
        >
          <Icon icon="mdi:chart-bar" />
          By the Numbers
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          className="font-montserrat text-4xl font-bold tracking-tight text-ink"
        >
          Real Numbers From Real Work
        </motion.h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            className={
              stat.filled
                ? "rounded-2xl bg-ink p-8"
                : "rounded-2xl border border-card bg-white p-8"
            }
          >
            <p
              className={`text-5xl leading-none font-bold ${stat.filled ? "text-white" : "text-ink"}`}
            >
              {stat.arrow && <span className="mr-0.5">↑</span>}
              {stat.value}
            </p>
            <p
              className={`mt-4 text-sm leading-relaxed ${stat.filled ? "text-white/75" : "text-muted"}`}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
