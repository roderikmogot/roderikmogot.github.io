import { buildings, districts, roles } from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The whole portfolio as plain HTML. Visible on phones, reduced motion and
 * no-WebGL; otherwise kept for screen readers and search engines only.
 */
export default function Fallback({ visible }: { visible: boolean }) {
  return (
    <div className={cn(visible ? "mx-auto max-w-2xl space-y-10 px-4 py-10" : "sr-only")}>
      <header>
        <p className="font-mono text-sm font-bold tracking-[0.2em]">
          <span className="text-client">RODERIK</span>·MOGOT
        </p>
        <h1 className="mt-3 text-2xl font-semibold">{siteConfig.name}</h1>
        <p className="mt-2 text-sm leading-relaxed text-dim">{siteConfig.description}</p>
        <ul className="mt-3 flex gap-4 font-mono text-xs">
          {Object.entries(siteConfig.links).map(([name, href]) => (
            <li key={name}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-client hover:underline">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section>
        <h2 className="label text-career">Pipeline</h2>
        <ol className="mt-3 space-y-2">
          {[...roles].reverse().map((r) => (
            <li key={r.title + r.date} className="panel p-3">
              <p className="text-sm font-semibold">
                {r.title} <span className="text-dim">· {r.company}</span>
              </p>
              <p className="font-mono text-xs text-dim">{r.date}</p>
              <p className="mt-1 text-sm text-text/85">{r.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {districts
        .filter((d) => d.id !== "career")
        .map((d) => (
          <section key={d.id}>
            <h2 className="label" style={{ color: d.color }}>
              {d.name}
            </h2>
            <ul className="mt-3 space-y-2">
              {buildings
                .filter((b) => b.district === d.id)
                .map((b) => (
                  <li key={b.id} className="panel p-3">
                    <p className="text-sm font-semibold">
                      {b.url ? (
                        <a href={b.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: d.color }}>
                          {b.title}
                        </a>
                      ) : (
                        b.title
                      )}{" "}
                      <span className="text-xs font-normal text-dim">· {b.subtitle}</span>
                    </p>
                    <p className="mt-1 text-sm text-text/85">{b.description}</p>
                    <p className="mt-1 font-mono text-[10px] text-dim">{b.tools.join(" · ")}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}
    </div>
  );
}
