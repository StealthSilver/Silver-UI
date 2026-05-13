"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LandingSectionReveal } from "@/app/landing/components/ui/LandingSectionReveal";

const SCOPED_STYLES = `
@keyframes theme-showcase-fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes theme-showcase-slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes theme-showcase-shimmer-btn {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes theme-showcase-sweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
@keyframes theme-showcase-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes theme-showcase-atlas-bar {
  0% { width: 0%; }
  100% { width: 70%; }
}
@keyframes theme-showcase-prism-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes theme-showcase-pulse-dots {
  0%, 80%, 100% { opacity: 0.35; }
  40% { opacity: 1; }
}
.theme-showcase-fade-up { animation: theme-showcase-fade-up 0.35s ease-out forwards; }
.theme-showcase-slide-down { animation: theme-showcase-slide-down 0.35s ease-out forwards; }
.theme-showcase-shimmer-hover { animation: theme-showcase-shimmer-btn 1.5s infinite; }
.theme-showcase-sweep { animation: theme-showcase-sweep 1.2s ease-in-out infinite; }
.theme-showcase-marquee { animation: theme-showcase-marquee 12s linear infinite; }
.theme-showcase-atlas-bar { animation: theme-showcase-atlas-bar 2s ease-out forwards; }
.theme-showcase-prism-shift { animation: theme-showcase-prism-shift 3s ease infinite; background-size: 200% 200%; }
.theme-showcase-pulse-dots { animation: theme-showcase-pulse-dots 1.2s ease-in-out infinite; }
`;

function ComponentCard({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-line bg-background p-3 sm:p-4">
      <span className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {name}
      </span>
      <div className="flex min-h-[100px] flex-1 flex-col items-stretch justify-center gap-2">
        {children}
      </div>
    </div>
  );
}

/* ——— THEME 1: PULSE ——— */

function PulseButton() {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-none transition duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/40 hover:brightness-110"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      >
        <span className="theme-showcase-shimmer-hover absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </span>
      <span className="relative z-[1]">Get Early Access →</span>
    </button>
  );
}

function PulseTag() {
  const labels = ["AI-Powered", "New Release", "Beta"];
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {labels.map((t) => (
        <div
          key={t}
          className="rounded-full bg-gradient-to-r from-violet-400 to-blue-400 p-[1px]"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-0.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              {t}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function PulseLoader() {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-center gap-1.5">
        {[0, 150, 300].map((d) => (
          <span
            key={d}
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 animate-bounce"
            style={{ animationDelay: `${d}ms` }}
          />
        ))}
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-violet-500/20">
        <div className="theme-showcase-sweep h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
      </div>
    </div>
  );
}

function PulseToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-violet-400 underline-offset-2 hover:underline"
      >
        Show toast
      </button>
    );
  }
  return (
    <div className="theme-showcase-fade-up relative w-full max-w-[260px] rounded-xl border border-transparent bg-gradient-to-r from-violet-500/40 to-blue-500/40 p-[1px] shadow-lg shadow-violet-500/10">
      <div className="relative rounded-[11px] bg-background p-3 pl-4">
        <div className="absolute left-1 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 text-muted-foreground opacity-60 hover:opacity-100"
        >
          ✕
        </button>
        <div className="flex gap-2 pr-6">
          <span className="text-violet-500" aria-hidden>
            ⚡
          </span>
          <div>
            <p className="text-sm font-semibold">Update ready</p>
            <p className="text-xs text-muted-foreground">Neural index rebuilt.</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-1 text-xs text-violet-500 hover:underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PulseInput() {
  const [v, setV] = useState("");
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M16.5 16.5 21 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder="Search anything..."
        className="w-full rounded-lg border border-violet-200 bg-transparent py-2 pl-9 pr-14 text-sm text-foreground transition duration-200 placeholder:italic placeholder:text-muted-foreground focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-800"
      />
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded bg-muted px-1 text-[10px] text-muted-foreground">
        ⌘K
      </span>
    </div>
  );
}

function PulseToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className="flex w-full max-w-[200px] items-center gap-3"
    >
      <span
        className={`relative h-7 w-14 shrink-0 rounded-full p-0.5 transition duration-300 ease-in-out ${
          on
            ? "bg-gradient-to-r from-violet-500 to-blue-500"
            : "bg-muted"
        }`}
      >
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 text-[9px] font-semibold text-white/70"
          aria-hidden
        >
          <span>ON</span>
          <span>OFF</span>
        </span>
        <span
          className={`relative z-[1] mt-0.5 block h-5 w-5 rounded-full bg-white shadow transition duration-300 ease-in-out ${
            on ? "translate-x-[1.375rem]" : "translate-x-0.5"
          }`}
        />
      </span>
      <span className="text-left text-sm font-medium">AI Mode</span>
    </button>
  );
}

