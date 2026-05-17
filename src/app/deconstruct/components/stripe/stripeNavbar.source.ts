/** Source shown in the Deconstruct code panel for StripeNavbar. */
export const stripeNavbarSource = `"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

function StripeLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={25}
      viewBox="0 0 60 25"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.6444 14.2813h-8.062c.1843 1.9296 1.5983 2.5476 3.2032 2.5476 1.6352 0 2.9534-.3656 4.0453-.9506v3.3179c-1.1186.7115-2.5964 1.1068-4.5645 1.1068-4.011 0-6.8218-2.5122-6.8218-7.4783 0-4.19441 2.3837-7.52509 6.3017-7.52509 3.912 0 5.9537 3.28038 5.9537 7.49819 0 .3982-.0372 1.261-.0556 1.4835Zm-5.9241-5.62407c-1.0294 0-2.1739.72812-2.1739 2.58387h4.2573c0-1.85362-1.0721-2.58387-2.0834-2.58387ZM40.9547 20.303c-1.4411 0-2.322-.6087-2.9133-1.0417l-.0088 4.6271-4.1181.8755-.0014-19.19053h3.7543l.0864 1.01784c.6035-.52914 1.6114-1.29157 3.2256-1.29162 2.8925 0 5.6162 2.6052 5.6162 7.39971 0 5.2327-2.6948 7.6037-5.6409 7.6037Zm-.959-11.35573c-.9453 0-1.5376.34559-1.9669.81586l.0245 6.11967c.3997.433.9763.7813 1.9424.7813 1.5231 0 2.5437-1.6575 2.5437-3.8745 0-2.1544-1.037-3.84233-2.5437-3.84233Zm-11.7602-3.3739h4.1341V20.0088h-4.1341V5.57337Zm0-4.694699L32.3696 0v3.35821l-4.1341.87868V.878671ZM23.9198 10.2223v9.7861h-4.1156V5.57296h3.6867l.1317 1.21751c1.0035-1.7722 3.0722-1.41321 3.6209-1.21594v3.78524c-.5242-.16908-2.2894-.42779-3.3237.86253Zm-8.5525 4.7221c0 2.4275 2.5988 1.6719 3.1263 1.4609v3.3522c-.5492.3013-1.5437.5458-2.8901.5458-2.4441 0-4.2773-1.7999-4.2773-4.2379l.0173-13.17658 4.0206-.85464.0032 3.5395h3.1278V9.0857h-3.1278v5.8588-.0001Zm-4.9069.7026c0 2.9645-2.31051 4.6562-5.73464 4.6562-1.41958 0-2.92289-.2761-4.453935-.9347v-3.9319c1.382085.7516 3.093705 1.315 4.457755 1.315.91864 0 1.53106-.2459 1.53106-1.0069C6.26064 13.7786 0 14.5192 0 9.95995 0 7.04457 2.27622 5.2998 5.61655 5.2998c1.36404 0 2.72806.20934 4.09208.75351V9.9317c-1.25265-.67618-2.84332-1.05979-4.09588-1.05979-.86296 0-1.44753.24965-1.44753.8924.0001 1.85329 6.29518.97249 6.29518 5.88279v-.0001Z"
      />
    </svg>
  );
}

function StripeChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("ml-auto shrink-0 text-[#031323]", className)}
    >
      <path d="M4.67065 6L9.3 10.6" stroke="currentColor" strokeWidth={1.75} />
      <path d="M12.6707 6L8.67065 10" stroke="currentColor" strokeWidth={1.75} />
    </svg>
  );
}

function HoverArrow({ className }: { className?: string }) {
  return (
    <svg
      width={10}
      height={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
      className={cn(
        "inline shrink-0 align-baseline -me-[5px] mt-0.5",
        "[&_path:first-child]:opacity-0",
        "[&_path:first-child]:transition-opacity [&_path:first-child]:duration-300 [&_path:first-child]:ease-[cubic-bezier(0.25,1,0.5,1)]",
        "[&_path:last-child]:transition-transform [&_path:last-child]:duration-300 [&_path:last-child]:ease-[cubic-bezier(0.25,1,0.5,1)]",
        "group-hover:[&_path:first-child]:opacity-100",
        "group-hover:[&_path:last-child]:translate-x-[3px]",
        className,
      )}
    >
      <path d="M0.5 5.5h7" />
      <path d="M1.5 1.5l4 4-4 4" />
    </svg>
  );
}

const navTriggerClass = cn(
  "inline-flex cursor-pointer items-center gap-0.5 rounded-lg border-0 bg-transparent",
  "px-3 py-2 text-[14px] font-[450] leading-none text-[#031323]",
  "transition-[color,background-color] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]",
  "hover:text-[#3d4e5c]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff]/30",
);

const navLinkClass = navTriggerClass;

const NAV_DROPDOWNS = [
  "Products",
  "Solutions",
  "Developers",
  "Resources",
] as const;

export function StripeNavbar() {
  return (
    <header className="flex w-full justify-center bg-white">
      <div className="flex w-full max-w-[1200px] items-center px-6 py-2">
        <nav
          className="flex w-full min-h-[44px] items-center gap-6"
          aria-label="Main"
        >
          <Link
            href="https://stripe.com"
            className="inline-flex shrink-0 items-center text-[#031323] transition-opacity duration-200 hover:opacity-60 active:opacity-60"
            aria-label="Stripe homepage"
          >
            <StripeLogo />
          </Link>

          <ul className="m-0 flex min-w-0 flex-1 list-none items-center gap-0 p-0">
            {NAV_DROPDOWNS.map((label) => (
              <li key={label} className="flex items-center">
                <button
                  type="button"
                  className={navTriggerClass}
                  aria-expanded={false}
                >
                  {label}
                  <StripeChevronDown />
                </button>
              </li>
            ))}
            <li className="flex items-center">
              <Link href="https://stripe.com/pricing" className={navLinkClass}>
                Pricing
              </Link>
            </li>
          </ul>

          <ul className="m-0 ml-auto flex list-none items-center gap-2 p-0">
            <li>
              <Link
                href="https://dashboard.stripe.com/login"
                className={cn(
                  "inline-flex items-center justify-center rounded-lg bg-[#f6f9fc]",
                  "px-4 py-[11px] text-[14px] font-[450] leading-none text-[#031323]",
                  "transition-[color,background-color] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  "hover:bg-[#f6f9fc] hover:text-[#031323]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff]/30",
                )}
                aria-label="Sign in"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="https://stripe.com/contact/sales"
                className={cn(
                  "group inline-flex items-center gap-1.5 rounded-lg bg-[#635bff]",
                  "px-4 py-[11px] text-[14px] font-[450] leading-none text-white",
                  "transition-[background-color,opacity] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  "hover:bg-[#5851ea]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff]/40",
                )}
              >
                Contact sales
                <HoverArrow />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
`;
