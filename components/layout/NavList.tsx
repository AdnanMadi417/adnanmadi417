import Link from "next/link";
import type { NavItem } from "@/constants/routes";

interface NavListProps {
  items: NavItem[];
  variant: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export default function NavList({ items, variant, onLinkClick }: NavListProps) {
  if (variant === "desktop") {
    return (
      <ul className="flex gap-8">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onLinkClick}
              className="relative pt-6.5 text-ink no-underline transition-colors duration-300 before:absolute before:top-0 before:left-0 before:h-0.75 before:w-full before:origin-left before:scale-x-0 before:rounded-xl before:bg-blue-600 before:transition-transform before:duration-350 before:content-[''] hover:text-blue-600 hover:before:scale-x-100"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-5">
      {items.map((item) => (
        <li key={item.href} className="border-b border-card pb-2 last:border-b-0">
          <Link href={item.href} onClick={onLinkClick} className="text-ink no-underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
