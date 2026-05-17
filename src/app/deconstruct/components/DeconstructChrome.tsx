"use client";

import type { ReactNode } from "react";
import { DeconstructSubheader } from "./DeconstructSubheader";

export function DeconstructChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <DeconstructSubheader />

      <div className="flex w-full flex-col">{children}</div>
    </div>
  );
}
