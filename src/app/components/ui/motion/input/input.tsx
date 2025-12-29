"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Mail, AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export const MotionInput: React.FC<InputProps> = ({
  className,
  type = "text",
  ...props
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  const validateLocalEmail = (val: string) => {
    if (!val) {
      setEmailValid(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(val));
  };

  return (
    <div className="max-w-md space-y-8">
      <div className="relative">
        <motion.label
          className="absolute left-4 text-gray-500 pointer-events-none"
          initial={false}
          animate={{
            top: focused || value ? "-8px" : "16px",
            fontSize: focused || value ? "12px" : "16px",
            color: focused ? "#3b82f6" : "#6b7280",
            fontWeight: focused || value ? "500" : "400",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Enter your search query
        </motion.label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full px-4 py-4 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: "0%", left: "50%" }}
          animate={{
            width: focused ? "100%" : "0%",
            left: focused ? "0%" : "50%",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: focused ? 1 : 0, scale: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Search className="w-5 h-5 text-blue-500" />
        </motion.div>
      </div>

      <div className="relative">
        <motion.label
          className="absolute left-4 text-gray-500 pointer-events-none"
          initial={false}
          animate={{
            top: email ? "-8px" : "16px",
            fontSize: email ? "12px" : "16px",
            color:
              emailValid === true
                ? "#10b981"
                : emailValid === false
                ? "#ef4444"
                : "#6b7280",
            fontWeight: email ? "500" : "400",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Email address
        </motion.label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateLocalEmail(e.target.value);
          }}
          className="w-full px-4 py-4 border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <motion.div
          className={`absolute bottom-0 left-0 h-[2px] ${
            emailValid === true
              ? "bg-green-500"
              : emailValid === false
              ? "bg-red-500"
              : "bg-gray-300"
          }`}
          animate={{ width: email ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {email && (
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            {emailValid === true ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : emailValid === false ? (
              <AlertCircle className="w-5 h-5 text-red-500" />
            ) : null}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export function MotionInputPreview() {
  return (
    <div className="flex justify-center">
      <MotionInput />
    </div>
  );
}
