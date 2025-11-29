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
    <div className="mx-auto px-6 md:px-12 max-w-4xl">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block h-7 w-1 rounded bg-[--primary]" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[--primary] to-[--primary-hover]">
            {component.name}
          </h1>
        </div>
      </div>
      {component.description && (
        <p className="text-neutral-200 mb-8 max-w-prose text-base leading-relaxed">
          {component.description}
        </p>
      )}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-neutral-100">Preview</h2>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 backdrop-blur p-10 shadow-lg">
          {component.preview}
        </div>
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-neutral-100">Code</h2>
        </div>
        <CodeBlock code={component.code} language="tsx" />
      </section>
      {/* Props Table */}
      <section className="mb-20">
        <div className="mb-3">
          <h2 className="text-xl font-semibold text-neutral-100">Props</h2>
        </div>
        {component.props && component.props.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="border-b border-neutral-700 text-xs uppercase tracking-wider text-neutral-400">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Type</th>
                    <th className="px-6 py-4 font-semibold">Default</th>
                    <th className="px-6 py-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {component.props.map((prop) => (
                    <tr
                      key={prop.name}
                      className="transition-colors hover:bg-neutral-800/40"
                    >
                      <td className="px-6 py-4 font-mono text-xs text-blue-300">
                        {prop.name}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-yellow-300">
                        {prop.type}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-green-300">
                        {prop.default || "-"}
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        {prop.description || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-neutral-400">No props documentation.</p>
        )}
      </section>
    </div>
  );
}
