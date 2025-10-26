"use client";

import { motion } from "framer-motion";
import { Search, Package } from "lucide-react";
import { useState } from "react";
import { componentData } from "../../lib/component-data";

interface SidebarProps {
  selectedComponent: string;
  onComponentSelect: (componentId: string) => void;
}

export function Sidebar({
  selectedComponent,
  onComponentSelect,
}: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const components = Object.values(componentData);
  const filteredComponents = components.filter(
    (component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(components.map((c) => c.category)));

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-16 bottom-0 w-80 bg-white border-r border-gray-200 overflow-y-auto z-40"
    >
      <div className="p-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Components by Category */}
        {categories.map((category) => {
          const categoryComponents = filteredComponents.filter(
            (c) => c.category === category
          );

          if (categoryComponents.length === 0) return null;

          return (
            <div key={category} className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 flex items-center">
                <Package size={14} className="mr-2" />
                {category}
              </h3>
              <ul className="space-y-1">
                {categoryComponents.map((component) => (
                  <motion.li key={component.id} whileHover={{ x: 4 }}>
                    <button
                      onClick={() => onComponentSelect(component.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedComponent === component.id
                          ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-medium">{component.name}</div>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {component.description}
                      </div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          );
        })}

        {filteredComponents.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Package size={32} className="mx-auto mb-2 opacity-50" />
            <p>No components found</p>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
