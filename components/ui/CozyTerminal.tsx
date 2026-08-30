"use client";

import { useEffect, useState } from "react";

export default function CozyTerminal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {open && (
        <div
          role="dialog"
          aria-label="Cozy terminal easter egg"
          className="mb-3 w-[min(90vw,380px)] rounded-2xl border border-border bg-surface/95 p-4 font-mono text-xs text-muted shadow-2xl backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center gap-2 text-text">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            ava@cozyfolio ~ $
          </div>
          <p className="text-primary">whoami</p>
          <p className="mt-1">Ava — builder of oddly specific software.</p>
          <p className="mt-3 text-primary">status</p>
          <p className="mt-1">making things cozy, one commit at a time.</p>
          <p className="mt-3 text-muted/70">Press Esc to close.</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-border bg-surface/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted shadow-lg backdrop-blur transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-expanded={open}
        aria-label="Toggle the hidden cozy terminal"
      >
        ✦ cozy
      </button>
    </div>
  );
}
