"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";
import styles from "./BrutalistThemePreview.module.css";

function BrutalistButton() {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center gap-2 border-[3px] border-white/35 bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[5px_5px_0_0_rgba(255,255,255,0.14)] transition-[transform,box-shadow,border-color] duration-75 hover:translate-x-[3px] hover:translate-y-[3px] hover:border-white/45 hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:translate-x-[5px] active:translate-y-[5px] active:shadow-none"
    >
      <span aria-hidden className="inline-block size-1.5 bg-white/70" />
      Action
      <span aria-hidden className="inline-block size-1.5 bg-white/70" />
    </button>
  );
}

function BrutalistTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="inline-flex items-center border-[3px] border-white/35 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_0_rgba(255,255,255,0.1)]">
        Silver
      </span>
      <span className="inline-flex items-center border-[3px] border-dashed border-white/25 bg-transparent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
        Brutalist
      </span>
    </div>
  );
}

function BrutalistInput() {
  return (
    <div className="relative w-full max-w-[240px] pt-3">
      <div className="absolute -top-0 left-0 z-10 border-[3px] border-white/35 bg-white/[0.08] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white shadow-[2px_2px_0_0_rgba(255,255,255,0.08)]">
        Input 01
      </div>
      <input
        type="text"
        placeholder="TYPE HERE…"
        className="w-full border-[3px] border-white/25 bg-black px-4 py-3.5 pt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white placeholder:text-white/30 transition-[border-color,box-shadow] duration-100 focus:border-white/45 focus:outline-none focus:shadow-[4px_4px_0_0_rgba(255,255,255,0.12)]"
      />
    </div>
  );
}

function BrutalistLoader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
        <div
          className={cn(
            "relative flex size-14 items-center justify-center border-[3px] border-white/35 bg-white/[0.06]",
            styles.jitter,
          )}
          role="status"
          aria-label="Loading"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Wait
          </span>
        </div>

        <div className="relative h-10 w-[9.5rem] overflow-hidden border-[3px] border-white/30 bg-black">
          <div
            className={cn(
              "h-full w-full bg-gradient-to-r from-white/25 via-white/45 to-white/25",
              styles.fillInner,
            )}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[9px] font-semibold uppercase tracking-[0.25em] text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.9)]">
            Load
          </span>
        </div>
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
        Loading
      </span>
    </div>
  );
}

function BrutalistToggle() {
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
          "relative h-12 w-[7.25rem] shrink-0 cursor-pointer border-[3px] transition-colors duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35",
          on ? "border-white/40 bg-white/[0.12]" : "border-white/25 bg-black",
        )}
      >
        <span
          className={cn(
            "absolute top-1 flex h-9 w-12 items-center justify-center border-[3px] border-white/35 bg-white/[0.92] text-[10px] font-semibold uppercase tracking-wider text-black shadow-[3px_3px_0_0_rgba(255,255,255,0.15)] transition-[left,right] duration-75",
            on ? "left-auto right-1" : "left-1 right-auto",
          )}
          aria-hidden
        >
          {on ? "On" : "Off"}
        </span>
      </button>
      <label
        htmlFor={id}
        className="cursor-pointer text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55"
      >
        {on ? "Active" : "Hold"}
      </label>
    </div>
  );
}

function BrutalistToastDemo() {
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
        className="border-[3px] border-white/35 bg-black px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[4px_4px_0_0_rgba(255,255,255,0.12)] transition-[transform,box-shadow] duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        Show toast
      </button>

      <div
        className="relative min-h-[52px] overflow-hidden border-[3px] border-white/20 bg-black/80"
        aria-live="polite"
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t-[3px] border-white/25 bg-black px-3 py-2.5 shadow-[0_-4px_0_0_rgba(255,255,255,0.06)] transition-[opacity,transform] duration-200",
            open
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none",
          )}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.06em] leading-snug text-white/90">
            Saved — live now.
          </p>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Silver UI · brutalist
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[52px] items-center justify-center px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/28">
            Preview area
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function BrutalistThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <BrutalistButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <BrutalistTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <BrutalistInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <BrutalistLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <BrutalistToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <BrutalistToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
