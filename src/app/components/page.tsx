"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  Loader,
  ShimmerButton,
  Badge,
  Switch,
  Avatar,
} from "../components/ui";
import { CodeBlock } from "./CodeBlock";
import { Search, Github, Code2 } from "lucide-react";

interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ComponentMeta {
  name: string;
  preview: React.ReactNode;
  code: string;
  description: string;
  props: PropRow[];
}

const components: ComponentMeta[] = [
  {
    name: "Button",
    description:
      "Versatile action button with multiple variants and sizes for different use cases.",
    preview: (
      <div className="flex flex-wrap gap-3 items-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    ),
    code: `import { Button } from "@/components/ui";

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>`,
    props: [
      {
        name: "variant",
        type: '"default" | "outline" | "ghost" | "destructive" | "secondary"',
        default: '"default"',
        description: "Visual style variant",
      },
      {
        name: "size",
        type: '"sm" | "default" | "lg" | "icon"',
        default: '"default"',
        description: "Button size",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable button interaction",
      },
    ],
  },
  {
    name: "Input",
    description:
      "Text input field with variants and sizes for form interactions.",
    preview: (
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Input placeholder="Default input" />
        <Input inputSize="sm" placeholder="Small input" />
        <Input inputSize="lg" placeholder="Large input" />
        <Input variant="error" placeholder="Error state" />
        <div className="flex gap-2">
          <Input className="flex-1" placeholder="With button" />
          <Button>Submit</Button>
        </div>
      </div>
    ),
    code: `import { Input } from "@/components/ui";

<Input placeholder="Default input" />
<Input inputSize="sm" placeholder="Small" />
<Input variant="error" placeholder="Error" />`,
    props: [
      {
        name: "variant",
        type: '"default" | "error"',
        default: '"default"',
        description: "Visual style variant",
      },
      {
        name: "inputSize",
        type: '"sm" | "default" | "lg"',
        default: '"default"',
        description: "Input size",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable input interaction",
      },
    ],
  },
  {
    name: "Card",
    description:
      "Content container with border, padding and optional hover effects.",
    preview: (
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="font-semibold mb-2 text-foreground">Simple Card</h3>
          <p className="text-sm text-muted-foreground">
            A clean content container with subtle styling.
          </p>
        </Card>
        <Card hoverable>
          <h3 className="font-semibold mb-2 text-foreground">Hoverable Card</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Interactive card with hover effects.
          </p>
          <Button size="sm">Action</Button>
        </Card>
      </div>
    ),
    code: `import { Card } from "@/components/ui";

<Card>
  <h3>Simple Card</h3>
  <p>Card content goes here</p>
</Card>

<Card hoverable>
  <h3>Hoverable Card</h3>
  <Button>Action</Button>
</Card>`,
    props: [
      {
        name: "hoverable",
        type: "boolean",
        default: "false",
        description: "Enable hover effects",
      },
    ],
  },
  {
    name: "Loader",
    description: "Animated loading spinner with customizable size and style.",
    preview: (
      <div className="flex flex-wrap gap-8 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Loader size="sm" />
          <span className="text-xs text-muted-foreground">Small</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Loader size="md" />
          <span className="text-xs text-muted-foreground">Medium</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Loader size="lg" />
          <span className="text-xs text-muted-foreground">Large</span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Loader size="xl" />
          <span className="text-xs text-muted-foreground">Extra Large</span>
        </div>
      </div>
    ),
    code: `import { Loader } from "@/components/ui";

<Loader size="sm" />
<Loader size="md" />
<Loader size="lg" />
<Loader size="xl" />`,
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "muted"',
        default: '"default"',
        description: "Color variant",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Loader size",
      },
    ],
  },
  {
    name: "ShimmerButton",
    description:
      "Eye-catching button with animated shimmer effect for primary CTAs.",
    preview: (
      <div className="flex flex-wrap gap-4">
        <ShimmerButton>Get Started</ShimmerButton>
        <ShimmerButton disabled>Disabled</ShimmerButton>
      </div>
    ),
    code: `import { ShimmerButton } from "@/components/ui";

<ShimmerButton>Get Started</ShimmerButton>
<ShimmerButton shimmerSize="300px">
  Custom Shimmer
</ShimmerButton>`,
    props: [
      {
        name: "shimmerSize",
        type: "string",
        default: '"200px"',
        description: "Width of shimmer effect",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable button interaction",
      },
    ],
  },
  {
    name: "Badge",
    description: "Small label component for tags, statuses, and categories.",
    preview: (
      <div className="flex flex-wrap gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
    code: `import { Badge } from "@/components/ui";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>`,
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "outline" | "success" | "warning" | "destructive"',
        default: '"default"',
        description: "Badge color variant",
      },
    ],
  },
  {
    name: "Switch",
    description: "Toggle switch for binary on/off states with optional label.",
    preview: (
      <div className="flex flex-col gap-4">
        <Switch label="Enable notifications" />
        <Switch label="Dark mode" defaultChecked />
        <Switch disabled label="Disabled switch" />
      </div>
    ),
    code: `import { Switch } from "@/components/ui";

<Switch label="Enable notifications" />
<Switch label="Dark mode" defaultChecked />
<Switch disabled label="Disabled" />`,
    props: [
      {
        name: "label",
        type: "string",
        description: "Optional label text",
      },
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        default: "false",
        description: "Default checked state",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable switch interaction",
      },
    ],
  },
  {
    name: "Avatar",
    description: "User profile image with fallback text for missing images.",
    preview: (
      <div className="flex flex-wrap gap-4 items-center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
          alt="User"
          size="sm"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
          alt="User"
          size="default"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
          alt="User"
          size="lg"
        />
        <Avatar fallback="JD" size="xl" />
      </div>
    ),
    code: `import { Avatar } from "@/components/ui";

<Avatar src="/user.jpg" alt="User" />
<Avatar fallback="JD" />
<Avatar size="lg" src="/profile.jpg" />`,
    props: [
      {
        name: "src",
        type: "string",
        description: "Image source URL",
      },
      {
        name: "alt",
        type: "string",
        description: "Alternative text",
      },
      {
        name: "fallback",
        type: "string",
        default: '"U"',
        description: "Fallback text when image fails",
      },
      {
        name: "size",
        type: '"sm" | "default" | "lg" | "xl"',
        default: '"default"',
        description: "Avatar size",
      },
    ],
  },
];

const PropsTable: React.FC<{ props: PropRow[] }> = ({ props }) => {
  if (!props || props.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Prop
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Default
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, idx) => (
              <tr
                key={idx}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">
                  {prop.name}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {prop.type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {prop.default || "—"}
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function Index() {
  const [query, setQuery] = useState("");
  const [activeName, setActiveName] = useState<string>(components[0].name);

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );
  const active = components.find((c) => c.name === activeName)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">
              ComponentLib
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1 overflow-y-auto">
              {filtered.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setActiveName(c.name)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    c.name === activeName
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {c.name}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-xs text-muted-foreground px-4 py-4">
                  No components found.
                </p>
              )}
            </div>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                {active.name}
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                {active.description}
              </p>
            </div>

            {/* Preview */}
            <section className="mb-10">
              <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Preview
              </h2>
              <div className="rounded-lg border border-border bg-card p-8">
                {active.preview}
              </div>
            </section>

            {/* Code */}
            <section className="mb-10">
              <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Code
              </h2>
              <CodeBlock code={active.code} language="tsx" />
            </section>

            {/* Props Table */}
            {active.props && active.props.length > 0 && (
              <section>
                <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                  Props
                </h2>
                <PropsTable props={active.props} />
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
