"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ThemedLoader } from "./ThemedLoader";

export function ThemedLoaderPreview() {
  const params = useParams();
  const theme = params.theme as string;

  return <ThemedLoader theme={theme} />;
}
