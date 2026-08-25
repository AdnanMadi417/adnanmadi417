"use client";

import { Icon } from "@iconify/react";
import { useDisclosure } from "@/hooks/useDisclosure";
import type { FaqItem } from "@/constants/faq";

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
        <Icon
          icon="mdi:chevron-down"
          className={`shrink-0 text-2xl text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <p className="animate-[fade-in_0.3s_ease] px-6 pb-6 text-sm leading-[1.65] text-muted">
          {item.answer}
        </p>
      )}
    </div>
  );
}
