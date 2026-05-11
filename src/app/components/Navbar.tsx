"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  getNavbarStyles,
  getSearchInputStyles,
  getLogoStyles,
  type Theme,
} from "@/lib/theme-styles";

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="X (Twitter)"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.07-6.614-5.848 6.614H2.45l7.773-8.835L1.9 2.25h6.63l4.87 6.442 5.694-6.442zM17.15 18.347h1.84L6.412 3.932H4.457l12.693 14.415z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="GitHub"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const THEMES = [
  { id: "minimalist", label: "Minimalist", disabled: false },
  { id: "motion", label: "Motion", disabled: false },
  { id: "brutalist", label: "Brutalist", disabled: true },
  { id: "maximalist", label: "Maximalist", disabled: true },
  { id: "neumorphic", label: "Neumorphic", disabled: true },
];

interface NavbarProps {
  query: string;
  setQuery: (q: string) => void;
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  query,
  setQuery,
  onMenuToggle,
  isSidebarOpen,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract current theme from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist";
  const theme = currentTheme as Theme;

  // Handle Command+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
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
        return `px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
          isActive
            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
            : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
        }`;
      case "brutalist":
        return `px-2 py-1 border-[3px] text-xs font-black uppercase transition-all duration-200 ${
          isActive
            ? "bg-white text-black border-white shadow-[3px_3px_0_rgba(255,255,255,0.5)]"
            : "bg-black text-white border-white hover:bg-white hover:text-black"
        }`;
      case "maximalist":
        return `px-2 py-1 rounded-lg text-xs font-bold transition-all duration-300 ${
          isActive
            ? "bg-white text-purple-700 border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            : "bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50"
        }`;
      case "neumorphic":
        return `px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
          isActive
            ? "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.1)] text-gray-900 dark:text-white"
            : "shadow-[3px_3px_6px_rgba(0,0,0,0.12),-3px_-3px_6px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.08)] text-gray-700 dark:text-gray-200 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.12),-2px_-2px_4px_rgba(255,255,255,0.8)]"
        }`;
      case "motion":
        return `px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
          isActive
            ? "bg-blue-500 text-white shadow-lg scale-105"
            : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:scale-105"
        }`;
      default:
        return "px-2 py-1 rounded-md text-xs font-medium";
    }
  };

  const getDropdownButtonStyles = () => {
    const themeLabel =
      THEMES.find((t) => t.id === currentTheme)?.label || "Minimalist";
    const baseStyles = `p-2 rounded-md text-xs font-medium transition-all duration-300 flex items-center gap-1 bg-transparent text-white border border-gray-600/50 dark:border-gray-600/50 ${
      isDropdownOpen ? "bg-gray-800/50 shadow-md" : ""
    }`;
    return { styles: baseStyles, label: themeLabel };
  };

  const getDropdownMenuStyles = () => {
    return "bg-neutral-950 border border-gray-600/50 dark:border-gray-600/50 rounded-md shadow-lg";
  };

  const getDropdownItemStyles = (isActive: boolean) => {
    switch (theme) {
      case "minimalist":
        return `w-full block px-4 py-2.5 text-xs font-medium text-left transition-all duration-300 cursor-pointer rounded-lg border ${
          isActive
            ? "bg-gray-200 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-white shadow-md"
            : "border-transparent text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-900/60 hover:border-gray-200 dark:hover:border-neutral-700 hover:shadow-sm"
        }`;
      case "brutalist":
        return `w-full block px-4 py-2.5 border-[3px] text-xs font-black uppercase transition-all duration-200 ${
          isActive
            ? "bg-white text-black border-white shadow-[4px_4px_0_rgba(255,255,255,0.5)]"
            : "text-white border-transparent hover:border-white hover:bg-white/10"
        }`;
      case "maximalist":
        return `w-full block px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
          isActive
            ? "bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.5)] text-white border-2 border-white/70"
            : "text-white/90 hover:bg-white/20 border-2 border-transparent hover:border-white/40 hover:shadow-lg"
        }`;
      case "neumorphic":
        return `w-full block px-4 py-2.5 rounded-2xl text-xs font-medium transition-all duration-300 ${
          isActive
            ? "shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.1)] text-gray-900 dark:text-white font-semibold"
            : "shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.8)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.08)] hover:shadow-[3px_3px_8px_rgba(0,0,0,0.12),-3px_-3px_8px_rgba(255,255,255,0.8)] dark:hover:shadow-[3px_3px_8px_rgba(0,0,0,0.4),-3px_-3px_8px_rgba(255,255,255,0.08)] text-gray-700 dark:text-gray-200"
        }`;
      case "motion":
        return `w-full block px-4 py-2.5 text-left text-xs font-medium transition-all duration-300 text-white ${
          isActive ? "bg-blue-500/20 text-white" : "hover:bg-blue-500/15"
        }`;
      default:
        return "w-full block px-4 py-2.5 text-xs font-medium text-left transition-colors cursor-pointer";
    }
  };

  return (
    <nav
      className={`w-full transition-all duration-300 overflow-visible relative z-20 border-b border-gray-600/50 dark:border-gray-600/50 shadow-sm`}
      style={{ backgroundColor: "rgb(10, 10, 10)" }}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-6">
        {/* Mobile Layout (< md breakpoint) */}
        <div className="md:hidden h-14 flex items-center justify-between gap-3">
          {/* Left section - Logo and Menu Button */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="p-2 hover:bg-neutral-800/60 rounded-md transition-colors"
              aria-label="Toggle sidebar"
            >
              <svg
                className={`w-5 h-5 text-white transition-transform ${
                  isSidebarOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a
              href="/"
              className={`flex items-center gap-2 transition-opacity hover:opacity-80 select-none`}
              aria-label="Silver UI"
            >
              <Image
                src="/logo.svg"
                width={24}
                height={24}
                alt="Silver UI logo"
                priority
                className="brightness-0 invert shrink-0"
              />
              <span className="text-white font-semibold tracking-tight text-sm">
                Silver UI
              </span>
            </a>
          </div>

          {/* Right section - Theme Dropdown and Social Links */}
          <div className="flex items-center gap-2">
            {/* Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={getDropdownButtonStyles().styles}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className={`absolute top-full right-0 mt-2 min-w-48 ${getDropdownMenuStyles()} z-50 overflow-visible`}
                >
                  {THEMES.map((t) => (
                    <div key={t.id} className="relative group">
                      <button
                        onClick={() => {
                          if (!t.disabled) {
                            handleThemeChange(t.id);
                            setIsDropdownOpen(false);
                          }
                        }}
                        disabled={t.disabled}
                        className={`${getDropdownItemStyles(
                          t.id === currentTheme
                        )} ${
                          t.disabled ? "opacity-50 cursor-not-allowed" : ""
                        } flex items-center justify-start w-full`}
                        title={t.disabled ? `${t.label} (disabled)` : t.label}
                      >
                        <span>{t.label}</span>
                      </button>
                      {t.disabled && (
                        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-700 text-gray-100 whitespace-nowrap">
                            Coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a
              href="https://x.com/silver_srs"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white hover:bg-neutral-800/60 hover:text-white p-2 rounded-md transition-all duration-300`}
              aria-label="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/StealthSilver/Silver-UI"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white hover:bg-neutral-800/60 hover:text-white p-2 rounded-md transition-all duration-300`}
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <input
            ref={searchInputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search components..."
            className={`w-full h-8 text-xs px-3 rounded-md bg-transparent text-white placeholder-gray-500 border border-gray-600/50 dark:border-gray-600/50 focus:border-gray-400 focus:outline-none transition-colors`}
          />
        </div>

        {/* Desktop Layout (md and above) - Original Design */}
        <div className="hidden md:flex items-center justify-between gap-6 h-14">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className={`flex items-center gap-2 transition-opacity hover:opacity-80 select-none`}
              aria-label="Silver UI"
            >
              <Image
                src="/logo.svg"
                width={26}
                height={26}
                alt="Silver UI logo"
                priority
                className="brightness-0 invert shrink-0"
              />
              <span className="text-white font-semibold tracking-tight text-sm">
                Silver UI
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={getDropdownButtonStyles().styles}
              >
                {getDropdownButtonStyles().label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  className={`absolute top-full right-0 mt-2 min-w-48 ${getDropdownMenuStyles()} z-50 overflow-visible`}
                >
                  {THEMES.map((t) => (
                    <div key={t.id} className="relative group">
                      <button
                        onClick={() => {
                          if (!t.disabled) {
                            handleThemeChange(t.id);
                            setIsDropdownOpen(false);
                          }
                        }}
                        disabled={t.disabled}
                        className={`${getDropdownItemStyles(
                          t.id === currentTheme
                        )} ${
                          t.disabled ? "opacity-50 cursor-not-allowed" : ""
                        } flex items-center justify-start w-full`}
                        title={t.disabled ? `${t.label} (disabled)` : t.label}
                      >
                        <span>{t.label}</span>
                      </button>
                      {t.disabled && (
                        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-700 text-gray-100 whitespace-nowrap">
                            Coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-48 md:w-56">
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search components... (⌘K)"
                className={`peer w-full h-8 text-sm px-3 rounded-md bg-transparent text-white placeholder-gray-500 border border-gray-600/50 dark:border-gray-600/50 focus:border-gray-400 focus:outline-none transition-colors flex items-center`}
              />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/silver_srs"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white hover:bg-neutral-800/60 hover:text-white px-2 py-2 rounded-md transition-all duration-300`}
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/StealthSilver/Silver-UI"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white hover:bg-neutral-800/60 hover:text-white px-2 py-2 rounded-md transition-all duration-300`}
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
