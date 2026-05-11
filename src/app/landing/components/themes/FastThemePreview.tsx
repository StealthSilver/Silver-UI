"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function FastButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex -skew-x-3 items-center justify-center gap-2 overflow-hidden border border-white/15 bg-black px-6 py-2.5 font-public-sans text-[11px] font-light uppercase tracking-[0.2em] text-white/88 transition-[border-color,background-color,transform] duration-100 hover:border-white/35 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25 active:translate-x-px active:translate-y-px"
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-white/45 via-white/25 to-white/10 opacity-90 transition-opacity duration-100 group-hover:opacity-100"
      />
      <span className="skew-x-3">Go</span>
      <span
        aria-hidden
        className="skew-x-3 text-[10px] text-white/40 transition-transform duration-100 group-hover:translate-x-0.5 group-hover:text-white/70"
      >
        ››
      </span>
    </button>
  );
}

function FastTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="inline-flex items-center gap-2 border border-white/15 bg-black px-2.5 py-1 text-[9px] font-light uppercase tracking-[0.22em] text-white/75">
        <span
          aria-hidden
          className="inline-block h-3 w-px bg-gradient-to-b from-white/50 to-white/10"
        />
        Fast
      </span>
      <span className="inline-flex items-center border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] font-light tabular-nums tracking-wide text-white/55">
        &lt;16ms
      </span>
      <span className="inline-flex items-center border border-dashed border-white/18 px-2 py-1 text-[9px] font-light uppercase tracking-[0.18em] text-white/40">
        Silver
      </span>
    </div>
  );
}

function FastInput() {
  return (
    <label className="flex w-full max-w-[228px] flex-col gap-2 text-left">
      <span className="text-[10px] font-light uppercase tracking-[0.16em] text-white/40">
        Route
      </span>
      <div className="relative flex w-full border border-white/15 bg-black/50 pl-1 transition-[border-color] duration-100 focus-within:border-white/30">
        <span
          aria-hidden
          className="my-1.5 w-0.5 shrink-0 bg-gradient-to-b from-white/55 via-white/35 to-white/10"
        />
        <input
          type="text"
          placeholder="/api/edge"
          className="min-w-0 flex-1 border-0 bg-transparent py-2 pl-2.5 pr-3 text-[13px] font-light text-white placeholder:text-white/32 outline-none ring-0"
        />
      </div>
      <span className="text-[9px] font-light uppercase tracking-[0.14em] text-white/28">
        Cold start · warm path
      </span>
    </label>
  );
}

function FastLoader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative h-1 w-[7.5rem] overflow-hidden border border-white/12 bg-black/60"
        role="status"
        aria-label="Loading"
      >
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_0.55s_linear_infinite]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-light uppercase tracking-[0.22em] text-white/38">
          Sprint
        </span>
        <span
          aria-hidden
          className="h-px w-8 bg-gradient-to-r from-white/25 via-white/45 to-white/25"
        />
      </div>
    </div>
  );
}

function FastToggle() {
  const id = useId();
  const [on, setOn] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-none border transition-[border-color,background-color] duration-100 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30",
          on
            ? "border-white/32 bg-white/[0.09]"
            : "border-white/15 bg-black/40",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 border border-white/25 bg-white/[0.92] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[left] duration-100 ease-out",
            on ? "left-[1.5rem]" : "left-1",
          )}
          aria-hidden
        />
      </button>
      <div className="flex min-w-0 flex-col gap-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-[11px] font-light tracking-wide text-white/72"
        >
          Turbo cache
        </label>
        <span className="text-[9px] font-light uppercase tracking-[0.16em] text-white/32">
          {on ? "Hot" : "Idle"}
        </span>
      </div>
    </div>
  );
}

function FastToastDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 2200);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div className="relative flex w-full max-w-[260px] flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-none border border-white/15 px-4 py-2 text-xs font-light text-white/78 transition-[border-color,background-color,color] duration-100 hover:border-white/32 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25"
      >
        Ping toast
      </button>

      <div
        className="relative min-h-[52px] overflow-hidden border border-white/[0.08] bg-black/55"
        aria-live="polite"
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t border-line bg-black/95 px-3 py-2.5 transition-[opacity,transform] duration-150 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0",
          )}
        >
          <p className="text-[11px] font-light leading-snug text-white/88">
            Edge response —{" "}
            <span className="font-mono tabular-nums text-white/65">12ms</span>.
          </p>
          <p className="mt-1 text-[10px] font-light uppercase tracking-[0.12em] text-white/38">
            Silver UI · fast
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[52px] items-center justify-center px-3 py-2 text-center text-[10px] font-light uppercase tracking-[0.14em] text-white/28">
            Preview
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function FastThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <FastButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <FastTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <FastInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <FastLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <FastToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <FastToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
