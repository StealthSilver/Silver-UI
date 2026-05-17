/** Source shown in the Deconstruct code panel for HeyGenLogoTicker. */
export const heygenLogoTickerSource = `"use client";

import { cn } from "@/lib/utils";

const HEYGEN_MEDIA_BASE =
  "https://www.heygen.com/assets_2025_redesign/_next/static/media";

const HEYGEN_BLUE = "#00c3ff";
const HEYGEN_PRISM_PINK = "#f3a6ff";

const COMPANY_LOGOS = [
  { name: "HubSpot", src: \`\${HEYGEN_MEDIA_BASE}/Hubspot.d73ed0b7.svg\` },
  { name: "Workday", src: \`\${HEYGEN_MEDIA_BASE}/Workday.86b9f8ec.svg\` },
  { name: "HP", src: \`\${HEYGEN_MEDIA_BASE}/HP.5a70f67a.svg\` },
  { name: "Trivago", src: \`\${HEYGEN_MEDIA_BASE}/Trivago.90629279.svg\` },
  { name: "JPMorgan", src: \`\${HEYGEN_MEDIA_BASE}/JPMorgan.741f4a50.svg\` },
  { name: "Autodesk", src: \`\${HEYGEN_MEDIA_BASE}/Autodesk.cb116bcc.svg\` },
  { name: "Miro", src: \`\${HEYGEN_MEDIA_BASE}/Miro.f68f8a84.svg\` },
  { name: "Intel", src: \`\${HEYGEN_MEDIA_BASE}/Intel.204ab641.svg\` },
  { name: "DHL", src: \`\${HEYGEN_MEDIA_BASE}/DHL.02a7e173.svg\` },
  { name: "Bosch", src: \`\${HEYGEN_MEDIA_BASE}/Bosch.6a721b36.svg\` },
  { name: "Coursera", src: \`\${HEYGEN_MEDIA_BASE}/Coursera.44838e05.svg\` },
  {
    name: "Spring Health",
    src: \`\${HEYGEN_MEDIA_BASE}/SpringHealth.282124e1.svg\`,
  },
] as const;

const TICKER_LOGOS = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

const bodyFont =
  "font-['TT_Norms_Pro',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]";

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-[60px] shrink-0 items-center">
      <img
        src={src}
        alt={\`\${name} logo\`}
        width={130}
        height={40}
        loading="lazy"
        decoding="async"
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

function TrustHeading() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-5 md:px-20">
      <div className="flex items-center justify-center gap-6 md:gap-10">
        <span
          className="h-px w-full flex-1"
          style={{
            background: \`linear-gradient(to right, \${HEYGEN_BLUE}, \${HEYGEN_PRISM_PINK})\`,
          }}
          aria-hidden
        />
        <p
          className={cn(
            bodyFont,
            "whitespace-nowrap text-center text-xs leading-[140%] font-medium tracking-[-0.14px] text-[#333] md:text-sm",
          )}
        >
          The world&apos;s leading companies trust HeyGen
        </p>
        <span
          className="h-px w-full flex-1"
          style={{
            background: \`linear-gradient(to right, \${HEYGEN_PRISM_PINK}, \${HEYGEN_BLUE})\`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export function HeyGenLogoTicker() {
  return (
    <section
      className={cn(bodyFont, "w-full bg-white py-10 md:py-14")}
      aria-label="Trusted companies"
    >
      <TrustHeading />

      <div className="relative mt-16 w-full">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent sm:w-40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent sm:w-40"
          aria-hidden
        />

        <div
          className={cn(
            "group overflow-hidden py-10",
            "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
          )}
          aria-label="Companies that trust HeyGen"
        >
          <div
            className={cn(
              "flex w-max will-change-transform",
              "animate-heygen-logo-slide motion-reduce:animate-none",
              "gap-40 sm:gap-80",
              "group-hover:[animation-play-state:paused]",
            )}
          >
            {TICKER_LOGOS.map((logo, index) => (
              <LogoItem key={\`\${logo.name}-\${index}\`} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;
