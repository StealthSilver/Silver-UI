"use client";

import { DarkVeil, type DarkVeilColorGrade } from "./DarkVeil";

const PULSE_VEIL_GRADE: DarkVeilColorGrade = {
  lo: [12 / 255, 4 / 255, 6 / 255],
  mid: [58 / 255, 10 / 255, 20 / 255],
  hi: [92 / 255, 18 / 255, 36 / 255],
  amount: 0.94,
};

export function PulseTemplatePreview() {
  return (
    <div className="pulse-preview">
      <header className="pulse-preview__nav">
        <div className="pulse-preview__brand">
          <span className="pulse-preview__brand-mark" aria-hidden />
          <span className="pulse-preview__brand-name">Pulse</span>
        </div>
        <nav className="pulse-preview__links" aria-hidden>
          <span>Product</span>
          <span>Solutions</span>
          <span>Pricing</span>
        </nav>
        <span className="pulse-preview__nav-cta">Get started</span>
      </header>

      <section className="pulse-preview__hero">
        <div className="pulse-preview__hero-bg" aria-hidden>
          <DarkVeil
            hueShift={342}
            speed={0.38}
            warpAmount={0.32}
            noiseIntensity={0.012}
            resolutionScale={1}
            colorGrade={PULSE_VEIL_GRADE}
          />
          <div className="pulse-preview__hero-pulse-tint" />
        </div>

        <div className="pulse-preview__hero-content">
          <h4 className="pulse-preview__headline">Design with pulse</h4>
          <p className="pulse-preview__subhead">
            Dark, minimal, alive.
          </p>
          <span className="pulse-preview__btn pulse-preview__btn--primary">
            Explore
          </span>
        </div>
      </section>
    </div>
  );
}
