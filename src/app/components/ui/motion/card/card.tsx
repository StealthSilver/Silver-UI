"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const MotionCard: React.FC<CardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={cn(
        "bg-white p-10 rounded-3xl border border-gray-200 max-w-md shadow-lg hover:shadow-2xl transition-all duration-500",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="space-y-8"
        animate={{ y: isHovered ? -6 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-start justify-between"
        >
          <div>
            <motion.div
              className="text-blue-500 text-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Interactive Experience
            </motion.div>
            <h3 className="text-gray-900 mb-3 text-2xl font-semibold">
              Motion & Delight
            </h3>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Thoughtful animations and spring physics create interfaces that
              feel alive, responsive, and joyful to interact with.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
              className="flex-1 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl text-center"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <stat.icon
                className={`w-5 h-5 mx-auto mb-2 text-${stat.color}-500`}
              />
              <div className="text-gray-900 font-semibold">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="w-full py-4 bg-blue-500 text-white rounded-2xl relative overflow-hidden group shadow-lg font-medium"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 0.7 }}
          />
          <span className="relative flex items-center justify-center gap-2">
            Discover More
            <motion.span
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <ArrowRight className="w-5 h-5" />
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
