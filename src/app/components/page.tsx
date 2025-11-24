import Image from "next/image";
import React from "react";

// Simple inline SVG icon components (Twitter & LinkedIn)
const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="Twitter"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.928 2.206-4.928 4.927 0 .386.045.763.127 1.125-4.094-.206-7.725-2.165-10.163-5.144-.424.722-.666 1.561-.666 2.475 0 1.709.87 3.216 2.19 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.95 4.827-.414.111-.848.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.381 4.6 3.421-1.685 1.321-3.81 2.107-6.116 2.107-.398 0-.79-.023-1.177-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.004-7.496 14.004-13.986 0-.213-.005-.425-.014-.636.961-.693 1.8-1.56 2.46-2.548z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="LinkedIn"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.602 0 4.267 2.368 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.068 0-1.143.924-2.069 2.068-2.069 1.142 0 2.066.926 2.066 2.069 0 1.142-.924 2.068-2.066 2.068zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur supports-backdrop-filter:bg-white/60 dark:bg-neutral-900/70 dark:border-neutral-800/50 dark:supports-backdrop-filter:bg-neutral-900/60">
        <div className="mx-auto  px-4 md:px-6 lg:px-8 h-12 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                width={100}
                height={36}
                alt="Logo"
                priority
              />
            </a>
          </div>

          {/* Right: Search + Social Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                className="peer w-48 sm:w-64 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-neutral-400 peer-focus:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-500 transition"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-700 transition"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content placeholder */}
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold mb-4">Components</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Browse and search for UI components. (Content coming soon.)
        </p>
      </main>
    </div>
  );
}
