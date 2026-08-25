import { Icon } from "@iconify/react";
import { SOCIAL_LINKS } from "@/constants/social";
import { Button } from "@/components/ui/buttons/Button";

export default function Footer() {
  return (
    <footer
      data-aos="fade-up"
      className="border-t border-card bg-white px-4 py-6 text-ink max-[480px]:px-3.5"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 max-lg:flex-col max-lg:text-center">
        <p className="m-0 text-[0.8rem] whitespace-nowrap text-ink opacity-60">
          © 2026{" "}
          <a
            href="https://adnanmadi417.vercel.app"
            target="_self"
            className="text-inherit no-underline"
          >
            Adnan Madi
          </a>
          . All rights reserved.
        </p>

        <ul className="m-0 flex flex-wrap justify-center gap-6 p-0">
          {SOCIAL_LINKS.map((contact) => (
            <li key={contact.platformName}>
              <Button
                variant="icon"
                href={contact.platformAddress}
                target="_blank"
                rel="noopener noreferrer"
                className="max-[480px]:text-[0.9rem]"
              >
                <Icon
                  icon={contact.platformIcon}
                  className="text-muted max-[480px]:text-[1.1rem]"
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
