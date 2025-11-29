import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Loader } from "@/app/components/ui/loader";

export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

export interface ComponentMeta {
  name: string;
  slug: string;
  preview: React.ReactNode;
  code: string;
  description?: string;
  props?: ComponentProp[];
}

export const components: ComponentMeta[] = [
  {
    name: "Button",
    slug: "button",
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
    slug: "card",
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
    slug: "input",
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
  {
    name: "Loader",
    slug: "loader",
    description: "Animated spinner for loading states, with size options.",
    preview: (
      <div className="flex gap-6 items-center">
        <Loader />
        <Loader size="sm" />
        <Loader size="md" />
        <Loader size="lg" />
      </div>
    ),
    code: `// loader.tsx\nimport React from "react";\nimport { cn } from "./utils";\n\ninterface LoaderProps {\n  size?: "sm" | "md" | "lg";\n  className?: string;\n}\n\nconst sizeMap = {\n  sm: "h-4 w-4 border-2",\n  md: "h-8 w-8 border-4",\n  lg: "h-12 w-12 border-8",\n};\n\nexport const Loader: React.FC<LoaderProps> = ({ size = "md", className }) => (\n  <span\n    className={cn(\n      "inline-block animate-spin rounded-full border-t-[--primary] border-r-transparent border-b-[--primary] border-l-transparent",\n      sizeMap[size],\n      className\n    )}\n    aria-label="Loading"\n    role="status"\n  />\n);`,
    props: [
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Size of the loader spinner.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
  },
];
