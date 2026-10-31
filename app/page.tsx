"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import Boot from "@/components/boot";
import type { CameraCmd, Phase } from "@/components/city-scene";
import Fallback from "@/components/fallback";
import Feed from "@/components/feed";
import { ContactPanel, Controls, DetailPanel, HintBar, StatCards, TopBar, type Tab } from "@/components/hud";
import Pipeline from "@/components/pipeline";
import { buildings } from "@/config/content";
import { areaOf, lots } from "@/lib/city-data";

const CityScene = dynamic(() => import("@/components/city-scene"), { ssr: false });

type Mode = "pending" | "3d" | "list";

function pickMode(): Mode {
  const gl = document.createElement("canvas").getContext("webgl2");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return gl && !calm && window.innerWidth >= 768 ? "3d" : "list";
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("pending");
  const [phase, setPhase] = useState<Phase>("boot");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [command, setCommand] = useState<{ cmd: CameraCmd; n: number } | null>(null);
  const send = (cmd: CameraCmd) => setCommand((c) => ({ cmd, n: (c?.n ?? 0) + 1 }));

  useEffect(() => setMode(pickMode()), []);

  const select = (id: string | null) => {
    setSelectedId(id);
    const lot = lots.find((l) => l.building.id === id);
    if (lot) send({ kind: "focus", x: lot.pos[0] + 4, z: lot.pos[1], span: 48 });
  };
  const focusTab = (t: Tab) => {
    setSelectedId(null);
    const a = areaOf(t.districts);
    send({ kind: "focus", x: a.x, z: a.z, span: a.span * 1.6 + 20 });
  };
  const reset = () => {
    setSelectedId(null);
    send({ kind: "reset" });
  };

  const startIntro = useCallback(() => setPhase((p) => (p === "boot" ? "intro" : p)), []);
  const introDone = useCallback(() => setPhase("ready"), []);

  useEffect(() => {
    if (mode !== "3d") return;
    const onKey = (e: KeyboardEvent) => {
      if (phase !== "ready") return setPhase("ready");
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === "r" || e.key === "R") reset();
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const selected = buildings.find((b) => b.id === selectedId);

  return (
    <main className="relative min-h-screen" data-ready={phase === "ready" || mode === "list"}>
      <Fallback visible={mode === "list"} />

      {mode === "3d" && (
        <>
          <div className="fixed inset-0" onPointerDown={() => phase !== "ready" && setPhase("ready")}>
            <CityScene
              phase={phase}
              selectedId={selectedId}
              onSelect={select}
              onIntroDone={introDone}
              command={command}
            />
          </div>

          <div className="pointer-events-none fixed inset-0 z-20 flex flex-col gap-2 p-3 [&>*]:pointer-events-auto">
            <TopBar onTab={focusTab} onContact={() => setSelectedId("contact")} />
            <StatCards />
            <div>
              <HintBar />
            </div>
          </div>

          <div className="fixed top-[76px] right-3 z-20 flex items-start gap-2">
            {selected && <DetailPanel building={selected} onClose={() => setSelectedId(null)} />}
            {selectedId === "contact" && <ContactPanel onClose={() => setSelectedId(null)} />}
            <div>
              <Controls onZoom={(factor) => send({ kind: "zoom", factor })} onReset={reset} />
            </div>
          </div>

          <div className="fixed bottom-3 left-3 z-20">
            <Pipeline />
          </div>
          <div className="fixed right-3 bottom-3 z-20">
            <Feed />
          </div>

          <Boot visible={phase === "boot"} onDone={startIntro} />
        </>
      )}
    </main>
  );
}
