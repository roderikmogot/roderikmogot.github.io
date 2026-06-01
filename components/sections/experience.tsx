"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import BCA from "@/public/bca.png";
import BOC from "@/public/boc.jpeg";

interface Experience {
  title: string;
  company: string;
  date: string;
  logo: StaticImageData;
  tools: string[];
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Application Developer",
    company: "PT Bank Central Asia Tbk.",
    date: "Oct 2023 – Present",
    logo: BCA,
    description:
      "Full-time application developer building and scaling micro-frontend and microservices solutions in a large-scale banking environment. Driving feature development, code quality, and cross-team collaboration.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    title: "Application Developer Intern",
    company: "PT Bank Central Asia Tbk.",
    date: "Sep 2022 – Sep 2023",
    logo: BCA,
    description:
      "Developed and maintained micro-frontend and microservices applications within a large-scale banking environment. Contributed to CI/CD pipelines and collaborated across cross-functional teams.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    title: "Frontend Web Developer Intern",
    company: "BOC Indonesia",
    date: "Feb 2018 – May 2018",
    logo: BOC,
    description:
      "Built and customized WordPress-based websites for clients, focusing on responsive design and performance optimization.",
    tools: ["WordPress"],
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex gap-5 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-violet-500/30 transition-colors duration-300 glow-border"
    >
      {/* Logo */}
      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-border overflow-hidden">
        <Image
          src={exp.logo}
          alt={exp.company}
          width={48}
          height={48}
          className="w-full h-full object-contain p-1"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-foreground">{exp.title}</h3>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded-md whitespace-nowrap">
            {exp.date}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {exp.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {exp.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
            Career
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
