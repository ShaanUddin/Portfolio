export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cardSummary: string;
  overview: string;
  stack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "nexisgrow",
    title: "NexisGrow",
    subtitle: "Learning & growth hub inside the Nexis ecosystem",
    cardSummary:
      "A structured platform to track skills, goals, and progress—designed as the “home base” for learners building real projects.",
    overview:
      "NexisGrow connects coursework, practice, and portfolio outcomes into one coherent experience. The goal was simple: reduce context switching and make progress visible—so users spend more time building and less time hunting for what to do next.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "Goal-oriented learning paths with milestones and lightweight progress analytics.",
      "User accounts with secure sessions and role-aware navigation patterns.",
      "Reusable UI primitives for dashboards, tables, and empty states—optimized for clarity on small screens.",
      "REST APIs with consistent error shapes and validation at the boundary.",
      "Deployment-ready configuration split for local/staging workflows.",
    ],
    challenges: [
      "Designing flexible progress tracking without turning the UI into an admin panel.",
      "Balancing schema evolution with shipped features across multiple modules.",
      "Keeping client state predictable as screens grew (lists, filters, optimistic updates).",
    ],
    learnings: [
      "Investing early in API contracts saves weeks when multiple screens consume the same endpoints.",
      "Good onboarding isn’t copy—it’s reducing decisions per minute for new users.",
      "Accessibility and keyboard flows matter even in “internal” tools.",
    ],
    liveUrl: "https://nexisgrow.com/",
    repoUrl: "#",
  },
  {
    slug: "nexisresume",
    title: "NexisResume",
    subtitle: "ATS-aware resume builder with export-ready output",
    cardSummary:
      "A resume studio focused on structure, readability, and fast iteration—so you can ship a strong resume without fighting the editor.",
    overview:
      "NexisResume helps users craft resumes that read well to both humans and parsers. The emphasis is on sensible defaults, section scaffolding, and exports that preserve formatting—because small layout bugs can silently hurt applications.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "PDF export tooling"],
    features: [
      "Section templates (experience, projects, education, skills) with guided inputs.",
      "Live preview with print/PDF-friendly styling.",
      "Versioned drafts so users can iterate without losing previous content.",
      "Validation cues for common resume mistakes (missing dates, empty bullets, inconsistent tense).",
      "Shareable read-only links for quick recruiter review (optional mode).",
    ],
    challenges: [
      "Reliable PDF generation across browsers without breaking layout parity.",
      "Keeping the editor fast while preview updates on every keystroke.",
      "Handling international formats (phone, links, date styles) without exploding complexity.",
    ],
    learnings: [
      "Separate “content model” from “presentation model” early—exports get easier.",
      "Progressive enhancement beats a giant form: reveal advanced fields only when needed.",
      "User trust comes from predictable saves and obvious export results.",
    ],
    liveUrl: "https://nexisresume.nexisgrow.com/",
    repoUrl: "#",
  },
  {
    slug: "nexiscover",
    title: "NexisCover",
    subtitle: "Cover letter generator aligned to job descriptions",
    cardSummary:
      "Turn a job posting + your profile into a tailored cover letter draft—fast, structured, and easy to edit.",
    overview:
      "NexisCover reduces the friction of starting from a blank page. Users provide a role summary and their strengths; the app proposes a coherent narrative they can refine—because the best letters sound human, not templated.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    features: [
      "Prompt-assisted drafting with editable sections (hook, fit, proof, close).",
      "Snippet library for reusable achievements and metrics.",
      "Tone controls (concise / formal) with consistent voice constraints.",
      "Export to plain text/Markdown for quick submission flows.",
      "Autosave drafts and duplicate letters per company/role.",
    ],
    challenges: [
      "Avoiding generic output while keeping generation fast enough for interactive editing.",
      "Helping users personalize without encouraging exaggeration.",
      "Managing state across multiple drafts and templates.",
    ],
    learnings: [
      "Great UX for AI-assisted writing is “suggest, don’t replace”—users need control.",
      "The best features are the ones that shorten time-to-first draft.",
      "Clear disclaimers and editing affordances build trust.",
    ],
    liveUrl: "https://nexiscover.nexisgrow.com/",
    repoUrl: "#",
  },
  {
    slug: "nexishrms",
    title: "NexisHRMS",
    subtitle: "HR operations toolkit for teams that outgrow spreadsheets",
    cardSummary:
      "Employee records, role management, and operational workflows—built with permissions-first design for real organizations.",
    overview:
      "NexisHRMS targets the messy middle: teams that need structure but can’t afford heavyweight enterprise software. The focus is on clean permissions, audit-friendly changes, and screens that remain usable under daily load.",
    stack: ["React", "JavaScript", "Node.js", "Express", "MySQL", "JWT", "RBAC"],
    features: [
      "Employee directory with searchable profiles and department grouping.",
      "Role-based access control patterns for sensitive HR actions.",
      "Attendance/leave placeholders with admin review flows (modular design).",
      "Audit trails for critical updates (who changed what, when).",
      "Responsive layouts for admins reviewing requests on mobile.",
    ],
    challenges: [
      "Modeling permissions without turning every page into conditional spaghetti.",
      "Designing tables/filters that scale as employee count grows.",
      "Keeping migrations safe when HR schemas evolve frequently early on.",
    ],
    learnings: [
      "Security isn’t a feature—it’s a set of defaults: least privilege, explicit grants.",
      "Admin tools need empty states, bulk actions, and obvious “danger” confirmations.",
      "Good HR software respects time: fewer clicks per common task.",
    ],
    liveUrl: "https://www.nexishrms.nexisgrow.com/",
    repoUrl: "#",
  },
  {
    slug: "nexiscert",
    title: "NexisCert",
    subtitle: "Certification tracker with proof attachments and reminders",
    cardSummary:
      "Track certifications, renewal windows, and evidence—so credentials never expire quietly.",
    overview:
      "NexisCert helps engineers maintain proof of learning: what they earned, when it expires, and where the certificate lives. It’s intentionally simple—because tracking should feel lightweight, not like another LMS.",
    stack: ["React", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs", "Cloud storage integration (planned)"],
    features: [
      "Certificate entries with issuer, credential ID, earned/expiry dates.",
      "Attachment workflow for PDFs/images with safe viewing patterns.",
      "Reminder cues for upcoming expirations (email integration optional).",
      "Filtering by domain (cloud, security, languages) and status (active/expired).",
      "Export summary for resumes and LinkedIn updates.",
    ],
    challenges: [
      "Date handling across time zones and partial month renewals.",
      "File uploads: validation, size limits, and user-friendly failures.",
      "Keeping the schema flexible for wildly different certificate formats.",
    ],
    learnings: [
      "Calendar UX is harder than it looks—expiry is emotional for users.",
      "Attachments need a clear lifecycle: upload → verify → replace.",
      "Small reminders create outsized trust.",
    ],
    liveUrl: "https://getcertified.nexisgrow.com/",
    repoUrl: "#",
  },
  {
    slug: "healthease",
    title: "HealthEase",
    subtitle: "Patient-friendly health workflow prototype",
    cardSummary:
      "A practical UI-first exploration of appointments, records, and guidance—focused on clarity under stress.",
    overview:
      "HealthEase is built around calm interfaces: fewer jargon terms, clearer next steps, and predictable navigation. The project emphasizes accessibility, form usability, and resilient error states—because health workflows fail loudly when UX fails quietly.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Appointment scheduling flows with validation and confirmation summaries.",
      "Patient dashboard patterns for upcoming visits and instructions.",
      "Form design tuned for mobile: large targets, helpful errors, sane defaults.",
      "Role separation placeholders for staff vs patient views.",
      "API endpoints structured for future integration with real providers.",
    ],
    challenges: [
      "Designing trustworthy UI without implying clinical guarantees.",
      "Handling incomplete user input gracefully (partial forms, retries).",
      "Keeping performance smooth on low-end devices.",
    ],
    learnings: [
      "In sensitive domains, copy is part of engineering—tone reduces support burden.",
      "Accessibility is not optional: focus order and contrast are core features.",
      "Prototype with real-world constraints early (slow networks, small screens).",
    ],
    repoUrl: "#",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