/* ——— THEME 2: FORGE ——— */

function ForgeButton() {
  return (
    <button
      type="button"
      className="cursor-pointer rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 font-mono text-sm text-green-400 transition hover:border-green-600 hover:bg-zinc-800 hover:text-green-300 focus:outline-none focus:ring-1 focus:ring-green-500/50 dark:bg-zinc-800"
    >
      <span className="text-zinc-500">$ </span>deploy --prod
    </button>
  );
}

function ForgeTag() {
  const tags = ["#v2.4.1", "#api", "#open-source"];
  return (
    <div className="flex flex-wrap justify-center gap-2 font-mono text-xs text-green-400">
      {tags.map((t) => (
        <span
          key={t}
          className="border border-zinc-700 bg-zinc-900 px-2 py-0.5 dark:bg-zinc-950"
        >
          <span className="text-zinc-500">#</span>
          {t.slice(1)}
        </span>
      ))}
    </div>
  );
}

function ForgeLoader() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const id = window.setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : `${d}.`));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);
  const log =
    "tail -f build.log | grep chunk | gzip on | edge cold start | worker spawn | cache hit ratio 0.94";
  return (
    <div className="w-full space-y-1 font-mono">
      <div className="flex items-center gap-2 text-xs">
        <span className="animate-pulse text-green-400">█</span>
        <span className="text-zinc-400">
          compiling{dots}
        </span>
      </div>
      <div className="overflow-hidden whitespace-nowrap text-[10px] text-zinc-600">
        <div className="theme-showcase-marquee inline-block min-w-[200%]">
          <span>{log}</span>
          <span className="pl-8">{log}</span>
        </div>
      </div>
    </div>
  );
}

function ForgeToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-mono text-[10px] text-zinc-500 hover:text-green-400"
      >
        replay log
      </button>
    );
  }
  return (
    <div className="w-full max-w-[280px] border border-zinc-800 bg-zinc-950 p-2 font-mono">
      <div className="mb-1 flex items-center justify-between text-[10px] text-zinc-600">
        <span>{'// system.log'}</span>
        <button
          type="button"
          className="text-zinc-500 hover:text-white"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
      </div>
      <p className="text-xs text-green-400">[SUCCESS] Build deployed in 1.2s</p>
      <p className="mt-1 text-[10px] text-zinc-600">2026-05-14T12:00:01Z</p>
    </div>
  );
}

function ForgeInput() {
  return (
    <div className="flex w-full overflow-hidden rounded-md border border-zinc-700 bg-zinc-900 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-500/40 dark:bg-zinc-950">
      <span className="flex items-center border-r border-zinc-700 bg-zinc-800 px-2 font-mono text-green-500">
        &gt;
      </span>
      <input
        placeholder="search docs..."
        className="min-w-0 flex-1 bg-transparent px-2 py-2 font-mono text-sm text-green-300 placeholder:text-zinc-600 focus:outline-none"
      />
    </div>
  );
}

function ForgeToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="flex items-center gap-2 text-left"
    >
      <span
        className={`relative h-6 w-11 rounded-sm border transition duration-150 ${
          on
            ? "border-green-600 bg-zinc-900"
            : "border-zinc-700 bg-zinc-800"
        }`}
      >
        <span
          className={`absolute top-1 left-1 h-3 w-3 rounded-[2px] transition duration-150 ${
            on ? "translate-x-5 bg-green-500" : "translate-x-0 bg-zinc-500"
          }`}
        />
      </span>
      <span className="font-mono text-xs text-zinc-400">
        verbose: {on ? "true" : "false"}
      </span>
    </button>
  );
}

/* ——— THEME 3: HALO ——— */

