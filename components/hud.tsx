"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Minus, Plus, RotateCcw, X } from "lucide-react";
import { buildings, districts, roles, type Building, type DistrictId } from "@/config/content";
import { siteConfig } from "@/config/site";
import { colorOf } from "@/lib/city-data";

const count = (id: DistrictId) => buildings.filter((b) => b.district === id).length;
const now = roles[roles.length - 1];

export type Tab = { label: string; districts: DistrictId[]; n: number };
export const TABS: Tab[] = [
  { label: "Career", districts: ["career"], n: count("career") },
  { label: "Projects", districts: ["client", "lab", "design"], n: count("client") + count("lab") + count("design") },
  { label: "Research", districts: ["research"], n: count("research") },
];

export function TopBar({ onTab, onContact }: { onTab: (t: Tab) => void; onContact: () => void }) {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Makassar",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="panel hud-enter flex h-14 items-center gap-6 px-4">
      <div className="flex items-center gap-2.5">
        <span className="grid size-7 place-items-center rounded bg-research/20 font-mono text-sm font-bold text-research">
          R
        </span>
        <span className="font-mono text-sm font-bold tracking-[0.2em]">
          <span className="text-client">RODERIK</span>·MOGOT
        </span>
        <span className="rounded border border-design/50 bg-design/10 px-1.5 font-mono text-[10px] tracking-widest text-design">
          OPEN TO WORK
        </span>
      </div>
      <nav className="flex items-center gap-5">
        {TABS.map((t) => (
          <button key={t.label} type="button" onClick={() => onTab(t)} className="label flex items-center gap-1.5 text-text hover:text-client">
            {t.label}
            <span className="rounded bg-line px-1 text-[10px] text-client">{t.n}</span>
          </button>
        ))}
        <button type="button" onClick={onContact} className="label text-text hover:text-client">
          Contact
        </button>
      </nav>
      <div className="ml-auto flex items-center gap-2">
        {[
          ["github", siteConfig.links.github],
          ["linkedin", siteConfig.links.linkedIn],
        ].map(([name, href]) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-line px-2.5 py-1 font-mono text-xs hover:border-client"
          >
            <span className="size-1.5 rounded-full bg-career" />
            {name}
          </a>
        ))}
        <time className="ml-2 font-mono text-sm text-client" title="Bali time (WITA)">
          {time}
        </time>
      </div>
    </header>
  );
}

export function StatCards() {
  const tools = new Set(buildings.flatMap((b) => b.tools)).size;
  const stats = [
    {
      label: "Years shipping",
      value: String(new Date().getFullYear() - 2022),
      unit: "yrs",
      sub: "since Sep 2022",
      color: colorOf.career,
    },
    {
      label: "Projects",
      value: String(count("client") + count("lab") + count("design")),
      sub: `${count("client")} client · ${count("lab")} lab · ${count("design")} design`,
      color: colorOf.client,
    },
    { label: "Research", value: String(count("research")), unit: "papers", sub: "2022 – 2023", color: colorOf.research },
    { label: "Stack", value: String(tools), unit: "tools", sub: "across all buildings", color: colorOf.lab },
    { label: "Now", value: now.company, sub: `${now.title} · running`, color: colorOf.career },
  ];
  return (
    <div className="hud-enter flex gap-2">
      {stats.map((s) => (
        <div key={s.label} className="panel w-44 px-3.5 pt-3 pb-2.5">
          <p className="label text-[10px]">{s.label}</p>
          <p className="mt-1 truncate font-mono text-2xl font-semibold" suppressHydrationWarning>
            {s.value}
            {s.unit && <span className="ml-1 text-xs font-normal text-dim">{s.unit}</span>}
          </p>
          <p className="truncate text-[11px] text-dim">{s.sub}</p>
          <span className="mt-2 block h-0.5 w-full rounded" style={{ background: s.color, opacity: 0.8 }} />
        </div>
      ))}
    </div>
  );
}

export function HintBar() {
  return (
    <p className="panel hud-enter inline-flex gap-3 px-3 py-2 font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
      <span className="text-client">Overview</span>
      <span>Click a building · drag pan · scroll/pinch zoom · R reset</span>
    </p>
  );
}

export function Controls({ onZoom, onReset }: { onZoom: (f: number) => void; onReset: () => void }) {
  const btn = "grid size-9 place-items-center text-dim hover:text-client";
  return (
    <div className="panel hud-enter flex flex-col">
      <button type="button" aria-label="Zoom in" className={btn} onClick={() => onZoom(1.3)}>
        <Plus size={16} />
      </button>
      <button type="button" aria-label="Zoom out" className={btn} onClick={() => onZoom(1 / 1.3)}>
        <Minus size={16} />
      </button>
      <button type="button" aria-label="Reset view" className={btn} onClick={onReset}>
        <RotateCcw size={15} />
      </button>
    </div>
  );
}

export function DetailPanel({ building, onClose }: { building: Building; onClose: () => void }) {
  const color = colorOf[building.district];
  const district = districts.find((d) => d.id === building.district)!;
  const own = building.district === "career" ? roles.filter((r) => r.company === building.title).reverse() : [];
  return (
    <aside aria-label={building.title} className="panel w-[340px] overflow-hidden" style={{ borderColor: color }}>
      {building.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={building.image} alt="" className="h-40 w-full object-cover opacity-90" />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="label" style={{ color }}>
            {district.name}
          </p>
          <button type="button" aria-label="Close" onClick={onClose} className="text-dim hover:text-text">
            <X size={16} />
          </button>
        </div>
        <h2 className="mt-1 font-mono text-lg font-semibold">{building.title}</h2>
        {own.length > 0 ? (
          <ul className="mt-2 space-y-1">
            {own.map((r) => (
              <li key={r.title} className="text-xs">
                <span className="text-text">{r.title}</span> <span className="font-mono text-dim">{r.date}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-dim">{building.subtitle}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-text/85">{building.description}</p>
        {building.tools.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {building.tools.map((t) => (
              <li key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-dim">
                {t}
              </li>
            ))}
          </ul>
        )}
        {building.url && (
          <a
            href={building.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs hover:underline"
            style={{ color }}
          >
            Open <ExternalLink size={12} />
          </a>
        )}
      </div>
    </aside>
  );
}

export function ContactPanel({ onClose }: { onClose: () => void }) {
  return (
    <aside aria-label="Contact" className="panel w-[340px] p-4">
      <div className="flex items-start justify-between">
        <p className="label text-client">Contact</p>
        <button type="button" aria-label="Close" onClick={onClose} className="text-dim hover:text-text">
          <X size={16} />
        </button>
      </div>
      <h2 className="mt-1 font-mono text-lg font-semibold">{siteConfig.name}</h2>
      <p className="mt-2 text-sm leading-relaxed text-text/85">{siteConfig.description}</p>
      <ul className="mt-3 space-y-1.5 font-mono text-xs">
        {Object.entries(siteConfig.links).map(([name, href]) => (
          <li key={name}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-client hover:underline">
              {name} <ExternalLink size={12} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
