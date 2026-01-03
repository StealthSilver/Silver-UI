"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-10 rounded-2xl border border-neutral-700/50 max-w-md shadow-lg hover:shadow-2xl hover:border-neutral-600/80 transition-all duration-500 overflow-hidden relative group",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 scale-0 group-hover:scale-150" />

      <motion.div
        className="space-y-6 relative z-10"
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-start justify-between"
        >
          <div>
            <motion.div
              className="text-blue-400 text-xs mb-3 font-semibold uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Interactive Experience
            </motion.div>
            <h3 className="text-white mb-3 text-2xl font-bold">
              Motion & Delight
            </h3>
            <motion.p
              className="text-gray-300 leading-relaxed text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Thoughtful animations and smooth physics create interfaces that
              feel alive, responsive, and joyful to interact with.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          {[
            {
              icon: TrendingUp,
              label: "45%",
              sublabel: "Growth",
              color: "blue",
            },
            {
              icon: Users,
              label: "8.2k",
              sublabel: "Active",
              color: "purple",
            },
            { icon: Zap, label: "99%", sublabel: "Speed", color: "pink" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex-1 p-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-center hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <stat.icon
                className={`w-4 h-4 mx-auto mb-2 ${
                  stat.color === "blue"
                    ? "text-blue-400"
                    : stat.color === "purple"
                    ? "text-purple-400"
                    : "text-pink-400"
                }`}
              />
              <div className="text-white font-semibold text-sm">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="w-full py-3 bg-blue-500 text-white rounded-xl relative overflow-hidden group shadow-lg font-medium hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 0.6 }}
          />

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 scale-0 group-hover:scale-150" />

          <span className="relative flex items-center justify-center gap-2">
            Discover More
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export function MotionCardPreview() {
  return (
    <div className="flex justify-center">
      <MotionCard />
    </div>
  );
}
