"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HeroShapes } from "@/components/shapes";

const GroveScene = dynamic(() => import("@/components/grove-scene"), { ssr: false, loading: () => <HeroShapes /> });

/** Hero forest. SVG shapes until WebGL is confirmed; a still frame under reduced motion. */
export default function Grove({ roles }: { roles: number }) {
  const [mode, setMode] = useState<"svg" | "live" | "still">("svg");

  useEffect(() => {
    if (!document.createElement("canvas").getContext("webgl2")) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMode(reduce.matches ? "still" : "live");
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  if (mode === "svg") return <HeroShapes />;
  return (
    <div className="aspect-[8/7] w-full">
      <GroveScene roles={roles} still={mode === "still"} />
    </div>
  );
}
