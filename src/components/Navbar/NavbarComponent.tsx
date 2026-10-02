import { NavbarDesktop } from "./NavbarDesktop";

function NavbarComponent() {
  return (
    <header className="flex px-14 h-20 items-center justify-between absolute w-full top-0">
      <div>
        <h2 className="text-orange-400 font-bold text-xl">Wahyudi Umar</h2>
      </div>

      <NavbarDesktop />

      <button className="bg-orange-500 hover:bg-orange-400 px-8 font-semibold py-1.5 rounded-md text-neutral-50">
        Hire me
      </button>
    </header>
  );
}

export { NavbarComponent };
