import { useRouter } from "next/router";
import Image from "next/image";

import { dataPortfolio } from "@datas/dataPortfolio";

import { ArrowLeft, Box, SquareArrowOutUpRight } from "lucide-react";

export default function ProjectDetail() {
  const router = useRouter();
  const { title } = router.query;

  //   Waiting
  if (!router.isReady) {
    return <div className="text-neutral-50">Loading</div>;
  }

  const project = dataPortfolio.find((item) => item.title === title);

  return (
    <main className="px-10 lg:px-36 mt-20 my-8">
      <div>
        <button
          className="text-neutral-200 font-semibold flex items-center gap-x-2 px-4 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-900"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-y-10 gap-x-6">
        <div>
          <h1 className=" text-3xl md:text-4xl font-bold text-orange-500">
            {project?.title}
          </h1>
          <p className="my-6 md:my-10 md:text-lg text-neutral-400">
            {project?.description}
          </p>

          <div>
            <h4 className="text-neutral-400 text-xl md:text-2xl font-bold">
              Teknologi Digunakan
            </h4>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              {project?.tech.map((item, itemIndex) => (
                <div
                  key={`${item.length}${itemIndex}`}
                  className="flex items-center text-neutral-400 bg-neutral-800 w-fit px-4 py-2 gap-x-2 rounded-lg"
                >
                  <Box className="w-4 h-4" />
                  <h5 className="text-sm font-semibold">{item}</h5>
                </div>
              ))}
            </div>

            <div className="flex items-center flex-wrap text-sm md:text-base gap-y-4 gap-x-4 md:gap-x-8 mt-8">
              <button className="text-neutral-50 flex items-center text-center gap-x-3 bg-neutral-800 rounded-lg px-4 py-3 hover:bg-neutral-900 transition-colors">
                <SquareArrowOutUpRight className="w-5 h-5" />
                Lihat Demo
              </button>
              <button className="text-neutral-50 flex items-center text-center gap-x-3 bg-neutral-800 rounded-lg px-8 py-3 hover:bg-neutral-900 transition-colors">
                <SquareArrowOutUpRight className="w-5 h-5" />
                Github
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-md">
          <Image
            src={`${project?.images}`}
            alt={`${project?.title}`}
            fill
            className="rounded-xl object-fill"
          />
        </div>
      </div>
    </main>
  );
}
