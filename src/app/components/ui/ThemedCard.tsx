"use client";

import React from "react";
import { MinimalistCardPreview } from "./minimalist/card/card";
import { BrutalistCardPreview } from "./brutalist/card/card";
import { MaximalistCardPreview } from "./maximalist/card/card";
import { NeumorphicCardPreview } from "./neumorphic/card/card";
import { MotionCardPreview } from "./motion/card/card";

interface ThemedCardProps {
  theme: string;
}

export function ThemedCard({ theme }: ThemedCardProps) {
  switch (theme) {
    case "minimalist":
      return <MinimalistCardPreview />;
    case "brutalist":
      return <BrutalistCardPreview />;
    case "maximalist":
      return <MaximalistCardPreview />;
    case "neumorphic":
      return <NeumorphicCardPreview />;
    case "motion":
      return <MotionCardPreview />;
    default:
      return <MinimalistCardPreview />;
  }
}
