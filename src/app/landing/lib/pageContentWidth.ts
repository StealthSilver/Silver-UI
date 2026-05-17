export type PageContentMaxWidth = "6xl" | "7xl" | "8xl";

export const pageContentMaxWidthClass: Record<PageContentMaxWidth, string> = {
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  "8xl": "max-w-8xl",
};

/** Outer inset so wide max-width tokens do not touch the viewport edges. */
export const pageContentGutterXClass =
  "px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32";

/** Bottom inset only — no top padding so content sits flush under the navbar. */
export const pageContentGutterYClass =
  "pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14";

export const pageContentGutterClass = `${pageContentGutterXClass} ${pageContentGutterYClass}`;

export function hasPageContentGutter(width: PageContentMaxWidth): boolean {
  return width === "6xl" || width === "8xl";
}

/** Inner padding aligned with navbar `screen-line-edges` content (e.g. Silver UI). */
export const pageContentFrameInnerClass = "px-2";
