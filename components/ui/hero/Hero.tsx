import type { ReactNode } from 'react';

type HeroProps = {
  id?: string;
  badge?: string;
  headline: ReactNode;
  subheadline?: string;
  urgency?: string;
  actions?: ReactNode;
  footer?: ReactNode;
  className?: string;
  light?: boolean;
};

const Hero = ({
  id,
  badge,
  headline,
  subheadline,
  urgency,
  actions,
  footer,
  className = '',
  light = false,
}: HeroProps) => (
  <section id={id} className={`pb-20 pt-24 md:pb-28 md:pt-32 ${className}`}>
    <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
      {badge && (
        <div
          data-aos="fade-up"
          className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${
            light ? 'border-card bg-section' : 'border-white/20 bg-white/10'
          }`}
        >
          <span className={`text-sm font-medium ${light ? 'text-ink' : 'text-white'}`}>
            {badge}
          </span>
        </div>
      )}

      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className={`mx-auto max-w-4xl font-montserrat text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ${
          light ? 'text-ink' : 'text-white'
        }`}
      >
        {headline}
      </h1>

      {subheadline && (
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-muted' : 'text-white/75'
          }`}
        >
          {subheadline}
        </p>
      )}

      {actions && (
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {actions}
        </div>
      )}

      {urgency && (
        <div
          data-aos="fade"
          data-aos-delay="420"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5"
        >
          <span className="text-xs font-semibold text-orange-300">
            {urgency}
          </span>
        </div>
      )}

      {footer && (
        <div data-aos="fade" data-aos-delay="550" className="mt-10">
          {footer}
        </div>
      )}
    </div>
  </section>
);

export { Hero };
export type { HeroProps };
