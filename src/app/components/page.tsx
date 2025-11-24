"use client";
import React, { useState } from "react";
import { Button, Card, Input } from "./ui";
import { CodeBlock } from "./CodeBlock";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// Component metadata (preview + code). In a real scenario you could read file contents server-side.

interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

interface ComponentMeta {
  name: string;
  preview: React.ReactNode;
  code: string;
  description?: string;
  props?: ComponentProp[];
}

const components: ComponentMeta[] = [
  {
    name: "Button",
    description: "Primary action button with variants and sizes.",
    preview: (
      <div className="flex gap-3 flex-wrap items-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Medium</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
    code: `// button.tsx\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\n\nconst buttonVariants = cva(\n  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none",\n  {\n    variants: {\n      variant: {\n        default: "bg-blue-600 text-white hover:bg-blue-700",\n        outline: "border border-gray-300 hover:bg-gray-100",\n      },\n      size: {\n        sm: "px-3 py-1.5 text-sm",\n        md: "px-4 py-2 text-base",\n      },\n    },\n    defaultVariants: { variant: "default", size: "md" },\n  }\n);\n\nexport const Button = ({ className, variant, size, ...props }) => (\n  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />\n);`,
    props: [
      {
        name: "variant",
        type: '"default" | "outline"',
        default: '"default"',
        description: "Visual style of the button.",
      },
      {
        name: "size",
        type: '"default" | "sm"',
        default: '"default"',
        description: "Size of the button.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the button.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "Button content.",
      },
    ],
  },
  {
    name: "Card",
    description: "Container with border, padding and subtle shadow.",
    preview: (
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold mb-1">Simple Card</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            A lightweight content container.
          </p>
        </Card>
        <Card className="bg-linear-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
          <h3 className="font-semibold mb-1">Custom Background</h3>
          <Button size="sm" className="mt-2">
            Action
          </Button>
        </Card>
      </div>
    ),
    code: `// card.tsx\nimport { cn } from "./utils";\nexport const Card = ({ className, children, ...props }) => (\n  <div className={cn("rounded-xl border bg-white p-4 shadow-sm", className)} {...props}>\n    {children}\n  </div>\n);`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "Card content.",
      },
    ],
  },
  {
    name: "Input",
    description: "Text input with variants (default, error) & sizes.",
    preview: (
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Input placeholder="Default" />
        <Input variant="default" placeholder="Small" />
        <Input variant="default" placeholder="Large" />
        <Input variant="error" placeholder="Error state" />
        <div className="flex gap-2">
          <Input className="flex-1" placeholder="Inline" />
          <Button>Submit</Button>
        </div>
      </div>
    ),
    code: `// input.tsx\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\nconst inputVariants = cva(\n  "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\n  {\n    variants: {\n      variant: { default: "border-gray-300 focus-visible:ring-blue-500", error: "border-red-500 focus-visible:ring-red-500" },\n      size: { sm: "h-8 px-2 text-xs", md: "h-10 px-3 text-sm", lg: "h-12 px-4 text-base" },\n    },\n    defaultVariants: { variant: "default", size: "md" },\n  }\n);\nexport const Input = ({ className, variant, size, ...props }) => (\n  <input className={cn(inputVariants({ variant, size }), className)} {...props} />\n);`,
    props: [
      {
        name: "variant",
        type: '"default" | "error"',
        default: '"default"',
        description: "Visual style of the input.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Input placeholder text.",
      },
      {
        name: "type",
        type: "string",
        default: '"text"',
        description: "Input type.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the input.",
      },
    ],
  },
];

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const [activeName, setActiveName] = useState<string>(components[0].name);
  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  const active = components.find((c) => c.name === activeName)!;

  // Modern, sleek layout with brand color
  return (
    <div
      className="min-h-screen flex flex-col bg-linear-to-br from-[#f8fafc] to-[#e6f2fa] dark:from-[#0a0a0a] dark:to-[#1a232a]"
      style={{
        ["--primary" as any]: "#0070a8",
        ["--primary-hover" as any]: "#005a87",
      }}
    >
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          components={components}
          activeName={activeName}
          setActiveName={setActiveName}
          filtered={filtered}
        />
        <main className="flex-1 py-10 overflow-y-auto">
          <div className="mx-auto px-6 md:px-12 max-w-4xl">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-block h-7 w-1 rounded bg-(--primary)" />
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {active.name}
                </h1>
              </div>
              <div className="relative w-full md:w-80">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search components..."
                  className="peer w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 px-4 py-2 text-base outline-none focus:ring-2 focus:ring-(--primary) transition shadow-sm"
                />
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-400 peer-focus:text-(--primary)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {active.description && (
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 max-w-prose text-base leading-relaxed">
                {active.description}
              </p>
            )}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Preview
                </h2>
              </div>
              <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/95 dark:bg-neutral-900/80 backdrop-blur p-10 shadow-lg">
                {active.preview}
              </div>
            </section>
            <section className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Source Code
                </h2>
              </div>
              <CodeBlock code={active.code} language="tsx" />
            </section>
            {/* Props Table */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Props
                </h2>
              </div>
              <div className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/95 dark:bg-neutral-900/80 backdrop-blur p-6 shadow overflow-x-auto">
                {active.props && active.props.length > 0 ? (
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-neutral-200 dark:border-neutral-800">
                        <th className="py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">
                          Prop
                        </th>
                        <th className="py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">
                          Type
                        </th>
                        <th className="py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">
                          Default
                        </th>
                        <th className="py-2 font-semibold text-neutral-700 dark:text-neutral-200">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {active.props.map((prop) => (
                        <tr
                          key={prop.name}
                          className="border-b border-neutral-100 dark:border-neutral-800"
                        >
                          <td className="py-2 pr-4 font-mono text-blue-700 dark:text-blue-300">
                            {prop.name}
                          </td>
                          <td className="py-2 pr-4 font-mono text-emerald-700 dark:text-emerald-300">
                            {prop.type}
                          </td>
                          <td className="py-2 pr-4 text-neutral-500">
                            {prop.default || (
                              <span className="italic text-xs">-</span>
                            )}
                          </td>
                          <td className="py-2 text-neutral-700 dark:text-neutral-300">
                            {prop.description || (
                              <span className="italic text-xs">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-neutral-500 text-sm">
                    No documented props.
                  </p>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
