"use client";

import React from "react";
import { MinimalistInputPreview } from "./minimalist/input/input";
import { BrutalistInputPreview } from "./brutalist/input/input";
import { MaximalistInputPreview } from "./maximalist/input/input";
import { NeumorphicInputPreview } from "./neumorphic/input/input";
import { MotionInputPreview } from "./motion/input/input";

interface ThemedInputProps {
  theme: string;
}

export function ThemedInput({ theme }: ThemedInputProps) {
  switch (theme) {
    case "minimalist":
      return <MinimalistInputPreview />;
    case "brutalist":
      return <BrutalistInputPreview />;
    case "maximalist":
      return <MaximalistInputPreview />;
    case "neumorphic":
      return <NeumorphicInputPreview />;
    case "motion":
      return <MotionInputPreview />;
    default:
      return <MinimalistInputPreview />;
  }
}
