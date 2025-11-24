# Adding a New Component to Silver UI

This guide explains how to add a new UI component to the Silver UI library, following the design and code conventions used in the project.

## Steps to Add a New Component

1. **Create the Component File**

   - Place your new component in the appropriate folder, e.g. `src/app/components/ui/`.
   - Name the file using lowercase and hyphens (e.g. `loader.tsx`).
   - Use TypeScript and React functional components.
   - Follow the styling conventions (Tailwind CSS, use `cn` for class merging).

2. **Component Design**

   - Match the look and feel of existing components (rounded corners, subtle shadows, brand colors, etc.).
   - Support variants and sizes if applicable.
   - Accept `className` and other relevant props for flexibility.

3. **Export the Component**

   - Add an export statement in `src/app/components/ui/index.ts`:
     ```ts
     export * from "./yourComponent";
     ```

4. **Document Props**

   - Define prop types clearly in the component file.
   - Add JSDoc comments if needed.

5. **Add to Component Showcase**

   - Update the `components` array in `src/app/components/Page.tsx`:
     - Add an entry for your component with `name`, `description`, `preview`, `code`, and `props`.
     - Provide a live preview and code sample.

6. **Test the Component**
   - Run the app and verify your component appears in the sidebar and renders correctly.
   - Check responsiveness and dark mode compatibility.

## Example: Loader Component

- File: `src/app/components/ui/loader.tsx`
- Exported in: `src/app/components/ui/index.ts`
- Added to: `components` array in `Page.tsx`:

```tsx
{
   name: "Loader",
   description: "Animated spinner for loading states, with size options.",
   preview: (
      <div className="flex gap-6 items-center">
         <Loader />
         <Loader size="sm" />
         <Loader size="md" />
         <Loader size="lg" />
      </div>
   ),
   code: `// loader.tsx\nimport React from "react";\nimport { cn } from "./utils";\n\ninterface LoaderProps {\n  size?: \"sm\" | \"md\" | \"lg\";\n  className?: string;\n}\n\nconst sizeMap = {\n  sm: \"h-4 w-4 border-2\",\n  md: \"h-8 w-8 border-4\",\n  lg: \"h-12 w-12 border-8\",\n};\n\nexport const Loader: React.FC<LoaderProps> = ({ size = \"md\", className }) => (\n  <span\n    className={cn(\n      \"inline-block animate-spin rounded-full border-t-[--primary] border-r-transparent border-b-[--primary] border-l-transparent\",\n      sizeMap[size],\n      className\n    )}\n    aria-label=\"Loading\"\n    role=\"status\"\n  />\n);`,
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
}
```

## Conventions

- Use Tailwind CSS for styling.
- Use `cn` utility for class merging.
- Use brand colors via CSS variables (`--primary`).
- Keep code and props consistent with other components.

---

By following these steps, you can easily add new components to Silver UI that are consistent, reusable, and well-documented.
