"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemePreviewBox } from "./ThemePreviewBox";

function CrispButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm border border-white/28 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-[11px] text-[11px] font-medium uppercase tracking-[0.16em] text-white/92 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(255,255,255,0.06)] transition-[border-color,background-color,box-shadow,color] duration-150 hover:border-white/42 hover:from-white/[0.1] hover:to-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.99]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80"
      />
      <span className="relative">Continue</span>
      <span
        aria-hidden
        className="relative text-[10px] text-white/45 transition-colors duration-150 group-hover:text-white/75"
      >
        ↗
      </span>
    </button>
  );
}

function CrispTag() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      <span className="inline-flex items-stretch overflow-hidden rounded-sm border border-white/22 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        <span className="flex items-center bg-white/[0.06] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/55">
          v2
        </span>
        <span className="flex items-center border-l border-white/15 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-white/88">
          Crisp
        </span>
      </span>
      <span className="inline-flex items-center rounded-sm border border-white/18 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
        Silver
      </span>
    </div>
  );
}

function CrispInput() {
  return (
    <div className="flex w-full max-w-[232px] flex-col gap-2 text-left">
      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/48">
        Email
      </span>
      <div className="rounded-sm border border-white/22 bg-black/60 p-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-[6px]">
        <input
          type="email"
          autoComplete="off"
          placeholder="name@studio.dev"
          className="w-full rounded-[5px] bg-transparent px-3 py-2.5 text-[13px] font-normal tracking-[0.02em] text-white placeholder:text-white/32 outline-none ring-0 transition-[box-shadow] duration-150 focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]"
        />
      </div>
      <p className="pl-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/28">
        Required · encrypted
      </p>
    </div>
  );
}

function CrispLoader() {
  return (
    <div className="flex flex-col items-center gap-3.5">
      <div className="relative flex items-center justify-center" role="status" aria-label="Loading">
        <svg
          className="size-[42px] animate-[spin_1.35s_linear_infinite]"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1"
            strokeDasharray="10 30"
            strokeLinecap="square"
          />
        </svg>
        <span className="pointer-events-none absolute text-[8px] font-medium uppercase tracking-[0.22em] text-white/40">
          ···
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/38">
          Syncing
        </span>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      </div>
    </div>
  );
}

function CrispToggle() {
  const id = useId();
  const [on, setOn] = useState(true);

  return (
    <div className="flex items-center gap-3.5">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "relative h-7 w-[46px] shrink-0 rounded-full border transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          on
            ? "border-white/35 bg-white/[0.14] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
            : "border-white/18 bg-black/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 size-[22px] -translate-y-1/2 rounded-full border border-white/25 bg-gradient-to-b from-white/95 to-white/75 shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-[left] duration-200 ease-out",
            on ? "left-[calc(100%-24px)]" : "left-0.5",
          )}
          aria-hidden
        />
      </button>
      <div className="flex flex-col items-start gap-0.5">
        <label
          htmlFor={id}
          className="cursor-pointer text-[11px] font-medium tracking-[0.04em] text-white/78"
        >
          Grid snap
        </label>
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/35">
          {on ? "Enabled" : "Paused"}
        </span>
      </div>
    </div>
  );
}

function CrispToastDemo() {
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
        className="rounded-sm border border-white/24 bg-gradient-to-b from-white/[0.06] to-transparent px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/78 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-[border-color,color,background-color] duration-150 hover:border-white/38 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Push toast
      </button>

      <div
        className="relative min-h-[52px] overflow-hidden rounded-sm border border-white/[0.12] bg-black/55 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
        aria-live="polite"
      >
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex gap-3 border-t border-white/15 bg-gradient-to-t from-black/95 to-black/75 px-3 py-2.5 backdrop-blur-[8px] transition-[opacity,transform] duration-300 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-full opacity-0",
          )}
        >
          <span
            className="mt-0.5 h-8 w-0.5 shrink-0 rounded-full bg-gradient-to-b from-white/70 to-white/25"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium leading-snug tracking-[0.02em] text-white/92">
              Published successfully.
            </p>
            <p className="mt-1 font-mono text-[9px] leading-none tracking-[0.08em] text-white/38">
              SILVER_UI · CRISP · OK
            </p>
          </div>
        </div>
        {!open ? (
          <div className="flex min-h-[52px] items-center justify-center px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/26">
            Preview
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CrispThemePreview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ThemePreviewBox title="Button">
        <CrispButton />
      </ThemePreviewBox>
      <ThemePreviewBox title="Tag">
        <CrispTag />
      </ThemePreviewBox>
      <ThemePreviewBox title="Input">
        <CrispInput />
      </ThemePreviewBox>
      <ThemePreviewBox title="Loader">
        <CrispLoader />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toggle">
        <CrispToggle />
      </ThemePreviewBox>
      <ThemePreviewBox title="Toast">
        <CrispToastDemo />
      </ThemePreviewBox>
    </div>
  );
}
