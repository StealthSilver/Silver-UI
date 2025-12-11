"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Mail, User, AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export interface ThemedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export function ThemedInput({
  className,
  type = "text",
  theme = "minimalist",
  icon,
  validation,
  label,
  ...props
}: ThemedInputProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateEmail = (val: string) => {
    if (!val) {
      setIsValid(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(val));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    if (validation && type === "email") {
      validateEmail(val);
    }
    props.onChange?.(e);
  };

  if (theme === "minimalist") {
    return (
      <div className="space-y-6 max-w-md">
        <div className="relative group">
          {icon || (
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-900" />
          )}
          <input
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={props.placeholder || "Full name"}
            className={cn(
              "w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300 pl-12",
              className
            )}
            {...props}
          />
        </div>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-900" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-all duration-300 pl-12"
          />
        </div>
      </div>
    );
  }

  if (theme === "brutalist") {
    return (
      <div className="space-y-6 max-w-md">
        <div className="relative">
          <div className="absolute -top-2 -left-2 bg-cyan-400 text-black px-2 py-1 border-2 border-black text-xs uppercase tracking-wide font-bold z-10">
            INPUT 01
          </div>
          <input
            type="text"
            placeholder="TYPE HERE..."
            className="w-full px-6 py-4 border-4 border-black bg-white text-black placeholder-black/40 focus:outline-none focus:border-[6px] focus:bg-yellow-50 transition-all duration-100 uppercase tracking-wider font-bold"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Search className="w-6 h-6 text-black" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-2 -left-2 bg-red-500 text-black px-2 py-1 border-2 border-black text-xs uppercase tracking-wide font-bold z-10">
            EMAIL
          </div>
          <input
            type="text"
            placeholder="YOUR@EMAIL.COM"
            className="w-full px-6 py-4 border-4 border-black bg-white text-black placeholder-black/40 focus:outline-none focus:border-[6px] focus:bg-yellow-50 transition-all duration-100 uppercase tracking-wider font-bold"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Mail className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    );
  }

  if (theme === "maximalist") {
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
          @keyframes gradient-placeholder {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
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
          .gradient-placeholder::placeholder {
            background: linear-gradient(90deg, #9333ea, #ec4899, #f97316);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient-placeholder 3s ease infinite;
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
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search with gradient magic..."
            className="w-full px-6 py-4 border-2 border-transparent bg-white rounded-2xl text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.05)] gradient-placeholder relative z-10 pl-14"
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
            className="w-full px-6 py-4 border-2 border-transparent bg-white rounded-2xl text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.05)] gradient-placeholder relative z-10 pl-14 pr-12"
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
  }

  if (theme === "neumorphic") {
    return (
      <div className="space-y-6 max-w-md">
        <div className="relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 transition-colors duration-300 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Soft search input..."
            className="w-full px-6 py-4 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-3xl shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.12),inset_-8px_-8px_16px_rgba(255,255,255,0.8),0_0_0_4px_rgba(147,197,253,0.3)] transition-all duration-300 pl-14"
          />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Mail className="w-5 h-5 transition-colors duration-300 text-gray-500" />
          </div>
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full px-6 py-4 bg-gray-200 text-gray-700 placeholder-gray-500 rounded-3xl shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.12),inset_-8px_-8px_16px_rgba(255,255,255,0.8),0_0_0_4px_rgba(147,197,253,0.3)] transition-all duration-300 pl-14"
          />
        </div>
      </div>
    );
  }

  if (theme === "motion") {
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
            onChange={handleChange}
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
  }

  // Default fallback
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className={cn(
        "flex h-11 w-full rounded-xl border-2 border-neutral-200/60 bg-white px-4 py-3 text-base shadow-sm transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
