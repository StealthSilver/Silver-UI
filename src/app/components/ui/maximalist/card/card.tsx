"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Zap } from "lucide-react";

export interface MaximalistCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const MaximalistCard: React.FC<MaximalistCardProps> = ({
  className,
  hoverable = false,
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
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
              Experience the full spectrum of visual expression. Rich textures,
              vibrant gradients, and bold decorative elements combine to create
              an unforgettable impression.
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
};

export function MaximalistCardPreview() {
  return (
    <div className="flex justify-center">
      <MaximalistCard />
    </div>
  );
}
