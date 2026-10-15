import { useEffect, useState } from "react";

import { NavbarDesktop } from "./NavbarDesktop";

function NavbarComponent() {
  const [isScroll, setScroll] = useState(false);

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
      className={`flex px-32 h-20 items-center justify-between w-full top-0 transition-colors z-50 ${!isScroll ? "bg-transparent fixed" : "bg-neutral-950/40 fixed backdrop-blur-lg"}`}
    >
      <div>
        <h2 className="text-orange-400 font-bold text-xl">Wahyudi Umar</h2>
      </div>

      <NavbarDesktop />
    </header>
  );
}

export { NavbarComponent };
