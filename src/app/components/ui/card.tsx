"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  theme?: "minimalist" | "brutalist" | "maximalist" | "neumorphic" | "motion";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, hoverable = false, theme = "minimalist", children, ...props },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    if (theme === "minimalist") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-white p-10 max-w-md transition-all duration-300 hover:shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          <div className="space-y-8">
            <div>
              <div className="text-gray-400 text-sm mb-3">Featured Project</div>
              <h3 className="text-gray-900 mb-4 tracking-tight text-2xl font-medium">
                Minimalist Design Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Less is more. Clean lines, ample whitespace, and purposeful
                typography create a serene and focused experience.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>5 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>2.4k</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-gray-900 hover:gap-3 transition-all duration-300">
                  <span className="text-sm">Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (theme === "brutalist") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-white p-8 border-6 border-black max-w-md relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-100",
            className
          )}
          {...props}
        >
          <div className="absolute -top-4 -left-4 bg-red-500 text-black px-4 py-2 border-3 border-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            CARD
          </div>
          <div className="absolute -bottom-4 -right-4 bg-lime-400 text-black px-4 py-2 border-3 border-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            2024
          </div>

          <div className="space-y-6 mt-4">
            <div className="border-l-6 border-black pl-6 bg-cyan-400 -ml-8 pl-8 py-4 -mr-8 pr-8">
              <h3 className="text-black uppercase tracking-wide mb-2 text-xl font-black">
                BRUTALIST MANIFESTO
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-black/90 uppercase tracking-wide text-sm font-bold">
                RAW. BOLD. UNCOMPROMISING. NO DECORATION. ONLY STRUCTURE.
              </p>

              <div className="flex gap-2 mt-6">
                <div className="flex-1 h-16 bg-black border-2 border-black" />
                <div className="flex-1 h-16 bg-cyan-400 border-2 border-black" />
                <div className="flex-1 h-16 bg-red-500 border-2 border-black" />
              </div>
            </div>

            <button className="w-full py-4 bg-black text-white border-3 border-black hover:bg-white hover:text-black transition-all duration-75 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] font-black">
              TAKE ACTION →
            </button>
          </div>
        </div>
      );
    }

    if (theme === "maximalist") {
      return (
        <div
          ref={ref}
          className={cn(
            "relative p-[4px] rounded-3xl max-w-md shadow-[0_20px_60px_rgba(147,51,234,0.4),0_0_80px_rgba(236,72,153,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_25px_70px_rgba(147,51,234,0.6),0_0_100px_rgba(236,72,153,0.5)] transition-all duration-500",
            className
          )}
          {...props}
        >
          <style jsx>{`
            @keyframes gradient-rotate {
              0%,
              100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            @keyframes float-sparkle {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
              }
              50% {
                transform: translateY(-10px) rotate(180deg);
                opacity: 0.6;
              }
            }
          `}</style>
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl"
            style={{
              animation: "gradient-rotate 6s ease infinite",
              backgroundSize: "200% 200%",
            }}
          />

          <div className="relative bg-white rounded-[26px] p-8 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(147,51,234,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(249,115,22,0.3) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full text-xs shadow-lg">
                      Premium
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full text-xs shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <Sparkles
                    className="w-8 h-8 text-purple-600"
                    style={{
                      animation: "float-sparkle 3s ease-in-out infinite",
                    }}
                  />
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-30 animate-pulse" />
                </div>
              </div>

              <div>
                <h3 className="text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-3 font-bold">
                  Maximalist Dreams
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Experience the full spectrum of visual expression. Rich
                  textures, vibrant gradients, and bold decorative elements
                  combine to create an unforgettable impression.
                </p>
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800 rounded-2xl text-sm border-2 border-purple-300 shadow-sm">
                  ✨ Vibrant
                </span>
                <span className="px-4 py-2 bg-gradient-to-br from-pink-100 to-pink-200 text-pink-800 rounded-2xl text-sm border-2 border-pink-300 shadow-sm">
                  🎨 Expressive
                </span>
                <span className="px-4 py-2 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-800 rounded-2xl text-sm border-2 border-orange-300 shadow-sm">
                  🚀 Bold
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200">
                  <div className="text-2xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent font-bold">
                    24k
                  </div>
                  <div className="text-xs text-purple-700 mt-1">Viewers</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border-2 border-pink-200">
                  <div className="text-2xl bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent font-bold">
                    98%
                  </div>
                  <div className="text-xs text-pink-700 mt-1">Rating</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200">
                  <div className="text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-bold">
                    5.2k
                  </div>
                  <div className="text-xs text-orange-700 mt-1">Shares</div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl shadow-[0_8px_24px_rgba(147,51,234,0.4)] hover:shadow-[0_12px_32px_rgba(147,51,234,0.6)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  <Zap className="w-5 h-5" />
                  Discover the Magic
                  <Sparkles className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (theme === "neumorphic") {
      return (
        <div
          ref={ref}
          className={cn(
            "bg-gray-200 p-10 rounded-[32px] max-w-md shadow-[16px_16px_32px_rgba(0,0,0,0.12),-16px_-16px_32px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.12),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all duration-500",
            className
          )}
          {...props}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gray-200 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-gray-600" />
              </div>
              <div>
                <h3 className="text-gray-700 mb-1 text-2xl font-semibold">
                  Soft UI Design
                </h3>
                <p className="text-gray-500 text-sm">Tactile & Organic</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Neumorphic design creates depth through subtle shadows and
              highlights, mimicking physical materials with a soft, touchable
              aesthetic.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Completion</span>
                <span>75%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-center">
                <TrendingUp className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <div className="text-gray-700 font-semibold">3.2k</div>
                <div className="text-xs text-gray-500 mt-1">Growth</div>
              </div>
              <div className="p-5 bg-gray-200 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-center">
                <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <div className="text-gray-700 font-semibold">12k</div>
                <div className="text-xs text-gray-500 mt-1">Members</div>
              </div>
            </div>

            <button className="w-full py-4 bg-gray-200 text-gray-700 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] active:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all duration-300 font-medium">
              Explore Softly
            </button>
          </div>
        </div>
      );
    }

    if (theme === "motion") {
      return (
        <motion.div
          ref={ref}
          className={cn(
            "bg-white p-10 rounded-3xl border border-gray-200 max-w-md shadow-lg hover:shadow-2xl transition-all duration-500",
            className
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
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
                  Thoughtful animations and spring physics create interfaces
                  that feel alive, responsive, and joyful to interact with.
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
                  <div className="text-gray-900 font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.sublabel}
                  </div>
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
    }

    // Default minimalist fallback
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-white via-neutral-50/30 to-white dark:from-neutral-900 dark:via-neutral-900/50 dark:to-neutral-800/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 text-neutral-900 dark:text-white relative overflow-hidden group",
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--primary)]/0 before:to-[var(--primary)]/0 before:opacity-0 before:transition-all before:duration-300",
          hoverable &&
            "hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--primary)]/40 hover:-translate-y-1 cursor-pointer hover:before:from-[var(--primary)]/5 hover:before:to-transparent hover:before:opacity-100",
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
