import Link from "next/link";
import { motion } from "motion/react";

import { navLinks } from "@constants/navigation";

export function NavbarMobile({ isOpen = false }) {
  return (
    <motion.nav
      animate={{
        height: isOpen ? 170 : 0,
        display: isOpen ? "flex" : "none",
      }}
      transition={{ duration: 0.2 }}
      className={`fixed top-20 bg-neutral-950 w-full inset-x-0 overflow-hidden px-10 flex-col gap-y-4`}
    >
      {navLinks.map((items, itemsID) => (
        <Link href="" className="text-neutral-50" key={itemsID}>
          {items.name}
        </Link>
      ))}
    </motion.nav>
  );
}
