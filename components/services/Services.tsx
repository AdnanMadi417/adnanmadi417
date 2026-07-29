import { Icon } from "@iconify/react";
import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <div
      className="mx-auto max-w-6xl px-8 py-20 text-center max-[768px]:px-4 max-[768px]:py-12"
      id="services"
    >
      <div className="mx-auto mb-12 max-w-[580px]" data-aos="fade-up">
        <div className="mb-3 flex items-center justify-center">
          <h3 className="text-4xl font-bold tracking-tight text-ink">
            Services
          </h3>
        </div>
        <p className="text-base leading-[1.7] text-muted">
          I provide end-to-end web development services focused on
          performance, security, and user experience. My work combines clean
          design with scalable engineering to deliver real-world impact.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-5 max-[768px]:grid-cols-1">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col items-start rounded-2xl border border-card bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-[0_8px_28px_rgba(3,72,209,0.1)]"
            data-aos="fade-up"
            data-aos-delay={service.delay}
          >
            <div className="mb-3 flex w-full items-start gap-5">
              <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-[rgba(3,72,209,0.1)] text-2xl text-blue-600">
                <Icon icon={service.icon} />
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.65] text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
