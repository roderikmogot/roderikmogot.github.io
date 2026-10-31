"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface Stop {
  id: string;
  label: string;
}

/** The route along the top. Marks the stop whose section crosses mid-screen. */
export default function LineMap({ stops }: { stops: Stop[] }) {
  const [active, setActive] = useState(stops[0].id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const s of stops) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [stops]);

  return (
    <nav aria-label="Route" className="card fixed top-3 left-1/2 z-20 w-max max-w-[calc(100vw-1.5rem)] -translate-x-1/2 px-4 py-2">
      <ol className="relative flex items-center gap-3 before:absolute before:inset-x-1 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-rail/30 before:content-[''] sm:gap-5">
        {stops.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                aria-current={on ? "step" : undefined}
                className="flex items-center gap-1.5 font-mono text-[11px] whitespace-nowrap"
              >
                <span
                  className={cn(
                    "size-3 rounded-full border-2 border-rail bg-paper transition-colors",
                    on && "border-loco bg-loco",
                  )}
                />
                <span className={cn("bg-paper px-0.5", on ? "text-ink" : "sr-only sm:not-sr-only sm:text-dim")}>
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
