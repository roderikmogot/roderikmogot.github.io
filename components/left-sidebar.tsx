import Image from "next/image";
import { Github, Instagram, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";
import { LinkIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

import ProfilePicture from "@/public/pp.jpg";

import { cn } from "@/lib/utils";

const linkIcons = [
  {
    href: siteConfig.links.instagram,
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    href: siteConfig.links.github,
    icon: <Github className="w-4 h-4" />,
  },
  {
    href: siteConfig.links.linkedIn,
    icon: <Linkedin className="w-4 h-4" />,
  },
];

export default function LeftSidebar() {
  return (
    <section
      className={cn(
        "bg-transparent bg-opacity-20 backdrop-blur-lg backdrop-filter rounded-lg shadow-lg rainbow-box",
        "p-8 h-full w-full flex flex-col items-center relative",
      )}
    >
      <div className="w-full flex flex-col items-center relative">
        <div className="bg-black/50 rounded-full shadow-lg shadow-gray-700/40">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
        <p className="leading-lg text-black font-bold text-2xl mt-5 text-foreground dark:text-white">
          Roderik Mogot
        </p>
        <p className="leading-6 text-black/50 dark:text-white/50 text-md">
          an engineer
        </p>
        <Separator className="mb-3 mt-5" />
        <div className="font-bold flex flex-row items-center gap-2">
          {linkIcons.map(({ href, icon }) => (
            <LinkIcon key={href} href={href} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
