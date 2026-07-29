import type { ReactNode } from "react";

export type BadgeVariant = "tag" | "pill";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  tag: "inline-block rounded bg-white/20 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-[10px]",
  pill: "inline-flex items-center gap-1.5 rounded-full bg-[rgba(0,0,0,0.55)] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-white backdrop-blur-[10px]",
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dotted?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "pill",
  dotted = false,
  className = "",
}: BadgeProps) {
  return (
    <div className={`${VARIANT_CLASSES[variant]} ${className}`}>
      {dotted && (
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-[badge-pulse_2.5s_infinite]"></span>
      )}
      {children}
    </div>
  );
}
