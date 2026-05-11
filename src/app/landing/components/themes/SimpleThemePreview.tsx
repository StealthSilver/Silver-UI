"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function SimpleButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-none border border-white/12 bg-transparent px-7 py-3 font-public-sans text-[13px] font-light tracking-wide text-white/82 transition-[border-color,background-color,color] duration-200 hover:border-white/28 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
    >
      Continue
    </button>
  );
}

function SimpleTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] font-light tracking-wide text-white/55">
      <span>Silver UI</span>
      <span aria-hidden className="text-white/25">
        ·
      </span>
      <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/45">
        Simple
      </span>
    </div>
  );
}

function SimpleInput() {
  return (
    <label className="flex w-full max-w-[240px] flex-col gap-3 text-left">
      <span className="text-[11px] font-light text-white/50">Name</span>
      <div className="border-b border-white/15 pb-2 transition-[border-color] duration-200 focus-within:border-white/35">
        <input
          type="text"
          placeholder="Add a name"
          className="w-full border-0 bg-transparent px-0 py-0.5 text-[15px] font-light text-white placeholder:text-white/30 outline-none ring-0"
        />
      </div>
    </label>
  );
}

function SimpleLoader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex items-center gap-2"
        role="status"
        aria-label="Loading"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-white/35 motion-safe:animate-pulse"
            style={{
              animationDelay: `${i * 160}ms`,
              animationDuration: "1.4s",
            }}
          />
        ))}
      </div>
      <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/30">
        Please wait
      </span>
    </div>
  );
}

function SimpleToggle() {
  const id = useId();
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-[22px] w-10 shrink-0 rounded-full border transition-[border-color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25",
          on
            ? "border-white/28 bg-white/[0.07]"
            : "border-white/12 bg-transparent",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-[14px] -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.88] shadow-none transition-[left] duration-200 ease-out",
            on ? "left-[calc(100%-18px)]" : "left-0.5",
          )}
          aria-hidden
        />
      </button>
      <label
        htmlFor={id}
        className="cursor-pointer text-[12px] font-light text-white/55"
      >
        {on ? "Notifications on" : "Notifications off"}
      </label>
    </div>
  );
}

function SimpleToastDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 3000);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div className="relative flex w-full max-w-[260px] flex-col items-stretch gap-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-none border border-white/12 px-4 py-2 text-[12px] font-light text-white/70 transition-[border-color,color] duration-200 hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
      >
        Show message
      </button>

      <div
        className="relative min-h-[52px] overflow-hidden border border-white/[0.06] bg-black/40"
        aria-live="polite"
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t border-line bg-black/90 px-3 py-3 transition-[opacity,transform] duration-300 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0",
          )}
        >
          <p className="text-[13px] font-light leading-snug text-white/85">
            Done.
          </p>
          <p className="mt-1 text-[10px] font-light text-white/35">
            Silver UI · simple
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[52px] items-center justify-center px-3 py-2 text-[11px] font-light text-white/28">
            Empty
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function SimpleThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <SimpleButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <SimpleTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <SimpleInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <SimpleLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <SimpleToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <SimpleToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
