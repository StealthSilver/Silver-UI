"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function AmazingButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/25 bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-transparent px-7 py-3 text-sm font-light shadow-[0_0_28px_-10px_rgba(255,255,255,0.45),inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-[transform,box-shadow,border-color] duration-300 hover:border-white/40 hover:shadow-[0_0_36px_-8px_rgba(255,255,255,0.55),inset_0_1px_0_0_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.985]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-xl" />
      </span>
      <span className="relative shiny-text font-public-sans text-[13px] tracking-[0.06em]">
        Discover
      </span>
      <span
        aria-hidden
        className="relative text-lg leading-none text-white/40 transition-colors duration-300 group-hover:text-white/70"
      >
        ✦
      </span>
    </button>
  );
}

function AmazingTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-white/[0.12] to-white/[0.04] px-3.5 py-1.5 shadow-[0_0_20px_-10px_rgba(255,255,255,0.35)]">
        <span
          aria-hidden
          className="text-[10px] text-white/50"
        >
          ✦
        </span>
        <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/88">
          Featured
        </span>
      </span>
      <span className="inline-flex rounded-full border border-dashed border-white/22 bg-black/30 px-3 py-1.5 text-[10px] font-light uppercase tracking-[0.16em] text-white/45">
        Silver
      </span>
    </div>
  );
}

function AmazingInput() {
  return (
    <div className="flex w-full max-w-[240px] flex-col gap-2 text-left">
      <span className="text-[10px] font-light uppercase tracking-[0.2em] text-white/45">
        Workspace
      </span>
      <div className="relative rounded-lg p-[1px] shadow-[0_0_24px_-14px_rgba(255,255,255,0.45)]">
        <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-white/35 via-white/10 to-white/5 opacity-80" />
        <input
          type="text"
          autoComplete="off"
          placeholder="Name your project…"
          className="relative w-full rounded-[7px] border border-white/10 bg-black/70 px-3.5 py-2.5 text-[13px] font-light text-white placeholder:text-white/35 backdrop-blur-sm outline-none transition-[box-shadow] duration-300 focus:border-white/25 focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),0_0_20px_-8px_rgba(255,255,255,0.35)]"
        />
      </div>
      <p className="text-[9px] font-light tracking-[0.08em] text-white/30">
        Shines when focused — still monochrome.
      </p>
    </div>
  );
}

function AmazingLoader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative flex size-[52px] items-center justify-center"
        role="status"
        aria-label="Loading"
      >
        <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full border border-white/12" />
        <div className="absolute inset-[5px] animate-[spin_2.8s_linear_infinite] rounded-full border border-white/10 [animation-direction:reverse]" />
        <div className="absolute inset-[10px] animate-[spin_1.15s_linear_infinite] rounded-full border-b-transparent border-l-transparent border-r-transparent border-t border-white/55" />
        <span
          aria-hidden
          className="relative text-[11px] text-white/35"
        >
          ◎
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-[10px] font-light uppercase tracking-[0.22em] text-white/40">
          Working magic
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}

function AmazingToggle() {
  const id = useId();
  const [on, setOn] = useState(true);

  return (
    <div className="flex items-center gap-4">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-8 w-[52px] shrink-0 rounded-full border transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          on
            ? "border-white/35 bg-gradient-to-r from-white/[0.18] to-white/[0.06] shadow-[0_0_22px_-10px_rgba(255,255,255,0.55),inset_0_0_0_1px_rgba(255,255,255,0.12)]"
            : "border-white/15 bg-black/40 shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-[26px] -translate-y-1/2 rounded-full border border-white/30 bg-gradient-to-b from-white to-white/80 shadow-[0_2px_12px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.45)] transition-[left] duration-300 ease-out",
            on ? "left-[calc(100%-28px)]" : "left-0.5",
          )}
          aria-hidden
        />
      </button>
      <div className="flex flex-col gap-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-[12px] font-light tracking-wide text-white/78"
        >
          Aura mode
        </label>
        <span className="text-[9px] font-light uppercase tracking-[0.18em] text-white/35">
          {on ? "Radiant" : "Quiet"}
        </span>
      </div>
    </div>
  );
}

function AmazingToastDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 3200);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div className="relative flex w-full max-w-[268px] flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-white/22 bg-gradient-to-b from-white/[0.1] to-transparent px-4 py-2.5 text-[11px] font-light uppercase tracking-[0.14em] text-white/78 shadow-[0_0_20px_-12px_rgba(255,255,255,0.5)] transition-[border-color,box-shadow,color] duration-300 hover:border-white/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Reveal toast
      </button>

      <div
        className="relative min-h-[56px] overflow-hidden rounded-xl border border-white/12 bg-black/50 shadow-[0_12px_40px_-16px_rgba(255,255,255,0.25)]"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div
          className={cn(
            "absolute inset-x-2 bottom-2 rounded-lg border border-white/15 bg-gradient-to-b from-white/[0.1] to-black/90 px-3 py-2.5 shadow-[0_0_32px_-12px_rgba(255,255,255,0.4)] backdrop-blur-md transition-[opacity,transform] duration-300 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-[120%] opacity-0",
          )}
        >
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-[12px] text-white/50" aria-hidden>
              ✦
            </span>
            <p className="text-[11px] font-light leading-snug text-white/92">
              You&apos;re in — welcome aboard.
            </p>
          </div>
          <p className="pl-5 text-[9px] font-light uppercase tracking-[0.16em] text-white/38">
            Silver UI · amazing
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[56px] items-center justify-center px-4 py-3 text-center text-[10px] font-light uppercase tracking-[0.2em] text-white/25">
            Preview
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function AmazingThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <AmazingButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <AmazingTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <AmazingInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <AmazingLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <AmazingToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <AmazingToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
