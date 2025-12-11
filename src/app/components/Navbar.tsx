"use client";

import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  getNavbarStyles,
  getSearchInputStyles,
  getLogoStyles,
  type Theme,
} from "@/lib/theme-styles";

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

const THEMES = [
  { id: "minimalist", label: "Minimalist" },
  { id: "brutalist", label: "Brutalist" },
  { id: "maximalist", label: "Maximalist" },
  { id: "neumorphic", label: "Neumorphic" },
  { id: "motion", label: "Motion" },
];

interface NavbarProps {
  query: string;
  setQuery: (q: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ query, setQuery }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current theme from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist";
  const theme = currentTheme as Theme;

  const handleThemeChange = (themeId: string) => {
    // Extract component slug from current path
    const pathParts = pathname.split("/").filter(Boolean);
    // Get the last part as component slug, default to 'button' if not present
    const componentSlug = pathParts.length >= 3 ? pathParts[2] : "button";

    // Navigate to new theme URL
    router.push(`/components/${themeId}/${componentSlug}`);
  };

  const getThemeButtonStyles = (themeId: string) => {
    const isActive = themeId === currentTheme;

    switch (theme) {
      case "minimalist":
        return `px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
          isActive
            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
            : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
        }`;
      case "brutalist":
        return `px-3 py-1.5 border-[3px] text-xs font-black uppercase transition-all duration-200 ${
          isActive
            ? "bg-white text-black border-white shadow-[3px_3px_0_rgba(255,255,255,0.5)]"
            : "bg-black text-white border-white hover:bg-white hover:text-black"
        }`;
      case "maximalist":
        return `px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
          isActive
            ? "bg-white text-purple-700 border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            : "bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50"
        }`;
      case "neumorphic":
        return `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
          isActive
            ? "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.1)] text-gray-900 dark:text-white"
            : "shadow-[3px_3px_6px_rgba(0,0,0,0.12),-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.08)] text-gray-700 dark:text-gray-200 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.12),-2px_-2px_4px_rgba(255,255,255,0.8)]"
        }`;
      case "motion":
        return `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
          isActive
            ? "bg-blue-500 text-white shadow-lg scale-105"
            : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:scale-105"
        }`;
      default:
        return "px-3 py-1.5 rounded-md text-xs font-medium";
    }
  };

  return (
    <nav
      className={`w-full transition-all duration-300 ${getNavbarStyles(theme)}`}
    >
      <div className="mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className={`flex items-center gap-2 ${getLogoStyles(theme)}`}
          >
            <Image
              src="/logo.svg"
              width={110}
              height={40}
              alt="Logo"
              priority
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={getThemeButtonStyles(t.id)}
                title={t.label}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-48 md:w-64">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search components..."
              className={`peer ${getSearchInputStyles(theme)}`}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-4 flex items-center transition-colors ${
                theme === "brutalist"
                  ? "text-white peer-focus:text-black"
                  : theme === "maximalist"
                  ? "text-white/70 peer-focus:text-white"
                  : "text-neutral-500 peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
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
              className={`transition-all duration-300 ${
                theme === "brutalist"
                  ? "text-white hover:text-gray-300 hover:scale-110"
                  : theme === "maximalist"
                  ? "text-white hover:text-white/70 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:scale-110"
                  : theme === "neumorphic"
                  ? "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110"
                  : theme === "motion"
                  ? "text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125 hover:rotate-6"
                  : "text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
              }`}
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ${
                theme === "brutalist"
                  ? "text-white hover:text-gray-300 hover:scale-110"
                  : theme === "maximalist"
                  ? "text-white hover:text-white/70 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:scale-110"
                  : theme === "neumorphic"
                  ? "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110"
                  : theme === "motion"
                  ? "text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125 hover:-rotate-6"
                  : "text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-110"
              }`}
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
