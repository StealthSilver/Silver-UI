"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ThemedSwitch } from "./ThemedSwitch";

export function ThemedSwitchPreview() {
  const params = useParams();
  const theme = params.theme as string;

  return <ThemedSwitch theme={theme} />;
}
