"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 261 52"
      height={18}
      width={90}
      aria-hidden
      className={cn("shrink-0 text-white", className)}
    >
      <path
        fill="currentColor"
        d="M59.8 52H0L29.9 0zm67.82-38.45q4.9 0 8.81 2.13a15.5 15.5 0 0 1 6.22 6.32q2.3 4.2 2.38 10.26v2.06h-26.35q.27 4.4 2.58 6.92 2.38 2.47 6.36 2.47a8.4 8.4 0 0 0 7.76-4.93l9.16.67q-1.68 4.98-6.29 7.99t-10.63 3q-5.53 0-9.64-2.27a16 16 0 0 1-6.43-6.46 20 20 0 0 1-2.31-9.72q0-5.52 2.3-9.72a16 16 0 0 1 6.44-6.46 20 20 0 0 1 9.64-2.26m62.55 0q4.47 0 8.18 1.66a15.3 15.3 0 0 1 6.15 4.6q2.38 3 2.87 7.05l-9.23.47a8 8 0 0 0-2.8-5 7.7 7.7 0 0 0-5.17-1.86q-4.33 0-6.7 3-2.4 3-2.39 8.52t2.38 8.52q2.37 3 6.71 3 3.15 0 5.39-1.87 2.24-1.92 2.72-5.46l9.3.4a14.7 14.7 0 0 1-2.87 7.33 16 16 0 0 1-6.15 4.86 21 21 0 0 1-8.39 1.66q-5.53 0-9.64-2.26a16 16 0 0 1-6.44-6.46 20 20 0 0 1-2.3-9.72q0-5.52 2.3-9.72a16 16 0 0 1 6.44-6.46 20 20 0 0 1 9.64-2.26m38.66 0q4.9 0 8.8 2.13a15.5 15.5 0 0 1 6.22 6.32q2.31 4.2 2.38 10.26v2.06h-26.35q.28 4.4 2.58 6.92 2.38 2.47 6.36 2.47a8.4 8.4 0 0 0 7.77-4.93l9.15.67q-1.68 5-6.29 7.99t-10.62 3q-5.53 0-9.65-2.27a16 16 0 0 1-6.43-6.46 20 20 0 0 1-2.31-9.72q0-5.52 2.3-9.72a16 16 0 0 1 6.44-6.46 20 20 0 0 1 9.64-2.26M86.9 36.69l17.24-34.33h10.8L89.96 49.63h-6.12L58.85 2.36h10.81zm71.62-15.55a11 11 0 0 1 2.47-4.48q2.28-2.31 6.38-2.31h3.4v7.26h-3.47q-2.91 0-4.79.8a5.8 5.8 0 0 0-2.77 2.5q-.9 1.72-.9 4.37v20.35h-8.89V14.35h8.33zm101.73 28.5h-8.95V2.35h8.95zM127.62 20.26q-3.7 0-6 2.2-2.32 2.2-2.87 6.2h17.05q-.48-4.34-2.72-6.33a7.8 7.8 0 0 0-5.46-2.07m101.2 0q-3.7 0-6 2.2-2.31 2.2-2.87 6.2H237q-.5-4.34-2.73-6.33a7.8 7.8 0 0 0-5.46-2.07"
      />
    </svg>
  );
}

const navItemClass = cn(
  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[14px] leading-none",
  "text-[#a0a0a0] transition-[color,background] duration-[90ms] ease-in-out",
  "hover:bg-[#1f1f1f] hover:text-[#ededed]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
);

const navTriggerClass = cn(navItemClass, "cursor-pointer border-0 bg-transparent");

const navLinkClass = navItemClass;

const actionLinkClass = cn(
  "inline-flex h-8 items-center justify-center rounded-full px-3 text-[14px] leading-none",
  "text-[#a0a0a0] transition-[color,background] duration-[90ms] ease-in-out",
  "hover:bg-[#1f1f1f] hover:text-[#ededed]",
);

const NAV_DROPDOWNS = ["Products", "Resources", "Solutions"] as const;

const NAV_LINKS = [
  { label: "Enterprise", href: "https://vercel.com/enterprise" },
  { label: "Pricing", href: "https://vercel.com/pricing" },
  { label: "Docs", href: "https://vercel.com/docs" },
] as const;

export function VercelNavbar() {
  return (
    <header className="flex w-full min-h-[64px] justify-center bg-black">
      <div className="flex w-full max-w-[1448px] min-h-[64px] items-center justify-between gap-8 px-6">
        <div className="flex min-w-0 flex-1 items-center gap-8">
          <Link
            href="https://vercel.com"
            className="inline-flex shrink-0 items-center text-white"
            aria-label="Vercel"
          >
            <VercelLogo />
          </Link>

          <nav aria-label="Main" className="min-w-0">
            <ul className="m-0 flex list-none items-center p-0">
              {NAV_DROPDOWNS.map((label) => (
                <li key={label} className="flex items-center justify-center">
                  <button
                    type="button"
                    className={navTriggerClass}
                    aria-expanded={false}
                  >
                    {label}
                    <ChevronDown
                      className="h-3.5 w-3.5 shrink-0 opacity-80"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </button>
                </li>
              ))}
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label} className="flex items-center justify-center">
                  <Link href={href} className={navLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          id="header-content"
          className="flex shrink-0 items-center gap-1 text-right"
        >
          <Link
            href="https://vercel.com/login"
            className={actionLinkClass}
          >
            Log In
          </Link>
          <Link
            href="https://vercel.com/contact"
            className={actionLinkClass}
          >
            Contact
          </Link>
          <Link
            href="https://vercel.com/signup"
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-full bg-white px-3.5",
              "text-[14px] font-medium leading-none text-black",
              "transition-opacity duration-150 hover:opacity-90",
            )}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
