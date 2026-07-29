"use client";

import type { ReactNode } from "react";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollLock } from "@/hooks/useScrollLock";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  closeLabel?: string;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  closeLabel = "Close",
  className = "",
}: ModalProps) {
  useEscapeKey(open, onClose);
  useScrollLock(open);

  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[1000] flex h-screen w-screen items-center justify-center bg-black/80 animate-[fade-in_0.3s_ease_forwards]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-4/5 max-w-[800px] bg-ink p-[5px] opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.2)] animate-[slide-up_0.4s_ease_forwards] max-[1200px]:w-[90%] max-[768px]:w-[95%] max-[768px]:p-2 ${className}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-2.5 right-2.5 cursor-pointer border-none bg-transparent text-2xl font-bold text-[#333] transition-colors duration-300 hover:text-[#ff6b6b] max-md:text-[1.2rem]"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
