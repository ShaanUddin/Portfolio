"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRightIcon, PanelLeftIcon, SearchIcon, SunIcon, MoonIcon } from "lucide-react";
import { GitHubMark } from "@/components/icons/github-mark";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SectionNav } from "@/components/layout/section-nav";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/hooks/use-is-client";

function LiveClock() {
  const [now, setNow] = React.useState<Date | null>(null);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- live clock bootstrap
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning className="font-mono text-xs tabular-nums text-muted-foreground">
      {now ? now.toLocaleTimeString(undefined, { hour12: false }) : "--:--:--"}
    </span>
  );
}

function BrandAndLinks() {
  return (
    <>
      <Link
        href="/"
        className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-foreground"
      >
        <ArrowUpRightIcon className="size-3.5 opacity-70 transition group-hover:translate-x-px group-hover:-translate-y-px" />
        {site.brand}
      </Link>

      <nav
        className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground sm:gap-x-4"
        aria-label="Primary links"
      >
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          LinkedIn
          <ArrowUpRightIcon className="size-3.5 opacity-70" />
        </a>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          Resume
          <ArrowUpRightIcon className="size-3.5 opacity-70" />
        </a>
      </nav>
    </>
  );
}

export function TopBar({
  onOpenCommand,
}: {
  onOpenCommand: () => void;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useIsClient();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isDark = !mounted ? true : resolvedTheme !== "light";

  const toggleTheme = React.useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [setTheme, isDark]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-2 px-4 py-3 sm:gap-3 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open navigation"
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon-sm" }),
                "border border-border bg-secondary shrink-0"
              )}
            >
              <PanelLeftIcon className="size-4" />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 border-border bg-background p-0">
              <div className="h-full overflow-y-auto px-4 py-6">
                <SectionNav />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-6">
          <BrandAndLinks />
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenCommand}
            className={cn(
              "hidden w-full max-w-md items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-left text-sm text-muted-foreground sm:flex"
            )}
          >
            <SearchIcon className="size-4 opacity-70" />
            <span className="flex-1">Search sections…</span>
            <kbd className="hidden rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground md:inline">
              Ctrl+K
            </kbd>
          </button>

          <Button
            variant="secondary"
            size="icon-sm"
            className="border border-border sm:hidden"
            onClick={onOpenCommand}
            aria-label="Search"
          >
            <SearchIcon className="size-4" />
          </Button>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="hidden font-mono text-[10px] text-muted-foreground md:inline">{site.status}</span>
            <span className="hidden h-4 w-px bg-border md:inline" />
            <LiveClock />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon-sm" }),
              "border border-border"
            )}
          >
            {!mounted ? (
              <SunIcon className="size-4" />
            ) : isDark ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
          </button>

          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon-sm" }),
              "border border-border"
            )}
          >
            <GitHubMark className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border px-4 pb-3 sm:hidden">
        <button
          type="button"
          onClick={onOpenCommand}
          className="flex w-full items-center gap-2 rounded-full border border-border bg-secondary px-3 py-2 text-left text-sm text-muted-foreground"
        >
          <SearchIcon className="size-4 opacity-70" />
          <span className="flex-1">Search sections…</span>
          <kbd className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            Ctrl+K
          </kbd>
        </button>
      </div>
    </header>
  );
}

