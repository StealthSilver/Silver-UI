"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Mail, AlertCircle, CheckCircle } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export const MaximalistInput: React.FC<InputProps> = ({
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

  const animatedBorderStyle = focused
    ? {
        background:
          "linear-gradient(90deg, #9333ea, #ec4899, #f97316, #3b82f6, #9333ea)",
        backgroundSize: "300% 100%",
        animation: "gradient-shift 4s linear infinite",
      }
    : {
        background: "linear-gradient(90deg, #e5e7eb, #d1d5db)",
      };

  const emailBorderStyle = {
    background:
      emailValid === true
        ? "linear-gradient(90deg, #10b981, #059669)"
        : emailValid === false
        ? "linear-gradient(90deg, #ef4444, #dc2626)"
        : "linear-gradient(90deg, #e5e7eb, #d1d5db)",
  };

  return (
    <div className="max-w-md space-y-6">
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
        @keyframes sparkle-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(180deg);
          }
        }
      `}</style>

      <div className="relative">
        <div
          className="absolute inset-0 rounded-2xl p-[3px] transition-all duration-300"
          style={animatedBorderStyle}
        >
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>
        <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
          <Search
            className={`w-5 h-5 transition-all duration-300 ${
              focused ? "text-purple-600" : "text-gray-400"
            }`}
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search with gradient magic..."
          className="w-full px-6 py-4 border-2 border-transparent bg-white rounded-2xl text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.05)] relative z-10 pl-14"
        />
        {focused && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10">
            <div
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-pulse"
              style={{ animation: "sparkle-float 2s ease-in-out infinite" }}
            />
          </div>
        )}
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 rounded-2xl p-[3px] transition-all duration-300"
          style={emailBorderStyle}
        >
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>
        <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
          <Mail
            className={`w-5 h-5 transition-all duration-300 ${
              emailValid === true
                ? "text-green-600"
                : emailValid === false
                ? "text-red-600"
                : "text-gray-400"
            }`}
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateLocalEmail(e.target.value);
          }}
          placeholder="Enter your magical email..."
          className="w-full px-6 py-4 border-2 border-transparent bg-white rounded-2xl text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.05)] relative z-10 pl-14 pr-12"
        />
        {emailValid !== null && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10">
            {emailValid ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export function MaximalistInputPreview() {
  return (
    <div className="flex justify-center">
      <MaximalistInput />
    </div>
  );
}
