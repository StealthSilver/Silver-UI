"use client";

import React from "react";
import { MinimalistButtonPreview } from "./minimalist/button";
import { BrutalistButtonPreview } from "./brutalist/button";
import { MaximalistButtonPreview } from "./maximalist/button";
import { NeumorphicButtonPreview } from "./neumorphic/button";
import { MotionButtonPreview } from "./motion/button";

interface ThemedButtonProps {
  theme: string;
}

export function ThemedButton({ theme }: ThemedButtonProps) {
  switch (theme) {
    case "minimalist":
      return <MinimalistButtonPreview />;
    case "brutalist":
      return <BrutalistButtonPreview />;
    case "maximalist":
      return <MaximalistButtonPreview />;
    case "neumorphic":
      return <NeumorphicButtonPreview />;
    case "motion":
      return <MotionButtonPreview />;
    default:
      return <MinimalistButtonPreview />;
  }
}
