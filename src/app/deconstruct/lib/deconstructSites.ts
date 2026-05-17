export const deconstructSites = [
  { id: "stripe", slug: "Stripe", label: "Stripe" },
  { id: "linear", slug: "Linear", label: "Linear" },
  { id: "vercel", slug: "Vercel", label: "Vercel" },
  { id: "cal", slug: "Cal", label: "Cal.com" },
  { id: "cursor", slug: "Cursor", label: "Cursor" },
  { id: "heygen", slug: "HeyGen", label: "HeyGen" },
  { id: "clerk", slug: "Clerk", label: "Clerk" },
] as const;

export type DeconstructSiteId = (typeof deconstructSites)[number]["id"];
export type DeconstructSiteSlug = (typeof deconstructSites)[number]["slug"];

export const defaultDeconstructSite = deconstructSites[0];

export function getDeconstructSitePath(slug: DeconstructSiteSlug | string): string {
  return `/deconstruct/${encodeURIComponent(slug)}`;
}

export function findDeconstructSiteBySlug(
  param: string,
): (typeof deconstructSites)[number] | undefined {
  const decoded = decodeURIComponent(param);
  return deconstructSites.find(
    (site) =>
      site.slug === decoded ||
      site.slug.toLowerCase() === decoded.toLowerCase(),
  );
}
