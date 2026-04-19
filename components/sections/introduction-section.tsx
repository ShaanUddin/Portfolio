import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TerminalAvatar } from "@/components/terminal-avatar";
import { SectionFooter } from "@/components/section-footer";
import { site } from "@/content/site";

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-start">
        <TerminalAvatar />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-secondary-foreground dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
              {site.roleId}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/30 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {site.status}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{site.name}</h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl">{site.tagline}</p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            I build full-stack web products with <span className="font-medium text-foreground">React</span>,{" "}
            <span className="font-medium text-foreground">Node.js</span>, and pragmatic system design—shipping features that are
            observable, measurable, and maintainable. Currently based in {site.location}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-xl px-5 text-base")}
            >
              Get Resume
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "gap-2 rounded-xl border-border bg-transparent px-5 text-base"
              )}
            >
              <MailIcon className="size-4" />
              Send Mail
            </a>
          </div>
        </div>
      </div>

      <SectionFooter currentPath="/" />
    </section>
  );
}
