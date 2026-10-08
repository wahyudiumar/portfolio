import Image from "next/image";
import Link from "next/link";

import { InstagramIcon } from "@icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LinkedinIcon";
import BackgroundThumbnail from "@public/img/bg.png";

export default function HomePage() {
  return (
    <main className="mt-40 mb-40 px-14">
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

      {/* Services */}
      <div className="mt-52">
        <h2 className="lg:text-3xl text-neutral-300 text-center font-bold">
          Services
        </h2>
        <p className="text-neutral-500 mx-auto mt-5 text-center w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          eveniet veritatis, itaque velit totam, repellat facere quae sint
          pariatur rem vel esse commodi? Molestiae, aut! Quidem, autem? Dicta
          quisquam rem deleniti aut quas, suscipit esse accusamus corporis
          facilis id eum?
        </p>

        {/* List Services */}
        <div className="grid grid-cols-3 gap-5 mt-16">
          {Array.from({ length: 5 }).map((_, testID) => (
            <div className="bg-neutral-900 w-fit flex flex-col p-8 rounded-xl items-center ">
              <div className="w-20 h-20 bg-neutral-700 rounded-full" />
              <h4 className="mt-2 font-bold text-orange-600 text-lg">
                App Design
              </h4>
              <p className="text-center mt-4 text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                nemo?
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
