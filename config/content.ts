export type DistrictId = "career" | "client" | "lab" | "design" | "research";

export interface District {
  id: DistrictId;
  name: string;
  color: string;
  /** World-space corner (x, z) of the district platform. */
  origin: [number, number];
  cols: number;
}

export interface Building {
  id: string;
  district: DistrictId;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  url?: string;
  image?: string;
}

export interface Role {
  title: string;
  company: string;
  date: string;
  description: string;
  tools: string[];
}

export const districts: District[] = [
  { id: "career", name: "Career", color: "#34d399", origin: [-30, -22], cols: 2 },
  { id: "client", name: "Client", color: "#22d3ee", origin: [-8, -22], cols: 2 },
  { id: "research", name: "Research", color: "#a78bfa", origin: [14, -22], cols: 2 },
  { id: "lab", name: "Lab", color: "#f472b6", origin: [-8, -2], cols: 2 },
  { id: "design", name: "Design", color: "#fbbf24", origin: [14, -2], cols: 1 },
];

// Oldest first: this is the Pipeline order.
export const roles: Role[] = [
  {
    title: "Frontend Web Developer Intern",
    company: "BOC Indonesia",
    date: "Feb 2018 – May 2018",
    description:
      "Built and customized WordPress-based websites for clients, focusing on responsive design and performance optimization.",
    tools: ["WordPress"],
  },
  {
    title: "Application Developer Intern",
    company: "PT Bank Central Asia Tbk.",
    date: "Sep 2022 – Sep 2023",
    description:
      "Developed and maintained micro-frontend and microservices applications within a large-scale banking environment. Contributed to CI/CD pipelines and collaborated across cross-functional teams.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    // TODO(roderikmogot): set the real BCA end date.
    title: "Application Developer",
    company: "PT Bank Central Asia Tbk.",
    date: "Oct 2023 – TODO",
    description:
      "Full-time application developer building and scaling micro-frontend and microservices solutions in a large-scale banking environment. Driving feature development, code quality, and cross-team collaboration.",
    tools: ["Microfrontend", "Microservices", "CI/CD", "SQL", "React.js", "Node.js"],
  },
  {
    // TODO(roderikmogot): add start date, description and tools for Shad.
    title: "Frontend Engineer",
    company: "Shad",
    date: "Present",
    description: "Frontend Engineer at Shad.",
    tools: [],
  },
];

const careerBuildings: Building[] = [...new Set(roles.map((r) => r.company))]
  .reverse()
  .map((company) => {
    const own = roles.filter((r) => r.company === company);
    return {
      id: company.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      district: "career",
      title: company,
      subtitle: own.map((r) => r.title).join(" · "),
      description: own[own.length - 1].description,
      tools: [...new Set(own.flatMap((r) => r.tools))],
    };
  });

export const buildings: Building[] = [
  ...careerBuildings,
  {
    id: "kurniawan-gadget",
    district: "client",
    title: "Kurniawan Gadget",
    subtitle: "E-commerce",
    tools: ["React.js", "Tailwind CSS", "Firebase", "Vercel"],
    url: "https://kurniawangadget.com",
    description: "Electronics e-commerce platform with real-time inventory.",
  },
  {
    id: "desa-pecatu",
    district: "client",
    title: "Desa Pecatu",
    subtitle: "Government information system",
    image: "/desa_pecatu.jpeg",
    tools: ["CodeIgniter", "MariaDB"],
    url: "https://desapecatu.id",
    description: "Government information system for Desa Pecatu village.",
  },
  {
    id: "sukaido",
    district: "client",
    title: "Sukaido",
    subtitle: "Point of sale",
    image: "/sukaido.png",
    tools: ["React.js", "Tailwind CSS", "Node.js"],
    description: "Point-of-sale system for a restaurant in Bali.",
  },
  {
    id: "qiurio",
    district: "client",
    title: "Qiurio Visuals",
    subtitle: "Agency landing page",
    image: "/qiurio.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://qiurio.vercel.app",
    description: "Landing page for a creative agency based in Bali.",
  },
  {
    id: "lastfm",
    district: "lab",
    title: "LastFM",
    subtitle: "Music dashboard",
    image: "/last-fm.png",
    tools: ["React.js", "Tailwind CSS"],
    url: "https://last-fm-two.vercel.app",
    description: "Music dashboard powered by the Last.fm API.",
  },
  {
    id: "salabite",
    district: "lab",
    title: "Salabite",
    subtitle: "COVID-19 tracker",
    image: "/salabite.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salabite.vercel.app",
    description: "Real-time COVID-19 global statistics tracker.",
  },
  {
    id: "salamoal",
    district: "lab",
    title: "Salamoal",
    subtitle: "Web design experiment",
    image: "/salamoal.jpeg",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://salamoal.vercel.app",
    description: "Experimental web design project.",
  },
  {
    id: "pandame",
    district: "lab",
    title: "PandaMe",
    subtitle: "Web design",
    image: "/pandame.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://pandame.vercel.app",
    description: "Side web design project.",
  },
  {
    id: "jageo",
    district: "lab",
    title: "Jageo",
    subtitle: "Web design",
    image: "/jageo.png",
    tools: ["Next.js", "Tailwind CSS"],
    url: "https://jageo.vercel.app",
    description: "Side web design project.",
  },
  {
    id: "serviso",
    district: "design",
    title: "serviso.id",
    subtitle: "UI/UX design",
    image: "/serviso.jpg",
    tools: ["Figma"],
    url: "https://www.figma.com/file/c5BMDi69moHsMpJG1EtWue/serviso.id",
    description: "UI/UX design for an online electronics repair service.",
  },
  {
    id: "chest-xray",
    district: "research",
    title: "Chest X-Ray Recognition",
    subtitle: "2023 · Roderik Mogot, Verdiant Jonathan Kusuma",
    tools: ["Python", "TensorFlow", "Matplotlib", "Numpy", "Pandas"],
    description:
      "A Recognizing Technique Specific Disease on a Chest X-Ray with Support for Image Clarity and Deep Learning.",
  },
  {
    id: "hydroponic",
    district: "research",
    title: "Hydroponic Wick System",
    subtitle: "2022 · Yovanka Davincy Setiawan, Bryan Ghilchrist, Roderik Mogot",
    tools: ["C", "Arduino"],
    description:
      "Wick System Automation Method on Maintenance Hydroponic Plant based Arduino.",
  },
];

export const feed: string[] = [
  "Shad · Frontend Engineer is running",
  "Kurniawan Gadget is live at kurniawangadget.com",
  "Chest X-Ray Recognition published, 2023",
  "BCA · Application Developer shipped micro-frontends",
  "LastFM dashboard deployed on Vercel",
  "Desa Pecatu information system is live",
];
