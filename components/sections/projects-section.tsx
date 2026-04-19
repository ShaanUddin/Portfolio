import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { SectionFooter } from "@/components/section-footer";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Projects</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        A lot of ideas—some shipped, some still evolving. Each card opens a deeper case study.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition hover:border-violet-500/50 hover:bg-muted/60 dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-none dark:hover:border-violet-500/40 dark:hover:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-violet-700 dark:group-hover:text-violet-200">
                {p.title}
              </h3>
              <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-violet-600 dark:group-hover:text-violet-300" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.cardSummary}</p>
            <p className="mt-5 text-sm font-medium text-violet-700 dark:text-violet-300">Learn more…</p>
          </Link>
        ))}
      </div>

      <SectionFooter currentPath="/projects" />
    </section>
  );
}
