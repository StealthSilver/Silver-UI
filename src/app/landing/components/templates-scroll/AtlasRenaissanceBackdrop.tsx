"use client";

import Image from "next/image";

const ATLAS_HERO_BG = "/atlas-bg.avif";

export function AtlasRenaissanceBackdrop() {
  return (
    <div className="atlas-preview__hero-scene" aria-hidden>
      <Image
        src={ATLAS_HERO_BG}
        alt=""
        fill
        className="atlas-preview__hero-bg"
        sizes="600px"
        quality={60}
      />
      <span className="atlas-preview__hero-grain" />
      <span className="atlas-preview__hero-vignette" />
    </div>
  );
}
