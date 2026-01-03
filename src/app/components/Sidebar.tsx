"use client";

import React, { useState, useEffect } from "react";
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
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  components,
  activeSlug,
  filtered,
  isOpen = false,
  onClose,
}) => {
  const pathname = usePathname();
  const [shineSlug, setShineSlug] = useState<string | null>(null);

  // Extract current theme from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist";
  const theme = currentTheme as Theme;

  // Trigger shine animation when active slug changes
  useEffect(() => {
    setShineSlug(activeSlug);
    const timer = setTimeout(() => {
      setShineSlug(null);
    }, 600); // Duration of the shine animation
    return () => clearTimeout(timer);
  }, [activeSlug]);

  return (
    <aside
      className={`fixed md:relative left-0  md:top-auto h-[calc(100vh-56px)] md:h-[calc(100vh-56px)] w-72 backdrop-blur-xl transition-all duration-300 z-50 ${getSidebarStyles(
        theme
      )} ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } overflow-visible`}
    >
      <div className="p-4 sm:p-5 flex-1 flex flex-col h-full overflow-y-auto overflow-x-visible">
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between mb-4 md:hidden px-0">
          <h2
            className={`tracking-widest uppercase ${getSidebarHeaderStyles(
              theme
            )}`}
          >
            Components
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700/50 rounded transition-colors flex-shrink-0"
            aria-label="Close sidebar"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Header */}
        <h2
          className={`hidden md:block mb-3 tracking-widest uppercase ${getSidebarHeaderStyles(
            theme
          )}`}
        >
          Basic Components ({filtered.length})
        </h2>

        {/* Components List */}
        <div
          className={`space-y-1 flex-1 min-w-0 overflow-y-auto overflow-x-visible`}
        >
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={`/components/${currentTheme}/${c.slug}`}
              className={`group block text-sm sm:text-base cursor-pointer transition-all relative overflow-hidden ${getSidebarItemStyles(
                theme,
                c.slug === activeSlug
              )} ${
                c.slug === shineSlug
                  ? "after:translate-x-full"
                  : "after:-translate-x-full"
              }`}
              onClick={() => {
                // Close sidebar on mobile when a component is selected
                if (
                  onClose &&
                  typeof window !== "undefined" &&
                  window.innerWidth < 768
                ) {
                  onClose();
                }
              }}
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

        {/* Footer Tip */}
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
