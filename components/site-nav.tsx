"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface Section {
  id: string;
  label: string;
}

/** Sticky top bar. Underlines the section crossing mid-screen. */
export default function SiteNav({ name, sections }: { name: string; sections: Section[] }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const id of ["top", ...sections.map((s) => s.id)]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    // The last section is too short to reach mid-screen; mark it once the page bottoms out.
    const onScroll = () => {
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) setActive(sections.at(-1)?.id);
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-ground">
      <nav aria-label="Sections" className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 md:px-8">
        <a href="#top" className="shrink-0 font-display text-lg font-semibold tracking-tight">
          {name}
        </a>
        <ul className="ml-auto flex gap-5 overflow-x-auto p-1.5 text-sm whitespace-nowrap [scrollbar-width:none]">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={s.id === active ? "location" : undefined}
                className={cn(
                  "inline-block py-1 text-ink-muted underline-offset-[6px] transition-colors hover:text-ink",
                  s.id === active && "text-ink underline decoration-moss decoration-2",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
