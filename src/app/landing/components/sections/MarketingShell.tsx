import {
  hasPageContentGutter,
  pageContentGutterClass,
  pageContentGutterXClass,
  pageContentMaxWidthClass,
  type PageContentMaxWidth,
} from "@/app/landing/lib/pageContentWidth";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import { MarketingSubpageHero } from "./MarketingSubpageHero";

type MarketingShellProps = {
  title?: string;
  description?: string;
  contentMaxWidth?: PageContentMaxWidth;
  showHero?: boolean;
  children?: ReactNode;
};

export default function MarketingShell({
  title,
  description,
  contentMaxWidth = "7xl",
  showHero = true,
  children,
}: MarketingShellProps) {
  const maxWidthClass = pageContentMaxWidthClass[contentMaxWidth];
  const useGutter = hasPageContentGutter(contentMaxWidth);

  return (
    <>
      <Navbar contentMaxWidth={contentMaxWidth} />
      <main
        className={cn(
          "relative overflow-x-clip bg-black",
          showHero ? "min-h-screen" : "min-h-[calc(100dvh-4.5rem)]",
          useGutter && pageContentGutterClass,
        )}
      >
        <div
          className={cn(
            "relative z-10 mx-auto w-full",
            maxWidthClass,
            showHero
              ? "min-h-[calc(100dvh-4.5rem)]"
              : "h-[calc(100dvh-4.5rem)]",
          )}
        >
          {showHero && title != null && description != null ? (
            <MarketingSubpageHero
              title={title}
              description={description}
              insetContent={useGutter}
            />
          ) : (
            children
          )}
        </div>

        {!showHero ? (
          <div
            className={cn(
              "pointer-events-none fixed inset-x-0 top-14 bottom-0 z-30",
              useGutter ? pageContentGutterXClass : "px-2",
            )}
            aria-hidden
          >
            <div className={cn("relative mx-auto h-full w-full", maxWidthClass)}>
              <div className="absolute inset-y-0 left-0 w-[0.5px] bg-neutral-400/28" />
              <div className="absolute inset-y-0 right-0 w-[0.5px] bg-neutral-400/28" />
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-30 mx-auto w-full",
              maxWidthClass,
            )}
            aria-hidden
          >
            <div className="absolute inset-y-0 left-0 w-[0.5px] bg-neutral-400/28" />
            <div className="absolute inset-y-0 right-0 w-[0.5px] bg-neutral-400/28" />
          </div>
        )}
      </main>
    </>
  );
}
