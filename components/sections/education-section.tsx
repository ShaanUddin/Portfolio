import { SectionFooter } from "@/components/section-footer";
import { certifications, education } from "@/content/resume";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Education</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">Foundations, coursework, and continuous learning.</p>

      <div className="mt-10 max-w-3xl space-y-8">
        {education.map((e) => (
          <div
            key={`${e.school}-${e.degree}-${e.range}`}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950/40 dark:shadow-none"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{e.school}</h3>
                <p className="mt-1 text-sm italic text-muted-foreground">{e.degree}</p>
                <p className="mt-1 text-sm italic text-muted-foreground/80">{e.detail}</p>
              </div>
              <p className="shrink-0 text-sm text-muted-foreground">{e.range}</p>
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Certifications</h3>
          <ul className="mt-4 space-y-4">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="flex flex-col gap-1 border-b border-border pb-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-foreground">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
                <p className="text-sm italic text-muted-foreground">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionFooter currentPath="/education" />
    </section>
  );
}
