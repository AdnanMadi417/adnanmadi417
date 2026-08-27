"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useDisclosure } from "@/hooks/useDisclosure";
import type { FaqItem } from "@/constants/faq";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FaqAccordionItemProps {
  item: FaqItem;
}

export default function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const { isOpen, toggle } = useDisclosure();

  return (
    <div className="overflow-hidden rounded-2xl border border-card bg-white">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-base font-bold text-ink">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 text-2xl text-blue-600"
        >
          <Icon icon="mdi:chevron-down" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-[1.65] text-muted">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
