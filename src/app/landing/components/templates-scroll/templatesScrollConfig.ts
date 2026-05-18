export type TemplatesScrollItem = {
  text: string;
  slug: string;
  themeClass: string;
  fontClass: string;
  colorClass?: string;
  extraClass?: string;
};

export const TEMPLATE_SCROLL_ITEMS: TemplatesScrollItem[] = [
  {
    text: "Pulse",
    slug: "pulse",
    themeClass: "templates-scroll__theme--pulse",
    fontClass: "templates-scroll__word--font-1",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Forge",
    slug: "forge",
    themeClass: "templates-scroll__theme--forge",
    fontClass: "templates-scroll__word--font-2",
    colorClass: "templates-scroll__word--color-2",
    extraClass: "templates-scroll__word--shadow",
  },
  {
    text: "Halo",
    slug: "halo",
    themeClass: "templates-scroll__theme--halo",
    fontClass: "templates-scroll__word--font-3",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Atlas",
    slug: "atlas",
    themeClass: "templates-scroll__theme--atlas",
    fontClass: "templates-scroll__word--font-4",
    colorClass: "templates-scroll__word--color-2",
  },
  {
    text: "Drift",
    slug: "drift",
    themeClass: "templates-scroll__theme--drift",
    fontClass: "templates-scroll__word--font-5",
    colorClass: "templates-scroll__word--color-1",
  },
  {
    text: "Prism",
    slug: "prism",
    themeClass: "templates-scroll__theme--prism",
    fontClass: "templates-scroll__word--font-6",
    colorClass: "templates-scroll__word--color-2",
  },
  {
    text: "Obsidian",
    slug: "obsidian",
    themeClass: "templates-scroll__theme--obsidian",
    fontClass: "templates-scroll__word--font-7",
    colorClass: "templates-scroll__word--color-1",
    extraClass: "templates-scroll__word--blend",
  },
  {
    text: "Zenith",
    slug: "zenith",
    themeClass: "templates-scroll__theme--zenith",
    fontClass: "templates-scroll__word--font-8",
    colorClass: "templates-scroll__word--color-2",
    extraClass: "templates-scroll__word--shadow",
  },
];

export function templateThemeHref(slug: string) {
  return `/templates/${slug}`;
}

export function findTemplateThemeBySlug(slug: string) {
  const normalized = slug.toLowerCase();
  return TEMPLATE_SCROLL_ITEMS.find((item) => item.slug === normalized);
}
