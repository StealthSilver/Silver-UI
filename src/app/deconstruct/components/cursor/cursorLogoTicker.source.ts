/** Source shown in the Deconstruct code panel for CursorLogoTicker. */
export const cursorLogoTickerSource = `"use client";

import { cn } from "@/lib/utils";
import { CURSOR_BRAND_LOGOS } from "./cursorBrandLogos";

const bodyFont =
  "font-[system-ui,'Helvetica_Neue',Helvetica,Arial,sans-serif]";

const cardClass = cn(
  "flex h-16 w-full items-center justify-center px-3 sm:h-[4.5rem] md:h-[6.25rem]",
  "rounded-[4px] border border-[#26251e1a] bg-[#f2f1ed] text-[#26251e]",
);

export function CursorLogoTicker() {
  return (
    <section
      className={cn(bodyFont, "w-full bg-[#f7f7f4] py-10 text-[#26251e] md:py-14")}
      aria-label="Trusted companies"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 text-center md:px-8">
        <h2
          className={cn(
            bodyFont,
            "mx-auto mb-6 max-w-prose text-balance text-sm font-normal leading-[1.4] tracking-[-0.01em] text-[#26251e]/80 md:mb-8",
          )}
        >
          Trusted every day by teams that build world-class software
        </h2>

        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
          aria-label="Companies that trust Cursor"
        >
          {CURSOR_BRAND_LOGOS.map(({ name, Logo }) => (
            <div
              key={name}
              className="relative flex items-center justify-center"
            >
              <div className={cardClass}>
                <Logo />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
