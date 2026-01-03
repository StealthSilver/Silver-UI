"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Sparkles, Code, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold font-public-sans mb-4">
            About Silver UI
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-roboto">
            Silver UI is a modern React component library that breaks free from
            the monotony of design sameness. We believe UI components should be
            both beautiful and functional, with the flexibility to match your
            unique brand identity.
          </p>
        </motion.div>

        {/* About Content with Components */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-public-sans">
                Built for Modern Developers
              </h3>
              <p className="text-gray-400 leading-relaxed font-roboto">
                Silver UI provides a curated collection of 5 distinct design
                themes that can be applied to every component. Whether you
                prefer the simplicity of minimalist design, the boldness of
                brutalism, the richness of maximalism, the softness of
                neumorphism, or the fluidity of motion design - we've got you
                covered.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-public-sans">
                Flexibility at Scale
              </h3>
              <p className="text-gray-400 leading-relaxed font-roboto">
                Every component in Silver UI is meticulously crafted to be both
                aesthetically pleasing and highly functional. Copy any component
                directly into your project, customize it to your needs, and
                watch it enhance your application's user experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-public-sans">
                No Compromise on Quality
              </h3>
              <p className="text-gray-400 leading-relaxed font-roboto">
                Every component is fully typed with TypeScript, accessible by
                default, and optimized for performance. We handle the heavy
                lifting so you can focus on building amazing products.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link
                href="/components"
                className="inline-flex px-8 py-3 bg-[#0070a8] hover:bg-[#008fd7] text-white rounded-xl transition-all duration-300 font-medium"
              >
                Explore Components →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Component Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Component Showcase 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0070a8]/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-[#0070a8]" />
                <h4 className="text-sm font-semibold text-gray-300 font-public-sans">
                  5 Design Themes
                </h4>
              </div>
              <p className="text-sm text-gray-400 font-roboto">
                Apply any of our 5 carefully crafted themes to transform the
                look and feel of your components instantly.
              </p>
            </motion.div>

            {/* Component Showcase 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0070a8]/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-[#0070a8]" />
                <h4 className="text-sm font-semibold text-gray-300 font-public-sans">
                  Copy-Paste Ready
                </h4>
              </div>
              <p className="text-sm text-gray-400 font-roboto">
                Every component comes with clean, well-documented code that's
                ready to be copied directly into your project.
              </p>
            </motion.div>

            {/* Component Showcase 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0070a8]/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-[#0070a8]" />
                <h4 className="text-sm font-semibold text-gray-300 font-public-sans">
                  Highly Customizable
                </h4>
              </div>
              <p className="text-sm text-gray-400 font-roboto">
                With full TypeScript support and flexible props, customize any
                component to match your exact requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
        >
          {[
            { number: "5+", label: "Design Themes" },
            { number: "25+", label: "Components" },
            { number: "100%", label: "Responsive" },
            { number: "∞", label: "Customizable" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center py-8 hover:bg-white/2 rounded-xl transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0070a8] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-roboto">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
