import Image from "next/image";
import Link from "next/link";

import { Download, Snowflake } from "lucide-react";
import { InstagramIcon } from "@icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LinkedinIcon";
import { QuoteIcon } from "@components/icons/QuoteIcon";

import BackgroundThumbnail from "@public/img/bg.png";
import { IllustrationThumbnailHomeImage } from "@components/icons/IllustationThumbnailHomeImage";
import ProfilAboutMeImage from "@public/img/profil-aboutme.jpg";

export default function HomePage() {
  return (
    <main className="mb-40 px-36">
      {/* Thumbnail */}
      <div className="pt-40 md:flex items-center justify-between" id="home">
        {/* Name */}
        <div>
          <h5 className="text-neutral-400 text-lg font-semibold">Seorang,</h5>
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
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="lg:text-5xl text-orange-500 text-center font-bold">
            About Me
          </h2>
          <span className="text-center flex items-center justify-center gap-x-3 text-lg text-neutral-500">
            <Snowflake className="w-6 text-orange-400" /> Menjalani Setiap
            Tantangan Untuk Menuju Sebuah Kesuksesan
            <Snowflake className="w-6 text-orange-400" />
          </span>
        </div>

        <div className="mt-16 flex justify-between items-start">
          <div className="profile-aboutme-parent w-96 h-[30rem] shadow shadow-neutral-800 hover:shadow-transparent duration-500 relative border-4 hover:cursor-pointer rounded-lg border-neutral-600 group overflow-hidden ">
            <Image
              src={ProfilAboutMeImage}
              alt="Profil Portfolio"
              className="object-cover group-hover:scale-110 group-hover:rotate-3 duration-500 h-full absolute"
            />
            <div className="group-hover:bg-transparent bg-neutral-700/30 absolute z-10 w-full h-full duration-500" />
          </div>
          <div className="mt-3 w-[55%] ">
            <h1 className="text-5xl text-neutral-200 font-bold mb-8">
              <span className="block text-orange-600 mb-3">Hello, I'm</span>
              Wahyudi Umar
            </h1>
            <p className="text-neutral-500 text-lg text-justify">
              Saya adalah seorang Programmer Amatir yang berfokus pada
              pengembangan sebuah Aplikasi Berbasis Web di Bidang Front-End
              Developer. Saat ini, saya berfokus pada pengalaman saya untuk
              menciptakan sebuah aplikasi yang menarik dan selalu berupaya untuk
              memberikan solusi dan masukan terhadap proyek yang saya kerjakan.
            </p>

            <div className="my-6 border flex gap-x-1 items-center border-neutral-800 py-4 px-6 rounded-xl">
              <QuoteIcon className="w-6 -mt-4 text-neutral-600" />
              <span className="text-neutral-300 text-sm italic font-semibold">
                "Memanfaatkan AI sebagai alat bantu, bukan pengganti."
              </span>
            </div>

            <button className=" flex items-center gap-x-2 bg-orange-600 px-6 text-base py-2.5 rounded-md font-bold text-neutral-50">
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
