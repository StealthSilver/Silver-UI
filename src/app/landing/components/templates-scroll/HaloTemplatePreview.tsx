"use client";

import { Prism, type PrismColorGrade } from "./Prism";

const HALO_PRISM_GRADE: PrismColorGrade = {
  lo: [10 / 255, 10 / 255, 12 / 255],
  mid: [42 / 255, 38 / 255, 24 / 255],
  hi: [74 / 255, 66 / 255, 36 / 255],
  amount: 0.9,
};

export function HaloTemplatePreview() {
  return (
    <div className="halo-preview">
      <header className="halo-preview__nav">
        <div className="halo-preview__brand">
          <span className="halo-preview__brand-mark" aria-hidden />
          <span className="halo-preview__brand-name">Halo</span>
        </div>
        <nav className="halo-preview__links" aria-hidden>
          <span>Platform</span>
          <span>Customers</span>
          <span>Resources</span>
          <span>Pricing</span>
        </nav>
        <div className="halo-preview__nav-actions">
          <span className="halo-preview__nav-signin">Sign in</span>
          <span className="halo-preview__nav-cta">Start free</span>
        </div>
      </header>

      <section className="halo-preview__hero">
        <div className="halo-preview__hero-bg" aria-hidden>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
            transparent
            suspendWhenOffscreen
            colorGrade={HALO_PRISM_GRADE}
          />
          <div className="halo-preview__hero-halo-tint" />
          <div className="halo-preview__hero-ring halo-preview__hero-ring--outer" />
          <div className="halo-preview__hero-ring halo-preview__hero-ring--inner" />
        </div>

        <div className="halo-preview__hero-content">
          <p className="halo-preview__eyebrow">
            <span className="halo-preview__eyebrow-dot" aria-hidden />
            Luminous design system
          </p>

          <h4 className="halo-preview__headline">
            Build in a{" "}
            <span className="halo-preview__headline-accent">golden halo</span>
          </h4>

          <p className="halo-preview__subhead">
            Center-aligned layouts, warm light, and rich storytelling blocks
            for modern product launches.
          </p>

          <div className="halo-preview__tags" aria-hidden>
            <span>Components</span>
            <span>Templates</span>
            <span>Motion</span>
            <span>Themes</span>
          </div>

          <div className="halo-preview__actions">
            <span className="halo-preview__btn halo-preview__btn--primary">
              Explore Halo
            </span>
            <span className="halo-preview__btn halo-preview__btn--ghost">
              View demo
            </span>
          </div>

          <div className="halo-preview__stats" aria-hidden>
            <div className="halo-preview__stat">
              <span className="halo-preview__stat-value">240+</span>
              <span className="halo-preview__stat-label">Blocks</span>
            </div>
            <div className="halo-preview__stat">
              <span className="halo-preview__stat-value">18</span>
              <span className="halo-preview__stat-label">Themes</span>
            </div>
            <div className="halo-preview__stat">
              <span className="halo-preview__stat-value">4.9</span>
              <span className="halo-preview__stat-label">Rating</span>
            </div>
          </div>

          <p className="halo-preview__trust">
            Trusted by teams at Nova, Meridian, and Arcline
          </p>
        </div>
      </section>
    </div>
  );
}
