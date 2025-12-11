"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  getNavbarStyles,
  getNavbarTextStyles,
  getDropdownButtonStyles,
  getDropdownMenuStyles,
  getDropdownItemStyles,
  getSearchInputStyles,
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
  currentTheme: Theme;
}

const Navbar: React.FC<NavbarProps> = ({ query, setQuery, currentTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (themeId: string) => {
    // Extract component slug from current path
    const pathParts = pathname.split("/");
    const componentSlug = pathParts[pathParts.length - 1];

    // Navigate to new theme URL
    router.push(`/components/${themeId}/${componentSlug}`);
    setIsDropdownOpen(false);
  };

  const currentThemeLabel =
    THEMES.find((t) => t.id === currentTheme)?.label || "Select Theme";

  return (
    <nav className="w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-xl supports-backdrop-filter:bg-neutral-950/80 dark:bg-neutral-950/90 dark:border-neutral-800/80 dark:supports-backdrop-filter:bg-neutral-950/80">
      <div className="mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={110}
              height={40}
              alt="Logo"
              priority
            />
          </a>
        </div>
        <div className="flex items-center gap-6">
          {/* Theme Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900/90 text-white text-sm font-medium hover:border-[--primary] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              <span>{currentThemeLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-neutral-700 bg-neutral-900/95 backdrop-blur-xl shadow-2xl z-50 overflow-hidden">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                      theme.id === currentTheme
                        ? "bg-[--primary] text-white font-medium"
                        : "text-neutral-200 hover:bg-neutral-800/80"
                    }`}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-56 md:w-72">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search components..."
              className="peer w-full rounded-lg border border-neutral-700 bg-neutral-900/90 px-4 py-2 text-base text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[--primary] transition shadow-sm"
            />
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 peer-focus:text-[--primary]">
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
              className="text-neutral-400 hover:text-[--primary] transition"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[--primary] transition"
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
