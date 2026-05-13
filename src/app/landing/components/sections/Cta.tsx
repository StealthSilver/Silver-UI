"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GetFullAccessButton } from "../ui/GetFullAccessButton";

export const Cta = () => {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-16 text-center text-white md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <h2
          id="cta-heading"
          className="text-center text-xs uppercase tracking-widest text-white/50 md:text-sm"
        >
          GET STARTED
        </h2>

        <motion.h3
          initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl font-public-sans text-4xl font-light leading-tight tracking-tight shiny-text md:text-5xl"
        >
          Design seamlessly.
          <br />
          Build faster.
        </motion.h3>

        <motion.p
          initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl font-roboto text-base font-light leading-relaxed text-white/55 md:text-lg"
        >
          Silver UI brings polished components and themes together so you can
          ship interfaces that feel considered—not generic.
        </motion.p>

        <motion.div
          initial={{ y: 8, filter: "blur(6px)", opacity: 0 }}
          whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.12, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center"
        >
          <GetFullAccessButton variant="inline" />
          <Link
            href="/components"
            className="group inline-flex w-[220px] items-center justify-center gap-1.5 whitespace-nowrap rounded-none border border-white/15 px-6 py-[11px] text-base font-light leading-6 text-white/80 transition-[background-color,border-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white sm:w-[230px] sm:py-[13px] sm:text-[1.0625rem]"
          >
            Browse components
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              &gt;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
