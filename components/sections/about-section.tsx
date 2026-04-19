import { SectionFooter } from "@/components/section-footer";
import { GlitchText } from "@/components/glitch-text";
import { achievements, summaryParagraphs } from "@/content/resume";
import { site } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About {site.name.split(" ")[0]}</h2>
      <p className="mt-3 text-lg text-muted-foreground">More than just a title—here’s the longer version.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>{summaryParagraphs[0]}</p>
        <p>{summaryParagraphs[1]}</p>
        <p>
          Day-to-day, I spend most of my time in <GlitchText>React</GlitchText>,{" "}
          <GlitchText>Next.js</GlitchText>, <GlitchText>Tailwind CSS</GlitchText>, and{" "}
          <GlitchText>Node.js</GlitchText> services—paired with SQL databases and practical auth patterns. I’m happiest
          when the UI feels obvious and the API boundaries are boring (in a good way).
        </p>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950/50 dark:shadow-none">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Achievements</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <SectionFooter currentPath="/about" />
    </section>
  );
}
