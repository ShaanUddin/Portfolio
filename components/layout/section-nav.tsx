"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTIONS } from "@/lib/sections";
import { cn } from "@/lib/utils";

/** Sidebar: only route links (no hash/scroll navigation). */
export function SectionNav({ className }: { className?: string } = {}) {
  const pathname = usePathname();

  return (
    <div className={cn("flex h-full flex-col gap-6", className)}>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Sections</p>
        <nav className="flex flex-col gap-1" aria-label="Page sections">
          {SECTIONS.map((s) => {
            const isActive = pathname === s.path;
            return (
              <Link
                key={s.id}
                href={s.path}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-left text-sm transition",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                {s.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

