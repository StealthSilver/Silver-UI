"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_PATH =
  "M 10.058 20.817 C 4.321 20.817 0 16.277 0 10.67 C 0 5.046 4.1 0.468 10.058 0.468 C 13.221 0.468 15.409 1.439 17.119 3.663 L 14.361 5.962 C 13.202 4.728 11.805 4.112 10.058 4.112 C 6.178 4.112 4.045 7.082 4.045 10.67 C 4.045 14.258 6.381 17.173 10.058 17.173 C 11.787 17.173 13.258 16.557 14.416 15.323 L 17.137 17.715 C 15.501 19.845 13.257 20.817 10.058 20.817 Z M 29.016 5.886 L 32.73 5.886 L 32.73 20.461 L 29.016 20.461 L 29.016 18.331 C 28.244 19.845 26.956 20.854 24.493 20.854 C 20.558 20.854 17.413 17.434 17.413 13.23 C 17.413 9.025 20.558 5.606 24.493 5.606 C 26.938 5.606 28.243 6.615 29.016 8.128 Z M 29.126 13.23 C 29.126 10.95 27.563 9.063 25.099 9.063 C 22.727 9.063 21.183 10.969 21.183 13.23 C 21.183 15.435 22.727 17.397 25.099 17.397 C 27.545 17.397 29.126 15.491 29.126 13.23 Z M 35.36 0 L 39.074 0 L 39.074 20.443 L 35.36 20.443 Z M 40.73 18.518 C 40.73 17.322 41.685 16.313 42.99 16.313 C 43.58 16.3 44.151 16.528 44.57 16.944 C 44.99 17.359 45.223 17.927 45.216 18.518 C 45.216 19.751 44.278 20.76 42.991 20.76 C 42.392 20.768 41.815 20.535 41.389 20.114 C 40.964 19.692 40.726 19.117 40.729 18.518 Z M 59.43 18.107 C 58.05 19.788 55.954 20.854 53.472 20.854 C 49.04 20.854 45.786 17.434 45.786 13.23 C 45.786 9.025 49.04 5.606 53.472 5.606 C 55.862 5.606 57.94 6.615 59.319 8.203 L 56.451 10.613 C 55.734 9.717 54.796 9.044 53.471 9.044 C 51.1 9.044 49.555 10.95 49.555 13.211 C 49.555 15.472 51.1 17.378 53.472 17.378 C 54.906 17.378 55.899 16.631 56.635 15.621 Z M 59.742 13.23 C 59.742 9.025 62.997 5.606 67.428 5.606 C 71.86 5.606 75.114 9.026 75.114 13.23 C 75.114 17.434 71.86 20.854 67.428 20.854 C 62.997 20.834 59.742 17.434 59.742 13.23 Z M 71.345 13.23 C 71.345 10.95 69.8 9.063 67.428 9.063 C 65.056 9.044 63.512 10.95 63.512 13.23 C 63.512 15.49 65.056 17.397 67.428 17.397 C 69.8 17.397 71.345 15.491 71.345 13.23 Z M 100.232 11.548 L 100.232 20.443 L 96.518 20.443 L 96.518 12.463 C 96.518 9.941 95.341 8.857 93.576 8.857 C 91.921 8.857 90.744 9.68 90.744 12.464 L 90.744 20.443 L 87.03 20.443 L 87.03 12.463 C 87.03 9.941 85.835 8.857 84.088 8.857 C 82.433 8.857 80.98 9.68 80.98 12.464 L 80.98 20.443 L 77.266 20.443 L 77.266 5.868 L 80.98 5.868 L 80.98 7.886 C 81.752 6.316 83.15 5.531 85.301 5.531 C 87.342 5.531 89.052 6.541 89.991 8.241 C 90.928 6.503 92.307 5.531 94.808 5.531 C 97.86 5.55 100.232 7.867 100.232 11.548 Z";

function CalLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={101}
      height={22}
      viewBox="0 0 101 22"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path d={LOGO_PATH} fill="currentColor" />
    </svg>
  );
}

function CalChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        d="M8.231 8.731L11.506 5.457c.176-.19.442-.268.693-.204.25.064.446.26.51.511.064.251-.014.516-.203.693l-3.441 3.441a.834.834 0 01-1.165 0L3.957 6.457a.834.834 0 01-.204-1.693c.251-.064.516.014.693.203l3.44 3.441a.834.834 0 001.165 0l3.441-3.441a.834.834 0 011.179-.203z"
        fill="#858585"
      />
    </svg>
  );
}

