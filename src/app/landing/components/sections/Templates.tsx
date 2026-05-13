export function Templates() {
  return (
    <section
      id="templates"
      aria-labelledby="templates-heading"
      className="relative bg-black px-6 py-10 text-white"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <h2
          id="templates-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          TEMPLATES
        </h2>

        <div className="mt-8 w-full px-3 sm:px-6 md:px-10">
          <div
            className="h-[80vh] w-full border border-line bg-gradient-to-r from-[#0a0a0c] via-[#040404] to-[#0a0a0c]"
            role="region"
            aria-label="Templates preview"
          />
        </div>
      </div>
    </section>
  );
}
