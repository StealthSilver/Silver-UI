import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./GetFullAccessButton.module.css";

type GetFullAccessButtonProps = {
  onClick?: () => void;
  className?: string;
  /** `nav`: inline in header (hidden below `sm`). `mobile`: centered in menu row */
  variant?: "nav" | "mobile";
};

export function GetFullAccessButton({
  onClick,
  className,
  variant = "nav",
}: GetFullAccessButtonProps) {
  return (
    <Link
      href="/components"
      onClick={onClick}
      className={cn(
        styles.anchor,
        variant === "mobile" && styles.anchorMobile,
        variant === "nav" && "hidden sm:inline-flex",
        className,
      )}
    >
      <span className={styles.shell}>
        <span className={styles.blob1} aria-hidden />
        <span className={styles.blob2} aria-hidden />
        <span className={styles.inner}>
          <span className={styles.label}>Get Full Access</span>
        </span>
      </span>
    </Link>
  );
}
