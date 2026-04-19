/** Central identity & links — edit URLs here without touching UI code */

export const site = {
  brand: "shaan.is-dev",
  name: "Shaan Uddin",
  /** Displayed as monospace role chip */
  roleId: "FULL_STACK_ENGINEER",
  roleLabel: "Full Stack Engineer",
  tagline: "Building Products, Not Just Code",
  status: "OPEN_TO_WORK" as const,
  location: "Bengaluru, India",
  email: "shaanuddin.dev@gmail.com",
  /** Replace with your public resume PDF URL */
  resumeUrl: "https://drive.google.com/file/d/1vG1vi2fQ_rdN_UcEE35Do7kD79Vm0bQR/view?usp=sharing",
  linkedinUrl: "https://www.linkedin.com/in/shaanuddin",
  githubUrl: "https://github.com/shaanuddin",
  /** X / Twitter profile */
  twitterUrl: "https://x.com/shaanuddin_dev",
  /** Optional: set in .env as NEXT_PUBLIC_GITHUB_USERNAME for stats links */
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "shaanuddin",
  /** Optional Formspree/Web3Forms endpoint — set NEXT_PUBLIC_FORM_ENDPOINT */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
} as const;

export const contactCopy = {
  headline: "Let’s build something people actually use.",
  body:
    "I’m actively looking for full-stack/product engineering roles where ownership matters. " +
    "If you’re hiring, collaborating, or just want to talk shop—email me or message me on X (Twitter). " +
    "I respond fastest to clear subject lines and concrete context.",
} as const;
