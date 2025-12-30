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
    "cli"
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
          {/* Toggle Buttons - Top Right */}
          <div className="flex gap-3 mb-6 justify-end items-center">
            <button
              onClick={() => setShowCode(false)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                !showCode
                  ? themeType === "minimalist"
                    ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                    : themeType === "brutalist"
                    ? "text-white border-b-[3px] border-white"
                    : themeType === "maximalist"
                    ? "text-white border-b-2 border-white"
                    : themeType === "neumorphic"
                    ? "text-gray-700 dark:text-gray-200 border-b-2 border-gray-700 dark:border-gray-200"
                    : "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : themeType === "minimalist"
                  ? "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
                  : themeType === "brutalist"
                  ? "text-white/50 border-b-[3px] border-transparent"
                  : themeType === "maximalist"
                  ? "text-white/50 border-b-2 border-transparent"
                  : themeType === "neumorphic"
                  ? "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
                  : "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
              }`}
            >
              <span>⊡</span> Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                showCode
                  ? themeType === "minimalist"
                    ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                    : themeType === "brutalist"
                    ? "text-white border-b-[3px] border-white"
                    : themeType === "maximalist"
                    ? "text-white border-b-2 border-white"
                    : themeType === "neumorphic"
                    ? "text-gray-700 dark:text-gray-200 border-b-2 border-gray-700 dark:border-gray-200"
                    : "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                  : themeType === "minimalist"
                  ? "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
                  : themeType === "brutalist"
                  ? "text-white/50 border-b-[3px] border-transparent"
                  : themeType === "maximalist"
                  ? "text-white/50 border-b-2 border-transparent"
                  : themeType === "neumorphic"
                  ? "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
                  : "text-gray-500 dark:text-gray-500 border-b-2 border-transparent"
              }`}
            >
              <span>&lt;/&gt;</span> Code
            </button>
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
            className={`rounded-lg border transition-all duration-300 ${
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
              <div className="flex items-center justify-center min-h-[300px]">
                {slug === "button" ? (
                  <ThemedButton theme={theme} />
                ) : (
                  component.preview
                )}
              </div>
            ) : (
              <CodeBlock code={component.code} language="tsx" />
            )}
          </div>
        </section>

        {/* Installation Section */}
        {component.installation && component.installation.length > 0 && (
          <section className="mb-16">
            <h2
              className={`text-2xl font-bold mb-6 ${
                themeType === "minimalist"
                  ? "text-gray-900 dark:text-white"
                  : themeType === "brutalist"
                  ? "text-white font-black uppercase"
                  : themeType === "maximalist"
                  ? "text-white font-bold"
                  : themeType === "neumorphic"
                  ? "text-gray-700 dark:text-gray-200"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              Installation
            </h2>

            {/* Installation Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300 dark:border-neutral-700">
              <button
                onClick={() => setInstallationTab("cli")}
                className={`px-4 py-3 font-medium transition-all text-sm ${
                  installationTab === "cli"
                    ? themeType === "minimalist"
                      ? "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                      : themeType === "brutalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "maximalist"
                      ? "border-b-2 border-white text-white"
                      : "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : themeType === "minimalist"
                    ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                CLI
              </button>
              <button
                onClick={() => setInstallationTab("manual")}
                className={`px-4 py-3 font-medium transition-all text-sm ${
                  installationTab === "manual"
                    ? themeType === "minimalist"
                      ? "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                      : themeType === "brutalist"
                      ? "border-b-2 border-white text-white"
                      : themeType === "maximalist"
                      ? "border-b-2 border-white text-white"
                      : "border-b-2 border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : themeType === "minimalist"
                    ? "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Manual
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {installationTab === "cli" ? (
                <div
                  className={`p-6 rounded-lg border transition-all duration-300 ${
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
                <div
                  className={`p-6 rounded-lg border transition-all duration-300 ${
                    themeType === "minimalist"
                      ? "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                      : themeType === "brutalist"
                      ? "border-[3px] border-white bg-black"
                      : themeType === "maximalist"
                      ? "rounded-xl border-2 border-white/70 bg-white/40 backdrop-blur-sm"
                      : "border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                  }`}
                >
                  <ol className="space-y-4 list-decimal list-inside">
                    {component.installation.map((step, index) => (
                      <li
                        key={index}
                        className={`${
                          themeType === "minimalist"
                            ? "text-gray-700 dark:text-gray-300"
                            : themeType === "brutalist"
                            ? "text-white/80"
                            : "text-white/80"
                        }`}
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Props Section */}
        {component.props && component.props.length > 0 && (
          <section className="mb-24">
            <h2
              className={`text-2xl font-bold mb-6 ${
                themeType === "minimalist"
                  ? "text-gray-900 dark:text-white"
                  : themeType === "brutalist"
                  ? "text-white font-black uppercase"
                  : themeType === "maximalist"
                  ? "text-white font-bold"
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
