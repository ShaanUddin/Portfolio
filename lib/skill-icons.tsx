import { Code2Icon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFiles,
  SiFirebase,
  SiGit,
  SiGithub,
  SiCss,
  SiGooglecloudstorage,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKeycloak,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";

export function normalizeSkillLabel(label: string) {
  return label.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, " ").trim();
}

const skillIconMap: Record<string, IconType> = {
  java: SiOpenjdk,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  "react.js": SiReact,
  "next.js": SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss,
  "tailwind css": SiTailwindcss,
  "rest api development": SiExpress,
  "rest apis": SiOpenapiinitiative,
  "node.js": SiNodedotjs,
  express: SiExpress,
  "express.js": SiExpress,
  "spring boot learning": SiSpringboot,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  jwt: SiJsonwebtokens,
  "authentication jwt": SiJsonwebtokens,
  git: SiGit,
  github: SiGithub,
  firebase: SiFirebase,
  docker: SiDocker,
  postman: SiPostman,
  npm: SiNpm,
  rbac: SiKeycloak,
  "pdf export tooling": SiFiles,
  "cloud storage integration planned": SiGooglecloudstorage,
};

const skillIconHexMap: Record<string, string> = {
  java: "#EA2D2E",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  "react.js": "#61DAFB",
  "next.js": "#000000",
  html5: "#E34F26",
  css3: "#1572B6",
  "tailwind css": "#06B6D4",
  "rest api development": "#6B7280",
  "rest apis": "#6BA539",
  "node.js": "#339933",
  express: "#000000",
  "express.js": "#6B7280",
  "spring boot learning": "#6DB33F",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  jwt: "#A855F7",
  "authentication jwt": "#A855F7",
  git: "#F05032",
  github: "#181717",
  firebase: "#FFCA28",
  docker: "#2496ED",
  postman: "#FF6C37",
  npm: "#CB3837",
  rbac: "#3686C7",
  "pdf export tooling": "#64748B",
  "cloud storage integration planned": "#4285F4",
};

export function SkillIcon({
  label,
  className,
  iconClassName = "size-3.5 shrink-0",
}: {
  label: string;
  /** Extra classes on the icon SVG */
  className?: string;
  iconClassName?: string;
}) {
  const normalized = normalizeSkillLabel(label);
  const Icon = skillIconMap[normalized] ?? Code2Icon;
  const iconColor = skillIconHexMap[normalized];
  return (
    <Icon
      className={cn(iconClassName, !iconColor && "text-muted-foreground", className)}
      style={iconColor ? { color: iconColor } : undefined}
      aria-hidden
    />
  );
}
