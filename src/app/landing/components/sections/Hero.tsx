"use client";

import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import TechStackSection from "../ui/TechStackSection";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-[100px] bg-black text-white overflow-hidden">
      <Spotlight />

      <motion.h1
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="text-6xl py-2 mb-10 font-semibold font-public-sans shiny-text"
      >
        Not your average UI library
      </motion.h1>

      <motion.p
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        className="max-w-2xl text-gray-400 text-lg mb-10 font-roboto"
      >
        Where all designs looks similar make something different. Use Silver UI
        to build stunning, unique interfaces with ease.
      </motion.p>

      <motion.div
        initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <Link
          href="/components"
          className="px-6 py-3 bg-[#0070a8] text-white rounded-xl transition-all duration-300 hover:bg-[#008fd7] relative overflow-hidden group"
        >
          <span className="relative z-10">Browse Components</span>
          <div className="absolute inset-0 bg-[#0298e3] rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md scale-110 -z-10"></div>
        </Link>
        <Link
          href="/docs"
          className="px-6 py-3 text-white rounded-xl border border-white transition-all duration-300 hover:bg-white hover:text-black group"
        >
          <span className="flex items-center gap-1">
            Documentation
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              &gt;
            </span>
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
        animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7, ease: "easeInOut" }}
        className="w-full"
      >
        <TechStackSection />
      </motion.div>
    </section>
  );
};
