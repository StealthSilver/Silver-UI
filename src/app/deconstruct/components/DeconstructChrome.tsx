"use client";

import type { ReactNode } from "react";
import { DeconstructSubheader } from "./DeconstructSubheader";

export function DeconstructChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-hidden">
      <DeconstructSubheader />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
