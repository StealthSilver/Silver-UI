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

  const getPageBackground = () => {
    switch (themeType) {
      case "brutalist":
        return "bg-white dark:bg-black";
      case "maximalist":
        return "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950 dark:via-pink-950 dark:to-orange-950";
      case "neumorphic":
        return "bg-gray-100 dark:bg-neutral-900";
      case "motion":
        return "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-neutral-900 dark:via-blue-950/30 dark:to-purple-950/30";
      case "minimalist":
        return "bg-gradient-to-br from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#121212] dark:to-[#0a0a0a]";
      default:
        return "bg-white dark:bg-neutral-950";
    }
  };

  const getHeaderAccent = () => {
    switch (themeType) {
      case "brutalist":
        return (
          <div className="absolute -left-4 -top-4 bg-red-500 px-3 py-1 border-3 border-black dark:border-white uppercase text-xs font-black tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            COMPONENT
          </div>
        );
      case "maximalist":
        return (
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-3xl animate-pulse" />
        );
      case "neumorphic":
        return null;
      case "minimalist":
        return null;
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 via-transparent to-[var(--primary-hover)]/5 rounded-3xl blur-2xl" />
        );
    }
  };

  return (
    <div
      className={`min-h-screen ${getPageBackground()} transition-all duration-500`}
    >
      <div
        className={`mx-auto px-6 md:px-8 lg:px-24 max-w-7xl py-10 md:py-12 ${themeStyles.container}`}
      >
        {/* Hero Header with Theme-specific styling */}
        <div
          className={`mb-16 relative ${
            themeType === "brutalist"
              ? "border-4 border-black dark:border-white p-8 bg-cyan-400 dark:bg-cyan-500"
              : themeType === "neumorphic"
              ? "rounded-3xl p-8 bg-gray-200 dark:bg-neutral-800 shadow-[8px_8px_24px_rgba(0,0,0,0.15),-8px_-8px_24px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_24px_rgba(0,0,0,0.8),-8px_-8px_24px_rgba(255,255,255,0.05)]"
              : themeType === "minimalist"
              ? "p-0"
              : "p-8"
          }`}
        >
          {getHeaderAccent()}

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-4">
              {themeType === "minimalist" && (
                <div className="h-12 w-1 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 rounded-full" />
              )}
              {themeType === "motion" && (
                <div className="h-16 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse" />
              )}

              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                  themeType === "brutalist"
                    ? "text-black dark:text-white uppercase font-black"
                    : themeType === "maximalist"
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 animate-gradient"
                    : themeType === "neumorphic"
                    ? "text-gray-700 dark:text-gray-200"
                    : themeType === "minimalist"
                    ? "text-gray-900 dark:text-white"
                    : themeType === "motion"
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    : "text-neutral-900 dark:text-white"
                } ${themeStyles.title}`}
              >
                {component.name}
              </h1>
            </div>

            {component.description && (
              <p
                className={`mt-4 max-w-3xl text-base md:text-lg leading-relaxed ${
                  themeType === "brutalist"
                    ? "text-black dark:text-white font-bold uppercase tracking-wide"
                    : themeType === "maximalist"
                    ? "text-purple-900 dark:text-purple-200"
                    : themeType === "neumorphic"
                    ? "text-gray-600 dark:text-gray-300"
                    : themeType === "minimalist"
                    ? "text-gray-600 dark:text-gray-400"
                    : "text-neutral-600 dark:text-neutral-400"
                } ${themeStyles.description}`}
              >
                {component.description}
              </p>
            )}
          </div>
        </div>

        {/* Preview Section */}
        <section className="mb-20">
          <div
            className={`flex items-center gap-4 mb-8 ${
              themeType === "brutalist" ? "relative" : ""
            }`}
          >
            {themeType === "brutalist" && (
              <div className="absolute -left-6 -top-2 bg-lime-400 px-2 py-1 border-2 border-black dark:border-white text-xs font-black uppercase">
                01
              </div>
            )}

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}

            <h2
              className={`text-xl md:text-2xl font-bold ${getSectionTitleStyles(
                themeType
              )} ${themeType === "brutalist" ? "ml-8" : ""}`}
            >
              {themeType === "brutalist" ? "PREVIEW" : "Preview"}
            </h2>

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}
          </div>

          <div className="relative group">
            {themeType === "maximalist" && (
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            )}
            {themeType === "motion" && (
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            )}

            <div
              className={`relative overflow-hidden transition-all duration-500 ${
                themeType === "brutalist"
                  ? "border-6 border-black dark:border-white bg-white dark:bg-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]"
                  : themeType === "maximalist"
                  ? "rounded-3xl border-4 border-transparent bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 dark:from-purple-950/40 dark:via-pink-950/40 dark:to-orange-950/40 p-12 shadow-2xl shadow-purple-500/30"
                  : themeType === "neumorphic"
                  ? "rounded-3xl bg-gray-200 dark:bg-neutral-800 p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.15),-20px_-20px_40px_rgba(255,255,255,0.9)] dark:shadow-[20px_20px_40px_rgba(0,0,0,0.9),-20px_-20px_40px_rgba(255,255,255,0.05)]"
                  : themeType === "minimalist"
                  ? "rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 shadow-sm hover:shadow-md transition-shadow"
                  : themeType === "motion"
                  ? "rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-12 shadow-2xl hover:shadow-3xl hover:scale-[1.01]"
                  : "rounded-3xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 p-12 shadow-xl hover:shadow-2xl"
              } ${themeStyles.previewCard}`}
            >
              {themeType === "maximalist" && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
              )}

              <div className="relative z-10 flex items-center justify-center min-h-[300px]">
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
        <section className="mb-20">
          <div
            className={`flex items-center gap-4 mb-8 ${
              themeType === "brutalist" ? "relative" : ""
            }`}
          >
            {themeType === "brutalist" && (
              <div className="absolute -left-6 -top-2 bg-cyan-400 px-2 py-1 border-2 border-black dark:border-white text-xs font-black uppercase">
                02
              </div>
            )}

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}

            <h2
              className={`text-xl md:text-2xl font-bold ${getSectionTitleStyles(
                themeType
              )} ${themeType === "brutalist" ? "ml-8" : ""}`}
            >
              {themeType === "brutalist" ? "CODE" : "Code"}
            </h2>

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}
          </div>

          <div className="relative group">
            {themeType === "maximalist" && (
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            )}
            {themeType === "motion" && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            )}

            <CodeBlock code={component.code} language="tsx" />
          </div>
        </section>

        {/* Props Section */}
        <section className="mb-24">
          <div
            className={`flex items-center gap-4 mb-8 ${
              themeType === "brutalist" ? "relative" : ""
            }`}
          >
            {themeType === "brutalist" && (
              <div className="absolute -left-6 -top-2 bg-pink-400 px-2 py-1 border-2 border-black dark:border-white text-xs font-black uppercase">
                03
              </div>
            )}

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}

            <h2
              className={`text-xl md:text-2xl font-bold ${getSectionTitleStyles(
                themeType
              )} ${themeType === "brutalist" ? "ml-8" : ""}`}
            >
              {themeType === "brutalist" ? "PROPS" : "Props"}
            </h2>

            {themeType !== "brutalist" && (
              <div
                className={`h-0.5 flex-1 ${
                  themeType === "maximalist"
                    ? "bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    : themeType === "neumorphic"
                    ? "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] bg-gray-200 dark:bg-neutral-800"
                    : themeType === "motion"
                    ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    : themeType === "minimalist"
                    ? "bg-neutral-200 dark:bg-neutral-800"
                    : "bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
                }`}
              />
            )}
          </div>

          {component.props && component.props.length > 0 ? (
            <div className="relative group">
              {themeType === "maximalist" && (
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              )}
              {themeType === "motion" && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              )}

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  themeType === "brutalist"
                    ? "border-5 border-black dark:border-white bg-white dark:bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[14px_14px_0px_0px_rgba(255,255,255,1)]"
                    : themeType === "maximalist"
                    ? "rounded-2xl border-3 border-transparent bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30 shadow-2xl shadow-purple-500/20"
                    : themeType === "neumorphic"
                    ? "rounded-2xl bg-gray-200 dark:bg-neutral-800 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.8)] dark:shadow-[12px_12px_24px_rgba(0,0,0,0.7),-12px_-12px_24px_rgba(255,255,255,0.05)]"
                    : themeType === "minimalist"
                    ? "rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md"
                    : themeType === "motion"
                    ? "rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl"
                    : "rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 shadow-xl"
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
                          : themeType === "minimalist"
                          ? "border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800"
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
                              : themeType === "minimalist"
                              ? "font-semibold text-gray-700 dark:text-gray-300"
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
                              : themeType === "minimalist"
                              ? "font-semibold text-gray-700 dark:text-gray-300"
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
                              : themeType === "minimalist"
                              ? "font-semibold text-gray-700 dark:text-gray-300"
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
                              : themeType === "minimalist"
                              ? "font-semibold text-gray-700 dark:text-gray-300"
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
                          : themeType === "minimalist"
                          ? "divide-y divide-neutral-200 dark:divide-neutral-800"
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
                              : themeType === "minimalist"
                              ? "hover:bg-neutral-50 dark:hover:bg-neutral-800/80"
                              : "hover:bg-gradient-to-r hover:from-[var(--primary)]/5 hover:to-transparent"
                          }`}
                        >
                          <td
                            className={`px-6 py-5 font-mono text-sm font-semibold ${
                              themeType === "brutalist"
                                ? "text-black dark:text-white"
                                : themeType === "minimalist"
                                ? "text-gray-700 dark:text-gray-300"
                                : "text-blue-600 dark:text-blue-400 group-hover/row:text-blue-700 dark:group-hover/row:text-blue-300"
                            }`}
                          >
                            {prop.name}
                          </td>
                          <td
                            className={`px-6 py-5 font-mono text-xs ${
                              themeType === "brutalist"
                                ? "text-black dark:text-white font-bold bg-yellow-200 dark:bg-yellow-300"
                                : themeType === "minimalist"
                                ? "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-neutral-800"
                                : "text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/10 group-hover/row:bg-amber-100/50 dark:group-hover/row:bg-amber-900/20"
                            }`}
                          >
                            {prop.type}
                          </td>
                          <td
                            className={`px-6 py-5 font-mono text-xs ${
                              themeType === "brutalist"
                                ? "text-black dark:text-white font-bold"
                                : themeType === "minimalist"
                                ? "text-gray-600 dark:text-gray-400"
                                : "text-emerald-600 dark:text-emerald-400 group-hover/row:text-emerald-700 dark:group-hover/row:text-emerald-300"
                            }`}
                          >
                            {prop.default || "-"}
                          </td>
                          <td
                            className={`px-6 py-5 ${
                              themeType === "brutalist"
                                ? "text-black dark:text-white"
                                : themeType === "minimalist"
                                ? "text-gray-600 dark:text-gray-400"
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
                  : themeType === "minimalist"
                  ? "text-gray-500 dark:text-gray-400"
                  : "text-neutral-500 dark:text-neutral-400 font-light"
              }`}
            >
              No props documentation available.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
