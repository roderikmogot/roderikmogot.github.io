"use client";

import DarkModeButton from "@/components/dark-mode";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import PublicationsSection from "@/components/sections/publications";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background noise">
      {/* Background grid */}
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="animate-blob animation-delay-0 absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-pink-500/8 blur-3xl" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />

        <footer className="py-12 border-t border-border">
          <div className="container max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Roderik Mogot
            </p>
            <DarkModeButton />
          </div>
        </footer>
      </div>
    </main>
  );
}
