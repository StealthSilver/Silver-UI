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
  /** Softer horizontal/vertical rails and `border-line` on deconstruct routes only. */
  subduedLines?: boolean;
  children?: ReactNode;
};

export default function MarketingShell({
  title,
  description,
  contentMaxWidth = "7xl",
  showHero = true,
  subduedLines = false,
  children,
}: MarketingShellProps) {
  const maxWidthClass = pageContentMaxWidthClass[contentMaxWidth];
  const useGutter = hasPageContentGutter(contentMaxWidth);
  const leftRailClass = subduedLines
    ? "border-l border-line"
    : "w-[0.5px] bg-neutral-400/28";
  const rightRailClass = subduedLines
    ? "border-r border-line"
    : "w-[0.5px] bg-neutral-400/28";

  return (
    <div className={subduedLines ? "deconstruct-page" : undefined}>
      <Navbar contentMaxWidth={contentMaxWidth} />
      <main
        className={cn(
          "relative overflow-x-clip bg-black",
          showHero
            ? "min-h-screen"
            : subduedLines
              ? "min-h-[calc(100dvh-4.5rem)]"
              : "min-h-[calc(100dvh-4.5rem)] overflow-hidden",
          useGutter && pageContentGutterClass,
        )}
      >
        <div
          className={cn(
            "relative z-10 mx-auto w-full",
            maxWidthClass,
            showHero
              ? "min-h-[calc(100dvh-4.5rem)]"
              : subduedLines
                ? "min-h-[calc(100dvh-4.5rem)]"
                : "h-[calc(100dvh-4.5rem)] overflow-hidden",
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
              <div className={cn("absolute inset-y-0 left-0", leftRailClass)} />
              <div className={cn("absolute inset-y-0 right-0", rightRailClass)} />
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
            <div className={cn("absolute inset-y-0 left-0", leftRailClass)} />
            <div className={cn("absolute inset-y-0 right-0", rightRailClass)} />
          </div>
        )}
      </main>
    </div>
  );
}
