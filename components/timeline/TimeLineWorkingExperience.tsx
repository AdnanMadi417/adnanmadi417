import { EXPERIENCE } from "@/constants/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TimeLineWorkingExperience() {
  return (
    <section
      id="working-timeline"
      className="relative mx-auto w-full max-w-6xl px-5 py-[120px] max-md:py-20 max-[480px]:px-4 max-[480px]:py-15"
    >
      <div className="relative z-2">
        <div className="mx-auto mb-[50px] max-w-3xl max-md:mb-20">
          <SectionHeading
            eyebrow="Experience"
            headline="My Professional Journey"
            subtext="Building exceptional digital experiences that drive meaningful impact"
          />
        </div>
      </div>
      <div className="relative z-2">
        <ul className="relative m-0 list-none p-0 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,transparent_0%,var(--color-blue-600)_5%,var(--color-blue-600)_95%,transparent_100%)] before:content-[''] max-md:before:left-5 max-md:before:translate-x-0">
          {EXPERIENCE.map((step, index) => (
            <li
              key={index}
              className="relative mb-5 last:mb-0 before:absolute before:top-8 before:left-1/2 before:z-3 before:h-3 before:w-3 before:-translate-x-1/2 before:rounded-full before:border-4 before:border-white before:bg-blue-600 before:shadow-[0_0_0_1px_var(--color-blue-600)] before:transition-all before:duration-300 before:content-[''] hover:before:scale-[1.2] hover:before:bg-blue-800 hover:before:shadow-[0_0_0_1px_var(--color-blue-800),0_0_20px_rgba(3,72,209,0.3)] max-md:mb-20 max-md:before:left-5 max-md:before:translate-x-0"
            >
              <div
                className={`relative rounded-2xl border border-black/6 bg-card p-5 transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  index % 2 === 0 ? "left-[calc(50%+30px)]" : "left-[calc(50%-30px-45%)]"
                } w-[45%] max-md:left-12.5 max-md:w-[calc(100%-60px)] max-[480px]:left-10 max-[480px]:w-[calc(100%-50px)] max-[480px]:px-6 max-[480px]:py-8`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="mb-1.5 inline-block rounded-[20px] bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white">
                    {step.date}
                  </div>
                  <h3 className="mb-2 text-xl leading-[1.3] font-bold tracking-[-0.01em] text-ink max-md:text-[1.3rem] max-[480px]:text-[1.2rem]">
                    {step.title}
                  </h3>
                  <h4 className="mb-0 text-base leading-[1.4] font-medium text-muted">
                    {step.companyUrl ? (
                      <a
                        href={step.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 no-underline transition-colors duration-200 ease-in-out hover:text-blue-800 hover:underline"
                      >
                        {step.company}
                      </a>
                    ) : (
                      <span>{step.company}</span>
                    )}
                  </h4>
                </div>
                <div className="relative">
                  <p className="m-0 text-base leading-[1.6] text-ink max-[480px]:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
