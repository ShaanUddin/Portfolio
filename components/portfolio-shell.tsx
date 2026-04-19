"use client";

import * as React from "react";
import { TopBar } from "@/components/layout/top-bar";
import { SectionNav } from "@/components/layout/section-nav";
import { CommandPalette } from "@/components/command-palette";
import { cn } from "@/lib/utils";

export function PortfolioShell({
  children,
  mainClassName,
}: {
  children: React.ReactNode;
  mainClassName?: string;
}) {
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />

      <div className="mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col lg:flex-row">
        <aside className="sticky top-0 z-30 hidden h-dvh w-64 shrink-0 flex-col border-r border-dotted border-border bg-background px-4 py-6 lg:flex">
          <SectionNav />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar onOpenCommand={() => setPaletteOpen(true)} />
          <main
            className={cn("min-w-0 flex-1 px-4 pb-24 pt-4 sm:px-8 lg:px-12", mainClassName)}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

