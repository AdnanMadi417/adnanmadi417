import { Icon } from "@iconify/react";
import { SKILLS } from "@/constants/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-350">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Expertise"
            headline="Technical Skills"
            subtext="Building modern, responsive, and high-performance applications — from frontend interfaces to backend services and databases — using contemporary technologies and scalable architecture."
          />
        </div>

        <div
          className="w-full cursor-pointer select-none overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex">
            <div className="flex animate-[ticker-scroll_40s_linear_infinite] will-change-transform hover:[animation-play-state:paused]">
              {[...SKILLS, ...SKILLS].map((skill, i) => (
                <div
                  key={`${skill.title}-${i}`}
                  className="group mx-[0.8rem] flex min-w-37.5 max-w-45 flex-col items-center justify-center rounded-xl border border-[#e5e5e7] bg-white/8 px-6 py-8 backdrop-blur-sm text-(--skill-color,#1d1d1f)"
                  style={
                    {
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="mb-3 text-5xl text-(--skill-color,#1d1d1f)">
                    <Icon icon={skill.icon} />
                  </div>
                  <div className="text-center text-base font-medium text-ink transition-colors duration-300 group-hover:text-blue-600">
                    {skill.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
