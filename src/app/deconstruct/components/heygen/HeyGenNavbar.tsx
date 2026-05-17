"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const HEYGEN_LOGO_SRC =
  "https://www.heygen.com/_next/image?url=%2Fimages%2Fheygen-logo.png&w=256&q=75";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
      className={cn("inline-block shrink-0 align-middle", className)}
    >
      <path
        d="M13.4806 11.9383H0.525635V7.84722H13.4806L6.79857 0.837891H11.2987L19.9445 9.89274L11.2987 18.9476H6.79857L13.4806 11.9383Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      role="img"
      aria-label="globe"
      className={cn("inline-block align-middle", className)}
    >
      <path
        d="M8.42857 15.8571C12.5313 15.8571 15.8571 12.5313 15.8571 8.42857C15.8571 4.32589 12.5313 1 8.42857 1C4.32589 1 1 4.32589 1 8.42857C1 12.5313 4.32589 15.8571 8.42857 15.8571Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 8.42847H15.8571"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2861 8.42857C11.1457 11.1451 10.1451 13.7466 8.42892 15.8571C6.71271 13.7466 5.71212 11.1451 5.57178 8.42857C5.71212 5.71201 6.71271 3.11046 8.42892 1C10.1451 3.11046 11.1457 5.71201 11.2861 8.42857Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const displayFont =
  "font-['ABC_Solar_Display',system-ui,sans-serif] font-bold tracking-tight";

const bodyFont =
  "font-['TT_Norms_Pro',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]";

const navItemClass = cn(
  bodyFont,
  "rounded-xl text-[16px] font-medium leading-none tracking-[-0.18px] text-neutral-800",
  "px-[8px] py-[8px] transition-colors duration-300 ease-out",
  "cursor-pointer hover:bg-[#dff8ff] xl:px-[12px] xl:text-[18px] md:py-[10px]",
);

const NAV_MENU_ITEMS = [
  { label: "Platform", href: undefined },
  { label: "Enterprise", href: undefined },
  { label: "Developers", href: "https://developers.heygen.com/" },
  { label: "Research", href: "https://www.heygen.com/research" },
  { label: "Pricing", href: "https://www.heygen.com/pricing" },
  { label: "Use cases", href: undefined },
  { label: "Learning", href: undefined },
  { label: "Company", href: undefined },
] as const;

export function HeyGenNavbar() {
  return (
    <nav
      aria-label="Main"
      className={cn(
        bodyFont,
        "relative z-50 mx-auto h-[72px] w-full max-w-full text-[18px] text-neutral-800 lg:h-[84px]",
      )}
    >
      <div className="absolute top-0 right-auto left-auto mx-auto w-full max-w-full xl:container lg:px-4">
        <div className="relative transition-all duration-300 ease-out lg:rounded-[28px]">
          <div className="pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-[24px] backdrop-saturate-[140%] lg:rounded-[28px]" />

          <div className="relative z-[4] lg:rounded-[28px]">
            <div className="grid grid-cols-[1fr_auto] items-center p-[16px] md:grid-cols-[auto_1fr_auto] md:gap-[16px] xl:px-[32px]">
              <div className="flex items-center gap-[8px] xl:gap-[16px]">
                <Link
                  href="https://www.heygen.com/"
                  className="max-h-[70px] min-w-[70px]"
                  aria-label="HeyGen homepage"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={HEYGEN_LOGO_SRC}
                    alt="HeyGen logo"
                    width={70}
                    height={50}
                    className="object-contain"
                    decoding="async"
                  />
                </Link>
                <span className="hidden text-neutral-300 min-[996px]:inline">
                  |
                </span>
              </div>

              <nav
                className="hidden min-[996px]:flex min-[996px]:items-center min-[996px]:justify-start min-[996px]:gap-[2px] min-[996px]:overflow-x-hidden"
                aria-label="Site sections"
              >
                {NAV_MENU_ITEMS.map(({ label, href }) =>
                  href ? (
                    <Link key={label} href={href} className={navItemClass}>
                      {label}
                    </Link>
                  ) : (
                    <button
                      key={label}
                      type="button"
                      className={navItemClass}
                      aria-haspopup="menu"
                      aria-expanded={false}
                    >
                      {label}
                    </button>
                  ),
                )}
              </nav>

              <div className="flex items-center justify-end gap-[6px]">
                <button
                  type="button"
                  className={cn(
                    displayFont,
                    "hidden min-[996px]:flex min-[996px]:cursor-pointer min-[996px]:items-center",
                    "gap-4 rounded-xl px-[10px] py-[8px] text-[#033337] transition-colors hover:bg-[#f2f2f2]",
                    "md:gap-6 md:px-4 md:py-[11px] md:text-[18px] md:leading-none md:tracking-[0.01em]",
                  )}
                  aria-expanded={false}
                  aria-haspopup="listbox"
                >
                  <GlobeIcon />
                  <span>EN</span>
                </button>

                <Link
                  href="https://auth.heygen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    displayFont,
                    "inline-flex cursor-pointer items-center justify-center overflow-hidden",
                    "rounded-[12px] bg-black px-[10px] py-[8px] text-[16px] leading-none text-white",
                    "transition hover:brightness-90 lg:text-[18px]",
                  )}
                >
                  <span className="flex items-center gap-[8px] tracking-[0.18px]">
                    Sign in
                    <ArrowRightIcon />
                  </span>
                </Link>

                <button
                  type="button"
                  className="flex h-[40px] w-[56px] items-center justify-center px-[8px] min-[996px]:hidden"
                  aria-label="Open menu"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
