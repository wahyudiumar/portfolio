import { usePathname } from "next/navigation";
import Link from "next/link";

function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-x-10 text-base">
        <li>
          <Link
            href="/"
            className={`${pathname === "/" ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`${pathname === "/services" ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${pathname === "/about" ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`${pathname === "/portfolio" ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "text-orange-400 font-bold" : "text-neutral-500 font-normal"}`}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavbarDesktop };
