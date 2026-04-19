import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from "lucide-react";
import { getAdjacentSectionsByPath, SECTIONS } from "@/lib/sections";

export function SectionFooter({ currentPath }: { currentPath: string }) {
  const { prev, next } = getAdjacentSectionsByPath(currentPath);
  const idx = SECTIONS.findIndex((s) => s.path === currentPath);
  const isLastSection = idx === SECTIONS.length - 1;

  return (
    <div className="mt-16 flex items-center justify-between border-t border-border pt-8 text-sm text-muted-foreground">
      <div>
        {prev ? (
          <Link href={prev.path} className="inline-flex items-center gap-1 hover:text-foreground">
            <ChevronLeftIcon className="size-4" />
            {prev.label}
          </Link>
        ) : (
          <span />
        )}
      </div>
      <div>
        {next ? (
          <Link href={next.path} className="inline-flex items-center gap-1 hover:text-foreground">
            {next.label}
            <ChevronRightIcon className="size-4" />
          </Link>
        ) : isLastSection ? (
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium text-violet-700 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200"
          >
            <HomeIcon className="size-4" aria-hidden />
            Introduction
            <span className="font-normal text-muted-foreground">(home)</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

