import { useEffect, useState } from "react";
import Link from "next/link";

import { navLinks } from "@constants/navigation";

export function NavbarDesktop() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((menu: { href: string }) => {
      const element = document.getElementById(menu.href);
      if (element) observer.observe(element);
    });
  }, [navLinks]);

  return (
    <nav>
      <ul className="flex items-center gap-x-10 text-base">
        {navLinks.map((item, itemIndex) => (
          <li key={`${itemIndex}${itemIndex + 1}`}>
            <Link
              href={`#${item.href}`}
              className={`${activeSection == item.href ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
