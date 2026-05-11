"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function FlowButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/18 bg-gradient-to-br from-white/[0.09] via-transparent to-white/[0.04] px-8 py-3 font-public-sans text-[13px] font-light tracking-wide text-white/90 shadow-[0_0_32px_-14px_rgba(255,255,255,0.35)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-white/32 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.99]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-90"
      >
        <span className="absolute -left-1/4 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-md" />
      </span>
      <span className="relative">Begin</span>
      <span
        aria-hidden
        className="relative ml-1.5 inline-block transition-transform duration-300 ease-out group-hover:translate-x-0.5"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/45 transition-colors duration-300 group-hover:text-white/75"
          aria-hidden
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

function FlowTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-0">
      <span className="z-[1] inline-flex items-center rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[10px] font-light uppercase tracking-[0.16em] text-white/78 shadow-[0_8px_28px_-12px_rgba(255,255,255,0.35)] backdrop-blur-[2px]">
        Flow
      </span>
      <span
        aria-hidden
        className="-mx-2 h-px w-10 bg-gradient-to-r from-white/25 via-white/45 to-white/25"
      />
      <span className="z-[1] inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-light uppercase tracking-[0.14em] text-white/48">
        Silver
      </span>
    </div>
  );
}

function FlowInput() {
  return (
    <label className="flex w-full max-w-[248px] flex-col gap-2.5 text-left">
      <span className="text-[10px] font-light uppercase tracking-[0.18em] text-white/42">
        Stream
      </span>
      <input
        type="text"
        placeholder="Write freely…"
        className="w-full rounded-2xl border border-white/14 bg-black/45 px-4 py-3 text-[14px] font-light text-white placeholder:text-white/32 outline-none ring-0 transition-[border-color,box-shadow] duration-300 ease-out focus:border-white/28 focus:shadow-[0_0_28px_-14px_rgba(255,255,255,0.35)]"
      />
      <span className="text-[9px] font-light tracking-[0.06em] text-white/28">
        Moves with you — soft edges, steady rhythm.
      </span>
    </label>
  );
}

function FlowLoader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative flex size-[52px] items-center justify-center"
        role="status"
        aria-label="Loading"
      >
        <svg
          className="size-[52px] -rotate-90 animate-spin"
          style={{ animationDuration: "2.2s" }}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="32 94"
            className="origin-center"
          />
        </svg>
        <span className="pointer-events-none absolute text-[9px] font-light uppercase tracking-[0.2em] text-white/35">
          ···
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-light uppercase tracking-[0.22em] text-white/38">
          In motion
        </span>
        <div className="h-[2px] w-14 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent animate-[shimmer_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

function FlowToggle() {
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
          "relative h-9 w-[3.25rem] shrink-0 rounded-full border transition-[border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          on
            ? "border-white/28 bg-gradient-to-r from-white/[0.14] to-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_-12px_rgba(255,255,255,0.35)]"
            : "border-white/14 bg-black/40",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-[26px] -translate-y-1/2 rounded-full border border-white/25 bg-gradient-to-b from-white to-white/85 shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-[left] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
            on ? "left-[calc(100%-28px)]" : "left-0.5",
          )}
          aria-hidden
        />
      </button>
      <div className="flex min-w-0 flex-col gap-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-[12px] font-light tracking-wide text-white/78"
        >
          Fluid layout
        </label>
        <span className="text-[9px] font-light uppercase tracking-[0.16em] text-white/35">
          {on ? "Stretch & wrap" : "Fixed grid"}
        </span>
      </div>
    </div>
  );
}

function FlowToastDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 3400);
    return () => window.clearTimeout(t);
  }, [open]);

  return (
    <div className="relative flex w-full max-w-[272px] flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/16 bg-gradient-to-r from-white/[0.06] to-transparent px-5 py-2.5 text-[11px] font-light uppercase tracking-[0.14em] text-white/78 transition-[border-color,box-shadow,color] duration-300 hover:border-white/28 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Raise toast
      </button>

      <div
        className="relative min-h-[56px] overflow-hidden rounded-2xl border border-white/[0.1] bg-black/50 shadow-[0_16px_48px_-20px_rgba(255,255,255,0.22)]"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-80" />
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 rounded-xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-black/90 px-3.5 py-3 shadow-[0_0_36px_-14px_rgba(255,255,255,0.25)] backdrop-blur-[10px] transition-[opacity,transform] duration-300 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-[125%] opacity-0",
          )}
        >
          <p className="text-[12px] font-light leading-relaxed text-white/90">
            Changes drifted in — everything stays aligned.
          </p>
          <p className="mt-1.5 text-[9px] font-light uppercase tracking-[0.14em] text-white/36">
            Silver UI · flow
          </p>
        </div>
        {!open ? (
          <div className="flex min-h-[56px] items-center justify-center px-4 py-3 text-[11px] font-light text-white/28">
            Quiet surface
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function FlowThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <FlowButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <FlowTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <FlowInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <FlowLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <FlowToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <FlowToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
