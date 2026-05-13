const squareClass =
  "pointer-events-none absolute top-1/2 z-[1] flex size-2 -translate-y-1/2 border bg-background";

type LandingRailSeparatorProps = {
  id?: string;
};

/** Full-bleed hairline plus corner squares aligned to `max-w-7xl` page rails. */
export function LandingRailSeparator({ id }: LandingRailSeparatorProps) {
  return (
    <div
      id={id}
      className="pointer-events-none relative left-1/2 z-[32] w-screen max-w-none shrink-0 -translate-x-1/2"
      aria-hidden
    >
      <div className="relative h-px w-full bg-line">
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2">
          <div
            className={`${squareClass} left-[-4.5px]`}
            style={{ borderColor: "var(--line)" }}
          />
          <div
            className={`${squareClass} right-[-4.5px]`}
            style={{ borderColor: "var(--line)" }}
          />
        </div>
      </div>
    </div>
  );
}
