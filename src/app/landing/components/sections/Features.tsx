"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Palette,
  Zap,
  Code2,
  Layers,
  BarChart3,
  Accessibility,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Multiple Design Themes",
    description:
      "Choose from 5 carefully crafted design themes: Minimalist, Brutalist, Maximalist, Neumorphic, and Motion. Each theme offers a unique visual identity while maintaining consistency.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Production Ready",
    description:
      "Fully tested, accessible, and optimized components ready for immediate production use. Copy-paste friendly code with no external dependencies.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Developer Friendly",
    description:
      "Clean, well-documented code with TypeScript support. Easy to customize and extend for your specific needs.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Rich Components",
    description:
      "Comprehensive component library including Buttons, Cards, Inputs, Loaders, and Switches - all with theme variants.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Optimized",
    description:
      "Built with performance in mind using React best practices, motion animations, and optimized rendering.",
  },
  {
    icon: <Accessibility className="w-8 h-8" />,
    title: "Accessible by Default",
    description:
      "WCAG compliant components with proper ARIA labels and keyboard navigation support.",
  },
];

export const Features = () => {
  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-5 pointer-events-none" />

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
            Why Choose Silver UI?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-roboto">
            Powerful features designed for modern developers who demand both
            beauty and functionality in their UI components.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card Border */}
              <div className="relative p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-colors duration-300 bg-white/2 backdrop-blur-sm h-full">
                {/* Icon Container */}
                <div className="mb-4 p-3 w-fit rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 font-public-sans">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-roboto">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
