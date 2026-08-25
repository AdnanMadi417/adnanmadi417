type ReusableHeroProps = {
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  description?: string;
};

const ReusableHero = ({
  eyebrow,
  headline,
  headlineAccent,
  description,
}: ReusableHeroProps) => (
  <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-[calc(70px+2.5rem)] md:pb-20 md:pt-[calc(80px+3.5rem)]">
    {/* Radial glow */}
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 animate-glow-pulse rounded-full blur-[120px]"
      style={{
        background: 'radial-gradient(ellipse, #1370e2 0%, transparent 70%)',
      }}
    />

    {/* Line grid */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
      {eyebrow && (
        <span
          data-aos="fade-up"
          className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm"
        >
          {eyebrow}
        </span>
      )}

      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="font-montserrat text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
      >
        {headline}
        {headlineAccent && (
          <>
            {' '}
            <span className="text-white/60">{headlineAccent}</span>
          </>
        )}
      </h1>

      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 md:mt-8 md:text-lg"
        >
          {description}
        </p>
      )}
    </div>
  </section>
);

export { ReusableHero };
export type { ReusableHeroProps };
