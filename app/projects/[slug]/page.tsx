import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getProjectBySlug, projects } from "@/content/projects";
import { PortfolioShell } from "@/components/portfolio-shell";
import { SkillIcon } from "@/lib/skill-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Shaan Uddin`,
    description: project.cardSummary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PortfolioShell mainClassName="px-2 pt-2 sm:px-4 sm:pt-3 lg:px-4">
      <article className="w-full py-2">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "gap-2 text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeftIcon className="size-4" />
            Back to projects
          </Link>
          <span className="font-mono text-xs text-muted-foreground">{project.slug}</span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{project.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">{project.overview}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              <SkillIcon label={t} />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Features</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Challenges</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Learnings</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {project.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Links</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Want details or a walkthrough? Reach out via the{" "}
              <Link
                href="/contact"
                className="text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
              >
                contact
              </Link>{" "}
              section.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-xl")}
                >
                  Live
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ) : (
                <span
                  className={cn(
                    buttonVariants({ size: "lg", variant: "secondary" }),
                    "cursor-default gap-2 rounded-xl opacity-90"
                  )}
                  title="No public deployment yet"
                >
                  In development
                </span>
              )}
              {project.repoUrl && project.repoUrl !== "#" ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "gap-2 rounded-xl border-border bg-transparent"
                  )}
                >
                  GitHub
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </PortfolioShell>
  );
}
