"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { components } from "@/config/components.config";
import { getMainBgStyles, type Theme } from "@/lib/theme-styles";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);

  // Close sidebar when route changes (only on mobile)
  useEffect(() => {
    if (pathname !== previousPathname) {
      // Small delay to ensure navigation completes first
      const timer = setTimeout(() => {
        setIsSidebarOpen(false);
      }, 100);
      setPreviousPathname(pathname);
      return () => clearTimeout(timer);
    }
  }, [pathname, previousPathname]);

  // Extract theme and slug from pathname (e.g., /components/minimalist/button)
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist"; // Default to minimalist
  const activeSlug = pathParts[2] || "button";

  const theme = currentTheme as Theme;

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${getMainBgStyles(
        theme
      )}`}
      style={{
        ["--primary" as any]: "#0070a8",
        ["--primary-hover" as any]: "#005a87",
      }}
    >
      {/* Theme-specific Background Effects */}
      {theme === "maximalist" && (
        <>
          <div className="fixed top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="fixed bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="fixed top-1/4 right-1/4 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl animate-float" />
          <div
            className="fixed bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </>
      )}

      {theme === "brutalist" && (
        <>
          <div className="fixed top-10 left-10 w-32 h-32 bg-black dark:bg-white border-4 border-white dark:border-black rotate-12 opacity-10" />
          <div className="fixed bottom-20 right-20 w-40 h-40 bg-black dark:bg-white border-4 border-white dark:border-black -rotate-12 opacity-10" />
          <div className="fixed top-1/2 right-10 w-24 h-24 bg-white dark:bg-black border-4 border-black dark:border-white rotate-45 opacity-10" />
        </>
      )}

      {theme === "neumorphic" && (
        <>
          <div className="fixed top-20 left-20 w-64 h-64 rounded-full opacity-30 shadow-[30px_30px_60px_rgba(0,0,0,0.1),-30px_-30px_60px_rgba(255,255,255,0.1)]" />
          <div className="fixed bottom-20 right-20 w-48 h-48 rounded-full opacity-30 shadow-[30px_30px_60px_rgba(0,0,0,0.1),-30px_-30px_60px_rgba(255,255,255,0.1)]" />
        </>
      )}

      {theme === "motion" && (
        <>
          <div className="fixed top-10 right-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          <div
            className="fixed bottom-10 left-10 w-2 h-2 bg-indigo-500 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="fixed top-1/2 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
        </>
      )}

      <div
        className="relative mx-auto max-w-7xl w-full border-l border-r border-gray-600/50 dark:border-gray-600/50 flex flex-col"
        style={{ minHeight: "100vh" }}
      >
        <Navbar
          query={query}
          setQuery={setQuery}
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Mobile overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex flex-1 relative z-0 overflow-hidden">
          <Sidebar
            components={components}
            activeSlug={activeSlug}
            filtered={filtered}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <main className="flex-1 overflow-y-auto overflow-x-hidden w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
