"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { ComponentDocumentation } from "./ComponentDocumentation";
import { componentData } from "../../lib/component-data";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState("button");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar
          selectedComponent={selectedComponent}
          onComponentSelect={setSelectedComponent}
        />
        <main className="flex-1 lg:pl-80">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ComponentDocumentation
              component={componentData[selectedComponent]}
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
