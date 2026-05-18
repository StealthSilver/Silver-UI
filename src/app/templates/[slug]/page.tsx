import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingShell from "@/app/landing/components/sections/MarketingShell";
import {
  findTemplateThemeBySlug,
  TEMPLATE_SCROLL_ITEMS,
} from "@/app/landing/components/templates-scroll/templatesScrollConfig";

type TemplateThemePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TEMPLATE_SCROLL_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: TemplateThemePageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = findTemplateThemeBySlug(slug);

  if (!theme) {
    return { title: "Templates" };
  }

  return {
    title: `${theme.text} — Templates`,
    description: `${theme.text} full-page template built with Silver UI.`,
  };
}

export default async function TemplateThemePage({
  params,
}: TemplateThemePageProps) {
  const { slug } = await params;
  const theme = findTemplateThemeBySlug(slug);

  if (!theme) {
    notFound();
  }

  return (
    <MarketingShell
      title={`${theme.text} template`}
      description={`Explore the ${theme.text} theme—layouts, typography, and components tuned for this aesthetic.`}
    />
  );
}
