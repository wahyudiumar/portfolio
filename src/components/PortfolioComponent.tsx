import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shadcn/Tabs";

import { dataPortfolio } from "@datas/dataPortfolio";
import { dataSkill } from "@datas/dataSkill";

import { ArrowRight, Code, Cpu, SquareArrowOutUpRight } from "lucide-react";

function PortfolioComponent() {
  return (
    <Tabs className="w-full md:w-[90%] mx-auto flex-col">
      <TabsList className="p-2 bg-neutral-800 w-full">
        <TabsTrigger
          value="projects"
          className="flex-col group text-neutral-400 hover:!text-neutral-200 text-base hover:bg-neutral-700 py-2 hover:data-[active]:text-neutral-200 data-[active]:text-neutral-200 data-[active]:bg-neutral-900"
        >
          <Code className="w-5 h-5 group-hover:scale-105 duration-200 group-hover:-rotate-6" />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="techstack"
          className="flex-col group text-neutral-400 hover:!text-neutral-200 text-base hover:bg-neutral-700 py-2 hover:data-[active]:text-neutral-200 data-[active]:text-neutral-200 data-[active]:bg-neutral-900"
        >
          <Cpu className="w-5 h-5 group-hover:scale-105 duration-200 group-hover:-rotate-6" />
          Tech Stack
        </TabsTrigger>
      </TabsList>

      <div className="md:px-5 mt-3">
        {/* Portfolio */}
        <TabsContent
          value="projects"
          className="grid md:grid-cols-2 gap-y-6 md:gap-4 text-neutral-200"
        >
          {dataPortfolio.map((portfolio, portfolioIndex) => (
            <motion.div
              key={portfolioIndex}
              className="flex flex-col bg-neutral-900 rounded-lg p-6 shadow"
              initial={{
                opacity: 0,
                y: 50,
                x: portfolioIndex % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-80 rounded-md">
                <Image
                  src={portfolio.images}
                  alt={portfolio.title}
                  className="object-fill rounded-md"
                  fill
                />
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-orange-500">
                  {portfolio.title}
                </h3>
                <p className="mt-2 text-justify text-neutral-400">
                  {portfolio.description}
                </p>
              </div>

              <div className="mt-8 flex justify-between">
                <Link
                  href={portfolio.url}
                  className="flex items-center gap-x-2 text-blue-400 hover:text-blue-300 font-semibold"
                  target="_blank"
                >
                  Live Demo <SquareArrowOutUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href=""
                  className="flex items-center gap-x-2 bg-neutral-800 px-3 py-1.5 rounded-md font-semibold hover:scale-105 duration-300 hover:bg-neutral-700"
                >
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </TabsContent>

        {/* Skills */}
        <TabsContent
          value="techstack"
          className="text-neutral-200 grid gap-5 md:gap-y-6 md:gap-x-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 "
        >
          {dataSkill.map((skill, skillIndex) => (
            <motion.div
              className="bg-neutral-800 py-6 rounded-xl group hover:scale-105 duration-300"
              key={`1${skillIndex}`}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-20 ">
                <Image
                  src={`/img/skills/${skill.logo}`}
                  alt={skill.title}
                  className="object-fill grayscale group-hover:grayscale-0 duration-300"
                  fill
                />
              </div>

              <h6 className="text-sm font-bold mt-2 text-center">
                {skill.title}
              </h6>
            </motion.div>
          ))}
        </TabsContent>
      </div>
    </Tabs>
  );
}

export { PortfolioComponent };
