# Adding New Components to Silver-UI

This guide explains how to add new components to the Silver-UI component library. Follow these steps to ensure your component integrates seamlessly with the existing setup.

---

## 📁 Project Structure Overview

```
src/
├── app/
│   └── components/
│       ├── ui/                    # Component files go here
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── input.tsx
│       │   ├── loader.tsx
│       │   ├── index.ts           # Export barrel file
│       │   └── utils.tsx
│       └── [slug]/
│           └── page.tsx           # Dynamic component page
├── config/
│   └── components.config.tsx      # Component metadata & previews
└── lib/
    └── utils.ts                   # Utility functions (cn helper)
```

---

## 🎯 Step-by-Step Guide

### **Step 1: Create Your Component File**

Create a new file in `src/app/components/ui/` with your component name (e.g., `badge.tsx`).

**Example:** `src/app/components/ui/badge.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white shadow-lg shadow-[var(--primary)]/30",
        secondary:
          "bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 text-neutral-900 dark:text-white",
        success:
          "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30",
        warning:
          "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30",
        danger:
          "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
```

### **Key Component Design Principles:**

- ✨ **Use gradients** for modern look: `bg-gradient-to-br from-[color] to-[color]`
- 🌊 **Add smooth transitions**: `transition-all duration-300`
- 💫 **Include shadow effects**: `shadow-lg shadow-[color]/30`
- 🎨 **Support dark mode**: Use `dark:` prefix for dark mode styles
- 🔧 **Use CVA**: For variant management with `class-variance-authority`
- 📦 **Export properly**: Export both component and variants

---

### **Step 2: Export from Index File**

Add your component to `src/app/components/ui/index.ts`:

```typescript
export * from "./button";
export * from "./card";
export * from "./input";
export * from "./loader";
export * from "./badge"; // Add your new component
```

This allows importing components from a single location:

```tsx
import { Button, Card, Badge } from "@/app/components/ui";
```

---

### **Step 3: Add Component Configuration**

Update `src/config/components.config.tsx` to include your component's metadata, preview, and documentation.

#### **3.1: Import Your Component**

```tsx
import { Badge } from "@/app/components/ui/badge";
```

#### **3.2: Add Component Metadata**

Add a new object to the `components` array:

```tsx
export const components: ComponentMeta[] = [
  // ... existing components
  {
    name: "Badge",
    slug: "badge",
    description: "Small status indicators and labels with variant styles.",
    preview: (
      <div className="flex gap-3 flex-wrap items-center justify-center">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    ),
    code: `// badge.tsx
