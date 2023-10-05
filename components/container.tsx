import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TypeWriter from "@/components/typewriter";

import BOC from "../public/boc.jpeg";
import BCA from "../public/bca.png";
import Sukaido from "../public/sukaido.png";
import Jageo from "../public/jageo.png";
import Qiurio from "../public/qiurio.png";
import LastFM from "../public/last-fm.png";
import DesaPecatu from "../public/desa_pecatu.jpeg";
import PandaMe from "../public/pandame.png";
import Salamoal from "../public/salamoal.jpeg";
import Serviso from "../public/serviso.jpg";
import Salabite from "../public/salabite.png";

const experiences = [
  {
    title: "Application Developer Intern",
    company: "PT Bank Central Asia Tbk.",
    date: "09/2022 - 09/2023",
    logo: BCA,
  },
  {
    title: "Frontend Web Developer Intern",
    company: "BOC Indonesia",
    date: "02/2018 - 05/2018",
    logo: BOC,
  },
];

const projects = [
  {
    title: "Desa Pecatu",
    src: DesaPecatu,
  },
  {
    title: "Sukaido",
    src: Sukaido,
  },
  {
    title: "Qiurio",
    src: Qiurio,
  },
  {
    title: "LastFM",
    src: LastFM,
  },
  {
    title: "Salabite",
    src: Salabite,
  },
  {
    title: "Salamoal",
    src: Salamoal,
  },
  {
    title: "PandaMe",
    src: PandaMe,
  },
  {
    title: "Jageo",
    src: Jageo,
  },
  {
    title: "serviso.id",
    src: Serviso,
  },
  //  {
  //   title: "Qiurio Visuals",
  // description: "Created a portfolio website for an agency based in Bali",
  //  },
];

export default function Container() {
  return (
    <section className="p-4 w-full bg-transparent">
      <div className="flex flex-col justify-center">
        <div className="text-2xl md:text-7xl mt-2 text-black dark:text-white">
          <p className="tracking-tight inline-block">i build&nbsp;</p>
          <span className="font-black inline-block">
            <TypeWriter />
          </span>
        </div>

        <div className="mt-0.5">
          <p className="text-md leading-tight text-foreground/60">
            Passionate about the fusion of data science and web development, I
            bring a unique blend of skills and experiences to the table. With a
            proven track record in both fields, I have honed my abilities to
            turn data into insights and create engaging web experiences. Join me
            on a journey where data meets design, and technology transforms
            possibilities into realities.
          </p>
        </div>

        <div className="mt-7">
          <p className="uppercase italic font-black text-md text-foreground/50 opacity-60 md:tracking-tight">
            EXPERIENCES
          </p>
          <div className="mt-1 grid grid-cols-1 md:grid-cols-2">
            {experiences.map(({ title, logo, company, date }, index) => (
              <div key={index} className="mb-2 flex items-center justify-start">
                <div className="mr-4 bg-white rounded-full p-1 shadow-lg dark:shadow-gray-500/50">
                  <Image
                    src={logo}
                    alt={`${company} logo`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground/80 dark:text-white">
                    {title}
                  </p>
                  <p className="text-foreground/50 leading-tight">{company}</p>
                  <p className="text-foreground/50">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <p className="uppercase italic font-black text-md text-foreground/50 opacity-60 md:tracking-tight">
            PROJECTS
          </p>
          <div className="mt-1 relative overflow-x-auto">
            <div
              className="flex space-x-4"
              style={{ width: `${projects.length * 300}px` }}
            >
              {projects.map(({ title, description, src }) => (
                <div
                  key={title}
                  className="rounded-md bg-transparent w-[300px]"
                >
                  <Image
                    src={src}
                    alt={title}
                    className="w-auto h-auto rounded-lg object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
