import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "solid" | "ghost" | "icon";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(135deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)] font-normal text-white transition-all duration-300 hover:-translate-y-0.5",
  solid:
    "inline-block rounded-full bg-blue-600 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800",
  ghost:
    "bg-transparent p-0 text-blue-600 no-underline hover:underline",
  icon: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted text-base font-medium text-muted no-underline transition-all duration-300 ease-in-out hover:border-card hover:bg-card hover:text-ink",
};

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${VARIANT_CLASSES[variant]} ${className}`;
  const content =
    variant === "primary" ? (
      <>
        {children}
        <span className="absolute top-0 -left-full h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] transition-[left] duration-500 group-hover:left-full"></span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
