"use client";

import React from "react";
import { MinimalistSwitchPreview } from "./minimalist/switch/switch";
import { BrutalistSwitchPreview } from "./brutalist/switch/switch";
import { MaximalistSwitchPreview } from "./maximalist/switch/switch";
import { NeumorphicSwitchPreview } from "./neumorphic/switch/switch";
import { MotionSwitchPreview } from "./motion/switch/switch";

interface ThemedSwitchProps {
  theme: string;
}

export function ThemedSwitch({ theme }: ThemedSwitchProps) {
  switch (theme) {
    case "minimalist":
      return <MinimalistSwitchPreview />;
    case "brutalist":
      return <BrutalistSwitchPreview />;
    case "maximalist":
      return <MaximalistSwitchPreview />;
    case "neumorphic":
      return <NeumorphicSwitchPreview />;
    case "motion":
      return <MotionSwitchPreview />;
    default:
      return <MinimalistSwitchPreview />;
  }
}
