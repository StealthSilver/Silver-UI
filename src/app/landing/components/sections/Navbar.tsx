"use client";

import { useState, useEffect, useId, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GetFullAccessButton } from "../ui/GetFullAccessButton";

const navItems = [
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/templates", label: "Templates" },
  { href: "/lab", label: "Lab" },
  { href: "/construct", label: "Construct" },
  { href: "/docs", label: "Docs" },
] as const;

const mobileMenuEase = [0.16, 1, 0.3, 1] as const;
const mobileMenuTransition = {
  duration: 0.38,
  ease: mobileMenuEase,
} as const;

function navHrefIsActive(pathname: string, href: string) {
  if (href === "/components") {
    return (
      pathname === "/components" || pathname.startsWith("/components/")
    );
  }
  return pathname === href;
}

function NavPrimaryLink({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavId = useId();
  const bodyOverflowBeforeMenu = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    bodyOverflowBeforeMenu.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (bodyOverflowBeforeMenu.current != null) {
        document.body.style.overflow = bodyOverflowBeforeMenu.current;
        bodyOverflowBeforeMenu.current = null;
      }
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full min-w-0 overflow-x-clip bg-background px-2 pt-2">
        <div className="mx-auto w-full min-w-0 max-w-7xl">
          <div
            className="screen-line-edges relative flex h-12 min-w-0 items-center justify-between gap-2 border-x border-line px-2 sm:gap-4"
            style={{ borderColor: "var(--line)" }}
          >
            <Link
              className="flex min-w-0 shrink-0 select-none items-center gap-2 transition-transform ease-out active:scale-[0.98]"
              href="/"
              aria-label="Silver UI"
            >
              <Image
                src="/logo.svg"
                alt="Silver UI logo"
                width={24}
                height={24}
                className="h-6 w-6 shrink-0"
                priority
              />
              <span className="truncate text-sm font-medium tracking-tight text-white">
                Silver UI
              </span>
            </Link>

            <div className="flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-3 md:gap-4">
              <nav
                className={cn(
                  "no-scrollbar hidden items-center gap-4 overflow-x-auto py-1 text-sm sm:flex md:gap-6 md:py-0",
                )}
                aria-label="Primary"
              >
                {navItems.map(({ href, label }) => (
                  <NavPrimaryLink
                    key={href}
                    href={href}
                    label={label}
                    className={cn(
                      "shrink-0 font-light transition-colors duration-200",
                      navHrefIsActive(pathname, href)
                        ? "text-white"
                        : "text-white/60 hover:text-white",
                    )}
                  />
                ))}
              </nav>

              <GetFullAccessButton variant="nav" />

              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className="rounded-md p-2 transition-transform ease-out hover:bg-muted active:scale-[0.98] sm:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls={mobileNavId}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            <div
              className="absolute top-[-3.5px] left-[-4.5px] z-[2] flex size-2 border bg-background"
              style={{ borderColor: "var(--line)" }}
              aria-hidden
            />
            <div
              className="absolute top-[-3.5px] right-[-4.5px] z-[2] flex size-2 border bg-background"
              style={{ borderColor: "var(--line)" }}
              aria-hidden
            />
            <div
              className="absolute bottom-[-3.5px] left-[-4.5px] z-[2] flex size-2 border bg-background"
              style={{ borderColor: "var(--line)" }}
              aria-hidden
            />
            <div
              className="absolute bottom-[-3.5px] right-[-4.5px] z-[2] flex size-2 border bg-background"
              style={{ borderColor: "var(--line)" }}
              aria-hidden
            />
          </div>
        </div>
      </header>

      <AnimatePresence
        onExitComplete={() => {
          if (bodyOverflowBeforeMenu.current != null) {
            document.body.style.overflow = bodyOverflowBeforeMenu.current;
            bodyOverflowBeforeMenu.current = null;
          } else {
            document.body.style.removeProperty("overflow");
          }
        }}
      >
        {mobileOpen ? (
          <motion.div
            key="landing-navbar-mobile-scrim"
            className="fixed inset-0 z-40 bg-background/55 backdrop-blur-sm dark:bg-background/45 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={mobileMenuTransition}
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
        ) : null}
        {mobileOpen ? (
          <motion.div
            key="landing-navbar-mobile-panel"
            className="pointer-events-none fixed top-14 right-0 left-0 z-50 flex max-h-[min(70dvh,calc(100dvh-3.5rem-1.5rem))] justify-center overflow-x-hidden overflow-y-auto overscroll-contain px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] will-change-transform sm:hidden"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={mobileMenuTransition}
          >
            <div
              id={mobileNavId}
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              className="screen-line-edges pointer-events-auto relative w-full max-w-7xl border-x border-b border-line bg-background text-[15px] shadow-sm"
            >
              <nav className="flex flex-col" aria-label="Primary">
                {navItems.map(({ href, label }, index) => (
                  <NavPrimaryLink
                    key={href}
                    href={href}
                    label={label}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-3.5 font-light transition-[background-color,color] duration-200 hover:bg-muted/80 active:bg-muted",
                      navHrefIsActive(pathname, href)
                        ? "text-white"
                        : "text-white/60 hover:text-white",
                      index < navItems.length - 1 && "border-b border-line",
                    )}
                  />
                ))}
                <div className="border-t border-line px-4 py-3.5">
                  <GetFullAccessButton
                    variant="mobile"
                    onClick={() => setMobileOpen(false)}
                  />
                </div>
              </nav>

              <div
                className="absolute top-[-3.5px] left-[-4.5px] z-[2] flex size-2 border bg-background"
                style={{ borderColor: "var(--line)" }}
                aria-hidden
              />
              <div
                className="absolute top-[-3.5px] right-[-4.5px] z-[2] flex size-2 border bg-background"
                style={{ borderColor: "var(--line)" }}
                aria-hidden
              />
              <div
                className="absolute bottom-[-3.5px] left-[-4.5px] z-[2] flex size-2 border bg-background"
                style={{ borderColor: "var(--line)" }}
                aria-hidden
              />
              <div
                className="absolute bottom-[-3.5px] right-[-4.5px] z-[2] flex size-2 border bg-background"
                style={{ borderColor: "var(--line)" }}
                aria-hidden
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
