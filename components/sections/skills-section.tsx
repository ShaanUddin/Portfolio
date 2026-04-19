import { SectionFooter } from "@/components/section-footer";
import { skillGroups } from "@/content/resume";
import { SkillIcon } from "@/lib/skill-icons";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Skills &amp; Tools</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Learned by building real modules, breaking things responsibly, and debugging with patience.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        I’m comfortable across the stack: product-minded UI work, API design, auth, databases, and shipping to production
        with sensible defaults.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g.title}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground dark:border-white/15 dark:bg-white dark:text-black"
                >
                  <SkillIcon label={item} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SectionFooter currentPath="/skills-tools" />
    </section>
  );
}
