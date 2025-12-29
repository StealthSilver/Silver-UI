"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ThemedCard } from "./ThemedCard";

export function ThemedCardPreview() {
  const params = useParams();
  const theme = params.theme as string;

  return <ThemedCard theme={theme} />;
}
