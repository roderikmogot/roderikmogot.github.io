"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import ProfilePicture from "@/public/pp.jpg";
import TypeWriter from "@/components/typewriter";

const socialLinks = [
  { href: siteConfig.links.github, icon: Github, label: "GitHub" },
  { href: siteConfig.links.linkedIn, icon: Linkedin, label: "LinkedIn" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-6">
      <motion.div
        className="container max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={item} className="relative">
          <div className="relative w-24 h-24 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 animate-spin-slow opacity-70 blur-sm" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-background">
              <Image
                src={ProfilePicture}
                alt="Roderik Mogot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-none">
            <span className="block text-foreground">I build</span>
            <span className="block gradient-text min-h-[1.2em]">
              <TypeWriter />
            </span>
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Software engineer passionate about the intersection of data science
          and web development. I craft engaging experiences and turn data into
          meaningful insights.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:border-violet-500/50 hover:text-violet-400 transition-all"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="flex items-center gap-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
