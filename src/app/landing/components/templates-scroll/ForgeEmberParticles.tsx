"use client";

const EMBERS = [
  { cx: 12, cy: 78, r: 1.2, delay: 0, dur: 4.2 },
  { cx: 28, cy: 62, r: 0.9, delay: 0.6, dur: 3.8 },
  { cx: 45, cy: 88, r: 1.4, delay: 1.1, dur: 5.1 },
  { cx: 58, cy: 55, r: 0.7, delay: 0.3, dur: 4.6 },
  { cx: 72, cy: 72, r: 1.1, delay: 1.8, dur: 3.5 },
  { cx: 85, cy: 48, r: 0.8, delay: 0.9, dur: 4.9 },
  { cx: 18, cy: 42, r: 1, delay: 2.2, dur: 4.1 },
  { cx: 38, cy: 35, r: 0.6, delay: 1.4, dur: 3.2 },
  { cx: 62, cy: 28, r: 1.3, delay: 0.2, dur: 5.4 },
  { cx: 78, cy: 38, r: 0.85, delay: 2.6, dur: 3.9 },
  { cx: 92, cy: 65, r: 1.15, delay: 1.6, dur: 4.4 },
  { cx: 8, cy: 58, r: 0.75, delay: 3.1, dur: 3.6 },
  { cx: 52, cy: 82, r: 1.05, delay: 0.8, dur: 4.8 },
  { cx: 68, cy: 92, r: 0.65, delay: 2.4, dur: 3.3 },
  { cx: 34, cy: 68, r: 0.95, delay: 1.9, dur: 4.0 },
  { cx: 88, cy: 22, r: 0.55, delay: 3.4, dur: 3.1 },
  { cx: 22, cy: 92, r: 1.25, delay: 0.5, dur: 5.0 },
  { cx: 48, cy: 18, r: 0.7, delay: 2.8, dur: 3.7 },
] as const;

export function ForgeEmberParticles() {
  return (
    <svg
      className="forge-preview__particles"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="forge-ember-glow" cx="50%" cy="80%" r="55%">
          <stop offset="0%" stopColor="#7a3a14" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#4a2410" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0e0804" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="forge-flame" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#7a3a14" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#c45a20" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f0a060" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" fill="url(#forge-ember-glow)" />

      <ellipse
        className="forge-preview__flame forge-preview__flame--1"
        cx="50"
        cy="92"
        rx="18"
        ry="8"
        fill="url(#forge-flame)"
      />
      <ellipse
        className="forge-preview__flame forge-preview__flame--2"
        cx="32"
        cy="88"
        rx="8"
        ry="5"
        fill="url(#forge-flame)"
        opacity="0.6"
      />
      <ellipse
        className="forge-preview__flame forge-preview__flame--3"
        cx="68"
        cy="86"
        rx="9"
        ry="5.5"
        fill="url(#forge-flame)"
        opacity="0.55"
      />

      {EMBERS.map((ember, i) => (
        <circle
          key={i}
          className="forge-preview__ember"
          cx={ember.cx}
          cy={ember.cy}
          r={ember.r}
          style={{
            animationDelay: `${ember.delay}s`,
            animationDuration: `${ember.dur}s`,
          }}
        />
      ))}
    </svg>
  );
}
