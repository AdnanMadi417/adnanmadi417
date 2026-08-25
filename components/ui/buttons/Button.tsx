import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'outline-white'
  | 'ghost'
  | 'icon';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ring-2 ring-blue-600 ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 hover:ring-blue-700',
  secondary:
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ring-2 ring-slate-200 ring-offset-2 bg-white text-neutral-950 hover:bg-blue-600 hover:text-white hover:ring-blue-600',
  white:
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ring-2 ring-white ring-offset-2 ring-offset-neutral-950 bg-white text-neutral-950 hover:bg-white/90',
  'outline-white':
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out cursor-pointer ring-2 ring-white/60 ring-offset-2 ring-offset-transparent bg-white/10 text-white hover:bg-white/20 hover:ring-white',
  ghost:
    'cursor-pointer bg-transparent p-0 text-sm font-semibold text-blue-600 no-underline hover:underline',
  icon: 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-base font-medium text-slate-500 no-underline transition-all duration-300 ease-in-out hover:border-slate-300 hover:bg-slate-50 hover:text-neutral-950',
};

const isExternal = (href: string) =>
  href.startsWith('http') ||
  href.startsWith('//') ||
  href.startsWith('mailto:') ||
  href.startsWith('tel:') ||
  href.startsWith('https://wa.me');

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = ({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) => {
  const cls = `${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps, ButtonVariant };
