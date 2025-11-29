"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import { components } from "@/config/components.config";
import { CodeBlock } from "../CodeBlock";

export default function ComponentPage() {
  const params = useParams();
  const slug = params.slug as string;

  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="mx-auto px-6 md:px-12 max-w-5xl py-8">
      {/* Hero Header with Gradient */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-[var(--primary-hover)]/10 rounded-3xl blur-3xl -z-10" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="inline-block h-12 w-1.5 rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--primary-hover)] shadow-lg shadow-[var(--primary)]/30" />
              <span className="absolute -left-1 top-0 inline-block h-12 w-1.5 rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--primary-hover)] opacity-30 blur-sm" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary)] animate-gradient">
              {component.name}
            </h1>
          </div>
        </div>
        {component.description && (
          <p className="text-neutral-600 dark:text-neutral-300 mt-6 max-w-2xl text-lg leading-relaxed font-light">
            {component.description}
          </p>
        )}
      </div>

      {/* Preview Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Preview
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary-hover)]/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <div className="rounded-3xl border-2 border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-white via-neutral-50/50 to-white dark:from-neutral-900 dark:via-neutral-900/50 dark:to-neutral-800/80 backdrop-blur-xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[var(--primary-hover)]/5 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">{component.preview}</div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Code
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary-hover)]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          <CodeBlock code={component.code} language="tsx" />
        </div>
      </section>

      {/* Props Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Props
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
        </div>
        {component.props && component.props.length > 0 ? (
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--primary-hover)]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="overflow-hidden rounded-2xl border-2 border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-white via-neutral-50/30 to-white dark:from-neutral-900 dark:via-neutral-900/50 dark:to-neutral-800/80 backdrop-blur-xl shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b-2 border-neutral-200/60 dark:border-neutral-700/60 bg-gradient-to-r from-neutral-50/50 to-transparent dark:from-neutral-800/50">
                    <tr>
                      <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Name
                      </th>
                      <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Type
                      </th>
                      <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Default
                      </th>
                      <th className="px-6 py-5 font-bold text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200/40 dark:divide-neutral-800/40">
                    {component.props.map((prop, index) => (
                      <tr
                        key={prop.name}
                        className="transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--primary)]/5 hover:to-transparent group/row"
                      >
                        <td className="px-6 py-5 font-mono text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover/row:text-blue-700 dark:group-hover/row:text-blue-300">
                          {prop.name}
                        </td>
                        <td className="px-6 py-5 font-mono text-xs text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/10 group-hover/row:bg-amber-100/50 dark:group-hover/row:bg-amber-900/20">
                          {prop.type}
                        </td>
                        <td className="px-6 py-5 font-mono text-xs text-emerald-600 dark:text-emerald-400 group-hover/row:text-emerald-700 dark:group-hover/row:text-emerald-300">
                          {prop.default || "-"}
                        </td>
                        <td className="px-6 py-5 text-neutral-600 dark:text-neutral-400 group-hover/row:text-neutral-700 dark:group-hover/row:text-neutral-300">
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
          <p className="text-neutral-500 dark:text-neutral-400 text-center py-8 text-lg font-light">
            No props documentation available.
          </p>
        )}
      </section>
    </div>
  );
}
