"use client";

import { motion } from "framer-motion";
import { Copy, Check, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ComponentInfo } from "../../lib/component-data";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";

interface ComponentDocumentationProps {
  component: ComponentInfo;
}

export function ComponentDocumentation({
  component,
}: ComponentDocumentationProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);

  const copyToClipboard = async (text: string, type: "code" | "usage") => {
    await navigator.clipboard.writeText(text);
    if (type === "code") {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedUsage(true);
      setTimeout(() => setCopiedUsage(false), 2000);
    }
  };

  if (!component) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Component not found
        </h1>
        <p className="text-gray-600">
          Please select a component from the sidebar.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          {component.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          {component.description}
        </motion.p>
      </div>

      {/* Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preview</h2>
        <Card className="p-8 bg-gray-50">
          <div className="flex items-center justify-center min-h-32">
            {component.id === "button" && (
              <div className="flex gap-4">
                <Button>Default Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            )}
            {component.id === "card" && (
              <Card className="w-80 bg-white">
                <h3 className="text-lg font-semibold">Card Title</h3>
                <p className="text-gray-600 mt-2">
                  This is a card component with some example content.
                </p>
              </Card>
            )}
            {component.id === "input" && (
              <div className="space-y-4 w-80">
                <Input placeholder="Default input" />
                <Input placeholder="Large input" size="lg" />
                <Input placeholder="Error state" variant="error" />
              </div>
            )}
          </div>
        </Card>
      </motion.section>

      {/* Installation Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Installation
        </h2>
        <Card className="p-6">
          <ol className="list-decimal list-inside space-y-4">
            {component.installationSteps.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </Card>
      </motion.section>

      {/* Usage Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Usage</h2>
        <Card className="relative">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              Basic Usage
            </span>
            <button
              onClick={() => copyToClipboard(component.usage, "usage")}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {copiedUsage ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedUsage ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          <pre className="p-4 bg-gray-50 overflow-x-auto">
            <code className="text-sm text-gray-800">{component.usage}</code>
          </pre>
        </Card>
      </motion.section>

      {/* Full Code Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Example Code
        </h2>
        <Card className="relative">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              Complete Example
            </span>
            <button
              onClick={() => copyToClipboard(component.code, "code")}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
            >
              {copiedCode ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedCode ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          <pre className="p-4 bg-gray-50 overflow-x-auto">
            <code className="text-sm text-gray-800">{component.code}</code>
          </pre>
        </Card>
      </motion.section>

      {/* Props Section */}
      {component.props && component.props.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Props</h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">
                      Name
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">
                      Type
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">
                      Default
                    </th>
                    <th className="text-left p-4 text-sm font-medium text-gray-700">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {component.props.map((prop, index) => (
                    <tr
                      key={prop.name}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-4 text-sm font-mono text-gray-900">
                        {prop.name}
                      </td>
                      <td className="p-4 text-sm font-mono text-blue-600">
                        {prop.type}
                      </td>
                      <td className="p-4 text-sm font-mono text-gray-600">
                        {prop.default || "-"}
                      </td>
                      <td className="p-4 text-sm text-gray-700">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.section>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-4"
      >
        <Button
          onClick={() => copyToClipboard(component.code, "code")}
          className="flex items-center space-x-2"
        >
          <Download size={16} />
          <span>Copy Component</span>
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open("https://github.com", "_blank")}
          className="flex items-center space-x-2"
        >
          <ExternalLink size={16} />
          <span>View on GitHub</span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
