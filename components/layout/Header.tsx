"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useDisclosure } from "@/hooks/useDisclosure";
import { NAV_ITEMS, ROUTES } from "@/constants/routes";
import Button from "@/components/ui/Button";
import NavList from "./NavList";

export default function Header() {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useDisclosure();

  return (
    <header className="sticky top-0 z-50 animate-[header-slide-down_0.5s_ease-out_both] px-8 py-3 max-[640px]:px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/40 bg-white/85 px-3 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-[18px] transition-all duration-300">
        <div className="logo">
          <Link href={`${ROUTES.home}#landing`}>
            <Image
              src="/assets/imgs/adnanmadi417_logo.png"
              alt="Adnan Madi logo"
              width={150}
              height={50}
              className="h-12.5 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:block">
          <NavList items={NAV_ITEMS} variant="desktop" onLinkClick={closeMenu} />
        </nav>

        <div className="contact-btn-box hidden lg:block">
          <Button
            variant="primary"
            href="https://wa.me/+601170064361"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1.5 text-base"
          >
            Contact Me
          </Button>
        </div>

        <Button
          variant="icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden"
        >
          <Icon icon="uil:bars" />
        </Button>
      </div>

      {isMenuOpen && (
        <nav className="animate-[fade-in_0.3s_ease] border-t border-card bg-white px-8 py-4 lg:hidden">
          <NavList items={NAV_ITEMS} variant="mobile" onLinkClick={closeMenu} />
          <div className="mt-2 border-t border-card pt-4">
            <Button
              variant="ghost"
              href="https://wa.me/+601170064361"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
