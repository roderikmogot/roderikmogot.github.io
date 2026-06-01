"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.8]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{}}
    >
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-background"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-border"
        style={{ opacity: borderOpacity }}
      />
      <nav className="relative container max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display font-bold text-lg tracking-tight"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">RM</span>
        </motion.a>

        <motion.ul
          className="hidden sm:flex items-center gap-8"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium px-4 py-1.5 rounded-full border border-border hover:border-violet-500/50 hover:text-violet-400 transition-all duration-200"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          GitHub
        </motion.a>
      </nav>
    </motion.header>
  );
}
