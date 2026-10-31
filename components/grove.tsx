"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HeroShapes } from "@/components/shapes";

const GroveScene = dynamic(() => import("@/components/grove-scene"), { ssr: false, loading: () => <HeroShapes /> });

/** Hero forest. SVG shapes until WebGL is confirmed; a still frame under reduced motion. */
export default function Grove({ roles }: { roles: number }) {
  const [mode, setMode] = useState<"svg" | "live" | "still">("svg");

  useEffect(() => {
    const webgl = !!document.createElement("canvas").getContext("webgl2");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only checks
    if (webgl) setMode(reduce ? "still" : "live");
  }, []);

  if (mode === "svg") return <HeroShapes />;
  return (
    <div className="aspect-[8/7] w-full">
      <GroveScene roles={roles} still={mode === "still"} />
    </div>
  );
}
