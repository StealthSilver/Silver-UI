"use client";

import React from "react";
import { MinimalistLoaderPreview } from "./minimalist/loader/loader";
import { BrutalistLoaderPreview } from "./brutalist/loader/loader";
import { MaximalistLoaderPreview } from "./maximalist/loader/loader";
import { NeumorphicLoaderPreview } from "./neumorphic/loader/loader";
import { MotionLoaderPreview } from "./motion/loader/loader";

interface ThemedLoaderProps {
  theme: string;
}

export function ThemedLoader({ theme }: ThemedLoaderProps) {
  switch (theme) {
    case "minimalist":
      return <MinimalistLoaderPreview />;
    case "brutalist":
      return <BrutalistLoaderPreview />;
    case "maximalist":
      return <MaximalistLoaderPreview />;
    case "neumorphic":
      return <NeumorphicLoaderPreview />;
    case "motion":
      return <MotionLoaderPreview />;
    default:
      return <MinimalistLoaderPreview />;
  }
}
