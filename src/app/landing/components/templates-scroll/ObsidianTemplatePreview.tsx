"use client";

export function ObsidianTemplatePreview() {
  return (
    <div className="obsidian-preview">
      <div className="obsidian-preview__structure" aria-hidden>
        <span className="obsidian-preview__vline obsidian-preview__vline--1" />
        <span className="obsidian-preview__vline obsidian-preview__vline--2" />
        <span className="obsidian-preview__vline obsidian-preview__vline--3" />
      </div>

      <header className="obsidian-preview__nav">
        <div className="obsidian-preview__shell">
          <div className="obsidian-preview__brand">
            <span className="obsidian-preview__brand-mark" aria-hidden />
            <span className="obsidian-preview__brand-name">Obsidian</span>
          </div>
          <nav className="obsidian-preview__links" aria-hidden>
            <span>Structure</span>
            <span>System</span>
            <span>Docs</span>
          </nav>
          <span className="obsidian-preview__nav-cta">Explore</span>
        </div>
      </header>

      <section className="obsidian-preview__hero">
        <div className="obsidian-preview__shell obsidian-preview__hero-layout">
          <div className="obsidian-preview__hero-copy">
            <p className="obsidian-preview__eyebrow">Volcanic glass system</p>
            <h4 className="obsidian-preview__headline">
              Structure in darkness
            </h4>
            <p className="obsidian-preview__subhead">
              Minimal grids, sharp partitions, and depth without noise.
            </p>
            <span className="obsidian-preview__btn">View framework</span>
          </div>

          <div className="obsidian-preview__illustration" aria-hidden>
            <div className="obsidian-preview__illus-grid">
              <div className="obsidian-preview__illus-col">
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--tall" />
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--short" />
              </div>
              <div className="obsidian-preview__illus-col">
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--mid" />
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--tall" />
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--xs" />
              </div>
              <div className="obsidian-preview__illus-col">
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--short" />
                <span className="obsidian-preview__illus-block obsidian-preview__illus-block--mid" />
              </div>
            </div>
            <span className="obsidian-preview__illus-frame" />
          </div>
        </div>
      </section>
    </div>
  );
}
