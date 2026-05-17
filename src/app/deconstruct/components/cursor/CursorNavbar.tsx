"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const CURSOR_LOGO_PATHS = [
  "m466.383 137.073-206.469-119.2034c-6.63-3.8287-14.811-3.8287-21.441 0l-206.4586 119.2034c-5.5734 3.218-9.0144 9.169-9.0144 15.615v240.375c0 6.436 3.441 12.397 9.0144 15.615l206.4686 119.203c6.63 3.829 14.811 3.829 21.441 0l206.468-119.203c5.574-3.218 9.015-9.17 9.015-15.615v-240.375c0-6.436-3.441-12.397-9.015-15.615zm-12.969 25.25-199.316 345.223c-1.347 2.326-4.904 1.376-4.904-1.319v-226.048c0-4.517-2.414-8.695-6.33-10.963l-195.7577-113.019c-2.3263-1.347-1.3764-4.905 1.3182-4.905h398.6305c5.661 0 9.199 6.136 6.368 11.041h-.009z",
  "m723.253 148.84h87.856v48.397h-84.881c-45.789 0-81.527 26.432-81.527 82.273s35.738 82.273 81.527 82.273h84.881v48.397h-91.578c-76.691 0-131.039-45.043-131.039-130.66 0-85.618 58.07-130.661 134.761-130.661z",
  "m855.781 148.84h54.348v159.7c0 39.828 18.242 58.448 61.056 58.448 42.815 0 61.055-18.61 61.055-58.448v-159.7h54.35v170.866c0 58.071-36.85 94.933-115.405 94.933-78.551 0-115.404-37.231-115.404-95.301z",
  "m1370.62 222.913c0 29.04-16.75 51.372-39.09 61.056v.746c23.45 3.354 35.37 20.103 35.73 42.814l1.12 82.641h-54.35l-1.11-73.705c-.37-16.381-10.06-26.432-29.41-26.432h-90.47v100.137h-54.34v-261.33h150.02c49.15 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.24-34.623h-88.61v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z",
  "m1576.09 333.85c0-18.61-11.91-26.432-29.77-27.915l-60.31-5.583c-52.12-4.837-79.3-25.318-79.3-74.83 0-49.511 33.51-76.69 81.53-76.69h133.27v46.904h-129.55c-18.61 0-30.52 9.683-30.52 28.294 0 18.61 12.28 27.547 30.9 29.04l61.42 5.214c46.54 4.091 77.06 25.318 77.06 75.198s-32.38 76.69-78.17 76.69h-139.23v-46.904h134.01c17.5 0 28.66-11.912 28.66-29.408z",
  "m1789.79 144.373c81.89 0 133.65 52.487 133.65 134.761 0 82.273-53.98 135.506-135.88 135.506s-133.65-53.233-133.65-135.506c0-82.274 53.98-134.761 135.88-134.761zm77.43 135.129c0-55.095-32.02-87.479-78.56-87.479-46.53 0-78.55 32.384-78.55 87.479 0 55.094 32.02 87.478 78.55 87.478 46.54 0 78.56-32.384 78.56-87.478z",
  "m2192.95 222.913c0 29.04-16.75 51.372-39.1 61.056v.746c23.46 3.354 35.37 20.103 35.74 42.814l1.12 82.641h-54.35l-1.12-73.705c-.36-16.381-10.05-26.432-29.4-26.432h-90.47v100.137h-54.35v-261.33h150.03c49.14 0 81.9 24.94 81.9 74.083zm-54.73 7.454c0-22.333-11.91-34.623-34.25-34.623h-88.6v69.236h89.34c20.47 0 33.51-12.281 33.51-34.623z",
] as const;

