import { useEffect, useState } from "react";
import { useWindowSize } from "@hooks/useWindowSize";
import { motion } from "motion/react";

import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

import { Menu, X } from "lucide-react";

function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const { resize } = useWindowSize();

  useEffect(() => {
    function navScrollTop() {
      if (window.scrollY >= 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", navScrollTop);
  });

  return (
    <header
      className={`flex  h-20 items-center justify-between w-full top-0 transition-colors z-50 ${resize > 768 ? "px-32 bg-transparent" : "!bg-neutral-950 px-10"} ${!isScroll ? "bg-transparent fixed" : "bg-neutral-950/40 fixed backdrop-blur-lg"}`}
    >
      <div>
        <h2 className="text-orange-400 font-bold text-xl">Wahyudi Umar</h2>
      </div>

      {resize > 768 && <NavbarDesktop />}

      {resize < 768 && (
        <button
          className={`text-neutral-50 duration-300 data-[open]:rotate-90 ${!openNav ? "rotate-90-" : ""}`}
          onClick={() => setOpenNav(!openNav)}
        >
          <motion.div
            animate={{ rotate: openNav ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {!openNav ? (
              <Menu className={`w-6 h-6  `} />
            ) : (
              <X className="w-6 h-6"></X>
            )}
          </motion.div>
        </button>
      )}

      {resize < 768 && <NavbarMobile isOpen={openNav} />}
    </header>
  );
}

export { NavbarComponent };