import { cva } from "class-variance-authority";
import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white",
        secondary: "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export const Badge = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);`,
    props: [
      {
        name: "variant",
        type: '"default" | "secondary" | "success" | "warning" | "danger"',
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
];
```

#### **Configuration Fields:**

| Field         | Type              | Description                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `name`        | `string`          | Display name of the component                                 |
| `slug`        | `string`          | URL-friendly identifier (e.g., "badge" → `/components/badge`) |
| `description` | `string`          | Brief description shown on the component page                 |
| `preview`     | `React.ReactNode` | Live preview showcasing component variants                    |
| `code`        | `string`          | Code example (simplified version for documentation)           |
| `props`       | `ComponentProp[]` | Props documentation for the props table                       |

---

### **Step 4: Test Your Component**

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Navigate to your component page:**

   ```
   http://localhost:3000/components/badge
   ```

3. **Verify:**
   - ✅ Component renders correctly in preview
   - ✅ All variants display properly
   - ✅ Props table shows accurate information
   - ✅ Code example is readable
   - ✅ Dark mode works correctly
   - ✅ Hover effects and animations work smoothly

---

## 🎨 Design Guidelines

Follow these design principles to maintain consistency:

### **Modern Aesthetic:**

- Use **gradients** instead of flat colors
- Add **glassmorphism** with `backdrop-blur-sm/xl`
- Include **shadows** with color-specific glows
- Implement **smooth transitions** (300ms duration)

### **Example Styling Pattern:**

```tsx
className={cn(
  // Base styles
  "rounded-xl font-semibold transition-all duration-300",
  // Glassmorphism
  "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm",
  // Borders with opacity
  "border-2 border-neutral-200/60 dark:border-neutral-800/60",
  // Gradient shadows
  "shadow-lg shadow-[var(--primary)]/20",
  // Hover effects
  "hover:shadow-xl hover:scale-[1.02]",
  // Active state
  "active:scale-[0.98]",
  className
)}
```

### **Variant Design:**

- **default**: Primary color gradient with shadow glow
- **outline**: Transparent with border, fills on hover
- **ghost**: Minimal style, background on hover
- **destructive**: Red gradient for dangerous actions
- **secondary**: Neutral colors for less emphasis

---

## 📊 Props Documentation Format

Each prop should include:

```tsx
{
  name: "variant",                          // Prop name
  type: '"default" | "outline" | "ghost"',  // TypeScript type
  default: '"default"',                     // Default value (optional)
  description: "Visual style of the component." // Clear description
}
```

---

## 🔄 Dynamic Routing

The component pages are automatically generated using Next.js dynamic routing:

**File:** `src/app/components/[slug]/page.tsx`

This page:

1. Reads the `slug` from the URL
2. Finds matching component in `components.config.tsx`
3. Renders the component preview, code, and props table
4. Returns 404 if component not found

**No additional routing configuration needed!** Just add your component to the config.

---

## ✅ Checklist

Before considering your component complete:

- [ ] Component file created in `src/app/components/ui/`
- [ ] Component exported from `src/app/components/ui/index.ts`
- [ ] Component uses `class-variance-authority` (CVA) for variants
- [ ] Component uses `cn()` utility for className merging
- [ ] Component supports dark mode with `dark:` variants
- [ ] Component has proper TypeScript types
- [ ] Component uses `React.forwardRef` for ref support
- [ ] Component follows the modern design guidelines
- [ ] Configuration added to `components.config.tsx`
- [ ] Preview showcases all variants
- [ ] Code example is clear and simplified
- [ ] Props documentation is complete and accurate
- [ ] Component tested in browser (light & dark mode)
- [ ] All hover effects and animations work
- [ ] Component is responsive on mobile

---

## 💡 Tips & Best Practices

### **1. Use CSS Variables for Theme Colors**

```tsx
// ✅ Good - Uses theme colors
bg-[var(--primary)]

// ❌ Avoid - Hard-coded colors
bg-blue-600
```

### **2. Maintain Consistent Spacing**

- Small components: `px-3 py-1`
- Medium components: `px-4 py-2`
- Large components: `px-6 py-3`

### **3. Transition Duration**

- Use `duration-300` for most transitions
- Use `duration-200` for quick feedback
- Use `duration-500` for dramatic effects

### **4. Preview Examples**

Show all important variants in the preview, organized logically:

```tsx
preview: <div className="flex gap-4 flex-wrap">
  {/* Variants */}
  <Component variant="default">Default</Component>
  <Component variant="outline">Outline</Component>

  {/* Sizes */}
  <Component size="sm">Small</Component>
  <Component size="lg">Large</Component>

  {/* States */}
  <Component disabled>Disabled</Component>
</div>;
```

### **5. Code Examples**

Keep code examples simple and focused on the essential implementation:

- Show the core variant configuration
- Include 2-3 main variants
- Keep it under 30 lines when possible

---

## 🚀 Example: Complete Badge Component

See the badge example above for a complete, production-ready component following all guidelines.

---

## 📝 Summary

**Three files to modify:**

1. `src/app/components/ui/[your-component].tsx` - Create component
2. `src/app/components/ui/index.ts` - Export component
3. `src/config/components.config.tsx` - Add configuration

**That's it!** Your component will automatically appear at `/components/[slug]` with full documentation.

---

## 🤝 Need Help?

If you encounter issues:

- Check existing components for reference patterns
- Ensure all TypeScript types are correct
- Verify dark mode styles are included
- Test in both light and dark modes
- Check browser console for errors

Happy coding! ✨
