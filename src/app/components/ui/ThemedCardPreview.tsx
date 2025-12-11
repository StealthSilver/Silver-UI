"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Card } from "./card";

export function ThemedCardPreview() {
  const params = useParams();
  const theme = params.theme as
    | "minimalist"
    | "brutalist"
    | "maximalist"
    | "neumorphic"
    | "motion";

  return (
    <div className="flex justify-center">
      <Card theme={theme} />
    </div>
  );
}
