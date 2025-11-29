import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Loader } from "@/app/components/ui/loader";
import { Badge } from "@/app/components/ui/badge";
import { Switch } from "@/app/components/ui/switch";
import { Avatar } from "@/app/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";

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
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card hoverable>
          <h3 className="font-bold text-lg mb-2">Interactive Card</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
            Hover to see the beautiful effect
          </p>
          <Button size="sm">Learn More</Button>
        </Card>
        <Card className="bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
          <h3 className="font-bold text-lg mb-2">Gradient Card</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            With subtle gradient background
          </p>
        </Card>
        <Card>
          <h3 className="font-bold text-lg mb-2">Simple Card</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Clean and elegant design
          </p>
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
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <Input placeholder="Enter your name..." />
        <Input placeholder="Email address" inputSize="sm" />
        <Input placeholder="Large input" inputSize="lg" />
        <Input variant="error" placeholder="Error state example" />
        <div className="flex gap-2">
          <Input className="flex-1" placeholder="Search..." />
          <Button>Search</Button>
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
      <div className="flex gap-8 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader size="sm" />
          <span className="text-xs text-neutral-500">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader size="md" />
          <span className="text-xs text-neutral-500">Medium</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Loader size="lg" />
          <span className="text-xs text-neutral-500">Large</span>
        </div>
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
  {
    name: "Badge",
    slug: "badge",
    description:
      "Small status indicators and labels with gradient styles and variants.",
    preview: (
      <div className="flex gap-3 flex-wrap items-center justify-center">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `// badge.tsx\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\n\nconst badgeVariants = cva(\n  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",\n  {\n    variants: {\n      variant: {\n        default: "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white shadow-lg",\n        secondary: "bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",\n        success: "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg",\n        warning: "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg",\n        danger: "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg",\n        outline: "border-2 border-[var(--primary)]/40 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm",\n      },\n    },\n    defaultVariants: { variant: "default" },\n  }\n);\n\nexport const Badge = ({ className, variant, ...props }) => (\n  <div className={cn(badgeVariants({ variant }), className)} {...props} />\n);`,
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "success" | "warning" | "danger" | "outline"',
        default: '"default"',
        description: "Visual style of the badge.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "Badge content.",
      },
    ],
  },
  {
    name: "Switch",
    slug: "switch",
    description:
      "Toggle switch component with smooth animations and gradient effects.",
    preview: (
      <div className="flex flex-col gap-6 items-start">
        <Switch label="Enable notifications" defaultChecked />
        <Switch label="Dark mode" />
        <Switch label="Auto-save" defaultChecked />
        <Switch label="Disabled option" disabled />
      </div>
    ),
    code: `// switch.tsx\nimport React from "react";\nimport { cn } from "./utils";\n\nexport const Switch = ({ className, label, ...props }) => {\n  return (\n    <label className="inline-flex items-center gap-3 cursor-pointer group">\n      <div className="relative">\n        <input type="checkbox" className="sr-only peer" {...props} />\n        <div className={cn(\n          "w-14 h-8 rounded-full transition-all duration-300",\n          "bg-gradient-to-br from-neutral-200 to-neutral-300",\n          "peer-checked:bg-gradient-to-br peer-checked:from-[var(--primary)] peer-checked:to-[var(--primary-hover)]",\n          "peer-checked:shadow-lg peer-checked:shadow-[var(--primary)]/30",\n          className\n        )} />\n        <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white shadow-lg peer-checked:translate-x-6 transition-all duration-300" />\n      </div>\n      {label && <span className="text-sm font-medium">{label}</span>}\n    </label>\n  );\n};`,
    props: [
      {
        name: "label",
        type: "string",
        description: "Label text displayed next to the switch.",
      },
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state.",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "Default checked state for uncontrolled component.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Disable the switch.",
      },
      {
        name: "onChange",
        type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        description: "Callback fired when the state is changed.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
  },
  {
    name: "Avatar",
    slug: "avatar",
    description:
      "User avatar component with image support, fallback text, and multiple sizes.",
    preview: (
      <div className="flex gap-6 items-center flex-wrap justify-center">
        <div className="flex flex-col items-center gap-2">
          <Avatar size="sm" fallback="JS" />
          <span className="text-xs text-neutral-500">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar fallback="AB" />
          <span className="text-xs text-neutral-500">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size="lg" fallback="MK" />
          <span className="text-xs text-neutral-500">Large</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size="xl" fallback="RS" />
          <span className="text-xs text-neutral-500">Extra Large</span>
        </div>
      </div>
    ),
    code: `// avatar.tsx\nimport React from "react";\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\n\nconst avatarVariants = cva(\n  "relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 shadow-lg",\n  {\n    variants: {\n      size: {\n        sm: "h-8 w-8 text-xs",\n        default: "h-10 w-10 text-sm",\n        lg: "h-14 w-14 text-base",\n        xl: "h-20 w-20 text-xl",\n      },\n    },\n    defaultVariants: { size: "default" },\n  }\n);\n\nexport const Avatar = ({ className, size, src, alt, fallback, ...props }) => {\n  const [imgError, setImgError] = React.useState(false);\n  return (\n    <div className={cn(avatarVariants({ size }), "hover:scale-110", className)} {...props}>\n      {src && !imgError ? (\n        <img src={src} alt={alt || "Avatar"} className="h-full w-full object-cover" onError={() => setImgError(true)} />\n      ) : (\n        <span className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] bg-clip-text text-transparent">{fallback || "?"}</span>\n      )}\n    </div>\n  );\n};`,
    props: [
      {
        name: "size",
        type: '"sm" | "default" | "lg" | "xl"',
        default: '"default"',
        description: "Size of the avatar.",
      },
      {
        name: "src",
        type: "string",
        description: "Image source URL.",
      },
      {
        name: "alt",
        type: "string",
        description: "Image alt text.",
      },
      {
        name: "fallback",
        type: "string",
        description:
          "Fallback text when image fails to load or is not provided.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
    ],
  },
  {
    name: "Alert",
    slug: "alert",
    description:
      "Alert component for displaying important messages with different severity levels.",
    preview: (
      <div className="flex flex-col gap-4 w-full">
        <Alert>
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            This is a default alert with gradient background and glassmorphism
            effect.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Please review your settings before continuing.
          </AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again.
          </AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            Here's some helpful information for you.
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `// alert.tsx\nimport React from "react";\nimport { cva } from "class-variance-authority";\nimport { cn } from "./utils";\n\nconst alertVariants = cva(\n  "relative w-full rounded-2xl border-2 p-5 transition-all duration-300 backdrop-blur-sm shadow-lg",\n  {\n    variants: {\n      variant: {\n        default: "border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--primary)]/10 to-transparent",\n        success: "border-green-500/30 bg-gradient-to-br from-green-500/5 via-green-500/10 to-transparent",\n        warning: "border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-amber-500/10 to-transparent",\n        danger: "border-red-500/30 bg-gradient-to-br from-red-500/5 via-red-500/10 to-transparent",\n        info: "border-blue-500/30 bg-gradient-to-br from-blue-500/5 via-blue-500/10 to-transparent",\n      },\n    },\n    defaultVariants: { variant: "default" },\n  }\n);\n\nexport const Alert = ({ className, variant, ...props }) => (\n  <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />\n);\n\nexport const AlertTitle = ({ className, ...props }) => (\n  <h5 className={cn("mb-2 font-bold text-lg", className)} {...props} />\n);\n\nexport const AlertDescription = ({ className, ...props }) => (\n  <div className={cn("text-sm leading-relaxed opacity-90", className)} {...props} />\n);`,
    props: [
      {
        name: "variant",
        type: '"default" | "success" | "warning" | "danger" | "info"',
        default: '"default"',
        description: "Visual style indicating severity level.",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description:
          "Alert content (use AlertTitle and AlertDescription components).",
      },
    ],
  },
];
