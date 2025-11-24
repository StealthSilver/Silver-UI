import Image from "next/image";
import React from "react";

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

const Navbar: React.FC = () => (
  <nav className="w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/70 dark:bg-neutral-900/80 dark:border-neutral-800/60 dark:supports-backdrop-filter:bg-neutral-900/70">
    <div className="mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={110} height={40} alt="Logo" priority />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          {/* Search input will be passed as children or via props in parent */}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[var(--primary)] transition"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[var(--primary)] transition"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
