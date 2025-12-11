"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ThemedInput } from "./input-themed";

export function ThemedInputPreview() {
  const params = useParams();
  const theme = params.theme as
    | "minimalist"
    | "brutalist"
    | "maximalist"
    | "neumorphic"
    | "motion";

  return (
    <div className="flex justify-center">
      <ThemedInput theme={theme} />
    </div>
  );
}
