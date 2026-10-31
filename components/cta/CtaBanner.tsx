import { ROUTES } from "@/constants/routes";
import { EMAIL_LINK, WHATSAPP_LINK } from "@/constants/social";
import { Button } from "@/components/ui/buttons/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 text-center max-[768px]:px-4 max-[768px]:py-12">
      <SectionHeading
        eyebrow="Let's Talk"
        headline="Ready to Build Something Reliable Together?"
        subtext="Whether it's a full-time role or a freelance project, I'm open to hearing about it — reach out and let's talk through what you need."
      />

      <FadeIn delay={0.35}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={ROUTES.projects} variant="primary">
            View My Work
          </Button>
          <Button href={WHATSAPP_LINK} variant="secondary">
            Message Me on WhatsApp
          </Button>
          <Button href={EMAIL_LINK} variant="secondary">
            Email Me
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
