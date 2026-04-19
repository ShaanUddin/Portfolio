export type SectionDef = {
  id: string;
  label: string;
  path: string;
};

/** Ordered routes for sidebar + previous/next controls. */
export const SECTIONS: SectionDef[] = [
  { id: "introduction", label: "Introduction", path: "/" },
  { id: "about", label: "About Me", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "skills", label: "Skills & Tools", path: "/skills-tools" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" },
  { id: "stats", label: "Stats", path: "/stats" },
];

export function getAdjacentSectionsByPath(currentPath: string) {
  const idx = SECTIONS.findIndex((s) => s.path === currentPath);
  if (idx === -1) return { prev: null as SectionDef | null, next: null as SectionDef | null };
  return {
    prev: idx > 0 ? SECTIONS[idx - 1]! : null,
    next: idx < SECTIONS.length - 1 ? SECTIONS[idx + 1]! : null,
  };
}

