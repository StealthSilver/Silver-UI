"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubLink, TwitterLink } from "../ui/SocialsButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled
          ? "backdrop-blur-md bg-neutral/10 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <GithubLink />
          <TwitterLink />
        </div>
      </div>
    </nav>
  );
}
