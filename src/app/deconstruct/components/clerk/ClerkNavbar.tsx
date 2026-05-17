"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Matches Clerk `.label-3`: 13px / 500 / 153.846% line-height */
const label3Class = cn(
  "font-sans text-[0.8125rem] font-medium leading-[153.846%]",
  "antialiased",
);

const transitionBase = cn(
  "transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,background]",
  "duration-450 ease-[cubic-bezier(0.33,1,0.68,1)] hover:duration-200",
);

const navBarShadow = cn(
  "[box-shadow:0_0_0_0.5px_rgba(255,255,255,0.9)_inset,0_0_0_0.5px_rgba(19,19,22,0.15),",
  "0_2px_3px_0_rgba(0,0,0,0.04),0_4px_6px_0_rgba(34,42,53,0.04),0_1px_1px_0_rgba(0,0,0,0.05)]",
);

const navItemLabelClass = cn(
  label3Class,
  transitionBase,
  "text-gray-950",
  "group-hover:text-gray-950!",
  "group-has-data-[state=open]/nav:text-gray-500",
  "group-data-[state=open]:text-gray-950!",
  "group-has-[[data-navitem]:hover]/nav:text-gray-500",
);

const navTriggerButtonClass = cn(
  "group relative flex h-full cursor-pointer items-center border-0 bg-transparent p-0 pr-2",
  "before:absolute before:inset-x-0 before:-inset-y-3",
  "data-[state=open]:after:absolute data-[state=open]:after:top-full",
  "data-[state=open]:after:h-4 data-[state=open]:after:w-full",
);

const navTriggerLabelClass = cn(
  navItemLabelClass,
  "inline-flex items-center gap-x-[0.5rem] leading-none",
);

const signInButtonClass = cn(
  label3Class,
  transitionBase,
  "group relative flex h-[1.625rem] cursor-pointer items-center justify-center rounded-md",
  "border-[0.5px] border-solid border-[rgba(19,19,22,0)] bg-[rgba(19,19,22,0)] px-2.5",
  "text-gray-950 duration-150 ease-[cubic-bezier(0.33,1,0.68,1)]",
  "hover:border-[rgba(19,19,22,0.12)] hover:bg-[rgba(19,19,22,0.02)] hover:duration-100",
);

const startBuildingClass = cn(
  "group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium",
  "transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]",
  "before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity",
  label3Class,
  "rounded-md shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(19,19,22,0.18),0_1px_0_0_rgba(255,255,255,0.1)_inset]",
  "[background:linear-gradient(180deg,rgba(19,19,22,0)_45%,rgba(19,19,22,0.03)_55%),#fff]",
  "h-[1.625rem] px-2.5 text-sm text-gray-950",
);

const chevronSvgClass = cn(
  "h-full w-full text-gray-950",
  "[transition:color_450ms_cubic-bezier(0.33,1,0.68,1),background-color_450ms_cubic-bezier(0.33,1,0.68,1),",
  "fill_450ms_cubic-bezier(0.33,1,0.68,1),stroke_450ms_cubic-bezier(0.33,1,0.68,1),",
  "transform_200ms_cubic-bezier(0.33,1,0.68,1),opacity_200ms_cubic-bezier(0.33,1,0.68,1)]",
  "group-hover:text-gray-950! group-has-data-[state=open]/nav:text-gray-500",
  "group-has-[[data-navitem]:hover]/nav:text-gray-500 group-data-[state=open]:text-gray-950!",
);

const NAV_DROPDOWNS = ["Products", "Docs", "Changelog", "Company"] as const;

function ClerkLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62 18"
      fill="none"
      aria-hidden
      className={cn("h-[1.125rem] shrink-0", className)}
      style={{ "--logo-fill": "#131316" } as CSSProperties}
    >
      <defs>
        <linearGradient
          id="clerk-logomark-center-gradient"
          x1="9.00023"
          y1="6.1875"
          x2="9.00023"
          y2="11.8125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
      </defs>
      <ellipse
        cx="9.00023"
        cy="9"
        rx="2.81249"
        ry="2.8125"
        fill="var(--logo-fill)"
      />
      <ellipse
        cx="9.00023"
        cy="9"
        rx="2.81249"
        ry="2.8125"
        fill="url(#clerk-logomark-center-gradient)"
        fillOpacity={0.15}
      />
      <path
        d="M14.0714 15.6581C14.3106 15.8974 14.2866 16.2936 14.0055 16.4819C12.5749 17.4401 10.8543 17.999 9.0032 17.999C7.15208 17.999 5.43149 17.4401 4.00095 16.4819C3.71979 16.2936 3.69577 15.8974 3.93505 15.6581L5.99039 13.6028C6.17615 13.417 6.46433 13.3877 6.69814 13.5074C7.3895 13.8616 8.17302 14.0615 9.0032 14.0615C9.83339 14.0615 10.6169 13.8616 11.3083 13.5074C11.5421 13.3877 11.8303 13.417 12.016 13.6028L14.0714 15.6581Z"
        fill="var(--logo-fill)"
      />
      <path
        d="M14.0022 1.51706C14.2834 1.70539 14.3074 2.10155 14.0681 2.34084L12.0128 4.39619C11.827 4.58195 11.5388 4.61129 11.305 4.49151C10.6136 4.13733 9.83014 3.9375 8.99996 3.9375C6.20403 3.9375 3.93748 6.20406 3.93748 9C3.93748 9.83019 4.13731 10.6137 4.49149 11.3051C4.61127 11.5389 4.58193 11.827 4.39617 12.0128L2.34083 14.0682C2.10154 14.3074 1.70538 14.2834 1.51705 14.0023C0.558857 12.5717 0 10.8511 0 9C0 4.02944 4.02942 0 8.99996 0C10.8511 0 12.5717 0.55886 14.0022 1.51706Z"
        fill="var(--logo-fill)"
        fillOpacity={0.5}
      />
      <path
        d="M23.4915 5.76562C25.0873 5.76562 26.766 6.38409 27.8372 7.58105C27.888 7.63838 27.8805 7.72617 27.8225 7.77637L26.3987 9.00879C26.34 9.05935 26.2517 9.05239 26.1985 8.99609C25.8873 8.66673 25.5113 8.40159 25.093 8.21582C24.6314 8.01097 24.1291 7.90807 23.6223 7.91504C21.7327 7.91504 20.473 9.21003 20.4729 11.1035C20.4729 12.0492 20.7861 12.8427 21.3303 13.3984C21.63 13.692 21.988 13.9231 22.3821 14.0762C22.7762 14.2293 23.1985 14.3016 23.6223 14.2891C24.1241 14.2935 24.6215 14.1978 25.0842 14.0078C25.506 13.8347 25.8913 13.5866 26.22 13.2764C26.2738 13.2255 26.3582 13.2221 26.4143 13.2705L27.8762 14.5312C27.9358 14.5827 27.9415 14.6737 27.887 14.7305C26.9582 15.6985 25.3743 16.453 23.4065 16.4531C21.837 16.4531 20.4766 15.9024 19.5217 14.9648C18.5669 14.0272 18.0003 12.699 18.0002 11.1221C18.0002 7.93345 20.2785 5.7657 23.4915 5.76562Z"
        fill="var(--logo-fill)"
      />
      <path
        d="M38.3333 5.7666C41.4425 5.76675 43.4532 7.95337 43.4534 10.9727C43.4495 11.2509 43.4324 11.5291 43.4016 11.8057C43.3938 11.876 43.3336 11.9285 43.2629 11.9287H35.8733C35.7835 11.9287 35.7171 12.012 35.7405 12.0986C36.1081 13.4612 37.2036 14.286 38.6995 14.2861C39.2036 14.2967 39.7036 14.1925 40.1604 13.9824C40.5861 13.7867 40.9645 13.5043 41.2688 13.1533C41.3055 13.111 41.3692 13.1039 41.4124 13.1396L42.8977 14.4336C42.9545 14.483 42.9628 14.5685 42.9143 14.626C42.0174 15.6841 40.5638 16.4531 38.5696 16.4531C35.5017 16.4531 33.1877 14.3283 33.1877 11.1006C33.1878 9.51718 33.7332 8.18955 34.6418 7.25195C35.1215 6.76984 35.6965 6.3892 36.3313 6.13379C36.9661 5.87843 37.6475 5.75334 38.3333 5.7666ZM38.4583 7.91211C38.0701 7.8998 37.6834 7.97024 37.3254 8.11816C36.9677 8.26614 36.6465 8.48845 36.384 8.76953C36.108 9.08254 35.9036 9.44976 35.7844 9.8457C35.7583 9.93249 35.8256 10.0176 35.9163 10.0176H40.8293C40.9201 10.0175 40.9874 9.93196 40.9622 9.84473C40.6273 8.68588 39.7775 7.91221 38.4583 7.91211Z"
        fill="var(--logo-fill)"
      />
      <path
        d="M31.6409 1.6875C31.7185 1.68754 31.7815 1.75048 31.7815 1.82812V16.1719C31.7815 16.2495 31.7185 16.3125 31.6409 16.3125H29.5315C29.4538 16.3125 29.3909 16.2495 29.3909 16.1719V1.82812C29.3909 1.75046 29.4538 1.6875 29.5315 1.6875H31.6409Z"
        fill="var(--logo-fill)"
      />
      <path
        d="M50.7639 5.76758C50.8422 5.76673 50.9065 5.82994 50.9065 5.9082V8.26953C50.9065 8.35134 50.8367 8.41616 50.7551 8.41016C50.5272 8.39326 50.3114 8.37891 50.1702 8.37891C48.3304 8.37899 47.2504 9.67343 47.2502 11.373V16.1719C47.2502 16.2495 47.1872 16.3124 47.1096 16.3125H45.0002C44.9226 16.3125 44.8596 16.2495 44.8596 16.1719V6.05371C44.8597 5.97608 44.9226 5.91309 45.0002 5.91309H47.1096C47.1872 5.91317 47.2502 5.97613 47.2502 6.05371V7.47363C47.2502 7.48165 47.2569 7.48828 47.2649 7.48828C47.2694 7.48819 47.2739 7.48601 47.2766 7.48242C48.1012 6.38146 49.3181 5.76855 50.6038 5.76855L50.7639 5.76758Z"
        fill="var(--logo-fill)"
      />
      <path
        d="M54.5627 1.6875C54.6403 1.68759 54.7034 1.75052 54.7034 1.82812V10.2979C54.7037 10.4258 54.8609 10.4869 54.9475 10.3926L59.0266 5.94629C59.0532 5.91731 59.0908 5.90039 59.1301 5.90039H61.6311C61.7531 5.90039 61.8175 6.04536 61.7356 6.13574L58.2102 10.0254C58.1681 10.0719 58.1615 10.141 58.1946 10.1943L61.8538 16.0977C61.9118 16.1913 61.8448 16.3124 61.7346 16.3125H59.3362C59.2878 16.3124 59.2426 16.2872 59.217 16.2461L56.55 11.959C56.5417 11.9458 56.5266 11.9385 56.511 11.9385C56.4985 11.9386 56.4863 11.943 56.4778 11.9521L54.7405 13.8193C54.7165 13.8453 54.7034 13.8797 54.7034 13.915V16.1719C54.7034 16.2495 54.6403 16.3124 54.5627 16.3125H52.4534C52.3757 16.3125 52.3127 16.2495 52.3127 16.1719V1.82812C52.3127 1.75046 52.3757 1.6875 52.4534 1.6875H54.5627Z"
        fill="var(--logo-fill)"
      />
    </svg>
  );
}

