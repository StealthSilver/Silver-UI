"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { components } from "@/config/components.config";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  // Extract theme and slug from pathname (e.g., /components/minimalist/button)
  const pathParts = pathname.split("/").filter(Boolean);
  const currentTheme = pathParts[1] || "minimalist"; // Default to minimalist
  const activeSlug = pathParts[2] || "button";

  const filtered = components.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col bg-linear-to-br from-[#f8fafc] to-[#e6f2fa] dark:from-[#0a0a0a] dark:to-[#1a232a]"
      style={{
        ["--primary" as any]: "#0070a8",
        ["--primary-hover" as any]: "#005a87",
      }}
    >
      <Navbar query={query} setQuery={setQuery} currentTheme={currentTheme} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          components={components}
          activeSlug={activeSlug}
          filtered={filtered}
          currentTheme={currentTheme}
        />
        <main className="flex-1 py-10 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
