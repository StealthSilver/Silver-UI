"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import LaserFlow from "./LaserFlow";

const ZENITH_LASER_COLOR = "#B8A4FF";
const REVEAL_MASK_OFF = "-9999px";

const revealImageStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center bottom",
  zIndex: 5,
  mixBlendMode: "lighten",
  opacity: 0.38,
  pointerEvents: "none",
  WebkitMaskImage:
    "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 48px, rgba(255,255,255,0.55) 96px, rgba(255,255,255,0.22) 140px, rgba(255,255,255,0) 200px)",
  maskImage:
    "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 48px, rgba(255,255,255,0.55) 96px, rgba(255,255,255,0.22) 140px, rgba(255,255,255,0) 200px)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

export function ZenithTemplatePreview() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  const handleVisualMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const el = revealImgRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleVisualLeave = () => {
    const el = revealImgRef.current;
    if (!el) return;
    el.style.setProperty("--mx", REVEAL_MASK_OFF);
    el.style.setProperty("--my", REVEAL_MASK_OFF);
  };

  return (
    <div className="zenith-preview">
      <div className="zenith-preview__ambience" aria-hidden>
        <span className="zenith-preview__glow zenith-preview__glow--a" />
        <span className="zenith-preview__glow zenith-preview__glow--b" />
        <span className="zenith-preview__grain" />
      </div>

      <header className="zenith-preview__nav">
        <div className="zenith-preview__shell zenith-preview__shell--nav">
          <div className="zenith-preview__brand">
            <span className="zenith-preview__brand-mark" aria-hidden />
            <span className="zenith-preview__brand-name">Zenith</span>
          </div>

          <nav className="zenith-preview__links" aria-hidden>
            <span className="zenith-preview__nav-pill">Platform</span>
            <span className="zenith-preview__nav-pill">Solutions</span>
            <span className="zenith-preview__nav-pill">Company</span>
          </nav>

          <div className="zenith-preview__nav-actions">
            <span className="zenith-preview__nav-pill zenith-preview__nav-pill--ghost">
              Sign in
            </span>
            <span className="zenith-preview__nav-pill zenith-preview__nav-pill--cta">
              Contact
            </span>
          </div>
        </div>
      </header>

      <section className="zenith-preview__hero">
        <div className="zenith-preview__shell zenith-preview__hero-layout">
          <div className="zenith-preview__hero-copy">
            <p className="zenith-preview__eyebrow">Peak executive SaaS</p>
            <h4 className="zenith-preview__headline">
              Clarity at the{" "}
              <span className="zenith-preview__headline-accent">zenith</span>
            </h4>
            <p className="zenith-preview__subhead">
              Calm indigo surfaces, soft luminance, and authority without noise.
            </p>
            <span className="zenith-preview__cta">Get started</span>
          </div>

          <div
            className="zenith-preview__visual"
            onMouseMove={handleVisualMove}
            onMouseLeave={handleVisualLeave}
          >
            <LaserFlow
              className="zenith-preview__laser"
              horizontalBeamOffset={0.1}
              verticalBeamOffset={0}
              color={ZENITH_LASER_COLOR}
              horizontalSizing={0.5}
              verticalSizing={2}
              wispDensity={0.85}
              wispSpeed={12}
              wispIntensity={3.2}
              flowSpeed={0.28}
              flowStrength={0.2}
              fogIntensity={0.38}
              fogScale={0.3}
              fogFallSpeed={0.55}
              decay={1.1}
              falloffStart={1.2}
              mouseTiltStrength={0.012}
            />

            <Image
              src="/zenith-proj.png"
              alt=""
              width={1200}
              height={800}
              className="zenith-preview__base-img"
              aria-hidden
              priority
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={revealImgRef}
              src="/zenith-proj.png"
              alt=""
              className="zenith-preview__reveal-img"
              style={{
                ...revealImageStyle,
                ["--mx" as string]: REVEAL_MASK_OFF,
                ["--my" as string]: REVEAL_MASK_OFF,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
