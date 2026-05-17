/** Source shown in the Deconstruct code panel for LinearNavbar. */
export const linearNavbarSource = `"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function LinearLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden
      className={cn("h-5 w-5 shrink-0", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713Z"
      />
      <path d="M4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344Z" />
      <path d="M.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796Z" />
      <path d="M3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589Z" />
    </svg>
  );
}

const navLinkClass =
  "text-[13px] font-medium leading-none text-[#e6e6e6]/90 transition-colors duration-150 hover:text-white";

const navButtonClass = cn(
  navLinkClass,
  "inline-flex items-center gap-1 bg-transparent p-0",
);

export function LinearNavbar() {
  return (
    <header className="w-full border-b border-white/[0.08] bg-[#08090a]">
      <nav
        className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-6"
        aria-label="Main"
      >
        <Link
          href="https://linear.app"
          className="inline-flex shrink-0 items-center gap-2 text-white"
          aria-label="Navigate to home"
        >
          <LinearLogoMark />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">
            Linear
          </span>
        </Link>

        <ul className="flex min-w-0 flex-1 items-center justify-end gap-6 lg:gap-8">
          <li className="flex items-center gap-6 lg:gap-8">
            <button type="button" className={navButtonClass} aria-expanded={false}>
              Product
              <ChevronDown className="h-3.5 w-3.5 opacity-60" strokeWidth={2} />
            </button>
            <button type="button" className={navButtonClass} aria-expanded={false}>
              Resources
              <ChevronDown className="h-3.5 w-3.5 opacity-60" strokeWidth={2} />
            </button>
            <Link href="https://linear.app/customers" className={navLinkClass}>
              Customers
            </Link>
            <Link href="https://linear.app/pricing" className={navLinkClass}>
              Pricing
            </Link>
            <Link href="https://linear.app/contact" className={navLinkClass}>
              Contact
            </Link>
          </li>

          <li className="h-4 w-px bg-white/15" aria-hidden />

          <li className="flex items-center gap-5 lg:gap-6">
            <Link
              href="https://linear.app/login"
              className="text-[13px] font-medium leading-none text-[#e6e6e6]/75 transition-colors duration-150 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="https://linear.app/signup"
              className="inline-flex h-8 items-center justify-center rounded-full bg-white px-3.5 text-[13px] font-medium leading-none text-[#08090a] transition-opacity duration-150 hover:opacity-90"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
`;
