import { Icon } from "@iconify/react";
import { APPROACH_STEPS } from "@/constants/approach";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Approach() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-6xl px-8 py-20 text-center max-[768px]:px-4 max-[768px]:py-12"
    >
      <div className="mx-auto mb-12 max-w-[640px]">
        <SectionHeading
          eyebrow="Approach"
          headline="How I Work"
          subtext="Shipping fast doesn't mean skipping security, testing, or ownership of what's already in production."
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {APPROACH_STEPS.map((step) => (
          <div
            key={step.step}
            className="group relative flex flex-col items-start gap-3 rounded-2xl border border-card bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-[0_8px_28px_rgba(3,72,209,0.1)]"
            data-aos="fade-up"
            data-aos-delay={Number(step.step) * 50}
          >
            <span className="text-xs font-black text-ink opacity-15">
              {step.step}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(3,72,209,0.1)] text-2xl text-blue-600">
              <Icon icon={step.icon} />
            </div>
            <h3 className="text-base font-bold leading-tight text-ink">
              {step.title}
            </h3>
            <p className="text-sm leading-[1.65] text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
