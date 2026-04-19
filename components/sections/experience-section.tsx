import { BriefcaseIcon } from "lucide-react";
import { SectionFooter } from "@/components/section-footer";
import { experience } from "@/content/resume";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Experience</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        You need experience to get the job—and the job is what sharpens the craft.
      </p>

      <div className="relative mt-10 max-w-3xl pl-6">
        <div className="absolute bottom-2 left-[11px] top-2 w-px bg-border dark:bg-white/10" aria-hidden />

        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.id} className="relative">
              <div className="absolute -left-6 top-1 flex size-6 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/15">
                <BriefcaseIcon className="size-3.5 text-sky-300" />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.title} <span className="text-muted-foreground">•</span> {job.company}
                </h3>
                {job.badge ? (
                  <span className="rounded-md bg-sky-500/15 px-2 py-0.5 text-xs font-semibold text-sky-800 dark:bg-sky-500/20 dark:text-sky-200">
                    {job.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.range} <span className="text-muted-foreground/80">•</span> {job.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <SectionFooter currentPath="/experience" />
    </section>
  );
}
