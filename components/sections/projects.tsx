"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";
import DesaPecatu from "@/public/desa_pecatu.jpeg";
import Jageo from "@/public/jageo.png";
import LastFM from "@/public/last-fm.png";
import PandaMe from "@/public/pandame.png";
import Qiurio from "@/public/qiurio.png";
import Salabite from "@/public/salabite.png";
import Salamoal from "@/public/salamoal.jpeg";
import Serviso from "@/public/serviso.jpg";
import Sukaido from "@/public/sukaido.png";

interface Project {
  title: string;
  description: string;
  src: StaticImageData;
  url: string;
  tools: string[];
}

const projects: Project[] = [
  {
    title: "Kurniawan Gadget",
    src: DesaPecatu,
    tools: ["React.js", "Tailwind CSS", "Firebase", "Vercel"],
    url: "https://kurniawangadget.com",
    description: "Electronics e-commerce platform with real-time inventory.",
  },
  {
    title: "Desa Pecatu",
    src: DesaPecatu,
    tools: ["CodeIgniter", "MariaDB"],
    url: "https://desapecatu.id",
    description: "Government information system for Desa Pecatu village.",
  },
  {
    title: "Sukaido",
    src: Sukaido,
    tools: ["React.js", "Tailwind CSS", "Node.js"],
    url: "#",
    description: "Point-of-sale system for a restaurant in Bali.",
  },
  {
    title: "Qiurio Visuals",
    src: Qiurio,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://qiurio.vercel.app",
    description: "Landing page for a creative agency based in Bali.",
  },
  {
    title: "LastFM",
    src: LastFM,
    tools: ["React.js", "Tailwind CSS"],
    url: "https://last-fm-two.vercel.app",
    description: "Music dashboard powered by the Last.fm API.",
  },
  {
    title: "Salabite",
    src: Salabite,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salabite.vercel.app",
    description: "Real-time COVID-19 global statistics tracker.",
  },
  {
    title: "Salamoal",
    src: Salamoal,
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salamoal.vercel.app",
    description: "Experimental web design project.",
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
    url: "https://www.figma.com/file/c5BMDi69moHsMpJG1EtWue/serviso.id",
    description: "UI/UX design for an online electronics repair service.",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 glow-border"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="flex items-center gap-1 text-xs bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full border border-border">
            <ExternalLink className="w-3 h-3" />
            Visit
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-foreground group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const displayed = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
            Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {!showAll && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:border-violet-500/50 hover:text-violet-400 transition-all"
            >
              Show all {projects.length} projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
