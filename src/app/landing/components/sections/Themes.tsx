"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MinimalThemePreview } from "../themes/MinimalThemePreview";
import { BrutalistThemePreview } from "../themes/BrutalistThemePreview";
import { CrispThemePreview } from "../themes/CrispThemePreview";
import { AmazingThemePreview } from "../themes/AmazingThemePreview";
import { FastThemePreview } from "../themes/FastThemePreview";
import { SimpleThemePreview } from "../themes/SimpleThemePreview";
import { FlowThemePreview } from "../themes/FlowThemePreview";

const THEME_OPTIONS = [
  "Minimal",
  "Brutalist",
  "Crisp",
  "Amazing",
  "Fast",
  "Simple",
  "Flow",
] as const;

type ThemeOption = (typeof THEME_OPTIONS)[number];

export const Themes = () => {
  const [selected, setSelected] = useState<ThemeOption>("Minimal");

  return (
    <section
      id="themes"
      aria-labelledby="themes-heading"
      className="relative bg-black px-6 pt-10 pb-20 text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-start">
        <h2
          id="themes-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          THEMES
        </h2>

        <div className="mt-8 w-full px-3 sm:px-6 md:px-10">
          <div
            className="flex min-h-[min(55vh,520px)] w-full flex-col border border-line bg-black"
            role="region"
            aria-label="Theme preview"
          >
            <div
              className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-line px-3 py-3 sm:gap-x-10 sm:px-5 sm:py-4 md:gap-x-12"
              role="tablist"
              aria-label="Theme variants"
            >
              {THEME_OPTIONS.map((label) => {
                const isActive = selected === label;
                return (
                  <button
                    key={label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    id={`theme-tab-${label.toLowerCase()}`}
                    onClick={() => setSelected(label)}
                    className={cn(
                      "border-none bg-transparent pb-0.5 text-[10px] font-light uppercase tracking-[0.14em] transition-colors duration-200 sm:text-[11px]",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/85",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="min-h-[280px] flex-1 p-4 sm:p-6 md:p-8">
              {selected === "Minimal" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-minimal"
                  aria-labelledby="theme-tab-minimal"
                >
                  <MinimalThemePreview />
                </div>
              ) : selected === "Brutalist" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-brutalist"
                  aria-labelledby="theme-tab-brutalist"
                >
                  <BrutalistThemePreview />
                </div>
              ) : selected === "Crisp" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-crisp"
                  aria-labelledby="theme-tab-crisp"
                >
                  <CrispThemePreview />
                </div>
              ) : selected === "Amazing" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-amazing"
                  aria-labelledby="theme-tab-amazing"
                >
                  <AmazingThemePreview />
                </div>
              ) : selected === "Fast" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-fast"
                  aria-labelledby="theme-tab-fast"
                >
                  <FastThemePreview />
                </div>
              ) : selected === "Simple" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-simple"
                  aria-labelledby="theme-tab-simple"
                >
                  <SimpleThemePreview />
                </div>
              ) : selected === "Flow" ? (
                <div
                  role="tabpanel"
                  id="theme-panel-flow"
                  aria-labelledby="theme-tab-flow"
                >
                  <FlowThemePreview />
                </div>
              ) : (
                <div
                  className="flex min-h-[240px] flex-col items-center justify-center border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center"
                  role="tabpanel"
                  id="theme-panel-placeholder"
                  aria-labelledby="theme-tab-placeholder"
                >
                  <p className="max-w-sm text-sm font-light text-white/45">
                    Preview is not available for this tab yet.
                  </p>
                  <p className="mt-2 text-xs font-light text-white/30">
                    Select Minimal, Brutalist, Crisp, Amazing, Fast, Simple, or
                    Flow to explore silver-toned components.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
