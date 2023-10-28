import Image from "next/image";

import TypeWriter from "@/components/typewriter";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import BCA from "../public/bca.png";
import BOC from "../public/boc.jpeg";
import DesaPecatu from "../public/desa_pecatu.jpeg";
import Jageo from "../public/jageo.png";
import LastFM from "../public/last-fm.png";
import PandaMe from "../public/pandame.png";
import Qiurio from "../public/qiurio.png";
import Salabite from "../public/salabite.png";
import Salamoal from "../public/salamoal.jpeg";
import Serviso from "../public/serviso.jpg";
import Sukaido from "../public/sukaido.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const publications = [
  {
    title:
      "A Recognizing Technique Specific Disease on a Chest X-Ray with Support for Image Clarity and Deep Learning",
    authors: ["Roderik Mogot", "Verdiant Jonathan Kusuma"],
    year: 2023,
    tools: ["Python", "TensorFlow", "Matplotlib", "Numpy", "Pandas"],
  },
  {
    title:
      "Wick System Automation Method on Maintenance  Hydroponic Plant based Arduino",
    authors: ["Yovanka Davincy Setiawan", "Bryan Ghilchrist", "Roderik Mogot"],
    year: 2022,
    tools: ["C", "Arduino"],
  },
];

const experiences = [
  {
    title: "Application Developer Intern",
    company: "PT Bank Central Asia Tbk.",
    date: "09/2022 - 09/2023",
    logo: BCA,
    tools: [
      "Microfrontend",
      "Microservices",
      "CI/CD",
      "SQL",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "Frontend Web Developer Intern",
    company: "BOC Indonesia",
    date: "02/2018 - 05/2018",
    logo: BOC,
    tools: ["WordPress"],
  },
];

const projects = [
  {
    title: "Kurniawan Gadget",
    src: DesaPecatu,
    tools: ["React.js", "Tailwind CSS", "Firebase", "Vercel"],
    url: "https://kurniawangadget.com",
    description: "An electronics e-commerce platform.",
  },
  {
    title: "Desa Pecatu",
    src: DesaPecatu,
    tools: ["CodeIgniter", "MariaDB"],
    url: "https://desapecatu.id",
    description: "Desa Pecatu's information system.",
  },
  {
    title: "Sukaido",
    src: Sukaido,
    tools: ["React.js", "Tailwind CSS", "Node.js"],
    url: "#",
    description:
      "A POS system that I developed for a friend of mine's restaurant.",
  },
  {
    title: "Qiurio Visuals",
    src: Qiurio,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://qiurio.vercel.app",
    description: "Built a landing page for an agency in Bali.",
  },
  {
    title: "LastFM",
    src: LastFM,
    tools: ["React.js", "Tailwind CSS"],
    url: "https://last-fm-two.vercel.app",
    description: "Utilizing Last FM's API.",
  },
  {
    title: "Salabite",
    src: Salabite,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salabite.vercel.app",
    description: "Utilizing COVID-19's global API.",
  },
  {
    title: "Salamoal",
    src: Salamoal,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salamoal.vercel.app",
    description: "Side web design project.",
  },
  {
    title: "PandaMe",
    src: PandaMe,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://pandame.vercel.app",
    description: "Side web design project.",
  },
  {
    title: "Jageo",
    src: Jageo,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://jageo.vercel.app",
    description: "Side web design project.",
  },
  {
    title: "serviso.id",
    src: Serviso,
    tools: ["Figma"],
    url: "https://www.figma.com/file/c5BMDi69moHsMpJG1EtWue/serviso.id?type=design&node-id=1-2&mode=design&t=EKamK6LmMIbkz227-0",
    description:
      "Part of the Program Kreativitas Mahasiswa project to build an online service to repair electronics.",
  },
];

export default function Container() {
  const [projectsToShow, setProjectsToShow] = useState(4);

  return (
    <section className="p-4 w-full bg-transparent">
      <div className="flex flex-col justify-center">
        <p className="md:hidden text-xl font-black">Hi, I&apos;m Roderik!</p>
        <div className="text-2xl md:text-6xl lg:text-8xl mt-2 text-black dark:text-white hidden md:inline-block">
          <p className="tracking-tight inline-block">i build&nbsp;</p>
          <span className="font-black inline-block">
            <TypeWriter />
          </span>
        </div>

        <div className="mt-2">
          <p className="text-sm md:text-md leading-tight text-foreground/60">
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
          <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 gap-y-3">
            {experiences.map(({ title, logo, company, date, tools }, index) => (
              <div key={index} className="mb-2 flex items-start justify-start">
                <div className="h-full flex items-center justify-center">
                  <div className="mr-4 rounded-full shadow-lg dark:shadow-gray-500/50 bg-white relative w-[48px] h-[48px] md:w-[64px] md:h-[64px]">
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="rounded-full object-cover shrink-0 p-1"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-md md:text-xl font-semibold text-foreground/80 dark:text-white">
                    {title}
                  </p>
                  <p className="text-sm md:text-md text-foreground/50 leading-tight">
                    {company}
                  </p>
                  <p className="text-sm md:text-md text-foreground/50">
                    {date}
                  </p>
                  <div className="relative gap-1.5 md:w-5/6 space-x-1.5">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 mb-2">
          <p className="uppercase italic font-black text-md text-foreground/50 opacity-60 md:tracking-tight">
            PROJECTS
          </p>
          <div className="mt-1 relative overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 gap-y-5">
              {projects
                .slice(0, projectsToShow)
                .map(({ title, url, description, tools }) => (
                  <Card
                    key={title}
                    className="border-black dark:border-white bg-transparent rounded-md text-black transform duration-150 shadow-md hover:shadow-gray-500 cursor-pointer"
                  >
                    <Link href={url} target="_blank">
                      <CardHeader className="p-5">
                        <CardTitle className="font-semibold text-md md:text-xl dark:text-white">
                          {title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-sm md:text-md text-foreground/50 leading-none">
                          {description}
                        </CardDescription>
                        <div className="py-2.5 px-0 space-x-1.5">
                          {tools.map((tool, index) => (
                            <Badge key={index} variant="default">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                    </Link>
                  </Card>
                ))}
            </div>
            {projects.length > projectsToShow && (
              <div className="flex justify-center mt-4">
                <p
                  className="text-sm md:text-md text-center text-foreground/50 cursor-pointer underline"
                  onClick={() => setProjectsToShow(projectsToShow + 4)}
                >
                  Load more...
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-7 mb-2">
          <p className="uppercase italic font-black text-md text-foreground/50 opacity-60 md:tracking-tight">
            PUBLICATIONS
          </p>
          <div className="mt-1 relative space-y-4">
            {publications.map(({ title, authors, year, tools }) => (
              <Card
                key={title}
                className="border-black dark:border-white bg-transparent rounded-md text-black transform duration-150 shadow-md hover:shadow-gray-500 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="font-semibold text-md md:text-xl dark:text-white">
                    {title}
                  </CardTitle>
                  <div className="py-1.5 md:py-2.5 px-0 space-x-1.5">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="default">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  {authors.map((author, index) => (
                    <p
                      className={cn(
                        "text-sm md:text-md italic inline text-foreground/50",
                        author === "Roderik Mogot"
                          ? "text-foreground font-bold"
                          : "",
                      )}
                      key={index}
                    >
                      {author}
                      {index < authors.length - 1 ? <span>, </span> : null}
                    </p>
                  ))}
                  <p className="text-foreground/50 text-sm">{year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
