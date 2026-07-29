"use client";

import { useDisclosure } from "@/hooks/useDisclosure";
import Button from "@/components/ui/Button";
import CVPreviewModal from "./CVPreviewModal";

export default function Landing() {
  const { isOpen: isCvOpen, open: openCv, close: closeCv } = useDisclosure();

  return (
    <section
      id="landing"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-[mesh-move_20s_ease-in-out_infinite] [background-image:radial-gradient(circle_at_20%_50%,rgba(3,72,209,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(3,72,209,0.12)_0%,transparent_50%),radial-gradient(circle_at_40%_90%,rgba(2,50,146,0.06)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(3,72,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(3,72,209,0.03)_1px,transparent_1px)] [background-size:50px_50px]"></div>
      </div>

      <div className="relative z-10 grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <h1 className="flex flex-col gap-1 text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
            <span className="block opacity-0 animate-[slide-up_0.8s_ease-out_forwards] [animation-delay:0.1s]">
              Building modern, scalable
            </span>
            <span className="block bg-[linear-gradient(135deg,var(--color-blue-600)_0%,var(--color-blue-800)_50%,#011e58_100%)] bg-clip-text text-transparent opacity-0 [background-size:200%_auto] [animation-delay:0.3s,0.5s] animate-[slide-up_0.8s_ease-out_forwards,gradient-shift_3s_ease_infinite]">
              software solutions end-to-end
            </span>
          </h1>

          <p className="max-w-[540px] text-[clamp(1rem,2vw,1.25rem)] leading-[1.7] text-muted opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
            Hi, I&apos;m <strong className="font-semibold text-ink">Adnan Madi</strong>,
            a Software Engineer focused on building fast, scalable, and
            reliable applications across the full stack.
          </p>

          <p className="inline-flex flex-wrap gap-2 text-sm font-medium tracking-wide text-blue-600 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            React • Next.js • Node.js • Laravel • TypeScript • MySQL
          </p>

          <div className="flex w-full flex-wrap justify-center gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.7s_forwards] lg:justify-start">
            <Button variant="primary" onClick={openCv} className="px-8 py-4 text-base">
              Explore My Work
            </Button>
          </div>
        </div>

        <div className="relative order-first flex h-[400px] items-center justify-center sm:h-[500px] lg:order-none lg:h-[600px]">
          <div className="relative h-[340px] w-[260px] animate-[float_6s_ease-in-out_infinite] rounded-[30px] border border-[rgba(3,72,209,0.15)] bg-[linear-gradient(145deg,rgba(3,72,209,0.12)_0%,rgba(3,72,209,0.06)_100%)] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(3,72,209,0.1)] sm:h-[420px] sm:w-[320px] sm:p-5 lg:h-[480px] lg:w-[380px]">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,var(--color-card)_0%,var(--color-section)_100%)] p-5 before:absolute before:top-0 before:right-0 before:left-0 before:h-10 before:bg-[linear-gradient(180deg,rgba(3,72,209,0.05)_0%,transparent_100%)] before:content-[''] lg:p-8">
              <div className="flex flex-col gap-4 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
                <div className="h-3 w-full animate-[typing_2s_ease-in-out_infinite] rounded-md bg-[linear-gradient(90deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)]"></div>
                <div className="h-3 w-[60%] animate-[typing_2s_ease-in-out_infinite] rounded-md bg-[linear-gradient(90deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)] [animation-delay:0.3s]"></div>
                <div className="h-3 w-[80%] animate-[typing_2s_ease-in-out_infinite] rounded-md bg-[linear-gradient(90deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)] [animation-delay:0.6s]"></div>
                <div className="h-3 w-full animate-[typing_2s_ease-in-out_infinite] rounded-md bg-[linear-gradient(90deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)] [animation-delay:0.9s]"></div>
                <div className="h-3 w-[60%] animate-[typing_2s_ease-in-out_infinite] rounded-md bg-[linear-gradient(90deg,var(--color-blue-600)_0%,var(--color-blue-800)_100%)] [animation-delay:1.2s]"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 hidden md:block">
            <div className="absolute top-[10%] left-[5%] animate-[float_8s_ease-in-out_infinite] lg:left-[-5%]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#0348d1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#667eea" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute top-[60%] right-[5%] animate-[float_8s_ease-in-out_infinite] [animation-delay:1s] lg:right-[-8%]">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="25" fill="url(#grad2)" />
                <defs>
                  <linearGradient id="grad2" x1="0" y1="0" x2="50" y2="50">
                    <stop offset="0%" stopColor="#023292" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0348d1" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute bottom-[15%] left-[5%] animate-[float_8s_ease-in-out_infinite] [animation-delay:2s]">
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path
                  d="M17.5 0L35 17.5L17.5 35L0 17.5L17.5 0Z"
                  fill="url(#grad3)"
                />
                <defs>
                  <linearGradient id="grad3" x1="0" y1="0" x2="35" y2="35">
                    <stop offset="0%" stopColor="#0348d1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#023292" stopOpacity={1} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <CVPreviewModal open={isCvOpen} onClose={closeCv} />
    </section>
  );
}
