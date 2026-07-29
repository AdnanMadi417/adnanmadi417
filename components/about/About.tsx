import Image from "next/image";
import { ABOUT_ITEMS } from "@/constants/about";
import Badge from "@/components/ui/Badge";

export default function About() {
  return (
    <section id="about" className="w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative grid grid-cols-1 bg-[linear-gradient(135deg,#0348d1ff_0%,#023292ff_100%)] before:absolute before:top-0 before:right-0 before:h-full before:w-[40%] before:bg-white/5 before:[clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)] before:content-[''] lg:grid-cols-2">
          <div
            className="relative z-[2] flex flex-col items-start justify-center bg-transparent px-8 py-16 lg:px-16 lg:py-24"
            data-aos="fade-right"
          >
            <Badge variant="tag" className="mb-6">
              Education
            </Badge>
            <h1 className="mb-6 text-[clamp(3rem,8vw,5.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
              Academic
              <br />
              Journey
            </h1>
            <div className="mb-8 h-1.5 w-[120px] rounded-[3px] bg-white"></div>
          </div>

          <div
            className="relative z-[2] flex flex-col justify-center gap-10 bg-white px-8 py-16 lg:px-16 lg:py-24"
            data-aos="fade-left"
          >
            <div className="border-l-[5px] border-[#0348d1] bg-[#f8f9fa] p-10">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="m-0 text-2xl font-extrabold leading-[1.3] text-[#1a1a2e]">
                  Albukhary International University
                </h2>
                <span>2025</span>
              </div>
              <h3 className="m-0 mb-5 text-lg font-semibold text-[#4a5568]">
                Bachelor of Computer Science (Honours)
              </h3>
              <p className="m-0 text-base leading-[1.75] text-[#2d3748]">
                Graduated with a Bachelor of Computer Science (Honours). Built
                a strong foundation in software development and contributed
                to projects such as a Hostel Management System to improve
                administrative efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-white lg:grid-cols-2">
          <div
            className="relative z-[2] flex flex-col items-start justify-center bg-[#f8f9fa] px-8 py-16 lg:px-16 lg:py-24"
            data-aos="fade-right"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] -rotate-2 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-transform duration-500 ease hover:rotate-0 hover:scale-[1.02]">
              <Image
                src="/assets/imgs/adnan photo 3 .jpg"
                alt="Developer"
                fill
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
            </div>
          </div>

          <div
            className="relative z-[2] flex flex-col justify-center gap-10 bg-white px-8 py-16 lg:px-16 lg:py-24"
            data-aos="fade-left"
          >
            <div>
              <h1 className="mb-6 text-[clamp(3rem,8vw,5.5rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#1a1a2e]">
                About
                <br />
                Me
              </h1>
              <div className="mb-8 h-1.5 w-[120px] rounded-[3px] bg-[#0348d1]"></div>
            </div>

            <div className="grid gap-7">
              {ABOUT_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="relative border-l-4 border-[#0348d1] bg-[#f8f9fa] p-8 transition-all duration-300 hover:translate-x-2 hover:shadow-[-8px_8px_0_#0348d1ff]"
                >
                  <div className="absolute -top-4 left-6 text-5xl leading-none font-black text-[#1d1d1f] opacity-15">
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <p className="relative z-[1] m-0 text-base leading-[1.8] text-[#2d3748]">
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 bg-[#0348d1] p-8 leading-[1.7] text-white transition-transform duration-300 hover:-translate-y-1">
              My work focuses on building intelligent, full-stack platforms
              that simplify complex administrative processes and improve
              operational efficiency through automation and well-designed
              user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
