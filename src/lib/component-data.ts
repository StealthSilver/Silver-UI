export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: React.ComponentType;
  code: string;
  installationSteps: string[];
  usage: string;
  props?: {
    name: string;
    type: string;
    description: string;
    default?: string;
  }[];
}

export const componentData: Record<string, ComponentInfo> = {
  button: {
    id: "button",
    name: "Button",
    description:
      "A customizable button component with multiple variants and sizes.",
    category: "Form",
    preview: () => null, // We'll implement this later
    code: `import { Button } from "@/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`,
    installationSteps: [
      "Copy the button component code",
      "Install required dependencies: class-variance-authority, clsx",
      "Add the button component to your project",
      "Import and use the Button component",
    ],
    usage: `<Button variant="default" size="md">
  Click me
</Button>`,
    props: [
      {
        name: "variant",
        type: '"default" | "outline"',
        description: "The visual style variant of the button",
        default: '"default"',
      },
      {
        name: "size",
        type: '"sm" | "md"',
        description: "The size of the button",
        default: '"md"',
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply",
      },
    ],
  },
  card: {
    id: "card",
    name: "Card",
    description:
      "A flexible container component for displaying content in a card layout.",
    category: "Layout",
    preview: () => null, // We'll implement this later
    code: `import { Card } from "@/ui/card";

export function CardDemo() {
  return (
    <Card className="w-80">
      <h3 className="text-lg font-semibold">Card Title</h3>
      <p className="text-gray-600 mt-2">
        This is a card component with some example content.
      </p>
    </Card>
  );
}`,
    installationSteps: [
      "Copy the card component code",
      "Install required dependencies: clsx",
      "Add the card component to your project",
      "Import and use the Card component",
    ],
    usage: `<Card className="w-80">
  <h3>Title</h3>
  <p>Content goes here</p>
</Card>`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "The content to display inside the card",
      },
    ],
  },
  input: {
    id: "input",
    name: "Input",
    description:
      "A versatile input component with different variants and sizes for form controls.",
    category: "Form",
    preview: () => null,
    code: `import { Input } from "@/ui/input";

export function InputDemo() {
  return (
    <div className="space-y-4 w-80">
      <Input placeholder="Default input" />
      <Input placeholder="Large input" size="lg" />
      <Input placeholder="Error state" variant="error" />
    </div>
  );
}`,
    installationSteps: [
      "Copy the input component code",
      "Install required dependencies: class-variance-authority, clsx",
      "Add the input component to your project",
      "Import and use the Input component",
    ],
    usage: `<Input 
  placeholder="Enter text..."
  variant="default"
  size="md"
/>`,
    props: [
      {
        name: "variant",
        type: '"default" | "error"',
        description: "The visual style variant of the input",
        default: '"default"',
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        description: "The size of the input",
        default: '"md"',
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text for the input",
      },
    ],
  },
};
