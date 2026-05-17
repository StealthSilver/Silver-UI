"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  deconstructSites,
  findDeconstructSiteBySlug,
  getDeconstructSitePath,
} from "@/app/deconstruct/lib/deconstructSites";
import { pageContentFrameInnerClass } from "@/app/landing/lib/pageContentWidth";
import { cn } from "@/lib/utils";

const framedBlockClass = cn(
  "screen-line-edges py-2",
  pageContentFrameInnerClass,
);

function FramedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className={framedBlockClass}>{children}</div>
    </div>
  );
}

export function DeconstructSubheader() {
  const params = useParams();
  const siteParam = typeof params.site === "string" ? params.site : "";
  const activeSite = findDeconstructSiteBySlug(siteParam);
  const activeId = activeSite?.id ?? deconstructSites[0].id;

  return (
    <header className="shrink-0 space-y-3 border-b border-line py-4">
      <FramedBlock>
        <div className="flex flex-wrap items-baseline gap-0">
          <h1 className="shrink-0 text-left text-xs uppercase tracking-widest text-white/50 md:text-sm">
            Deconstruct
          </h1>
          <span className="font-roboto text-sm font-light leading-relaxed text-white/55 md:text-[15px]">
             — Deconstruction of the components from the top designed pages
          </span>
        </div>
      </FramedBlock>

      <FramedBlock>
        <nav
          className="flex flex-wrap items-center gap-5 md:gap-7 lg:gap-8"
          aria-label="Sites to deconstruct"
        >
          {deconstructSites.map(({ id, slug, label }) => {
            const isActive = activeId === id;
            return (
              <Link
                key={id}
                href={getDeconstructSitePath(slug)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "shrink-0 text-sm font-light transition-colors duration-200",
                  isActive ? "text-white" : "text-white/60 hover:text-white",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </FramedBlock>
    </header>
  );
}
