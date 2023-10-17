"use client";

import Container from "@/components/container";
import DarkModeButton from "@/components/dark-mode";
import LeftSidebar from "@/components/left-sidebar";
import { PageHeader } from "@/components/page-header";
import "./globals.css";

export default function Home() {
  return (
    <div className="container relative p-8">
      <div className="flex flex-col md:flex-row items-start gap-4 w-full">
        <PageHeader className="w-full md:w-[25%]">
          <LeftSidebar />
        </PageHeader>
        <PageHeader className="bg-transparent bg-opacity-20 backdrop-blur-lg backdrop-filter rounded-lg shadow-2xl w-full md:w-[75%]">
          <Container />
        </PageHeader>
      </div>
      <div className="mt-8 w-full flex justify-end">
        <DarkModeButton />
      </div>
    </div>
  );
}
