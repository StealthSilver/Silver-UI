"use client";

import React from "react";
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

  return (
    <div
      className={`mx-auto px-6 md:px-12 max-w-5xl py-8 ${themeStyles.container} transition-all duration-300`}
    >
      {/* Hero Header with Theme-specific styling */}
      <div className={`mb-12 relative ${themeStyles.header}`}>
        {themeType !== "brutalist" && themeType !== "neumorphic" && (
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-[var(--primary-hover)]/10 rounded-3xl blur-3xl -z-10" />
        )}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            {themeType !== "brutalist" && (
              <div className="relative">
                <span
                  className={`inline-block h-12 w-1.5 rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--primary-hover)] shadow-lg shadow-[var(--primary)]/30 ${themeStyles.accent}`}
                />
                <span className="absolute -left-1 top-0 inline-block h-12 w-1.5 rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--primary-hover)] opacity-30 blur-sm" />
              </div>
            )}
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                themeType === "brutalist"
                  ? "text-black dark:text-white"
                  : themeType === "maximalist"
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                  : themeType === "neumorphic"
                  ? "text-gray-700 dark:text-gray-200"
                  : "bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary)]"
              } ${themeStyles.title}`}
            >
              {component.name}
            </h1>
          </div>
        </div>
        {component.description && (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed ${
              themeType === "brutalist"
                ? "text-black dark:text-white font-bold"
                : themeType === "maximalist"
                ? "text-purple-900 dark:text-purple-100"
                : themeType === "neumorphic"
                ? "text-gray-600 dark:text-gray-300"
                : "text-neutral-600 dark:text-neutral-300 font-light"
            } ${themeStyles.description}`}
          >
            {component.description}
          </p>
        )}
      </div>

      {/* Preview Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
          <h2 className={getSectionTitleStyles(themeType)}>Preview</h2>
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
        </div>
        <div className="relative group">
          {themeType !== "brutalist" && themeType !== "neumorphic" && (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary-hover)]/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          )}
          <div
            className={`p-12 shadow-2xl relative overflow-hidden ${
              themeType === "brutalist"
                ? "border-4 border-black dark:border-white bg-white dark:bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                : themeType === "maximalist"
                ? "rounded-3xl border-4 border-purple-500 bg-gradient-to-br from-pink-50 via-purple-50 to-white dark:from-purple-900/20 dark:via-pink-900/20 dark:to-black shadow-purple-500/50"
                : themeType === "neumorphic"
                ? "rounded-3xl bg-gray-200 dark:bg-neutral-800 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.7)] dark:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.05)]"
                : "rounded-3xl border-2 border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-white via-neutral-50/50 to-white dark:from-neutral-900 dark:via-neutral-900/50 dark:to-neutral-800/80 backdrop-blur-xl"
            } ${themeStyles.previewCard}`}
          >
            {themeType !== "brutalist" && themeType !== "neumorphic" && (
              <>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[var(--primary-hover)]/5 to-transparent rounded-full blur-3xl" />
              </>
            )}
            <div className="relative z-10">
              {slug === "button" ? (
                <ThemedButton theme={theme} />
              ) : (
                component.preview
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
          <h2 className={getSectionTitleStyles(themeType)}>Code</h2>
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
        </div>
        <div className="relative group">
          {themeType !== "brutalist" && themeType !== "neumorphic" && (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary-hover)]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          )}
          <CodeBlock code={component.code} language="tsx" />
        </div>
      </section>

      {/* Props Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
          <h2 className={getSectionTitleStyles(themeType)}>Props</h2>
          {themeType !== "brutalist" && (
            <div
              className={`h-px flex-1 ${
                themeType === "maximalist"
                  ? "bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                  : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
              }`}
            />
          )}
        </div>
        {component.props && component.props.length > 0 ? (
          <div className="relative group">
            {themeType !== "brutalist" && themeType !== "neumorphic" && (
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--primary-hover)]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            )}
            <div
              className={`overflow-hidden shadow-xl ${
                themeType === "brutalist"
                  ? "border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                  : themeType === "maximalist"
                  ? "rounded-2xl border-4 border-purple-500 bg-gradient-to-br from-white to-purple-50 dark:from-neutral-900 dark:to-purple-900/20 shadow-purple-500/50"
                  : themeType === "neumorphic"
                  ? "rounded-2xl bg-gray-200 dark:bg-neutral-800 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.7)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.5),-5px_-5px_15px_rgba(255,255,255,0.05)]"
                  : "rounded-2xl border-2 border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-white via-neutral-50/30 to-white dark:from-neutral-900 dark:via-neutral-900/50 dark:to-neutral-800/80 backdrop-blur-xl"
              } ${themeStyles.propsTable}`}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead
                    className={`border-b-2 ${
                      themeType === "brutalist"
                        ? "border-black dark:border-white bg-black dark:bg-white"
                        : themeType === "maximalist"
                        ? "border-purple-300 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
                        : themeType === "neumorphic"
                        ? "border-gray-300 dark:border-gray-600 bg-gray-300 dark:bg-neutral-700"
                        : "border-neutral-200/60 dark:border-neutral-700/60 bg-gradient-to-r from-neutral-50/50 to-transparent dark:from-neutral-800/50"
                    }`}
                  >
                    <tr>
                      <th
                        className={`px-6 py-5 text-xs uppercase tracking-wider ${
                          themeType === "brutalist"
                            ? "font-black text-white dark:text-black"
                            : themeType === "maximalist"
                            ? "font-bold text-purple-900 dark:text-purple-100"
                            : "font-bold text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Name
                      </th>
                      <th
                        className={`px-6 py-5 text-xs uppercase tracking-wider ${
                          themeType === "brutalist"
                            ? "font-black text-white dark:text-black"
                            : themeType === "maximalist"
                            ? "font-bold text-purple-900 dark:text-purple-100"
                            : "font-bold text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Type
                      </th>
                      <th
                        className={`px-6 py-5 text-xs uppercase tracking-wider ${
                          themeType === "brutalist"
                            ? "font-black text-white dark:text-black"
                            : themeType === "maximalist"
                            ? "font-bold text-purple-900 dark:text-purple-100"
                            : "font-bold text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Default
                      </th>
                      <th
                        className={`px-6 py-5 text-xs uppercase tracking-wider ${
                          themeType === "brutalist"
                            ? "font-black text-white dark:text-black"
                            : themeType === "maximalist"
                            ? "font-bold text-purple-900 dark:text-purple-100"
                            : "font-bold text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`${
                      themeType === "brutalist"
                        ? "divide-y-2 divide-black dark:divide-white"
                        : "divide-y divide-neutral-200/40 dark:divide-neutral-800/40"
                    }`}
                  >
                    {component.props.map((prop) => (
                      <tr
                        key={prop.name}
                        className={`transition-all duration-300 group/row ${
                          themeType === "brutalist"
                            ? "hover:bg-yellow-300 dark:hover:bg-yellow-400"
                            : themeType === "maximalist"
                            ? "hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20"
                            : "hover:bg-gradient-to-r hover:from-[var(--primary)]/5 hover:to-transparent"
                        }`}
                      >
                        <td
                          className={`px-6 py-5 font-mono text-sm font-semibold ${
                            themeType === "brutalist"
                              ? "text-black dark:text-white"
                              : "text-blue-600 dark:text-blue-400 group-hover/row:text-blue-700 dark:group-hover/row:text-blue-300"
                          }`}
                        >
                          {prop.name}
                        </td>
                        <td
                          className={`px-6 py-5 font-mono text-xs ${
                            themeType === "brutalist"
                              ? "text-black dark:text-white font-bold bg-yellow-200 dark:bg-yellow-300"
                              : "text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/10 group-hover/row:bg-amber-100/50 dark:group-hover/row:bg-amber-900/20"
                          }`}
                        >
                          {prop.type}
                        </td>
                        <td
                          className={`px-6 py-5 font-mono text-xs ${
                            themeType === "brutalist"
                              ? "text-black dark:text-white font-bold"
                              : "text-emerald-600 dark:text-emerald-400 group-hover/row:text-emerald-700 dark:group-hover/row:text-emerald-300"
                          }`}
                        >
                          {prop.default || "-"}
                        </td>
                        <td
                          className={`px-6 py-5 ${
                            themeType === "brutalist"
                              ? "text-black dark:text-white"
                              : "text-neutral-600 dark:text-neutral-400 group-hover/row:text-neutral-700 dark:group-hover/row:text-neutral-300"
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
          </div>
        ) : (
          <p
            className={`text-center py-8 text-lg ${
              themeType === "brutalist"
                ? "text-black dark:text-white font-bold"
                : themeType === "maximalist"
                ? "text-purple-700 dark:text-purple-300"
                : "text-neutral-500 dark:text-neutral-400 font-light"
            }`}
          >
            No props documentation available.
          </p>
        )}
      </section>
    </div>
  );
}
