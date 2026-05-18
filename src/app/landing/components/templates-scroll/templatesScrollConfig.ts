export type TemplatesScrollItem = {
  text: string;
  themeClass: string;
  fontClass: string;
  colorClass?: string;
  extraClass?: string;
};

export const TEMPLATE_SCROLL_ITEMS: TemplatesScrollItem[] = [
  {
    text: "Pulse",
    themeClass: "templates-scroll__theme--pulse",
    fontClass: "templates-scroll__word--font-1",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Forge",
    themeClass: "templates-scroll__theme--forge",
    fontClass: "templates-scroll__word--font-2",
    colorClass: "templates-scroll__word--color-2",
    extraClass: "templates-scroll__word--shadow",
  },
  {
    text: "Halo",
    themeClass: "templates-scroll__theme--halo",
    fontClass: "templates-scroll__word--font-3",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Atlas",
    themeClass: "templates-scroll__theme--atlas",
    fontClass: "templates-scroll__word--font-4",
    colorClass: "templates-scroll__word--color-2",
  },
  {
    text: "Drift",
    themeClass: "templates-scroll__theme--drift",
    fontClass: "templates-scroll__word--font-5",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Prism",
    themeClass: "templates-scroll__theme--prism",
    fontClass: "templates-scroll__word--font-6",
    colorClass: "templates-scroll__word--color-2",
  },
  {
    text: "Obsidian",
    themeClass: "templates-scroll__theme--obsidian",
    fontClass: "templates-scroll__word--font-7",
    colorClass: "templates-scroll__word--color-1",
    extraClass: "templates-scroll__word--blend",
  },
  {
    text: "Zenith",
    themeClass: "templates-scroll__theme--zenith",
    fontClass: "templates-scroll__word--font-8",
    colorClass: "templates-scroll__word--color-2",
    extraClass: "templates-scroll__word--shadow",
  },
];
