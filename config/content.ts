export interface Role {
  /** Short Station name for the route map. */
  stop: string;
  title: string;
  company: string;
  date: string;
  /** Year the Role started, used to place Signposts between Stations. */
  start?: number;
  description: string;
  tools: string[];
}

export type ProjectKind = "client" | "lab" | "design";

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  url?: string;
  image?: string;
}

export interface Publication {
  id: string;
  title: string;
  year: number;
  authors: string;
  description: string;
  tools: string[];
}

// Oldest first: this is the Station order.
export const roles: Role[] = [
  {
    stop: "BOC",
    title: "Frontend Web Developer Intern",
    company: "BOC Indonesia",
    date: "Feb 2018 – May 2018",
    start: 2018,
    description:
      "Built and customized WordPress-based websites for clients, focusing on responsive design and performance optimization.",
    tools: ["WordPress"],
  },
  {
    stop: "BCA intern",
    title: "Application Developer Intern",
    company: "PT Bank Central Asia Tbk.",
    date: "Sep 2022 – Sep 2023",
    start: 2022,
    description:
      "Developed and maintained micro-frontend and microservices applications within a large-scale banking environment. Contributed to CI/CD pipelines and collaborated across cross-functional teams.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    // TODO(roderikmogot): set the real BCA end date.
    stop: "BCA",
    title: "Application Developer",
    company: "PT Bank Central Asia Tbk.",
    date: "Oct 2023 – TODO",
    start: 2023,
    description:
      "Full-time application developer building and scaling micro-frontend and microservices solutions in a large-scale banking environment. Driving feature development, code quality, and cross-team collaboration.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    // TODO(roderikmogot): add start date, description and tools for Shad.
    stop: "Shad",
    title: "Frontend Engineer",
    company: "Shad",
    date: "Present",
    description: "Frontend Engineer at Shad.",
    tools: [],
  },
];

/** Index of the Station a Publication's Signpost follows: the last Role started in or before its year. */
export function stationFor(p: Publication): number {
  return roles.findLastIndex((r) => r.start !== undefined && r.start <= p.year);
}

export const kindLabels: Record<ProjectKind, string> = {
  client: "Client",
  lab: "Lab",
  design: "Design",
};

export const projects: Project[] = [
  {
    id: "kurniawan-gadget",
    kind: "client",
    title: "Kurniawan Gadget",
    subtitle: "E-commerce",
    tools: ["React.js", "Tailwind CSS", "Firebase", "Vercel"],
    url: "https://kurniawangadget.com",
    description: "Electronics e-commerce platform with real-time inventory.",
  },
  {
    id: "desa-pecatu",
    kind: "client",
    title: "Desa Pecatu",
    subtitle: "Government information system",
    image: "/desa_pecatu.jpeg",
    tools: ["CodeIgniter", "MariaDB"],
    url: "https://desapecatu.id",
    description: "Government information system for Desa Pecatu village.",
  },
  {
    id: "sukaido",
    kind: "client",
    title: "Sukaido",
    subtitle: "Point of sale",
    image: "/sukaido.png",
    tools: ["React.js", "Tailwind CSS", "Node.js"],
    description: "Point-of-sale system for a restaurant in Bali.",
  },
  {
    id: "qiurio",
    kind: "client",
    title: "Qiurio Visuals",
    subtitle: "Agency landing page",
    image: "/qiurio.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://qiurio.vercel.app",
    description: "Landing page for a creative agency based in Bali.",
  },
  {
    id: "lastfm",
    kind: "lab",
    title: "LastFM",
    subtitle: "Music dashboard",
    image: "/last-fm.png",
    tools: ["React.js", "Tailwind CSS"],
    url: "https://last-fm-two.vercel.app",
    description: "Music dashboard powered by the Last.fm API.",
  },
  {
    id: "salabite",
    kind: "lab",
    title: "Salabite",
    subtitle: "COVID-19 tracker",
    image: "/salabite.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salabite.vercel.app",
    description: "Real-time COVID-19 global statistics tracker.",
  },
  {
    id: "salamoal",
    kind: "lab",
    title: "Salamoal",
    subtitle: "Web design experiment",
    image: "/salamoal.jpeg",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salamoal.vercel.app",
    description: "Experimental web design project.",
  },
  {
    id: "pandame",
    kind: "lab",
    title: "PandaMe",
    subtitle: "Web design",
    image: "/pandame.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://pandame.vercel.app",
    description: "Side web design project.",
  },
  {
    id: "jageo",
    kind: "lab",
    title: "Jageo",
    subtitle: "Web design",
    image: "/jageo.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://jageo.vercel.app",
    description: "Side web design project.",
  },
  {
    id: "serviso",
    kind: "design",
    title: "serviso.id",
    subtitle: "UI/UX design",
    image: "/serviso.jpg",
    tools: ["Figma"],
    url: "https://www.figma.com/file/c5BMDi69moHsMpJG1EtWue/serviso.id",
    description: "UI/UX design for an online electronics repair service.",
  },
];

// Oldest first.
export const publications: Publication[] = [
  {
    id: "hydroponic",
    title: "Hydroponic Wick System",
    year: 2022,
    authors: "Yovanka Davincy Setiawan, Bryan Ghilchrist, Roderik Mogot",
    tools: ["C", "Arduino"],
    description: "Wick System Automation Method on Maintenance Hydroponic Plant based Arduino.",
  },
  {
    id: "chest-xray",
    title: "Chest X-Ray Recognition",
    year: 2023,
    authors: "Roderik Mogot, Verdiant Jonathan Kusuma",
    tools: ["Python", "TensorFlow", "Matplotlib", "Numpy", "Pandas"],
    description:
      "A Recognizing Technique Specific Disease on a Chest X-Ray with Support for Image Clarity and Deep Learning.",
  },
];
