"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  navigateToPricingSection,
  PRICING_HREF,
} from "@/app/landing/lib/navigateToPricing";
import styles from "./GetFullAccessButton.module.css";

type GetFullAccessButtonProps = {
  onClick?: () => void;
  className?: string;
  /**
   * `nav`: inline in header (hidden below `sm`).
   * `mobile`: centered in mobile menu row.
   * `inline`: always-visible inline button (e.g. hero CTA).
   */
  variant?: "nav" | "mobile" | "inline";
};

export function GetFullAccessButton({
  onClick,
  className,
  variant = "nav",
}: GetFullAccessButtonProps) {
  return (
    <Link
      href={PRICING_HREF}
      onClick={(e) => {
        onClick?.();
        navigateToPricingSection(e);
      }}
      className={cn(
        styles.anchor,
        variant === "mobile" && styles.anchorMobile,
        variant === "nav" && "hidden sm:inline-flex",
        className,
      )}
    >
      <span
        className={cn(styles.shell, variant === "inline" && styles.shellInline)}
      >
        <span className={styles.blob1} aria-hidden />
        <span className={styles.blob2} aria-hidden />
        <span
          className={cn(
            styles.inner,
            variant === "inline" && styles.innerInline,
          )}
        >
          <span className={styles.label}>Get Full Access</span>
        </span>
      </span>
    </Link>
  );
}
