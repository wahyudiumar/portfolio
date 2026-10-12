import Image from "next/image";
import Link from "next/link";

import { Download } from "lucide-react";
import { InstagramIcon } from "@icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LinkedinIcon";
import BackgroundThumbnail from "@public/img/bg.png";
import { IllustrationThumbnailHomeImage } from "@components/icons/IllustationThumbnailHomeImage";

export default function HomePage() {
  return (
    <main className="mb-40 px-36">
      {/* Thumbnail */}
      <div className="pt-40 md:flex items-center justify-between" id="home">
        {/* Name */}
        <div>
          <h2 className="text-neutral-400 font-semibold">Seorang,</h2>
          <h1 className="text-neutral-200 text-6xl font-bold mt-4">
            Frontend
            <span className="text-orange-600 mt-3 block">Developer</span>
          </h1>

          <p className="mt-4 text-lg w-[30rem] text-neutral-500 font-semibold">
            Menciptakan Sebuah Website yang Spektakuler dan User Friendly untuk
            Solusi Digital.
          </p>

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

        {/* Illustation Image */}
        <IllustrationThumbnailHomeImage className="w-[30rem]" />
      </div>

      {/* About Me */}
      <div className="mt-14 pt-28" id="aboutme">
        <h2 className="lg:text-3xl text-neutral-300 text-center font-bold">
          About Me
        </h2>

        <div className="mt-16 flex justify-between items-start">
          <div className="w-2/5 h-[30rem] flex bg-neutral-400 " />
          <div className="mt-10 w-[55%] ">
            <p className="text-neutral-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reiciendis dolores cupiditate porro. Neque, natus sunt,
              consequatur est incidunt ducimus mollitia repudiandae earum
              commodi cum iusto tempora quod dolor, exercitationem facilis error
              assumenda nobis qui esse facere. Qui, voluptatem magni? Vitae
              fugit perspiciatis asperiores aliquam! Atque facere fuga, cum,
              minima dolor inventore nam iure eum sequi rem, quae voluptatem
              temporibus amet ut sed? Dicta repellat veniam debitis sunt
              molestiae quisquam repudiandae dignissimos! Necessitatibus natus
              sed, mollitia, porro atque incidunt provident, aspernatur facilis
              vitae dolores amet tempora quas. Quam libero expedita quis
              cupiditate maxime quae alias architecto autem, laudantium atque
              nobis, perferendis ut, consequatur placeat maiores eveniet beatae
              accusamus! Natus soluta facere, ut, ab nesciunt impedit illum ex
              aperiam doloribus, esse corrupti. Blanditiis fuga deleniti est
              accusantium nulla, aspernatur ipsum expedita animi atque doloribus
              nesciunt rem laudantium cum nemo repellat commodi aut consequatur
              earum voluptatem aperiam beatae dicta quaerat ipsam autem.
            </p>

            <button className="mt-5 flex items-center gap-x-2 bg-orange-600 px-6 text-sm py-2.5 rounded-md font-bold text-neutral-50">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Skill */}
    </main>
  );
}
