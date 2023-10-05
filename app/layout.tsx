import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

import { fontSans } from "@/lib/fonts";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased bg-[url('../public/background-light.svg')] dark:bg-[url('../public/background-dark.svg')]",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex flex-col">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