function HaloButton() {
  return (
    <button
      type="button"
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-light uppercase tracking-widest text-white backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 hover:ring-1 hover:ring-white/30"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 55%)",
        }}
      />
      <span className="relative">Initialize</span>
    </button>
  );
}

function HaloTag() {
  const items = ["Vision AI", "Neural", "Spatial"];
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-light uppercase tracking-wider text-white/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300/80" />
          {t}
        </span>
      ))}
    </div>
  );
}

function HaloLoader() {
  return (
    <div className="flex flex-col items-center">
      <div className="shadow-md shadow-white/20 rounded-full p-0.5">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white/80" />
      </div>
      <p className="mt-2 text-xs font-light tracking-widest text-white/50">
        initializing...
      </p>
    </div>
  );
}

function HaloToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-white/50 hover:text-white/80"
      >
        Restore signal
      </button>
    );
  }
  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent bg-white/10 p-3 backdrop-blur-xl">
      <button
        type="button"
        className="float-right text-white/40 hover:text-white/80"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
      <div className="flex gap-2 pr-6">
        <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-blue-300 shadow shadow-blue-300/60" />
        <div>
          <p className="text-sm font-light text-white">Spatial lock acquired</p>
          <p className="text-xs text-white/50">Rendering depth pass.</p>
        </div>
      </div>
    </div>
  );
}

function HaloInput() {
  return (
    <div className="group relative w-full">
      <input
        placeholder="Command neural stack..."
        className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-light text-white backdrop-blur placeholder:text-white/30 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
      />
      <div className="pointer-events-none absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-opacity duration-200 group-focus-within:opacity-100" />
    </div>
  );
}

function HaloToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="flex items-center gap-3 text-left"
    >
      <span
        className={`relative h-7 w-12 rounded-full border p-0.5 transition ${
          on
            ? "border-blue-300/50 bg-white/10 shadow-[0_0_8px_rgba(147,197,253,0.4)]"
            : "border-white/20 bg-white/10"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow-sm shadow-white/50 transition duration-300 ${
            on ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
      <span className="text-xs font-light uppercase tracking-wider text-white/70">
        Ambient UI
      </span>
    </button>
  );
}

/* ——— THEME 4: ATLAS ——— */

function AtlasButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-none transition hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 active:scale-[0.98]"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      Verify account
    </button>
  );
}

function AtlasTag() {
  return (
    <div className="flex flex-col items-stretch gap-1.5 text-xs font-medium">
      <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
        Info
      </span>
      <span className="rounded-md border border-green-200 bg-green-50 px-2.5 py-0.5 text-green-700 dark:border-green-800 dark:bg-green-950/40 dark:text-green-300">
        Success
      </span>
      <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
        Warning
      </span>
    </div>
  );
}

function AtlasLoader() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const t0 = performance.now();
    const id = window.setInterval(() => {
      const e = Math.min(1, (performance.now() - t0) / 2000);
      setPct(Math.round(e * 70));
    }, 80);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="theme-showcase-atlas-bar h-full rounded-full bg-blue-600" />
      </div>
      <p className="mt-2 text-xs font-medium text-gray-500">
        Loading account data... {pct}%
      </p>
    </div>
  );
}

function AtlasToast() {
  return (
    <div className="flex w-full max-w-[280px] gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="shrink-0 border-l-4 border-l-blue-600 pl-1" />
      <div className="min-w-0 flex-1">
        <div className="flex gap-2">
          <svg
            className="shrink-0 text-blue-600"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="m8.5 12 2.5 2.5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Payment received
            </p>
            <p className="text-xs text-gray-500">$4,200.00 from Acme Corp.</p>
            <button
              type="button"
              className="mt-1 text-xs font-medium text-blue-600 hover:underline"
            >
              View transaction →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtlasInput() {
  return (
    <div className="w-full">
      <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
        Transfer amount
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          $
        </span>
        <input
          placeholder="0.00"
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-8 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
      </div>
    </div>
  );
}

function AtlasToggle() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className="flex items-center gap-3 text-left"
      >
        <span
          className={`relative h-7 w-12 rounded-full p-0.5 transition ${
            on ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          <span
            className={`block h-5 w-5 rounded-full bg-white shadow-sm transition ${
              on ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Security alerts
        </span>
      </button>
      <p className="mt-1 pl-[60px] text-xs text-gray-400">Enable 2FA</p>
    </div>
  );
}

/* ——— THEME 5: DRIFT ——— */

function DriftButton() {
  return (
    <button
      type="button"
      className="rounded-2xl bg-stone-800 px-5 py-2.5 text-sm font-light tracking-wide text-white shadow-sm shadow-stone-300/50 transition hover:-translate-y-px hover:bg-stone-700 hover:shadow-md dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200"
    >
      Explore Collection
    </button>
  );
}

function DriftTag() {
  return (
    <div className="flex flex-col gap-1.5 text-xs font-medium">
      <span className="w-fit rounded-full border border-rose-100 bg-rose-50 px-2.5 py-0.5 text-rose-600 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
        Wellness
      </span>
      <span className="w-fit rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-amber-600 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-300">
        Editorial
      </span>
      <span className="w-fit rounded-full border border-teal-100 bg-teal-50 px-2.5 py-0.5 text-teal-600 dark:border-teal-900/40 dark:bg-teal-950/30 dark:text-teal-300">
        Craft
      </span>
    </div>
  );
}

function DriftLoader() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 animate-pulse dark:bg-rose-900/30">
        <div className="h-4 w-4 rounded-full bg-rose-300 dark:bg-rose-500" />
      </div>
      <p className="mt-2 text-xs font-light italic text-stone-400">
        Taking a moment...
      </p>
    </div>
  );
}

function DriftToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-stone-500 underline-offset-2 hover:underline"
      >
        Open note
      </button>
    );
  }
  return (
    <div className="relative flex w-full max-w-[260px] gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 dark:border-stone-700 dark:bg-stone-800">
      <div className="absolute left-3 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b from-rose-300 to-amber-300" />
      <button
        type="button"
        className="absolute right-2 top-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
      <span className="pl-2 text-lg" aria-hidden>
        🌿
      </span>
      <div className="min-w-0 pl-1 pr-5">
        <p className="text-sm font-medium text-stone-800 dark:text-stone-100">
          Gentle reminder
        </p>
        <p className="text-xs font-light text-stone-500">
          Your journal synced across devices.
        </p>
      </div>
    </div>
  );
}

function DriftInput() {
  return (
    <input
      placeholder="What are you looking for..."
      className="w-full rounded-2xl border border-stone-200 bg-stone-50 py-2.5 px-3 text-sm font-light placeholder:text-stone-400 placeholder:italic focus:border-rose-300 focus:outline-none focus:ring-1 focus:ring-rose-200/50 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
    />
  );
}

function DriftToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="flex w-full max-w-[220px] flex-col items-start gap-1 text-left sm:flex-row sm:items-center"
    >
      <span
        className={`relative h-7 w-12 rounded-full p-0.5 transition ${
          on
            ? "bg-gradient-to-r from-rose-300 to-amber-300"
            : "bg-stone-200 dark:bg-stone-700"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow-sm transition ${
            on ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
      <div>
        <p className="text-sm font-light text-stone-600 dark:text-stone-300">
          Quiet hours
        </p>
        <p className="text-xs italic text-stone-400">Pause notifications overnight</p>
      </div>
    </button>
  );
}

/* ——— THEME 6: PRISM ——— */

function PrismButton() {
  return (
    <button
      type="button"
      className="theme-showcase-prism-shift rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-[length:200%_200%] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-400/40 transition hover:scale-105 hover:rotate-1 active:scale-95"
    >
      Make it pop
    </button>
  );
}

function PrismTag() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <span className="rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 px-2.5 py-1 text-xs font-bold text-white transition hover:scale-105">
        Drop 01
      </span>
      <span className="-rotate-1 rounded-lg bg-gradient-to-r from-blue-400 to-violet-400 px-2.5 py-1 text-xs font-bold text-white transition hover:scale-105">
        Studio
      </span>
      <span className="rounded-lg bg-gradient-to-r from-green-400 to-teal-400 px-2.5 py-1 text-xs font-bold text-white transition hover:scale-105">
        Live
      </span>
    </div>
  );
}

function PrismLoader() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-9 w-9">
        <div
          className="absolute inset-0 animate-spin rounded-full p-[3px]"
          style={{
            background:
              "conic-gradient(from 0deg, #f472b6, #fb923c, #facc15, #4ade80, #60a5fa, #a78bfa, #f472b6)",
          }}
        >
          <div className="h-full w-full rounded-full bg-background" />
        </div>
      </div>
      <p className="mt-2 bg-gradient-to-r from-pink-500 via-orange-500 to-violet-500 bg-clip-text text-xs font-bold text-transparent">
        ✦ loading magic...
      </p>
    </div>
  );
}

function PrismToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-bold text-pink-500 hover:underline"
      >
        Summon toast
      </button>
    );
  }
  return (
    <div className="w-full max-w-[260px] overflow-hidden rounded-xl border border-gray-100 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="h-1 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400" />
      <div className="flex gap-2 p-3">
        <div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-yellow-300" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            Canvas saved
          </p>
          <p className="text-xs text-gray-500">Synced to your team space.</p>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-pink-500"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function PrismInput() {
  return (
    <div className="rounded-lg bg-gradient-to-r from-pink-400 to-violet-400 p-[2px] focus-within:ring-2 focus-within:ring-pink-300/40">
      <input
        placeholder="Search or create..."
        className="w-full rounded-[6px] border-0 bg-white px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none dark:bg-zinc-900 dark:text-white"
      />
    </div>
  );
}

function PrismToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="group flex items-center gap-3 text-left"
    >
      <span
        className={`relative h-7 w-12 origin-center rounded-full p-0.5 transition hover:scale-x-105 ${
          on
            ? "bg-gradient-to-r from-pink-400 to-violet-400"
            : "bg-gray-200 dark:bg-zinc-700"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow transition ${
            on ? "translate-x-5 ring-2 ring-pink-300" : "translate-x-0.5"
          }`}
        />
      </span>
      <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-sm font-bold text-transparent">
        Remix mode
      </span>
    </button>
  );
}

/* ——— THEME 7: OBSIDIAN ——— */

function ObsidianButtons() {
  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="rounded-none bg-white px-4 py-2 text-xs font-light uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-zinc-200 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
      >
        Reserve
      </button>
      <button
        type="button"
        className="rounded-none border border-white/30 bg-transparent px-4 py-2 text-xs font-light uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-white/10"
      >
        Journal
      </button>
    </div>
  );
}

function ObsidianTag() {
  return (
    <div className="flex flex-wrap justify-center gap-2 font-mono text-[10px] font-normal uppercase tracking-widest">
      <span className="border border-zinc-600 bg-transparent px-2 py-1 text-zinc-300">
        EXCLUSIVE
      </span>
      <span className="border border-zinc-700 bg-zinc-900 px-2 py-1 text-zinc-400">
        LIMITED
      </span>
      <span className="border border-zinc-600 bg-transparent px-2 py-1 text-zinc-300">
        SS25
      </span>
    </div>
  );
}

function ObsidianLoader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-6 w-6 animate-spin rounded-full border-[1px] border-zinc-700 border-t-white" />
      <p className="flex gap-0.5 text-xs font-light tracking-widest text-zinc-600">
        <span className="theme-showcase-pulse-dots">.</span>
        <span className="theme-showcase-pulse-dots [animation-delay:150ms]">.</span>
        <span className="theme-showcase-pulse-dots [animation-delay:300ms]">.</span>
      </p>
    </div>
  );
}

function ObsidianToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-zinc-500 hover:text-white"
      >
        Open
      </button>
    );
  }
  return (
    <div className="relative w-full max-w-[240px] border border-zinc-800 bg-zinc-950 p-3 pl-4">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/60" />
      <button
        type="button"
        className="absolute right-2 top-2 text-zinc-600 hover:text-white"
        onClick={() => setOpen(false)}
      >
        ×
      </button>
      <p className="text-sm font-light tracking-wide text-white">Private viewing</p>
      <p className="text-xs font-light text-zinc-500">Invitation only archive.</p>
    </div>
  );
}

function ObsidianInput() {
  return (
    <input
      placeholder="Search archive..."
      className="w-full border-0 border-b border-zinc-700 bg-transparent py-2 text-sm font-light text-white placeholder:font-light placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors duration-300"
    />
  );
}

function ObsidianToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="flex items-center gap-3 text-left"
    >
      <span
        className={`relative h-7 w-12 rounded-full border border-zinc-700 p-0.5 transition ${
          on ? "bg-zinc-800" : "bg-transparent"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white transition ${
            on ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
      <span className="text-xs font-light uppercase tracking-widest text-zinc-400">
        Stealth
      </span>
    </button>
  );
}

/* ——— THEME 8: ZENITH ——— */

function ZenithButton() {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-none transition hover:shadow-xl hover:shadow-zinc-900/20 active:scale-[0.98] dark:bg-white dark:text-zinc-950"
    >
      Start Building
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}

function ZenithTag() {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="w-fit rounded-md bg-zinc-950 px-2.5 py-1 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
        Series B
      </span>
      <span className="w-fit rounded-md border-2 border-zinc-950 px-2.5 py-1 text-xs font-bold text-zinc-950 dark:border-white dark:text-white">
        Enterprise
      </span>
      <span className="w-fit rounded-md bg-zinc-950 px-2.5 py-1 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
        10x
      </span>
    </div>
  );
}

function ZenithLoader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        className="animate-spin text-zinc-950 dark:text-white"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden
      >
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="22 66"
        />
      </svg>
      <p className="font-black text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
        LOADING
      </p>
    </div>
  );
}

function ZenithToast() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-semibold text-zinc-500 underline"
      >
        Show briefing
      </button>
    );
  }
  return (
    <div className="theme-showcase-slide-down relative w-full max-w-[260px] rounded-lg bg-zinc-950 p-3 text-white dark:bg-white dark:text-zinc-950">
      <button
        type="button"
        className="absolute right-2 top-2 text-white/60 hover:opacity-80 dark:text-zinc-500"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
      <div className="flex gap-2 pr-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-950 dark:bg-zinc-950 dark:text-white">
          ✓
        </span>
        <div>
          <p className="text-sm font-bold">Board approved</p>
          <p className="text-xs opacity-70">Allocation clears next cycle.</p>
          <button
            type="button"
            className="mt-2 text-sm font-semibold underline hover:opacity-80"
          >
            Open memo
          </button>
        </div>
      </div>
    </div>
  );
}

function ZenithInput() {
  return (
    <div className="w-full">
      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
        Deal name
      </label>
      <input
        placeholder="Project Aurora"
        className="w-full rounded-lg border-2 border-zinc-950 bg-transparent py-2 px-3 text-sm font-medium text-zinc-950 ring-0 placeholder:font-medium placeholder:text-zinc-400 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:border-white dark:text-white dark:focus-visible:outline-white"
      />
    </div>
  );
}

function ZenithToggle() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOn(!on)}
        className="flex items-center gap-3 text-left"
      >
        <span
          className={`relative h-7 w-12 rounded-full p-0.5 transition ${
            on ? "bg-zinc-950 dark:bg-white" : "bg-zinc-200 dark:bg-zinc-800"
          }`}
        >
          <span
            className={`block h-5 w-5 rounded-full shadow-sm transition ${
              on
                ? "translate-x-5 bg-white dark:bg-zinc-950"
                : "translate-x-0.5 bg-white dark:bg-zinc-600"
            }`}
          />
        </span>
        <span className="text-sm font-bold text-zinc-950 dark:text-white">
          War room
        </span>
      </button>
      <p className="mt-1 pl-[60px] text-xs font-medium tracking-tight text-zinc-400">
        Lock external comms
      </p>
    </div>
  );
}

const THEMES = [
  {
    name: "Pulse",
    vibe: "Fast-moving AI SaaS — energetic gradients and motion.",
    key: "pulse",
  },
  {
    name: "Forge",
    vibe: "Developer-first terminal precision — deploys and logs.",
    key: "forge",
  },
  {
    name: "Halo",
    vibe: "Futuristic glass UI — cinematic, soft glow.",
    key: "halo",
  },
  {
    name: "Atlas",
    vibe: "Enterprise fintech — structured, trustworthy.",
    key: "atlas",
  },
  {
    name: "Drift",
    vibe: "Soft editorial calm — breathable lifestyle product.",
    key: "drift",
  },
  {
    name: "Prism",
    vibe: "Experimental color — playful creative-tech energy.",
    key: "prism",
  },
  {
    name: "Obsidian",
    vibe: "Dark luxury monochrome — minimal and exacting.",
    key: "obsidian",
  },
  {
    name: "Zenith",
    vibe: "Peak executive SaaS — bold contrast and authority.",
    key: "zenith",
  },
] as const;

function ThemeBlock({ themeKey }: { themeKey: (typeof THEMES)[number]["key"] }) {
  const grid =
    "grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-fr";

  switch (themeKey) {
    case "pulse":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <PulseButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <PulseTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <PulseLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <PulseToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <PulseInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <PulseToggle />
          </ComponentCard>
        </div>
      );
    case "forge":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <ForgeButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <ForgeTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <ForgeLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <ForgeToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <ForgeInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <ForgeToggle />
          </ComponentCard>
        </div>
      );
    case "halo":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <HaloButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <HaloTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <HaloLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <HaloToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <HaloInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <HaloToggle />
          </ComponentCard>
        </div>
      );
    case "atlas":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <AtlasButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <AtlasTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <AtlasLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <AtlasToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <AtlasInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <AtlasToggle />
          </ComponentCard>
        </div>
      );
    case "drift":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <DriftButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <DriftTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <DriftLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <DriftToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <DriftInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <DriftToggle />
          </ComponentCard>
        </div>
      );
    case "prism":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <PrismButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <PrismTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <PrismLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <PrismToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <PrismInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <PrismToggle />
          </ComponentCard>
        </div>
      );
    case "obsidian":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <ObsidianButtons />
          </ComponentCard>
          <ComponentCard name="Tag">
            <ObsidianTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <ObsidianLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <ObsidianToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <ObsidianInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <ObsidianToggle />
          </ComponentCard>
        </div>
      );
    case "zenith":
      return (
        <div className={grid}>
          <ComponentCard name="Button">
            <ZenithButton />
          </ComponentCard>
          <ComponentCard name="Tag">
            <ZenithTag />
          </ComponentCard>
          <ComponentCard name="Loader">
            <ZenithLoader />
          </ComponentCard>
          <ComponentCard name="Toast">
            <ZenithToast />
          </ComponentCard>
          <ComponentCard name="Input">
            <ZenithInput />
          </ComponentCard>
          <ComponentCard name="Toggle">
            <ZenithToggle />
          </ComponentCard>
        </div>
      );
  }
}

type ThemeKey = (typeof THEMES)[number]["key"];

export default function ThemeShowcase() {
  const [selected, setSelected] = useState<ThemeKey>("pulse");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_STYLES }} />
      <section
        id="themes"
        aria-labelledby="themes-heading"
        className="relative flex min-h-0 flex-col overflow-hidden bg-black px-6 py-10 text-white"
      >
        <LandingSectionReveal className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
          <h2
            id="themes-heading"
            className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
          >
            THEMES
          </h2>

          <div className="mt-8 w-full px-3 sm:px-6 md:px-10">
            <div
              className="flex w-full flex-col border border-line bg-black"
              role="region"
              aria-label="Theme showcase"
            >
              <div
                className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-line px-3 py-3 sm:gap-x-10 sm:px-5 sm:py-4 md:gap-x-12"
                role="tablist"
                aria-label="Theme variants"
              >
                {THEMES.map((theme) => {
                  const isActive = selected === theme.key;
                  return (
                    <button
                      key={theme.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      id={`theme-tab-${theme.key}`}
                      aria-controls="theme-showcase-panel"
                      onClick={() => setSelected(theme.key)}
                      className={cn(
                        "border-none bg-transparent pb-0.5 text-[10px] font-light uppercase tracking-[0.14em] transition-colors duration-200 sm:text-[11px]",
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white/85",
                      )}
                    >
                      {theme.name}
                    </button>
                  );
                })}
              </div>

              <div
                className="p-4 sm:p-6 md:p-8"
                role="tabpanel"
                id="theme-showcase-panel"
                aria-labelledby={`theme-tab-${selected}`}
              >
                <ThemeBlock themeKey={selected} />
              </div>
            </div>
          </div>
        </LandingSectionReveal>
      </section>
    </>
  );
}
