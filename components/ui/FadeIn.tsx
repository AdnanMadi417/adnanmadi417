import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
};

const AOS_DIRECTION: Record<NonNullable<FadeInProps['direction']>, string> = {
  up: 'fade-up',
  left: 'fade-left',
  right: 'fade-right',
  none: 'fade',
};

const FadeIn = ({ children, delay = 0, className, direction = 'up' }: FadeInProps) => (
  <div
    data-aos={AOS_DIRECTION[direction]}
    data-aos-delay={Math.round(delay * 1000)}
    className={className}
  >
    {children}
  </div>
);

export { FadeIn };
