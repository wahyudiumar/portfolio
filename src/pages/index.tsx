import Image from "next/image";
import Link from "next/link";

import { InstagramIcon } from "@icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LinkedinIcon";
import BackgroundThumbnail from "@public/img/bg.png";

export default function HomePage() {
  return (
    <main className="mt-40 px-14">
      {/* Thumbnail */}
      <div className="md:flex items-center justify-around">
        {/* Name */}
        <div>
          <h2 className="text-neutral-400 font-semibold">Wahyudi Umar</h2>
          <h1 className="text-orange-600 text-4xl font-bold mt-4">
            Frontend Web Developer
          </h1>

          <div className="mt-6 flex items-center gap-x-4">
            <Link href="">
              <InstagramIcon className="w-10 p-2 border border-neutral-700 rounded-full bg-neutral-400/30 text-neutral-50" />
            </Link>
            <Link href="">
              <LinkedinIcon className="w-10 p-2 border border-neutral-700 rounded-full bg-neutral-400/30 text-neutral-50" />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-x-5">
            <button className="bg-orange-600 rounded-lg hover:bg-orange-700 duration-150 font-semibold text-neutral-50 px-6 py-2">
              Hire me
            </button>
            <button className="bg-transparent border border-neutral-400 rounded-lg font-semibold text-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 duration-200 px-6 py-2">
              Download CV
            </button>
          </div>

          <div className="absolute -z-10 w-[25rem] h-[25rem] top-20">
            <Image src={BackgroundThumbnail} alt="Background Thumbnail" fill />
          </div>
        </div>

        {/* Profile */}
        <div>
          <div className="bg-neutral-800 w-96 h-96 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
