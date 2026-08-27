type PageHeroProps = {
  eyebrow: string;
  headline: string;
  description?: string;
};

export function PageHero({ eyebrow, headline, description }: PageHeroProps) {
  return (
    <section className="bg-ink pt-[calc(70px+3rem)] pb-16 md:pt-[calc(80px+4rem)] md:pb-20">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <span
          data-aos="fade-up"
          className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-white/80 uppercase"
        >
          {eyebrow}
        </span>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-4 max-w-3xl font-montserrat text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          {headline}
        </h1>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
