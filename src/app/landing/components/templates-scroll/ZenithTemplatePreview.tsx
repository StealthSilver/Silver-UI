"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import LaserFlow from "./LaserFlow";

const ZENITH_LASER_COLOR = "#B8A4FF";
const REVEAL_MASK_OFF = "-9999px";

const revealMaskStyle: CSSProperties = {
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
        <div className="zenith-preview__hero-scene" aria-hidden>
          <div className="zenith-preview__ambience">
            <span className="zenith-preview__glow zenith-preview__glow--a" />
            <span className="zenith-preview__glow zenith-preview__glow--b" />
            <span className="zenith-preview__grain" />
          </div>

          <div className="zenith-preview__image-stack">
            <div className="zenith-preview__laser-mount" aria-hidden>
              <LaserFlow
                className="zenith-preview__laser"
                horizontalBeamOffset={0}
                verticalBeamOffset={0.48}
                color={ZENITH_LASER_COLOR}
                horizontalSizing={0.88}
                verticalSizing={1.05}
                wispDensity={0.8}
                wispSpeed={11}
                wispIntensity={2.6}
                flowSpeed={0.3}
                flowStrength={0.34}
                fogIntensity={0.42}
                fogScale={0.28}
                fogFallSpeed={0.5}
                decay={1.05}
                falloffStart={1.15}
                mouseTiltStrength={0.01}
              />
            </div>

            <div
              className="zenith-preview__image-frame"
              onMouseMove={handleVisualMove}
              onMouseLeave={handleVisualLeave}
            >
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
                  ...revealMaskStyle,
                  ["--mx" as string]: REVEAL_MASK_OFF,
                  ["--my" as string]: REVEAL_MASK_OFF,
                }}
              />
            </div>
          </div>

          <div className="zenith-preview__hero-vignette" />
        </div>

        <div className="zenith-preview__shell zenith-preview__shell--hero">
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
      </section>
    </div>
  );
}
