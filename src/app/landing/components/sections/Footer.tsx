"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LandingRailSeparator } from "./LandingRailSeparator";

const exploreLinks = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/templates", label: "Templates" },
  { href: "/lab", label: "Lab" },
  { href: "/construct", label: "Construct" },
  { href: "/deconstruct", label: "Deconstruct" },
] as const;

const docsLinks = [
  { href: "/docs", label: "Documentation", external: false as const },
  {
    href: "https://github.com/StealthSilver/Silver-UI",
    label: "GitHub",
    external: true as const,
  },
] as const;

const socialLinks = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    external: true as const,
  },
] as const;

const fadeUp = {
  initial: { y: 12, filter: "blur(8px)", opacity: 0 },
  whileInView: { y: 0, filter: "blur(0px)", opacity: 1 },
  transition: { duration: 0.45, ease: "easeInOut" as const },
  viewport: { once: true },
};

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "inline-block text-sm font-light text-white/60 transition-colors duration-200 hover:text-white";

  if (external) {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-normal uppercase tracking-widest text-white/50">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black text-white"
      aria-labelledby="footer-heading"
    >
      <LandingRailSeparator id="footer-separator" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-16 md:pb-14">
        <h2 id="footer-heading" className="sr-only">
          Site footer
        </h2>

        <div className="grid gap-12 border border-line bg-black px-5 py-10 sm:px-8 sm:py-12 md:gap-14 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-14">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            <Link
              href="/"
              className="group inline-flex w-fit select-none items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
              aria-label="Silver UI home"
            >
              <Image
                src="/logo.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 shrink-0"
              />
              <span className="font-public-sans text-lg font-light tracking-tight text-white">
                Silver UI
              </span>
            </Link>
            <p className="max-w-sm font-roboto text-sm font-light leading-relaxed text-white/55 md:text-[15px]">
              Polished components and themes for interfaces that feel
              considered—not generic. Build faster without blending in.
            </p>
            <Link
              href="/components"
              className="group mt-1 inline-flex w-fit items-center gap-1.5 border border-white/15 px-5 py-2.5 text-sm font-light text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white"
            >
              Browse components
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &gt;
              </span>
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
            className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3 lg:gap-8"
          >
            <FooterColumn title="Explore">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <FooterLink href={href} label={label} />
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Docs & code">
              {docsLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <FooterLink
                    href={href}
                    label={label}
                    external={external}
                  />
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Connect">
              {socialLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <FooterLink
                    href={href}
                    label={label}
                    external={external}
                  />
                </li>
              ))}
            </FooterColumn>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs font-light text-white/45 md:text-sm">
            © {year} Silver UI. Inspired by Forge UI.
          </p>
          <p className="max-w-md text-xs font-light leading-relaxed text-white/40 md:text-sm">
            Crafted for designers and developers who care about the details.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
