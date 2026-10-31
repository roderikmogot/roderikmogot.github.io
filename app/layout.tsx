import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

import { Analytics } from "@/components/analytics";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Roderik Yohanes Mogot", "Roderik Mogot", "Software Engineer"],
  authors: [
    {
      name: "Roderik Mogot",
      url: "https://roderikmogot.github.io",
    },
  ],
  creator: "Roderik Mogot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