function CursorLogo({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 2193 545"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      aria-hidden
      className={cn("w-[95.37px] shrink-0 lg:w-[95.75px]", className)}
    >
      <g fill="currentColor">
        {CURSOR_LOGO_PATHS.map((d) => (
          <path key={d.slice(0, 24)} d={d} />
        ))}
      </g>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.125}
      stroke="currentColor"
      className="h-full w-full"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

const navFontClass =
  "font-[system-ui,'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[14px] font-normal leading-normal tracking-[-0.01em]";

const navItemClass = cn(
  navFontClass,
  "inline-flex cursor-pointer items-center border border-transparent bg-transparent",
  "px-[15px] py-[calc(1.4rem*3/12)] text-[#26251e] no-underline",
  "transition-colors duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
  "hover:text-[#26251ebf] focus-visible:outline-2 focus-visible:outline-[#26251e] focus-visible:outline-offset-[0.3ch]",
);

const signInClass = cn(
  navFontClass,
  "inline-flex cursor-pointer border border-transparent bg-transparent p-1 text-[#26251e] no-underline",
  "transition-colors duration-200 hover:text-[#26251ebf]",
  "focus-visible:outline-2 focus-visible:outline-[#26251e] focus-visible:outline-offset-[0.3ch]",
);

const ghostBtnClass = cn(
  navFontClass,
  "hidden items-center justify-center rounded-full border border-[#26251e33] bg-transparent",
  "px-[0.75em] py-[0.4em] pb-[0.42em] text-[#26251e] no-underline",
  "transition-colors duration-200 hover:bg-[#f2f1ed]",
  "focus-visible:outline-2 focus-visible:outline-[#26251e] focus-visible:outline-offset-[0.3ch]",
  "lg:inline-flex",
);

const primaryBtnClass = cn(
  navFontClass,
  "hidden items-center justify-center rounded-full border border-[#26251e] bg-[#26251e]",
  "px-[0.75em] py-[0.4em] pb-[0.42em] text-[#f7f7f4] no-underline",
  "transition-colors duration-200 hover:border-[#3b3a33] hover:bg-[#3b3a33]",
  "focus-visible:outline-2 focus-visible:outline-[#26251e] focus-visible:outline-offset-[0.3ch]",
  "max-sm:hidden sm:inline-flex",
);

const menuBtnClass = cn(
  "relative -mr-[0.3rem] ml-[10px] inline-flex h-[calc(1.4rem*1.5)] w-[calc(1.4rem*1.5)]",
  "cursor-pointer items-center justify-center border-0 bg-transparent p-0",
  "after:absolute after:inset-[-0.5rem] after:content-['']",
  "focus-visible:outline-2 focus-visible:outline-[#26251e] focus-visible:outline-offset-[0.3ch]",
  "lg:hidden",
);

const NAV_LINKS = [
  { label: "Product", href: "https://cursor.com/product" },
  { label: "Enterprise", href: "https://cursor.com/enterprise" },
  { label: "Pricing", href: "https://cursor.com/pricing" },
  { label: "Resources", href: "https://cursor.com/changelog" },
] as const;

export function CursorNavbar() {
  return (
    <header
      id="site-header"
      className="w-full bg-[#f7f7f4] px-[20px] text-[#26251e]"
    >
      <div className="relative z-[2] mx-auto grid h-14 max-w-[1300px] grid-cols-[1fr_auto_auto] items-center lg:grid-cols-[auto_1fr_auto]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <Link
            href="https://cursor.com/home"
            className="relative -left-[2px] top-[0.2rem] inline-flex text-[#26251e]"
            aria-label="Homepage"
          >
            <CursorLogo />
            <span className="sr-only">Cursor</span>
          </Link>
        </div>

        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          aria-label="Main"
        >
          <ul className="m-0 flex list-none items-center justify-center p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={navItemClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-self-end gap-[7.5px] lg:col-start-3 lg:col-end-[-1]">
          <Link
            href="https://cursor.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className={signInClass}
          >
            Sign in
          </Link>
          <Link
            href="https://cursor.com/contact-sales?source=navbar"
            className={ghostBtnClass}
          >
            <span className="xl:hidden">Contact</span>
            <span className="hidden xl:inline">Contact sales</span>
          </Link>
          <Link href="https://cursor.com/download" className={primaryBtnClass}>
            Download
          </Link>
          <button
            type="button"
            className={menuBtnClass}
            aria-label="Open navigation"
            aria-expanded={false}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
