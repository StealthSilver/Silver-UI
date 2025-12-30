"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { components } from "@/config/components.config";
import { CodeBlock } from "../../CodeBlock";
import { getThemeStyles } from "@/config/theme.config";
import {
  getSectionTitleStyles,
  getContentTextStyles,
  type Theme,
} from "@/lib/theme-styles";
import { ThemedButton } from "../../ui/ThemedButton";

export default function ThemedComponentPage() {
  const [showCode, setShowCode] = useState(false);
  const [installationTab, setInstallationTab] = useState<"cli" | "manual">(
    "manual"
  );
  const params = useParams();
  const slug = params.slug as string;
  const theme = params.theme as string;

  // Validate theme
  const validThemes = [
    "minimalist",
    "brutalist",
    "maximalist",
    "neumorphic",
    "motion",
  ];
  if (!validThemes.includes(theme)) {
    notFound();
  }

  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  const themeStyles = getThemeStyles(theme);
  const themeType = theme as Theme;

  const getBackgroundStyles = () => {
    switch (themeType) {
      case "minimalist":
        return "bg-gray-50/80 dark:bg-neutral-950/80";
      case "brutalist":
        return "bg-black";
      case "maximalist":
        return "bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600";
      case "neumorphic":
        return "bg-gray-200 dark:bg-neutral-800";
      case "motion":
        return "bg-gray-50/80 dark:bg-neutral-950/80";
      default:
        return "bg-gray-50/80 dark:bg-neutral-950/80";
    }
  };

  return (
    <div
      className={`min-h-screen ${getBackgroundStyles()} transition-all duration-500`}
    >
      <div
        className={`mx-auto px-6 md:px-8 lg:px-24 max-w-7xl py-10 md:py-12 ${themeStyles.container}`}
      >
        {/* Component Header */}
        <div className="mb-8">
          <h1
            className={`text-3xl md:text-4xl font-bold mb-3 ${
              themeType === "minimalist"
                ? "text-gray-900 dark:text-white"
                : themeType === "brutalist"
                ? "text-white font-black uppercase"
                : themeType === "maximalist"
                ? "text-white font-bold"
                : themeType === "neumorphic"
                ? "text-gray-700 dark:text-gray-200"
                : "text-gray-900 dark:text-white transition-colors duration-300"
            }`}
          >
            {component.name}
          </h1>
          {component.description && (
            <p
              className={`text-sm leading-relaxed max-w-xl ${
                themeType === "minimalist"
                  ? "text-gray-600 dark:text-gray-400"
                  : themeType === "brutalist"
                  ? "text-white/80"
                  : themeType === "maximalist"
                  ? "text-white/80"
                  : themeType === "neumorphic"
                  ? "text-gray-600 dark:text-gray-300"
                  : "text-gray-600 dark:text-gray-400 transition-colors duration-300"
              }`}
            >
              {component.description}
            </p>
          )}
        </div>

        {/* Preview Section with Toggle */}
        <section className="mb-16">
          {/* Toggle Buttons - Top Left */}
          <div className="flex gap-1 mb-6 justify-start items-center">
            <button
              onClick={() => setShowCode(false)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ease-out flex items-center gap-2 relative ${
                !showCode
                  ? themeType === "minimalist"
                    ? "text-gray-900 dark:text-white"
                    : themeType === "brutalist"
                    ? "text-white"
                    : themeType === "maximalist"
                    ? "text-white"
                    : themeType === "neumorphic"
                    ? "text-gray-700 dark:text-gray-200"
                    : "text-gray-900 dark:text-white"
                  : themeType === "minimalist"
                  ? "text-gray-500 dark:text-gray-500"
                  : themeType === "brutalist"
                  ? "text-white/50"
                  : themeType === "maximalist"
                  ? "text-white/50"
                  : themeType === "neumorphic"
                  ? "text-gray-500 dark:text-gray-500"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              <svg
                className="w-4 h-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ease-out flex items-center gap-2 relative ${
                showCode
                  ? themeType === "minimalist"
                    ? "text-gray-900 dark:text-white"
                    : themeType === "brutalist"
                    ? "text-white"
                    : themeType === "maximalist"
                    ? "text-white"
                    : themeType === "neumorphic"
                    ? "text-gray-700 dark:text-gray-200"
                    : "text-gray-900 dark:text-white"
                  : themeType === "minimalist"
                  ? "text-gray-500 dark:text-gray-500"
                  : themeType === "brutalist"
                  ? "text-white/50"
                  : themeType === "maximalist"
                  ? "text-white/50"
                  : themeType === "neumorphic"
                  ? "text-gray-500 dark:text-gray-500"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              <svg
                className="w-4 h-4 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Code
            </button>
            {/* Smooth underline animation */}
            <div
              className={`absolute bottom-0 h-0.5 transition-all duration-300 ease-out ${
                themeType === "minimalist"
                  ? "bg-gray-900 dark:bg-white"
                  : themeType === "brutalist"
                  ? "bg-white"
                  : themeType === "maximalist"
                  ? "bg-white"
                  : themeType === "neumorphic"
                  ? "bg-gray-700 dark:bg-gray-200"
                  : "bg-gray-900 dark:bg-white"
              }`}
              style={{
                width: !showCode ? "90px" : "80px",
                left: !showCode ? "0px" : "90px",
              }}
            />
          </div>

          {/* Horizontal Line */}
          <div
            className={`mb-6 ${
              themeType === "minimalist"
                ? "border-b border-gray-300 dark:border-neutral-700"
                : themeType === "brutalist"
                ? "border-b-[2px] border-white"
                : themeType === "maximalist"
                ? "border-b border-white/50"
                : themeType === "neumorphic"
                ? "border-b border-gray-300 dark:border-neutral-700"
                : "border-b border-gray-300 dark:border-neutral-700"
            }`}
          />

          {/* Preview or Code Content */}
          <div
            className={`rounded-lg border transition-all duration-300 overflow-hidden ${
              themeType === "minimalist"
                ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-8 shadow-md"
                : themeType === "brutalist"
                ? "border-[3px] border-white bg-black p-8 shadow-[4px_4px_0_rgba(255,255,255,0.5)]"
                : themeType === "maximalist"
                ? "rounded-xl border-2 border-white/70 bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm p-8"
                : themeType === "neumorphic"
                ? "rounded-2xl border-none shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.08)] p-8"
                : "border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-8 shadow-md"
            }`}
          >
            {!showCode ? (
              <div className="flex items-center justify-center min-h-[300px] animate-fadeIn">
                {slug === "button" ? (
                  <ThemedButton theme={theme} />
                ) : (
                  component.preview
                )}
              </div>
            ) : (
              <div className="animate-fadeIn">
                <CodeBlock code={component.code} language="tsx" />
              </div>
            )}
          </div>
        </section>

        {/* Installation Section */}
        {component && (
          <section className="mb-16">
            <h2
              className={`text-2xl font-semibold mb-6 ${
                themeType === "minimalist"
                  ? "text-gray-900 dark:text-white"
                  : themeType === "brutalist"
                  ? "text-white font-black uppercase"
                  : themeType === "maximalist"
                  ? "text-white font-semibold"
                  : themeType === "neumorphic"
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Installation
            </h2>

            {/* Installation Tabs */}
            <div
              className={`flex gap-0 mb-6 border-b transition-all duration-300 ${
                themeType === "minimalist"
                  ? "border-gray-300 dark:border-neutral-700"
                  : themeType === "brutalist"
                  ? "border-b-2 border-white"
                  : themeType === "maximalist"
                  ? "border-white/50"
                  : "border-gray-300 dark:border-neutral-700"
              }`}
            >
              <button
                onClick={() => setInstallationTab("cli")}
                className={`px-4 py-3 font-medium transition-all duration-300 ease-out text-sm relative ${
                  installationTab === "cli"
                    ? themeType === "minimalist"
                      ? "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                      : themeType === "brutalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "maximalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "neumorphic"
                      ? "border-b-2 border-gray-700 dark:border-gray-200 text-gray-700 dark:text-gray-200"
                      : "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : themeType === "minimalist"
                    ? "text-gray-600 dark:text-gray-400"
                    : themeType === "brutalist"
                    ? "text-white/50"
                    : themeType === "maximalist"
                    ? "text-white/50"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                CLI
              </button>
              <button
                onClick={() => setInstallationTab("manual")}
                className={`px-4 py-3 font-medium transition-all duration-300 ease-out text-sm relative ${
                  installationTab === "manual"
                    ? themeType === "minimalist"
                      ? "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                      : themeType === "brutalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "maximalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "neumorphic"
                      ? "border-b-2 border-gray-700 dark:border-gray-200 text-gray-700 dark:text-gray-200"
                      : "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : themeType === "minimalist"
                    ? "text-gray-600 dark:text-gray-400"
                    : themeType === "brutalist"
                    ? "text-white/50"
                    : themeType === "maximalist"
                    ? "text-white/50"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Manual
              </button>
            </div>

            {/* Tab Content */}
            {installationTab === "cli" ? (
              <div
                className={`p-6 rounded-lg border transition-all duration-300 animate-fadeIn ${
                  themeType === "minimalist"
                    ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                    : themeType === "brutalist"
                    ? "border-[3px] border-white bg-black"
                    : themeType === "maximalist"
                    ? "rounded-xl border-2 border-white/70 bg-white/40 backdrop-blur-sm"
                    : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                }`}
              >
                <p
                  className={`${
                    themeType === "minimalist"
                      ? "text-gray-700 dark:text-gray-300"
                      : themeType === "brutalist"
                      ? "text-white/80"
                      : "text-white/80"
                  }`}
                >
                  CLI installation coming soon...
                </p>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                {/* Step 1: Install packages */}
                <div className="flex gap-4 pb-6 relative">
                  {/* Vertical line connector */}
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-600/50 dark:bg-gray-600/50" />

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm z-10 ${
                      themeType === "minimalist"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : themeType === "brutalist"
                        ? "bg-gray-600/50 text-white border-2 border-gray-600/50"
                        : themeType === "maximalist"
                        ? "bg-gray-600/50 text-white border border-gray-600/50"
                        : themeType === "neumorphic"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                    }`}
                  >
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className={`font-medium mb-3 ${
                        themeType === "minimalist"
                          ? "text-gray-900 dark:text-white"
                          : themeType === "brutalist"
                          ? "text-white"
                          : themeType === "maximalist"
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Install the packages
                    </p>
                    <div
                      className={`rounded-lg border overflow-hidden ${
                        themeType === "minimalist"
                          ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                          : themeType === "brutalist"
                          ? "border-[3px] border-white bg-black"
                          : themeType === "maximalist"
                          ? "rounded-xl border-2 border-white/70 bg-white/40 backdrop-blur-sm"
                          : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                      }`}
                    >
                      <CodeBlock
                        code={`npm i motion clsx tailwind-merge`}
                        language="bash"
                        isInstallation={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Add util file */}
                <div className="flex gap-4 pb-6 relative">
                  {/* Vertical line connector */}
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-600/50 dark:bg-gray-600/50" />

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm z-10 ${
                      themeType === "minimalist"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : themeType === "brutalist"
                        ? "bg-gray-600/50 text-white border-2 border-gray-600/50"
                        : themeType === "maximalist"
                        ? "bg-gray-600/50 text-white border border-gray-600/50"
                        : themeType === "neumorphic"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                    }`}
                  >
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className={`font-medium mb-3 ${
                        themeType === "minimalist"
                          ? "text-gray-900 dark:text-white"
                          : themeType === "brutalist"
                          ? "text-white"
                          : themeType === "maximalist"
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Add util file
                    </p>
                    <p
                      className={`text-sm mb-3 ${
                        themeType === "minimalist"
                          ? "text-gray-600 dark:text-gray-400"
                          : themeType === "brutalist"
                          ? "text-white/70"
                          : themeType === "maximalist"
                          ? "text-white/70"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      lib/utils.ts
                    </p>
                    <div
                      className={`rounded-lg border overflow-hidden ${
                        themeType === "minimalist"
                          ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                          : themeType === "brutalist"
                          ? "border-[3px] border-white bg-black"
                          : themeType === "maximalist"
                          ? "rounded-xl border-2 border-white/70 bg-white/40 backdrop-blur-sm"
                          : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                      }`}
                    >
                      <CodeBlock
                        code={`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                        language="tsx"
                        isInstallation={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: Copy component code */}
                <div className="flex gap-4 pb-6 relative">
                  {/* Vertical line connector */}
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-600/50 dark:bg-gray-600/50" />

                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm z-10 ${
                      themeType === "minimalist"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : themeType === "brutalist"
                        ? "bg-gray-600/50 text-white border-2 border-gray-600/50"
                        : themeType === "maximalist"
                        ? "bg-gray-600/50 text-white border border-gray-600/50"
                        : themeType === "neumorphic"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                    }`}
                  >
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className={`font-medium mb-3 ${
                        themeType === "minimalist"
                          ? "text-gray-900 dark:text-white"
                          : themeType === "brutalist"
                          ? "text-white"
                          : themeType === "maximalist"
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Copy and paste the following code into your project
                    </p>
                    <div
                      className={`rounded-lg border overflow-hidden ${
                        themeType === "minimalist"
                          ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                          : themeType === "brutalist"
                          ? "border-[3px] border-white bg-black"
                          : themeType === "maximalist"
                          ? "rounded-xl border-2 border-white/70 bg-white/40 backdrop-blur-sm"
                          : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                      }`}
                    >
                      <CodeBlock
                        code={component.code}
                        language="tsx"
                        isInstallation={true}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4: Update import paths (no line after) */}
                <div className="flex gap-4 relative">
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm z-10 ${
                      themeType === "minimalist"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : themeType === "brutalist"
                        ? "bg-gray-600/50 text-white border-2 border-gray-600/50"
                        : themeType === "maximalist"
                        ? "bg-gray-600/50 text-white border border-gray-600/50"
                        : themeType === "neumorphic"
                        ? "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                        : "bg-gray-600/50 dark:bg-gray-600/50 text-white dark:text-white"
                    }`}
                  >
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <p
                      className={`font-medium mb-3 ${
                        themeType === "minimalist"
                          ? "text-gray-900 dark:text-white"
                          : themeType === "brutalist"
                          ? "text-white"
                          : themeType === "maximalist"
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Update the import paths to match your project setup
                    </p>
                    <p
                      className={`text-sm ${
                        themeType === "minimalist"
                          ? "text-gray-600 dark:text-gray-400"
                          : themeType === "brutalist"
                          ? "text-white/70"
                          : themeType === "maximalist"
                          ? "text-white/70"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      Ensure the import paths (like @/lib/utils, motion/react,
                      etc.) match your project's structure. Adjust the paths
                      based on where you place the component and utility files.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Props Section */}
        {component.props && component.props.length > 0 && (
          <section className="mb-24">
            <h2
              className={`text-2xl font-semibold mb-6 ${
                themeType === "minimalist"
                  ? "text-gray-900 dark:text-white"
                  : themeType === "brutalist"
                  ? "text-white font-black uppercase"
                  : themeType === "maximalist"
                  ? "text-white font-semibold"
                  : themeType === "neumorphic"
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Props
            </h2>
            <div
              className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                themeType === "minimalist"
                  ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md"
                  : themeType === "brutalist"
                  ? "border-[3px] border-white bg-black shadow-[4px_4px_0_rgba(255,255,255,0.5)]"
                  : themeType === "maximalist"
                  ? "rounded-xl border-2 border-white/70 bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm"
                  : themeType === "neumorphic"
                  ? "rounded-2xl border-none shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.08)]"
                  : "border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md"
              }`}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead
                    className={`border-b ${
                      themeType === "minimalist"
                        ? "border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800"
                        : themeType === "brutalist"
                        ? "border-white bg-white"
                        : themeType === "maximalist"
                        ? "border-white/50 bg-white/20"
                        : themeType === "neumorphic"
                        ? "border-gray-300 dark:border-gray-600 bg-gray-300 dark:bg-neutral-700"
                        : "border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800"
                    }`}
                  >
                    <tr>
                      <th
                        className={`px-6 py-4 text-sm font-semibold ${
                          themeType === "minimalist"
                            ? "text-gray-700 dark:text-gray-300"
                            : themeType === "brutalist"
                            ? "text-black font-black uppercase"
                            : themeType === "maximalist"
                            ? "text-white"
                            : themeType === "neumorphic"
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Name
                      </th>
                      <th
                        className={`px-6 py-4 text-sm font-semibold ${
                          themeType === "minimalist"
                            ? "text-gray-700 dark:text-gray-300"
                            : themeType === "brutalist"
                            ? "text-black font-black uppercase"
                            : themeType === "maximalist"
                            ? "text-white"
                            : themeType === "neumorphic"
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Type
                      </th>
                      <th
                        className={`px-6 py-4 text-sm font-semibold ${
                          themeType === "minimalist"
                            ? "text-gray-700 dark:text-gray-300"
                            : themeType === "brutalist"
                            ? "text-black font-black uppercase"
                            : themeType === "maximalist"
                            ? "text-white"
                            : themeType === "neumorphic"
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Default
                      </th>
                      <th
                        className={`px-6 py-4 text-sm font-semibold ${
                          themeType === "minimalist"
                            ? "text-gray-700 dark:text-gray-300"
                            : themeType === "brutalist"
                            ? "text-black font-black uppercase"
                            : themeType === "maximalist"
                            ? "text-white"
                            : themeType === "neumorphic"
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y ${
                      themeType === "minimalist"
                        ? "divide-gray-300 dark:divide-neutral-700"
                        : themeType === "brutalist"
                        ? "divide-white"
                        : themeType === "maximalist"
                        ? "divide-white/30"
                        : "divide-gray-300 dark:divide-gray-700"
                    }`}
                  >
                    {component.props.map((prop) => (
                      <tr
                        key={prop.name}
                        className={`transition-colors ${
                          themeType === "minimalist"
                            ? "hover:bg-gray-100 dark:hover:bg-neutral-800"
                            : themeType === "brutalist"
                            ? "hover:bg-yellow-300"
                            : themeType === "maximalist"
                            ? "hover:bg-white/30"
                            : themeType === "neumorphic"
                            ? "hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.6)]"
                            : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        }`}
                      >
                        <td
                          className={`px-6 py-4 font-mono text-sm font-semibold ${
                            themeType === "minimalist"
                              ? "text-gray-700 dark:text-gray-300"
                              : themeType === "brutalist"
                              ? "text-black"
                              : themeType === "maximalist"
                              ? "text-white/90"
                              : "text-blue-600 dark:text-blue-400"
                          }`}
                        >
                          {prop.name}
                        </td>
                        <td
                          className={`px-6 py-4 font-mono text-sm ${
                            themeType === "minimalist"
                              ? "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800"
                              : themeType === "brutalist"
                              ? "text-black bg-yellow-200"
                              : themeType === "maximalist"
                              ? "text-white/80"
                              : "text-amber-600 dark:text-amber-400"
                          }`}
                        >
                          {prop.type}
                        </td>
                        <td
                          className={`px-6 py-4 font-mono text-sm ${
                            themeType === "minimalist"
                              ? "text-gray-600 dark:text-gray-400"
                              : themeType === "brutalist"
                              ? "text-black"
                              : themeType === "maximalist"
                              ? "text-white/80"
                              : "text-emerald-600 dark:text-emerald-400"
                          }`}
                        >
                          {prop.default || "-"}
                        </td>
                        <td
                          className={`px-6 py-4 text-sm ${
                            themeType === "minimalist"
                              ? "text-gray-600 dark:text-gray-400"
                              : themeType === "brutalist"
                              ? "text-white"
                              : themeType === "maximalist"
                              ? "text-white/80"
                              : "text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {prop.description || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
