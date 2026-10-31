import Image from "next/image";
import SiteNav, { type Section } from "@/components/site-nav";
import { ClosingShapes, HeroShapes, PebbleShape } from "@/components/shapes";
import { kindLabels, projects, publications, roles } from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const sections: Section[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

const now = roles[roles.length - 1];

const facts = [
  { value: roles[0].start, label: "Building since" },
  { value: roles.length, label: "Roles" },
  { value: projects.length, label: "Projects" },
  { value: publications.length, label: "Publications" },
];

// Literal class names so Tailwind generates them; cycled to keep the grid uneven.
const imageShape = [
  "aspect-[4/3] -rotate-1",
  "aspect-video rotate-1",
  "aspect-[5/4] rotate-0",
  "aspect-[3/2] -rotate-[0.5deg]",
];
const paperTilt = ["md:-rotate-1", "md:rotate-[0.75deg]"];

export default function Home() {
  return (
    <>
      <SiteNav name={siteConfig.name} sections={sections} />

      <main>
        <section id="top" className="mx-auto max-w-6xl px-4 pt-12 md:px-8 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr] md:pb-16 lg:gap-16">
            <div>
              <p className="label text-ink-muted">
                {now.title} at {now.company}
              </p>
              <h1 className="mt-4 font-display text-[46px] leading-[1.02] font-medium tracking-tight lg:text-[70px]">
                {siteConfig.name}
              </h1>
              <p className="mt-6 max-w-prose leading-[1.8] text-ink-muted">{siteConfig.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-solid">
                  See my work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md md:-mb-24">
              <HeroShapes />
            </div>
          </div>

          <dl className="relative z-10 mx-auto -mt-4 grid max-w-4xl grid-cols-2 gap-y-6 rounded-sheet bg-paper px-6 py-7 md:-mt-10 md:grid-cols-4 md:px-10">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse">
                <dt className="label mt-1 text-ink-muted">{f.label}</dt>
                <dd className="font-display text-4xl font-medium tracking-tight">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
          <div className="rounded-field bg-moss px-6 py-14 text-paper md:px-14 md:py-20">
            <p className="label text-grass">Experience</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
              Where I&apos;ve been building
            </h2>
            <ol className="mt-12">
              {roles.map((role, i) => (
                <li
                  key={role.title + role.date}
                  className="grid gap-x-10 gap-y-2 border-t border-paper/20 py-8 md:grid-cols-[6rem_1fr]"
                >
                  <span aria-hidden className="font-display text-5xl leading-none font-light text-grass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-2xl">
                    <p className="label text-paper/70">{role.date}</p>
                    <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">{role.company}</h3>
                    <p className="mt-0.5 text-grass">{role.title}</p>
                    <p className="mt-3 text-[15px] leading-[1.8] text-paper/85">{role.description}</p>
                    <Tools tools={role.tools} className="border-paper/30 text-paper/85" />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="mx-auto mt-10 max-w-6xl px-4 md:px-8">
          <div className="rounded-field bg-clay px-6 py-14 text-paper md:px-14 md:py-20">
            <p className="label text-grass">Projects</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
              Things I&apos;ve made
            </h2>
            <ul className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-2">
              {projects.map((p, i) => (
                <li key={p.id} className="group">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-sheet bg-paper/10",
                      imageShape[i % imageShape.length],
                    )}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`Screenshot of ${p.title}`}
                        fill
                        sizes="(min-width: 768px) 480px, 100vw"
                        className="object-cover saturate-75 sepia-20 transition-[filter] duration-[240ms] group-focus-within:saturate-100 group-focus-within:sepia-0 group-hover:saturate-100 group-hover:sepia-0"
                      />
                    ) : (
                      <div className="absolute inset-0 p-10">
                        <PebbleShape />
                      </div>
                    )}
                  </div>
                  <p className="label mt-5 text-paper/70">
                    {kindLabels[p.kind]} · {p.subtitle}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.8] text-paper/85">{p.description}</p>
                  <Tools tools={p.tools} className="border-paper/30 text-paper/85" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="publications" className="mx-auto mt-24 max-w-6xl px-4 md:px-8">
          <p className="label text-ink-muted">Publications</p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            Papers I&apos;ve co-written
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {publications.map((p, i) => (
              <article key={p.id} className={cn("rounded-sheet bg-paper p-8", paperTilt[i % paperTilt.length])}>
                <p className="label text-ink-muted">{p.year}</p>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 font-display text-lg leading-relaxed italic">&ldquo;{p.description}&rdquo;</p>
                <p className="mt-4 text-[13px] text-ink-muted">{p.authors}</p>
                <Tools tools={p.tools} className="border-ink/25 text-ink-muted" />
              </article>
            ))}
          </div>
        </section>

        <div className="mt-24 px-4">
          <ClosingShapes />
        </div>
      </main>

      <footer id="contact" className="mt-8 bg-stone">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:px-8">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight">Get in touch</h2>
            <p className="mt-3 max-w-md leading-[1.8] text-ink-muted">
              Say hello on any of these. I&apos;m happy to talk about products, frontends or anything in between.
            </p>
          </div>
          <ul className="grid grid-cols-2 content-start gap-3">
            {Object.entries(siteConfig.links).map(([name, href]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full capitalize">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto max-w-6xl px-4 pb-8 text-[12px] text-ink-muted md:px-8">© {siteConfig.name}</p>
      </footer>
    </>
  );
}

function Tools({ tools, className }: { tools: string[]; className: string }) {
  if (tools.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {tools.map((t) => (
        <li key={t} className={cn("rounded-control border px-2.5 py-0.5 text-[12px]", className)}>
          {t}
        </li>
      ))}
    </ul>
  );
}
