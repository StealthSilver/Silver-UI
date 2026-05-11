"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function MinimalButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-1.5 rounded-none border border-white/15 px-6 py-[11px] text-sm font-light leading-6 text-white/85 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25"
    >
      Action
      <span aria-hidden className="text-white/50">
        →
      </span>
    </button>
  );
}

function MinimalTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="inline-flex items-center border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.14em] text-white/70">
        Silver
      </span>
      <span className="inline-flex items-center border border-white/10 bg-transparent px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.14em] text-white/50">
        Minimal
      </span>
    </div>
  );
}

function MinimalInput() {
  return (
    <label className="flex w-full max-w-[220px] flex-col gap-2 text-left">
      <span className="text-[10px] font-light uppercase tracking-[0.14em] text-white/40">
        Label
      </span>
      <input
        type="text"
        placeholder="Type something…"
        className="w-full rounded-none border border-white/15 bg-black/40 px-3 py-2.5 text-sm font-light text-white placeholder:text-white/35 transition-[border-color,box-shadow] duration-200 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/15"
      />
    </label>
  );
}

function MinimalLoader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/[0.12] border-t-white/55"
        role="status"
        aria-label="Loading"
      />
      <span className="text-[10px] font-light uppercase tracking-[0.14em] text-white/35">
        Loading
      </span>
    </div>
  );
}

function MinimalToggle() {
  const id = useId();
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-none border transition-[border-color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25",
          on
            ? "border-white/35 bg-white/[0.08]"
            : "border-white/15 bg-black/30",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 border border-white/20 bg-white/[0.85] shadow-none transition-[left] duration-200",
            on ? "left-[1.75rem]" : "left-1",
          )}
          aria-hidden
        />
      </button>
      <label
        htmlFor={id}
        className="cursor-pointer text-xs font-light text-white/55"
      >
        {on ? "On" : "Off"}
      </label>
    </div>
  );
}

function MinimalToastDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 2800);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div className="relative flex w-full max-w-[260px] flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-none border border-white/15 px-4 py-2 text-xs font-light text-white/75 transition-[border-color,background-color,color] duration-200 hover:border-white/30 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25"
      >
        Show toast
      </button>

      <div
        className="relative min-h-[52px] overflow-hidden border border-white/[0.08] bg-black/50"
        aria-live="polite"
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t border-line bg-black/90 px-3 py-2.5 transition-[opacity,transform] duration-300",
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none",
          )}
        >
          <p className="text-[11px] font-light leading-snug text-white/85">
            Saved — your changes are live.
          </p>
          <p className="mt-0.5 text-[10px] font-light text-white/40">
            Silver UI · minimal
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[52px] items-center justify-center px-3 py-2 text-center text-[10px] font-light uppercase tracking-[0.12em] text-white/30">
            Preview area
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function MinimalThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <MinimalButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <MinimalTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <MinimalInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <MinimalLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <MinimalToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <MinimalToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