function CalHoverArrow({ className }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn(
        "inline shrink-0 text-[#898989]",
        "[&_path:first-child]:opacity-0",
        "[&_path:first-child]:transition-opacity [&_path:first-child]:duration-300 [&_path:first-child]:ease-[cubic-bezier(0.25,1,0.5,1)]",
        "[&_path:last-child]:transition-transform [&_path:last-child]:duration-300 [&_path:last-child]:ease-[cubic-bezier(0.25,1,0.5,1)]",
        "group-hover:[&_path:first-child]:opacity-100",
        "group-hover:[&_path:last-child]:translate-x-[3px]",
        className,
      )}
    >
      <path d="M2 8h5" />
      <path d="M6 4l4 4-4 4" fill="none" />
    </svg>
  );
}

function CalMenuIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-[20px] w-4 flex-col justify-between",
        className,
      )}
      aria-hidden
    >
      <span className="block h-px w-4 bg-[#141414]" />
      <span className="block h-px w-4 bg-[#141414]" />
      <span className="block h-px w-4 bg-[#141414]" />
    </span>
  );
}

const navFontClass =
  "font-['Cal Sans',system-ui,sans-serif] text-[14px] font-light leading-5 tracking-[-0.2px]";

const navTriggerClass = cn(
  navFontClass,
  "inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-5 text-[#292929]",
  "transition-colors duration-150 hover:text-[#141414]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#292929]/20",
);

const navLinkClass = cn(
  navFontClass,
  "inline-flex items-center p-5 text-[#292929] no-underline",
  "transition-colors duration-150 hover:text-[#141414]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#292929]/20",
);

const NAV_DROPDOWNS = ["Solutions", "Developer", "Resources"] as const;

const NAV_LINKS = [
  { label: "Enterprise", href: "https://cal.com/enterprise" },
  { label: "Cal.ai", href: "https://cal.com/ai" },
  { label: "Pricing", href: "https://cal.com/pricing" },
] as const;

export function CalNavbar() {
  return (
    <header className="w-full bg-[#f4f4f4]">
      {/* Desktop — matches cal.com ≥1200px */}
      <div className="mx-auto hidden w-full max-w-[1152px] px-2 pt-2 min-[1200px]:block">
        <div
          className={cn(
            "flex h-[57px] w-full items-center justify-between rounded-2xl px-8",
            "bg-transparent",
          )}
        >
          <Link
            href="https://cal.com"
            className="inline-flex shrink-0 items-center text-[#292929]"
            aria-label="Home Cal.com"
          >
            <CalLogo />
          </Link>

          <nav aria-label="Main" className="flex min-w-0 flex-1 justify-center">
            <ul className="m-0 flex list-none items-center p-0">
              {NAV_DROPDOWNS.map((label) => (
                <li key={label}>
                  <button
                    type="button"
                    className={navTriggerClass}
                    aria-expanded={false}
                  >
                    {label}
                    <CalChevronDown />
                  </button>
                </li>
              ))}
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={navLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="https://app.cal.com/auth/login"
              className={cn(
                navFontClass,
                "px-2 text-black no-underline transition-opacity hover:opacity-70",
              )}
            >
              Sign in
            </Link>
            <Link
              href="https://app.cal.com/signup"
              className={cn(
                "group",
                navFontClass,
                "inline-flex items-center gap-2 rounded-xl border border-[#141414] px-3 py-2 text-white",
                "bg-gradient-to-b from-[#292929] to-[#141414]",
                "shadow-[inset_0_2px_0_0_rgba(255,255,255,0.15)]",
                "transition-opacity hover:opacity-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#292929]/30",
              )}
            >
              Get started
              <CalHoverArrow />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile — matches cal.com phone header */}
      <div className="min-[1200px]:hidden">
        <div className="flex h-[62px] w-full items-center justify-between bg-white px-4 py-3">
          <Link
            href="https://cal.com"
            className="inline-flex shrink-0 items-center text-[#292929]"
            aria-label="Home Cal.com"
          >
            <CalLogo />
          </Link>

          <div className="flex items-center gap-2.5">
            <Link
              href="https://app.cal.com/auth/login"
              className={cn(
                navFontClass,
                "text-black no-underline transition-opacity hover:opacity-70",
              )}
            >
              Sign in
            </Link>
            <Link
              href="https://app.cal.com/signup"
              className={cn(
                "group",
                navFontClass,
                "inline-flex items-center gap-2 rounded-xl border border-[#141414] px-3 py-2 text-white",
                "bg-gradient-to-b from-[#292929] to-[#141414]",
                "shadow-[inset_0_2px_0_0_rgba(255,255,255,0.15)]",
                "transition-opacity hover:opacity-90",
              )}
            >
              Get started
              <CalHoverArrow />
            </Link>
            <button
              type="button"
              className="inline-flex h-[57px] w-10 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
              aria-label="Open menu"
              aria-expanded={false}
            >
              <CalMenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
