"use client";

import { useEffect, useState } from "react";
import { roles } from "@/config/content";
import { cn } from "@/lib/utils";

const CYCLE_MS = 4500;

/** Roles as deploy stages, oldest first; the newest one is "running". */
export default function Pipeline() {
  const last = roles.length - 1;
  const [active, setActive] = useState(last);
  const [auto, setAuto] = useState(true);
  const [typed, setTyped] = useState(0);
  const role = roles[active];
  const line = `${role.company} · ${role.date} · "${role.description}"`;

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % roles.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [auto]);

  useEffect(() => setTyped(0), [active]);
  useEffect(() => {
    if (typed >= line.length) return;
    const t = setTimeout(() => setTyped((v) => v + 2), 14);
    return () => clearTimeout(t);
  }, [typed, line.length]);

  return (
    <section aria-label="Career pipeline" className="panel hud-enter w-[420px] p-4">
      <div className="flex items-center gap-2">
        <span className="label">Pipeline</span>
        <span className="text-sm font-semibold">career</span>
        <span
          className={cn(
            "rounded border px-1.5 font-mono text-[10px] tracking-widest",
            active === last
              ? "border-career/50 bg-career/10 text-career"
              : "border-research/50 bg-research/10 text-research",
          )}
        >
          {active === last ? "RUNNING" : "DONE"}
        </span>
      </div>
      <p className="mt-2 text-sm">
        <span className="font-mono text-research">{role.date}</span>{" "}
        <span>{role.title}</span>
      </p>

      <ol className="relative mt-4 flex justify-between">
        <span className="absolute top-[7px] right-4 left-4 h-px bg-line" />
        {roles.map((r, i) => (
          <li key={i} className="relative">
            <button
              type="button"
              onClick={() => {
                setAuto(false);
                setActive(i);
              }}
              className="flex w-20 flex-col items-center gap-1.5"
            >
              <span
                className={cn(
                  "block size-4 rounded-full border-2 bg-panel",
                  i === active && "ping border-client text-client",
                  i < active && "border-client bg-client",
                  i > active && "border-line",
                )}
              />
              <span className={cn("label text-[9px]", i === active && "text-client")}>
                {r.company.replace("PT Bank Central Asia Tbk.", "BCA").replace(" Indonesia", "")}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <p className="mt-3 truncate rounded border border-line bg-ink px-3 py-2 font-mono text-[11px]">
        <span className="text-career">$</span> {line.slice(0, typed)}
      </p>
    </section>
  );
}
