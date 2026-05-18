"use client";

import Hyperspeed from "./Hyperspeed";
import { DRIFT_HYPERSPEED_OPTIONS } from "./driftHyperspeedOptions";

export function DriftTemplatePreview() {
  return (
    <div className="drift-preview">
      <header className="drift-preview__nav-wrap">
        <div className="drift-preview__nav">
          <div className="drift-preview__brand">
            <span className="drift-preview__brand-mark" aria-hidden>
              <span />
              <span />
              <span />
            </span>
            <span className="drift-preview__brand-name">Drift</span>
          </div>
          <nav className="drift-preview__links" aria-hidden>
            <span>Velocity</span>
            <span>Telemetry</span>
            <span>Fleet</span>
          </nav>
          <div className="drift-preview__nav-actions">
            <span className="drift-preview__nav-cta">Launch</span>
          </div>
        </div>
      </header>

      <section className="drift-preview__hero">
        <div className="drift-preview__hero-bg" aria-hidden>
          <Hyperspeed effectOptions={DRIFT_HYPERSPEED_OPTIONS} />
          <div className="drift-preview__hero-drift-tint" />
          <div className="drift-preview__hero-vignette" />
        </div>

        <div className="drift-preview__hero-content">
          <p className="drift-preview__eyebrow">
            <span className="drift-preview__eyebrow-line" aria-hidden />
            Adrenaline interface
          </p>

          <h4 className="drift-preview__headline">
            Move at
            <span className="drift-preview__headline-accent"> hyperspeed</span>
          </h4>

          <p className="drift-preview__subhead">
            Teal velocity, sharp type, and motion-first layouts built for
            launches that cannot wait.
          </p>

          <div className="drift-preview__metrics" aria-hidden>
            <div className="drift-preview__metric">
              <span className="drift-preview__metric-value">12ms</span>
              <span className="drift-preview__metric-label">Response</span>
            </div>
            <div className="drift-preview__metric">
              <span className="drift-preview__metric-value">240+</span>
              <span className="drift-preview__metric-label">Blocks</span>
            </div>
            <div className="drift-preview__metric">
              <span className="drift-preview__metric-value">∞</span>
              <span className="drift-preview__metric-label">Momentum</span>
            </div>
          </div>

          <div className="drift-preview__actions">
            <span className="drift-preview__btn drift-preview__btn--primary">
              Enter drift
            </span>
            <span className="drift-preview__btn drift-preview__btn--ghost">
              Live demo
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
