import { FAQ_ITEMS } from "@/constants/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import FaqAccordionItem from "./FaqAccordionItem";

export default function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl px-8 py-20 text-center max-[768px]:px-4 max-[768px]:py-12"
    >
      <div className="mx-auto mb-12">
        <SectionHeading eyebrow="FAQ" headline="Common Questions" />
      </div>

      <div className="flex flex-col gap-4 text-left" data-aos="fade-up">
        {FAQ_ITEMS.map((item) => (
          <FaqAccordionItem key={item.question} item={item} />
        ))}
      </div>
    </section>
  );
}
