import Link from "next/link";
import { HeartIcon, EyeIcon } from "lucide-react";
import { GitHubMark } from "@/components/icons/github-mark";
import { SectionFooter } from "@/components/section-footer";
import { statCards } from "@/content/stats";
import { site } from "@/content/site";
import { getGithubContributions } from "@/lib/github-contributions";

export async function StatsSection() {
  const gh = site.githubUsername;
  const githubContributions = await getGithubContributions(gh);
  const contributionValue =
    githubContributions.totalContributions !== null ? String(githubContributions.totalContributions) : "—";
  const allStatCards = [
    ...statCards,
    {
      id: "github-year",
      label: "GitHub activity",
      value: contributionValue,
      unit: "contributions",
      hint: "In the last year (auto-fetched from GitHub)",
    },
  ];

  return (
    <section id="stats" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Stats</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        A quick snapshot—numbers are directionally honest, not vanity.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-none">
          <div className="flex items-center gap-2 text-violet-700 dark:text-violet-300">
            <EyeIcon className="size-5" />
            <span className="text-sm font-medium">Portfolio focus</span>
          </div>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-violet-700 dark:text-violet-200">Ship</p>
          <p className="mt-1 text-sm text-muted-foreground">Iterate publicly, document clearly, keep scope tight.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:shadow-none">
          <div className="flex items-center gap-2 text-pink-700 dark:text-pink-300">
            <HeartIcon className="size-5" />
            <span className="text-sm font-medium">Principle</span>
          </div>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-pink-700 dark:text-pink-200">Users</p>
          <p className="mt-1 text-sm text-muted-foreground">If it doesn’t help someone, it’s not done.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allStatCards.map((s) => (
          <div key={s.id} className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">
              {s.value}
              <span className="ml-1 text-lg font-medium text-muted-foreground">{s.unit}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-6 dark:border-white/10 dark:bg-zinc-950/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-foreground">GitHub</p>
            <p className="text-sm text-muted-foreground">Public activity and repositories ({gh})</p>
          </div>
          <Link
            href={`https://github.com/${gh}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm text-foreground hover:border-violet-500/40"
          >
            <GitHubMark className="size-4" />
            Open profile
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Optional: set <code className="rounded bg-muted px-1">NEXT_PUBLIC_GITHUB_USERNAME</code> in production to match
          your handle if it differs from the default in code.
        </p>
      </div>

      <SectionFooter currentPath="/stats" />
    </section>
  );
}
