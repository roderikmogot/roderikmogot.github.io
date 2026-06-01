"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

interface Publication {
  title: string;
  authors: string[];
  year: number;
  tools: string[];
}

const publications: Publication[] = [
  {
    title:
      "A Recognizing Technique Specific Disease on a Chest X-Ray with Support for Image Clarity and Deep Learning",
    authors: ["Roderik Mogot", "Verdiant Jonathan Kusuma"],
    year: 2023,
    tools: ["Python", "TensorFlow", "Matplotlib", "Numpy", "Pandas"],
  },
  {
    title:
      "Wick System Automation Method on Maintenance Hydroponic Plant based Arduino",
    authors: ["Yovanka Davincy Setiawan", "Bryan Ghilchrist", "Roderik Mogot"],
    year: 2022,
    tools: ["C", "Arduino"],
  },
];

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-violet-500/30 transition-colors duration-300 glow-border"
    >
      <div className="flex gap-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-violet-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-foreground leading-snug">
              {pub.title}
            </h3>
            <span className="shrink-0 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">
              {pub.year}
            </span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {pub.authors.map((author, i) => (
              <span key={i}>
                <span
                  className={
                    author === "Roderik Mogot"
                      ? "font-semibold text-foreground"
                      : ""
                  }
                >
                  {author}
                </span>
                {i < pub.authors.length - 1 && ", "}
              </span>
            ))}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {pub.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PublicationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
            Research
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
            Publications
          </h2>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
