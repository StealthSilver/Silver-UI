import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient background that blurs towards the circumference */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-gray-400 text-sm">© 2025, Silver/ui</div>

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
