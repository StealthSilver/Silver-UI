"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Switch } from "./switch";

export function ThemedSwitchPreview() {
  const params = useParams();
  const theme = params.theme as
    | "minimalist"
    | "brutalist"
    | "maximalist"
    | "neumorphic"
    | "motion";

  return (
    <div className="flex justify-center">
      <Switch theme={theme} />
    </div>
  );
}
