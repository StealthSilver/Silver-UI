"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { User, Mail } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  validation?: boolean;
  label?: string;
}

export const MinimalistInput: React.FC<InputProps> = ({
  className,
  type = "text",
  icon,
  validation,
  label,
  ...props
}) => {
  const [value, setValue] = useState("");
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
};

export function MinimalistInputPreview() {
  return (
    <div className="flex justify-center">
      <MinimalistInput />
    </div>
  );
}
