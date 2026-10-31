"use client";

import { useEffect, useState } from "react";
import { feed } from "@/config/content";

/** Rotating toast of recent news, bottom-right. */
export default function Feed() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setI((v) => (v + 1) % feed.length);
        setShown(true);
      }, 400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div role="status" className="panel hud-enter w-[340px] px-4 py-3">
      <div className="flex items-start gap-3 transition-opacity duration-400" style={{ opacity: shown ? 1 : 0 }}>
        <span className="mt-1.5 size-2 shrink-0 rounded-full bg-client" />
        <div>
          <p className="text-sm font-semibold">{feed[i]}</p>
          <p className="text-xs text-dim">
            feed · {i + 1}/{feed.length}
          </p>
        </div>
      </div>
    </div>
  );
}
