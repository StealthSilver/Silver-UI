"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Card, Input } from "./ui";
import { CodeBlock } from "./CodeBlock";

// Simple inline SVG icon components (Twitter & LinkedIn)
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="Twitter"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.928 2.206-4.928 4.927 0 .386.045.763.127 1.125-4.094-.206-7.725-2.165-10.163-5.144-.424.722-.666 1.561-.666 2.475 0 1.709.87 3.216 2.19 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.95 4.827-.414.111-.848.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.381 4.6 3.421-1.685 1.321-3.81 2.107-6.116 2.107-.398 0-.79-.023-1.177-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.004-7.496 14.004-13.986 0-.213-.005-.425-.014-.636.961-.693 1.8-1.56 2.46-2.548z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="LinkedIn"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.602 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.068 0-1.143.924-2.069 2.068-2.069 1.142 0 2.066.926 2.066 2.069 0 1.142-.924 2.068-2.066 2.068zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.222 0h.003z" />
  </svg>
);

// Component metadata (preview + code). In a real scenario you could read file contents server-side.
interface ComponentMeta {
  name: string;
  preview: React.ReactNode;
  code: string;
  description?: string;
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
        <Button size="md">Medium</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
    code: `// button.tsx\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\n\nconst buttonVariants = cva(\n  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none",\n  {\n    variants: {\n      variant: {\n        default: "bg-blue-600 text-white hover:bg-blue-700",\n        outline: "border border-gray-300 hover:bg-gray-100",\n      },\n      size: {\n        sm: "px-3 py-1.5 text-sm",\n        md: "px-4 py-2 text-base",\n      },\n    },\n    defaultVariants: { variant: "default", size: "md" },\n  }\n);\n\nexport const Button = ({ className, variant, size, ...props }) => (\n  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />\n);`,
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
  },
  {
    name: "Input",
    description: "Text input with variants (default, error) & sizes.",
    preview: (
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Input placeholder="Default" />
        <Input size="sm" placeholder="Small" />
        <Input size="lg" placeholder="Large" />
        <Input variant="error" placeholder="Error state" />
        <div className="flex gap-2">
          <Input className="flex-1" placeholder="Inline" />
          <Button>Submit</Button>
        </div>
      </div>
    ),
    code: `// input.tsx\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\nconst inputVariants = cva(\n  "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",\n  {\n    variants: {\n      variant: { default: "border-gray-300 focus-visible:ring-blue-500", error: "border-red-500 focus-visible:ring-red-500" },\n      size: { sm: "h-8 px-2 text-xs", md: "h-10 px-3 text-sm", lg: "h-12 px-4 text-base" },\n    },\n    defaultVariants: { variant: "default", size: "md" },\n  }\n);\nexport const Input = ({ className, variant, size, ...props }) => (\n  <input className={cn(inputVariants({ variant, size }), className)} {...props} />\n);`,
  },
];

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const [activeName, setActiveName] = useState<string>(components[0].name);
  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  const active = components.find((c) => c.name === activeName)!;

  return (
    <div
      className="min-h-screen flex flex-col bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900"
      style={{
        ["--primary" as any]: "#007078",
        ["--primary-hover" as any]: "#006068",
      }}
    >
      {/* Navbar */}
      <nav className="w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/70 dark:bg-neutral-900/80 dark:border-neutral-800/60 dark:supports-backdrop-filter:bg-neutral-900/70">
        <div className="mx-auto px-4 md:px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                width={100}
                height={36}
                alt="Logo"
                priority
              />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search components..."
                className="peer w-48 sm:w-64 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-(--primary) transition shadow-sm"
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-400 peer-focus:text-(--primary)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
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
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-(--primary) transition"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-(--primary) transition"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Layout with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex md:flex-col w-72 border-r border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-900/50 backdrop-blur-xl">
          <div className="p-5 flex-1 flex flex-col">
            <h2 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3">
              Components ({filtered.length})
            </h2>
            <div className="space-y-1 overflow-y-auto pr-1 flex-1">
              {filtered.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveName(c.name)}
                  className={`group w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors border ${
                    c.name === activeName
                      ? "bg-(--primary) border-(--primary) text-white shadow-sm"
                      : "border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800/60"
                  }`}
                >
                  {c.name}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-xs text-neutral-500 px-2 py-4">
                  No matches.
                </p>
              )}
            </div>
            <div className="pt-4 text-[10px] text-neutral-400">
              <p className="leading-relaxed">
                Tip: Use the search above to quickly filter the component list.
              </p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 py-8 overflow-y-auto">
          <div className="mx-auto px-5 md:px-10 max-w-5xl">
            <h1 className="text-3xl font-semibold tracking-tight mb-5 flex items-center gap-3">
              <span className="inline-block h-6 w-1 rounded bg-(--primary)" />
              {active.name}
            </h1>
            {active.description && (
              <p className="text-neutral-700 dark:text-neutral-300 mb-8 max-w-prose text-sm leading-relaxed">
                {active.description}
              </p>
            )}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Preview
                </h2>
              </div>
              <div className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/90 dark:bg-neutral-900/70 backdrop-blur p-8 shadow-sm">
                {active.preview}
              </div>
            </section>
            <section className="mb-20">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Source Code
                </h2>
              </div>
              <CodeBlock code={active.code} language="tsx" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
