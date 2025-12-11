"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Loader } from "./loader";

export function ThemedLoaderPreview() {
  const params = useParams();
  const theme = params.theme as
    | "minimalist"
    | "brutalist"
    | "maximalist"
    | "neumorphic"
    | "motion";

  return (
    <div className="flex justify-center">
      <Loader theme={theme} />
    </div>
  );
}
