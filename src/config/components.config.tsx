import React from "react";
import { Button } from "@/app/components/ui/button";
import { ThemedCardPreview } from "@/app/components/ui/ThemedCardPreview";
import { ThemedInputPreview } from "@/app/components/ui/ThemedInputPreview";
import { ThemedLoaderPreview } from "@/app/components/ui/ThemedLoaderPreview";
import { ThemedSwitchPreview } from "@/app/components/ui/ThemedSwitchPreview";

// Theme-specific button imports
import { MinimalistButtonPreview } from "@/app/components/ui/minimalist/button";
import { BrutalistButtonPreview } from "@/app/components/ui/brutalist/button";
import { MaximalistButtonPreview } from "@/app/components/ui/maximalist/button";
import { NeumorphicButtonPreview } from "@/app/components/ui/neumorphic/button";
import { MotionButtonPreview } from "@/app/components/ui/motion/button";

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
  installation?: string[];
}

export const components: ComponentMeta[] = [
  {
    name: "Button",
    slug: "button",
    description:
      "A versatile button component with multiple variants and styles. Each theme offers unique visual aesthetics from minimalist simplicity to bold brutalist designs, soft neumorphic touches, vibrant maximalist gradients, and dynamic motion effects.",
    preview: <MinimalistButtonPreview />,
    installation: [
      "Copy the button component file to your project's UI components directory",
      "Import the component in your desired file: import { Button } from '@/app/components/ui/button'",
      "Use the Button component with your desired variant and props",
      "Customize the styles by modifying the tailwind classes in the component",
    ],
    code: `import React from "react";
import { Heart } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "icon";
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles = "transition-all duration-300 tracking-tight";

  const variantStyles = {
    primary:
      "px-8 py-3 bg-gray-900 text-white hover:bg-gray-800",
    secondary:
      "px-8 py-3 border border-gray-300 text-gray-700 hover:border-gray-900 hover:bg-gray-50",
    icon: "px-4 py-4 border border-gray-200 rounded-md hover:border-gray-900 hover:bg-gray-50 text-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={\`\${baseStyles} \${variantStyles[variant]} \${className}\`}
    >
      {children}
    </button>
  );
};

// Usage Example
export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="icon">
        <Heart className="w-5 h-5" />
      </Button>
    </div>
  );
}`,
    props: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "icon"',
        default: '"primary"',
        description:
          "The visual style variant of the button. Primary for main actions, secondary for alternative actions, and icon for icon-only buttons.",
      },
      {
        name: "children",
        type: "React.ReactNode",
        description: "The content to be displayed inside the button.",
      },
      {
        name: "onClick",
        type: "() => void",
        description: "Callback function triggered when the button is clicked.",
      },
      {
        name: "className",
        type: "string",
        description:
          "Additional CSS classes to customize the button's appearance.",
      },
    ],
  },
  {
    name: "Card",
    slug: "card",
    description:
      "Feature-rich card component with theme-specific designs. Each theme offers unique visual characteristics - from minimalist clean lines to brutalist bold statements, neumorphic soft shadows, maximalist vibrant gradients, and motion-driven animations.",
    preview: <ThemedCardPreview />,
    installation: [
      "Copy the card component file to your project's UI components directory",
      "Import the component: import { Card } from '@/app/components/ui/card'",
      "Wrap your card content with the Card component",
      "Apply theme-specific styles by passing the theme prop to customize appearance",
    ],
    code: `import { useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardProps {
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
  className?: string;
}

export function Card({ theme = "minimalist", className }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Each theme returns a complete, self-contained card design
  // Minimalist: Clean, focused with subtle interactions
  // Brutalist: Raw, bold with stark contrasts and geometric shapes
  // Maximalist: Rich gradients, multiple decorative elements, vibrant colors
  // Neumorphic: Soft shadows mimicking physical depth and tactile surfaces
  // Motion: Spring physics and smooth animations for delightful interactions
  
  // See full implementation in the component file
  return (
    <div 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Theme-specific card content */}
    </div>
  );
}`,
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
    description:
      "Versatile input component with theme-specific styles and validation. Features include animated labels, icon support, email validation, and unique visual treatments for each theme including gradient borders, neumorphic shadows, and motion-based interactions.",
    preview: <ThemedInputPreview />,
    installation: [
      "Copy the input component file to your project's UI components directory",
      "Import the component: import { Input } from '@/app/components/ui/input'",
      "Use the Input component with your desired props and theme",
      "Add validation by passing the validation prop and handling onChange events",
    ],
    code: `import { useState } from 'react';
import { Search, Mail, User, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface InputProps {
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
  icon?: React.ReactNode;
  validation?: boolean;
  placeholder?: string;
}

export function ThemedInput({ theme = "minimalist", icon, validation, placeholder }: InputProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Minimalist: Clean borders with subtle focus states
  // Brutalist: Bold borders, uppercase text, strong visual labels
  // Maximalist: Animated gradient borders with sparkle effects
  // Neumorphic: Inset shadows creating soft, tactile appearance
  // Motion: Floating labels with smooth spring animations

  return (
    <div className="space-y-6 max-w-md">
      {/* Theme-specific input implementations */}
    </div>
  );
}`,
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
    description:
      "Dynamic loader component with multiple theme-specific animations. Each theme offers unique loading indicators - from minimalist spinners and dots to brutalist jittery squares, maximalist gradient effects with glowing sparkles, neumorphic soft bouncing elements, and motion-driven morphing shapes with wave patterns.",
    preview: <ThemedLoaderPreview />,
    installation: [
      "Copy the loader component file to your project's UI components directory",
      "Import the component: import { Loader } from '@/app/components/ui/loader'",
      "Use the Loader component with the desired size and theme props",
      "Customize the animation by modifying the CSS animations in the component",
    ],
    code: `import { motion } from 'framer-motion';

interface LoaderProps {
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
  size?: "sm" | "md" | "lg";
}

export function Loader({ theme = "minimalist", size = "md" }: LoaderProps) {
  // Minimalist: Spinner, dots, and line loaders with fade animations
  // Brutalist: Jittery square, abrupt fill bar, pixelated spinner
  // Maximalist: Gradient spinner with glow, sparkles, animated gradient bar
  // Neumorphic: Soft embossed spinner, bouncing dots, sliding bubble
  // Motion: Morphing shape, wave bars, breathing line, orbit dots

  return (
    <div className="flex items-center gap-8">
      {/* Multiple themed loader variations */}
    </div>
  );
}`,
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
    name: "Switch",
    slug: "switch",
    description:
      "Interactive toggle switch with theme-specific designs and animations. Features smooth state transitions, visual feedback, and unique styling for each theme including minimalist simplicity, brutalist bold text labels, maximalist gradient effects with ripples, neumorphic depth with soft shadows, and motion-based spring physics.",
    preview: <ThemedSwitchPreview />,
    installation: [
      "Copy the switch component file to your project's UI components directory",
      "Import the component: import { Switch } from '@/app/components/ui/switch'",
      "Wrap Switch in a form or manage state with useState hook",
      "Use the onChange handler to capture toggle events and update application state",
    ],
    code: `import { useState } from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
  label?: string;
}

export function Switch({ theme = "minimalist", label }: SwitchProps) {
  const [isOn, setIsOn] = useState(false);

  // Minimalist: Simple rounded switches with clean transitions
  // Brutalist: Square switches with ON/OFF text labels and borders
  // Maximalist: Gradient backgrounds with ripple effects and glow
  // Neumorphic: Inset/outset shadows creating 3D appearance
  // Motion: Spring-based animations with scale and blur effects

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        {/* Theme-specific switch implementation */}
      </div>
    </div>
  );
}`,
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
];
