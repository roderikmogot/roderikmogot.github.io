import Image from "next/image";
import LineMap, { type Stop } from "@/components/line-map";
import RideScene from "@/components/ride-scene";
import { kindLabels, projects, publications, roles, stationFor, type Publication, type Role } from "@/config/content";
import { siteConfig } from "@/config/site";

const stops: Stop[] = [
  { id: "boarding", label: "Boarding" },
  ...roles.map((r, i) => ({ id: `station-${i}`, label: r.stop })),
  { id: "workshop", label: "Workshop" },
  { id: "terminus", label: "Terminus" },
];

// Literal class names so Tailwind generates them.
const kindColor = { client: "text-client!", lab: "text-lab!", design: "text-design!" };

export default function Home() {
  return (
    <main className="relative">
      <RideScene />
      <LineMap stops={stops} />

      <div className="relative z-10 mx-auto max-w-xl px-4 pb-[30vh]">
        <section id="boarding" className="flex min-h-svh items-center">
          <div className="card w-full p-6">
            <p className="label">Ticket · one way · {roles[0].start} to now</p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteConfig.name}</h1>
            <p className="mt-3 leading-relaxed text-dim">{siteConfig.description}</p>
            <p className="mt-5 font-mono text-sm text-loco">Scroll to ride. Grab a coffee, no rush.</p>
          </div>
        </section>

        {roles.map((role, i) => (
          <section key={role.title + role.date} id={`station-${i}`} className="flex min-h-svh flex-col justify-center gap-6">
            <StationCard role={role} n={i + 1} />
            {publications
              .filter((p) => stationFor(p) === i)
              .map((p) => (
                <SignpostCard key={p.id} publication={p} />
              ))}
          </section>
        ))}

        <section id="workshop" className="flex min-h-svh flex-col justify-center py-24">
          <div className="card p-5">
            <p className="label">The Workshop</p>
            <h2 className="mt-1 text-2xl font-semibold">Things built between stops</h2>
          </div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.id} className="card overflow-hidden">
                {p.image && (
                  <div className="relative aspect-video">
                    <Image src={p.image} alt="" fill sizes="(min-width: 640px) 280px, 100vw" className="object-cover" />
                  </div>
                )}
                <div className="p-4">
                  <p className={`label ${kindColor[p.kind]}`}>
                    {kindLabels[p.kind]} · {p.subtitle}
                  </p>
                  <h3 className="mt-1 font-semibold">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-dim">{p.description}</p>
                  <Tools tools={p.tools} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="terminus" className="flex min-h-svh items-center">
          <div className="card w-full p-6">
            <p className="label">Terminus · end of the line</p>
            <h2 className="mt-2 text-2xl font-semibold">Thanks for riding.</h2>
            <p className="mt-3 leading-relaxed text-dim">{siteConfig.description}</p>
            <ul className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
              {Object.entries(siteConfig.links).map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-rail/20 px-3 py-1 capitalize hover:bg-loco hover:text-paper"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

function StationCard({ role, n }: { role: Role; n: number }) {
  return (
    <article className="card overflow-hidden">
      <p className="bg-rail px-5 py-2 font-mono text-xs tracking-[0.2em] text-paper uppercase">
        Stop {String(n).padStart(2, "0")} · {role.date}
      </p>
      <div className="p-5">
        <h2 className="text-2xl font-semibold">{role.company}</h2>
        <p className="mt-0.5 font-medium text-loco">{role.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-dim">{role.description}</p>
        <Tools tools={role.tools} />
      </div>
    </article>
  );
}

function SignpostCard({ publication: p }: { publication: Publication }) {
  return (
    <article className="card -rotate-1 border-l-4 border-l-wood p-4 sm:ml-10">
      <p className="label">Signpost · {p.year} · Publication</p>
      <h3 className="mt-1 font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm text-dim">{p.description}</p>
      <p className="mt-1 text-xs text-dim italic">{p.authors}</p>
      <Tools tools={p.tools} />
    </article>
  );
}

function Tools({ tools }: { tools: string[] }) {
  if (tools.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tools.map((t) => (
        <li key={t} className="rounded border border-dashed border-rail/30 px-1.5 py-0.5 font-mono text-[10px]">
          {t}
        </li>
      ))}
    </ul>
  );
}