function NavChevron() {
  return (
    <span className="relative top-[-0.5px] flex h-[0.25rem] w-[0.5rem] items-center justify-center">
      <svg
        aria-hidden
        viewBox="0 0 8 4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={chevronSvgClass}
      >
        <path d="M 7.04 0.604 L 4.537 3.107 C 4.240 3.404 3.759 3.404 3.463 3.107 L 0.96 0.604" />
      </svg>
    </span>
  );
}

function StartBuildingArrow() {
  const arrowClass = cn(
    "h-2.5 w-2.5 flex-none transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]",
    "before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transition-opacity",
  );

  return (
    <>
      <svg
        viewBox="0 0 10 10"
        aria-hidden
        className={cn(
          arrowClass,
          "ml-2 opacity-60 group-hover:translate-x-6 group-hover:opacity-0",
        )}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
        />
      </svg>
      <svg
        viewBox="0 0 10 10"
        aria-hidden
        className={cn(
          arrowClass,
          "-ml-2.5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
        )}
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
        />
      </svg>
    </>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cn("size-4", className)}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        d="M4 4.667h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        d="M4 11.333h8"
      />
    </svg>
  );
}

export function ClerkNavbar() {
  return (
    <header
      id="header"
      className="sticky top-2 isolate z-50 mt-2 h-fit w-full font-sans md:mt-0"
    >
      <div className="relative m-auto w-[76.75rem] max-w-[calc(100vw-1rem)] rounded-xl md:max-w-[calc(100vw-2rem)]">
        <div
          className={cn(
            "pointer-events-auto relative z-30 mx-auto flex min-h-[2.626rem] w-full items-center rounded-xl",
            "bg-[rgba(248,248,248,0.9)] px-2 py-0 pr-0 pl-3 md:min-h-[2.75rem] md:pr-2",
            navBarShadow,
          )}
        >
          <Link
            href="https://clerk.com/"
            aria-label="Clerk Home Page"
            className="flex h-full shrink-0 select-none items-center gap-x-3"
          >
            <ClerkLogo />
          </Link>

          <nav
            aria-label="Main"
            className="ml-3 hidden h-full items-center md:flex"
          >
            <ul
              className="group/nav m-0 flex h-full list-none items-center p-0 text-gray-950"
              dir="ltr"
            >
              {NAV_DROPDOWNS.map((label) => (
                <li key={label} data-navitem className="relative flex h-full items-center">
                  <button
                    type="button"
                    data-state="closed"
                    aria-expanded={false}
                    className={navTriggerButtonClass}
                  >
                    <span className={navTriggerLabelClass}>
                      {label}
                      <NavChevron />
                    </span>
                  </button>
                </li>
              ))}
              <li data-navitem className="relative flex h-full items-center">
                <Link
                  href="https://clerk.com/pricing"
                  className={cn(navTriggerButtonClass, "no-underline")}
                >
                  <span className={cn(navItemLabelClass, "leading-none")}>Pricing</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto flex h-full items-center gap-6 font-medium max-[22.5rem]:hidden">
            <div className="flex h-full items-center gap-2 sm:gap-2 md:gap-2">
              <button type="button" className={signInButtonClass}>
                <span className="pointer-events-none">Sign in</span>
              </button>

              <div className="contents sm:hidden">
                <Link
                  href="https://dashboard.clerk.com/sign-up"
                  className={startBuildingClass}
                >
                  <span>Start building</span>
                  <StartBuildingArrow />
                </Link>
              </div>

              <div className="hidden sm:contents">
                <Link
                  href="https://clerk.com/docs/quickstart"
                  className={startBuildingClass}
                >
                  <span>Start building</span>
                  <StartBuildingArrow />
                </Link>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={false}
            className={cn(
              "inline-flex size-8 cursor-pointer items-center justify-center rounded-md border-0",
              "bg-transparent text-gray-500 outline-none [--focus-outline-offset:-0.5rem]",
              transitionBase,
              "self-center hover:text-gray-950 max-[22.5rem]:ml-auto md:hidden",
            )}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
