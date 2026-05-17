import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeconstructView } from "@/app/deconstruct/components/DeconstructView";
import {
  deconstructSites,
  findDeconstructSiteBySlug,
} from "@/app/deconstruct/lib/deconstructSites";

type DeconstructSitePageProps = {
  params: Promise<{ site: string }>;
};

export function generateStaticParams() {
  return deconstructSites.map((site) => ({ site: site.slug }));
}

export async function generateMetadata({
  params,
}: DeconstructSitePageProps): Promise<Metadata> {
  const { site: siteParam } = await params;
  const site = findDeconstructSiteBySlug(siteParam);

  if (!site) {
    return { title: "Deconstruct" };
  }

  return {
    title: `${site.label} — Deconstruct`,
    description: `Deconstruct ${site.label}: components, layout, and patterns from a top-designed product.`,
  };
}

export default async function DeconstructSitePage({
  params,
}: DeconstructSitePageProps) {
  const { site: siteParam } = await params;
  const site = findDeconstructSiteBySlug(siteParam);

  if (!site) {
    notFound();
  }

  return <DeconstructView activeId={site.id} />;
}
