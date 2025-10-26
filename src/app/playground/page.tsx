"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/sections/Navbar";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";
import { Code, Eye, Palette } from "lucide-react";

export default function Playground() {
  const [activeTab, setActiveTab] = useState("button");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Component Playground
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiment with our components in real-time. Customize properties
            and see the results instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Component Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Palette className="mr-2" size={20} />
                Components
              </h3>
              <div className="space-y-2">
                {["button", "card", "input"].map((component) => (
                  <button
                    key={component}
                    onClick={() => setActiveTab(component)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors capitalize ${
                      activeTab === component
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {component}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Preview Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="mr-2" size={20} />
                Live Preview
              </h3>
              <div className="bg-gray-50 rounded-lg p-8 min-h-32 flex items-center justify-center">
                {activeTab === "button" && (
                  <div className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="outline">Secondary</Button>
                    <Button size="sm">Small</Button>
                  </div>
                )}
                {activeTab === "card" && (
                  <Card className="w-80 bg-white">
                    <h4 className="text-lg font-semibold">Sample Card</h4>
                    <p className="text-gray-600 mt-2">
                      This is a preview of the card component with some sample
                      content.
                    </p>
                    <div className="mt-4">
                      <Button size="sm">Action</Button>
                    </div>
                  </Card>
                )}
                {activeTab === "input" && (
                  <div className="space-y-4 w-80">
                    <Input placeholder="Default input" />
                    <Input placeholder="Large input" size="lg" />
                    <Input placeholder="Small input" size="sm" />
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="mr-2" size={20} />
                Code
              </h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>
                    {activeTab === "button" &&
                      `<Button>Primary</Button>
<Button variant="outline">Secondary</Button>
<Button size="sm">Small</Button>`}
                    {activeTab === "card" &&
                      `<Card className="w-80">
  <h4 className="text-lg font-semibold">Sample Card</h4>
  <p className="text-gray-600 mt-2">
    This is a preview of the card component.
  </p>
  <div className="mt-4">
    <Button size="sm">Action</Button>
  </div>
</Card>`}
                    {activeTab === "input" &&
                      `<Input placeholder="Default input" />
<Input placeholder="Large input" size="lg" />
<Input placeholder="Small input" size="sm" />`}
                  </code>
                </pre>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
