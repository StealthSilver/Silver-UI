"use client";

import MetallicPaint from "./MetallicPaint";

const PRISM_PAINT_COLORS = {
  lightColor: "#c8b8ff",
  darkColor: "#142848",
  tintColor: "#381838",
} as const;

export function PrismTemplatePreview() {
  return (
    <div className="prism-preview">
      <header className="prism-preview__nav">
        <div className="prism-preview__shell prism-preview__shell--nav">
          <div className="prism-preview__brand prism-preview__glass">
            <span className="prism-preview__brand-mark" aria-hidden />
            <span className="prism-preview__brand-name">Prism</span>
          </div>
          <nav className="prism-preview__links" aria-hidden>
            <span className="prism-preview__glass">Spectrum</span>
            <span className="prism-preview__glass">Refraction</span>
            <span className="prism-preview__glass">Studio</span>
          </nav>
          <span className="prism-preview__nav-cta prism-preview__glass">
            Enter prism
          </span>
        </div>
      </header>

      <section className="prism-preview__hero">
        <div className="prism-preview__hero-bg" aria-hidden>
          <span className="prism-preview__shine prism-preview__shine--a" />
          <span className="prism-preview__shine prism-preview__shine--b" />
          <span className="prism-preview__shine prism-preview__shine--c" />
          <span className="prism-preview__hero-grain" />
        </div>

        <div className="prism-preview__prism-visual" aria-hidden>
          <MetallicPaint
            imageSrc="/templates/prism-shape.svg"
            seed={17}
            scale={3.6}
            refraction={0.012}
            blur={0.018}
            liquid={0.82}
            speed={0.28}
            brightness={2.1}
            contrast={0.55}
            angle={-8}
            fresnel={1.1}
            lightColor={PRISM_PAINT_COLORS.lightColor}
            darkColor={PRISM_PAINT_COLORS.darkColor}
            tintColor={PRISM_PAINT_COLORS.tintColor}
            patternSharpness={1}
            waveAmplitude={1.1}
            noiseScale={0.55}
            chromaticSpread={2.4}
            distortion={1.05}
            contour={0.18}
          />
          <span className="prism-preview__prism-glow" />
        </div>

        <div className="prism-preview__shell prism-preview__shell--hero">
          <p className="prism-preview__eyebrow prism-preview__glass">
            Spectral glass system
          </p>
          <h4 className="prism-preview__headline">
            Refract light into{" "}
            <span className="prism-preview__headline-accent">living glass</span>
          </h4>
          <p className="prism-preview__subhead">
            Shining surfaces, violet refraction, and depth pulled from the Prism
            theme—built for luminous product storytelling.
          </p>
          <span className="prism-preview__btn prism-preview__glass">
            Open studio
          </span>
        </div>
      </section>
    </div>
  );
}
