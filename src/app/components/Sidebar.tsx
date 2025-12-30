"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getSidebarStyles,
  getSidebarItemStyles,
  getSidebarHeaderStyles,
  getSidebarTextStyles,
  type Theme,
} from "@/lib/theme-styles";

interface SidebarProps {
  components: { name: string; slug: string }[];
  activeSlug: string;
  filtered: { name: string; slug: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  components,
  activeSlug,
  filtered,
}) => {
  const pathname = usePathname();

  // Extract current theme from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist";
  const theme = currentTheme as Theme;

  return (
    <aside
      className={`hidden md:flex md:flex-col w-72 backdrop-blur-xl transition-all duration-300 ${getSidebarStyles(
        theme
      )}`}
    >
      <div className="p-5 flex-1 flex flex-col">
        <h2
          className={`mb-3 tracking-widest uppercase ${getSidebarHeaderStyles(
            theme
          )}`}
        >
          Basic Components ({filtered.length})
        </h2>
        <div className="space-y-1 overflow-y-auto pr-1 flex-1">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={`/components/${currentTheme}/${c.slug}`}
              className={`group w-full block ${getSidebarItemStyles(
                theme,
                c.slug === activeSlug
              )}`}
            >
              {c.name}
            </Link>
          ))}
          {filtered.length === 0 && (
            <p
              className={`text-xs px-2 py-4 ${
                theme === "brutalist"
                  ? "text-white/70"
                  : theme === "maximalist"
                  ? "text-white/80"
                  : "text-neutral-400 dark:text-neutral-500"
              }`}
            >
              No matches.
            </p>
          )}
        </div>
        <div
          className={`pt-4 text-[10px] ${
            theme === "brutalist"
              ? "text-white/60 border-t-2 border-white/20"
              : theme === "maximalist"
              ? "text-white/70 bg-white/5 rounded p-2"
              : theme === "neumorphic"
              ? "text-gray-500 dark:text-gray-400"
              : "text-neutral-500 dark:text-neutral-600"
          }`}
        >
          <p className="leading-relaxed">
            Tip: Use the search above to quickly filter the component list.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
