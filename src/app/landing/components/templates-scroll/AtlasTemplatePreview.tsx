"use client";

import { AtlasRenaissanceBackdrop } from "./AtlasRenaissanceBackdrop";

export function AtlasTemplatePreview() {
  return (
    <div className="atlas-preview">
      <header className="atlas-preview__nav">
        <div className="atlas-preview__shell atlas-preview__shell--nav">
          <div className="atlas-preview__brand">
            <span className="atlas-preview__brand-mark" aria-hidden />
            <span className="atlas-preview__brand-name">Atlas</span>
          </div>
          <nav className="atlas-preview__links" aria-hidden>
            <span>Archives</span>
            <span>Cartography</span>
            <span>Expeditions</span>
            <span>Ledger</span>
          </nav>
          <span className="atlas-preview__nav-cta">Enter</span>
        </div>
      </header>

      <section className="atlas-preview__hero">
        <AtlasRenaissanceBackdrop />

        <div className="atlas-preview__hero-content">
          <p className="atlas-preview__eyebrow">Atlas</p>
          <h4 className="atlas-preview__headline">Chart the world</h4>
          <div className="atlas-preview__actions">
            <span className="atlas-preview__btn atlas-preview__btn--primary">
              Explore
            </span>
            <span className="atlas-preview__btn atlas-preview__btn--ghost">
              Docs
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
