import { LinkIcon } from "lucide-react";
import { GitHubMark } from "@/components/icons/github-mark";
import { SectionFooter } from "@/components/section-footer";
import { ContactForm } from "@/components/contact-form";
import { contactCopy, site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28">
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Contact</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{contactCopy.headline}</p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{contactCopy.body}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={site.twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:border-violet-500/50 dark:hover:border-violet-500/40"
        >
          X / Twitter — fastest DMs
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:border-violet-500/50 dark:hover:border-violet-500/40"
        >
          Email: {site.email}
        </a>
        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:border-violet-500/50 dark:hover:border-violet-500/40"
        >
          <LinkIcon className="size-4" />
          LinkedIn
        </a>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground hover:border-violet-500/50 dark:hover:border-violet-500/40"
        >
          <GitHubMark className="size-4" />
          GitHub
        </a>
      </div>

      <ContactForm />

      <SectionFooter currentPath="/contact" />
    </section>
  );
}
