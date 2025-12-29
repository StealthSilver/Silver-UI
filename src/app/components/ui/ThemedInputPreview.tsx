"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ThemedInput } from "./ThemedInput";

export function ThemedInputPreview() {
  const params = useParams();
  const theme = params.theme as string;

  return <ThemedInput theme={theme} />;
}
