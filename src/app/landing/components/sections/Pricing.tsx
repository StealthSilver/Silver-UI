"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  navigateToPricingSection,
  PRICING_HREF,
} from "@/app/landing/lib/navigateToPricing";
import {
  landingRevealAnimate,
  landingRevealInitial,
  landingRevealTransition,
  landingRevealViewport,
} from "@/app/landing/lib/landingRevealMotion";
import { LandingRailSeparator } from "./LandingRailSeparator";

type Tier = {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceCurrent: string;
  priceOriginal?: string;
  paymentNote?: string;
  ctaLabel: string;
  ctaHref: string;
  includesHeading?: string;
  features: string[];
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    description:
      "A strong starting point with free blocks, snippets, and lifetime access.",
    priceCurrent: "$0",
    ctaLabel: "Get access",
    ctaHref: "/components",
    features: [
      "Lifetime Access",
      "Unlimited projects",
      "Free blocks",
      "Free Snippets",
      "Support",
    ],
  },
  {
    id: "essentials",
    name: "Essentials",
    description:
      "For solo founders building polished marketing sites with clarity and control.",
    priceCurrent: "$249",
    priceOriginal: "$349",
    paymentNote: "One time payment",
    ctaLabel: "Get access",
    ctaHref: "/components",
    includesHeading: "Everything in Free, plus:",
    features: [
      "Regular Updates",
      "Hundreds of premium blocks",
      "Premium code snippets",
      "Hundreds of premium illustrations",
      "Priority support",
    ],
  },
  {
    id: "complete",
    name: "Complete",
    badge: "Most Popular",
    description:
      "The complete marketing system — blocks, illustrations, and production-ready pages.",
    priceCurrent: "$299",
    priceOriginal: "$399",
    paymentNote: "One time payment",
    ctaLabel: "Get full access",
    ctaHref: PRICING_HREF,
    includesHeading: "Everything in Essentials, plus:",
    popular: true,
    features: [
      "Modern landing pages",
      "Product pages",
      "Solution pages",
      "Pricing pages",
      "Customers pages",
      "Customer Story pages",
      "Wall of Love pages",
      "About pages",
      "Contact pages",
      "Blog pages",
      "Blog article pages",
      "Brand pages",
      "Legal pages",
    ],
  },
];

const cardMotion = {
  initial: landingRevealInitial,
  whileInView: landingRevealAnimate,
  transition: landingRevealTransition({ duration: 0.45 }),
  viewport: landingRevealViewport,
};

const ctaClass =
  "group mt-8 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:py-[13px] sm:text-[1.0625rem]";

const ctaPopularClass =
  "group mt-8 inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/25 bg-white/[0.06] px-6 py-[11px] text-base font-light leading-6 text-white transition-[background-color,border-color] duration-200 hover:border-white/40 hover:bg-white/[0.1] sm:py-[13px] sm:text-[1.0625rem]";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-black px-6 pt-10 text-white md:pt-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center pb-10 md:pb-12">
        <motion.h2
          id="pricing-heading"
          initial={landingRevealInitial}
          whileInView={landingRevealAnimate}
          transition={landingRevealTransition({ duration: 0.45 })}
          viewport={landingRevealViewport}
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          PRICING
        </motion.h2>

        <motion.p
          initial={landingRevealInitial}
          whileInView={landingRevealAnimate}
          transition={landingRevealTransition({ duration: 0.45 })}
          viewport={landingRevealViewport}
          className="mt-5 max-w-2xl text-center font-roboto text-sm font-light leading-relaxed text-white/55 md:text-base"
        >
          Choose a tier that matches how you ship. Upgrade once—no recurring
          lock-in for paid plans.
        </motion.p>

        <div className="mt-10 w-full px-3 sm:mt-12 sm:px-6 md:px-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
            {tiers.map((tier, index) => (
              <motion.article
                key={tier.id}
                {...cardMotion}
                transition={{
                  ...cardMotion.transition,
                  delay: 0.06 * index,
                }}
                className={cn(
                  "flex h-full flex-col border border-line bg-gradient-to-b from-[#0a0a0c] via-[#050505] to-[#040404] p-6 sm:p-8",
                  tier.popular &&
                    "border-white/22 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] lg:-translate-y-1 lg:shadow-lg lg:shadow-black/40",
                )}
                aria-label={`${tier.name} plan`}
              >
                {tier.badge ? (
                  <p className="mb-3 text-center text-[10px] font-normal uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                    <span className="border border-white/20 bg-white/[0.04] px-2.5 py-1 text-white/80">
                      {tier.badge}
                    </span>
                  </p>
                ) : (
                  <div className="mb-3 h-[26px] sm:h-[28px]" aria-hidden />
                )}

                <h3 className="text-center font-public-sans text-2xl font-light tracking-tight text-white md:text-[1.65rem]">
                  {tier.name}
                </h3>

                <p className="mt-4 text-center font-roboto text-sm font-light leading-relaxed text-white/55 md:text-[15px]">
                  {tier.description}
                </p>

                <div className="mt-8 flex flex-col items-center gap-1">
                  <div className="flex items-baseline justify-center gap-2.5">
                    {tier.priceOriginal ? (
                      <span className="font-public-sans text-lg font-light text-white/35 line-through md:text-xl">
                        {tier.priceOriginal}
                      </span>
                    ) : null}
                    <span className="font-public-sans text-4xl font-light tracking-tight text-white md:text-[2.35rem]">
                      {tier.priceCurrent}
                    </span>
                  </div>
                  {tier.paymentNote ? (
                    <p className="text-center text-xs font-light uppercase tracking-widest text-white/40">
                      {tier.paymentNote}
                    </p>
                  ) : null}
                </div>

                <Link
                  href={tier.ctaHref}
                  className={tier.popular ? ctaPopularClass : ctaClass}
                  onClick={
                    tier.ctaHref === PRICING_HREF
                      ? (e) => navigateToPricingSection(e)
                      : undefined
                  }
                >
                  {tier.ctaLabel}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &gt;
                  </span>
                </Link>

                <div className="mt-10 border-t border-line pt-8">
                  {tier.includesHeading ? (
                    <p className="mb-4 text-center text-xs font-light uppercase tracking-widest text-white/45">
                      {tier.includesHeading}
                    </p>
                  ) : null}
                  <ul className="flex flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 font-roboto text-sm font-light leading-snug text-white/70"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-white/35"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <LandingRailSeparator id="pricing-separator" />
    </section>
  );
}
