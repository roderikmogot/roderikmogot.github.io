"use client";

import { useEffect, useState } from "react";
import { buildings, districts, roles } from "@/config/content";

const LINES = [
  "$ boot roderik-mogot --v3",
  `› mounting districts ........ ${districts.length}`,
  `› raising buildings ......... ${buildings.length}`,
  `› loading pipeline .......... ${roles.length} roles`,
  "› status .................... OPEN TO WORK",
];
const TEXT = LINES.join("\n");

/** Terminal boot sequence shown before the camera fly-in. */
export default function Boot({ visible, onDone }: { visible: boolean; onDone: () => void }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n >= TEXT.length) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((v) => v + 3), TEXT[n] === "\n" ? 120 : 8);
    return () => clearTimeout(t);
  }, [n, onDone]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 grid place-items-center bg-ink transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <div className="w-[min(560px,90vw)]">
        <pre className="caret font-mono text-[13px] leading-6 whitespace-pre-wrap text-client">
          {TEXT.slice(0, n)}
        </pre>
        <p className="label mt-6">Press any key to skip</p>
      </div>
    </div>
  );
}
