"use client";

import { ForgeEmberParticles } from "./ForgeEmberParticles";

export function ForgeTemplatePreview() {
  return (
    <div className="forge-preview">
      <header className="forge-preview__nav">
        <div className="forge-preview__shell forge-preview__shell--nav">
          <div className="forge-preview__brand">
            <span className="forge-preview__brand-mark" aria-hidden />
            <span className="forge-preview__brand-name">Forge</span>
          </div>
          <nav className="forge-preview__links" aria-hidden>
            <span>Foundry</span>
            <span>Alloy</span>
            <span>Docs</span>
          </nav>
          <span className="forge-preview__nav-cta">Open forge</span>
        </div>
      </header>

      <section className="forge-preview__hero">
        <div className="forge-preview__hero-bg" aria-hidden>
          <ForgeEmberParticles />
          <div className="forge-preview__hero-heat" />
        </div>

        <div className="forge-preview__hero-lines" aria-hidden>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="forge-preview__shell forge-preview__shell--hero">
          <p className="forge-preview__eyebrow">Industrial heat system</p>
          <h4 className="forge-preview__headline">
            Shape interfaces in the fire
          </h4>
          <p className="forge-preview__subhead">
            Warm ember tones, subtle motion, and structured grids built for
            modern product teams.
          </p>
          <div className="forge-preview__actions">
            <span className="forge-preview__btn forge-preview__btn--primary">
              Enter forge
            </span>
            <span className="forge-preview__btn forge-preview__btn--ghost">
              View demo
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
