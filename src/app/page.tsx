"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Palette, Code2, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Navbar } from "./components/Navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
            >
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Silver UI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              A modern React component library built with Tailwind CSS and
              Framer Motion. Beautiful, accessible, and customizable components
              for your next project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/components">
                <Button
                  size="md"
                  className="flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Button>
              </Link>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
                <span>View on GitHub</span>
                <Star size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Silver UI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies and best practices to help you
              create stunning interfaces faster.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beautiful Components
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of carefully crafted components
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-12"
          >
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <Button>Primary Button</Button>
              <Button variant="outline">Secondary Button</Button>
              <Card className="p-6 max-w-sm">
                <h3 className="font-semibold text-lg mb-2">Component Card</h3>
                <p className="text-gray-600">
                  This is an example of how our components look in action.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building beautiful interfaces with our component library
              today.
            </p>
            <Link href="/components">
              <Button
                variant="outline"
                size="md"
                className="bg-white text-blue-600 hover:bg-gray-50 border-white text-lg px-8 py-4"
              >
                Browse Components
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold">Silver UI</span>
          </div>
          <p className="text-gray-400">
            Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer
            Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: "Fast & Lightweight",
    description:
      "Optimized components that don't slow down your application. Built for performance from the ground up.",
  },
  {
    icon: Palette,
    title: "Highly Customizable",
    description:
      "Easily customize components to match your brand. Full control over styling with Tailwind CSS.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "TypeScript support, excellent documentation, and intuitive APIs that make development a breeze.",
  },
];
