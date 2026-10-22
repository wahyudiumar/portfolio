import Image from "next/image";
import Link from "next/link";

import { FormKontak } from "@components/contact/FormKontak";
import { PortfolioComponent } from "@components/PortfolioComponent";

import { Download, Snowflake } from "lucide-react";
import { InstagramIcon } from "@icons/InstagramIcon";
import { LinkedinIcon } from "@components/icons/LinkedinIcon";
import { QuoteIcon } from "@components/icons/QuoteIcon";

import BackgroundThumbnail from "@public/img/bg.png";
import { IllustrationThumbnailHomeImage } from "@components/icons/IllustationThumbnailHomeImage";
import ProfilAboutMeImage from "@public/img/profil-aboutme.jpg";

export default function HomePage() {
  return (
    <main className="px-10 md:px-36 relative">
      {/* Thumbnail */}
      <div
        className="pt-32 md:pt-40 flex flex-col md:flex-row items-center justify-center md:justify-between"
        id="home"
      >
        {/* Name */}
        <div>
          <h5 className="text-neutral-400 text-base md:text-lg font-semibold">
            Seorang,
          </h5>
          <h1 className="text-neutral-200 text-5xl md:text-6xl font-bold mt-4">
            Frontend
            <span className="text-orange-600 mt-3 block">Developer</span>
          </h1>

          <p className="mt-4 text-base md:text-lg md:w-[30rem] text-neutral-500 font-semibold">
            Menciptakan Sebuah Website yang Spektakuler dan User Friendly untuk
            Solusi Digital.
          </p>

          {/* Download Curriculum Vitae */}
          <div className="mt-10 flex items-center gap-x-5">
            <Link
              href="#portfolio"
              className="bg-transparent border border-neutral-400 rounded-lg font-semibold text-neutral-400 hover:bg-neutral-200 hover:text-neutral-800 duration-200 px-6 py-2 text-sm"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="bg-orange-600 hover:bg-orange-500 rounded-lg font-semibold text-neutral-100 duration-200 px-6 py-2 text-sm"
            >
              Contact
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-x-4">
            <Link
              href=""
              className="group hover:bg-orange-500 border border-neutral-700 rounded-lg bg-neutral-400/30 p-1.5 duration-300"
            >
              <InstagramIcon className="w-5 text-neutral-50" />
            </Link>
            <Link
              href=""
              className="group hover:bg-orange-500 border border-neutral-700 rounded-lg bg-neutral-400/30 p-1.5 duration-300"
            >
              <LinkedinIcon className="w-5 text-neutral-50" />
            </Link>
          </div>

          <div className="absolute -z-10 max-sm:w-72 max-sm:h-72 md:w-[25rem] md:h-[25rem] top-20">
            <Image src={BackgroundThumbnail} alt="Background Thumbnail" fill />
          </div>
        </div>

        {/* Illustation Image */}
        <IllustrationThumbnailHomeImage className="mt-10 md:mt-0 w-full md:w-[30rem]" />
      </div>

      {/* About Me */}
      <div className="mt-14 pt-8 md:pt-28" id="aboutme">
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="text-4xl lg:text-5xl text-orange-500 text-center font-bold">
            About Me
          </h2>
          <span className="text-center flex items-center justify-center gap-x-3 text-lg text-neutral-500">
            <Snowflake className="w-6 text-orange-400" /> Menjalani Setiap
            Tantangan Untuk Menuju Sebuah Kesuksesan
            <Snowflake className="w-6 text-orange-400" />
          </span>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-start">
          <div className="profile-aboutme-parent mx-auto md:mx-0 w-[20rem] md:w-96 h-[20rem] md:h-[30rem] shadow shadow-neutral-800 hover:shadow-transparent duration-500 relative border-4 hover:cursor-pointer rounded-lg border-neutral-600 group overflow-hidden ">
            <Image
              src={ProfilAboutMeImage}
              alt="Profil Portfolio"
              className="object-cover group-hover:scale-110 group-hover:rotate-3 duration-500 h-full absolute"
            />
            <div className="group-hover:bg-transparent bg-neutral-700/30 absolute z-10 w-full h-full duration-500" />
          </div>
          <div className="mt-6 md:mt-3 md:w-[55%] ">
            <h1 className="text-center md:text-start text-4xl md:text-5xl text-neutral-200 font-bold mb-8">
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

            <button className=" flex items-center justify-center md:justify-start w-full md:w-auto gap-x-2 bg-orange-600 px-6 text-base py-2.5 rounded-md font-bold text-neutral-50">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="mt-14 pt-20" id="portfolio">
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="lg:text-5xl text-orange-500 text-center font-bold">
            Portfolio Showcase
          </h2>
          <span className="text-center flex items-center justify-center gap-x-3 text-base text-neutral-500">
            Cari tahu perkembangan saya melalui berbagai proyek dan keahlian
            yang saya miliki. Setiap proyek dan keahlian yang saya miliki adalah
            pencapaian saya pribadi untuk perkembangan karir saya menjadi lebih
            baik dari sebelumnya.
          </span>
        </div>

        <div className="mt-10">
          <PortfolioComponent />
        </div>
      </div>

      {/* Contact */}
      <div className="mt-14 pt-20" id="contact">
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="lg:text-4xl text-orange-500 text-center font-bold">
            Hubungi Saya
          </h2>
          <span className="text-center flex items-center justify-center gap-x-3 text-base text-neutral-500">
            Jika mempunyai pertanyaan, hubungi saya di kolom bawah
          </span>
        </div>

        {/* Kolom Komentar */}
        <div className="w-2/3 mt-6 mx-auto">
          <FormKontak />
        </div>
      </div>

      <div className="bg-neutral-900 w-full absolute inset-x-0 mt-20 py-5 px-10 flex flex-col justify-center items-center">
        <p className="text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()}
          <span className="font-bold mx-1">Wahyudi Umar&trade;.</span> All
          Rights Reserved.
        </p>
      </div>
    </main>
  );
}
