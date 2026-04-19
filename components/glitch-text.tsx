"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Lightweight RGB split on hover for tech keywords */
export function GlitchText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block cursor-default font-medium text-foreground",
        "transition-transform [text-shadow:1px_0_0_rgba(255,0,128,0.35),-1px_0_0_rgba(0,255,255,0.35)]",
        "hover:[text-shadow:2px_0_0_rgba(255,0,128,0.55),-2px_0_0_rgba(0,255,255,0.55)]",
        className
      )}
    >
      {children}
    </span>
  );
}
