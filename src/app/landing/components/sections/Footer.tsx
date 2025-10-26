import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden py-30">
      {/* Radial white glow at the bottom */}
      <div className="absolute top-44 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white rounded-full blur-[100px] opacity-10 pointer-events-none" />

      {/* Content positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl font-light mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()}, Silver/UI
          </div>

          {/* Right side - Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="/components"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Components
            </Link>
            <Link
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/StealthSilver/Silver-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
