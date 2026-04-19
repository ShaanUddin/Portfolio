"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRightIcon, HashIcon, FolderIcon } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SECTIONS } from "@/lib/sections";
import { projects } from "@/content/projects";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Search" description="Jump to a section or project">
      <Command>
        <CommandInput placeholder="Search sections and projects…" />
        <CommandList>
          <CommandEmpty>No matches.</CommandEmpty>

          <CommandGroup heading="Sections">
            {SECTIONS.map((s) => (
              <CommandItem
                key={s.id}
                value={`${s.label} ${s.id}`}
                onSelect={() => {
                  router.push(s.path);
                  onOpenChange(false);
                }}
              >
                <HashIcon />
                {s.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Projects">
            {projects.map((p) => (
              <CommandItem
                key={p.slug}
                value={`${p.title} ${p.slug}`}
                onSelect={() => {
                  router.push(`/projects/${p.slug}`);
                  onOpenChange(false);
                }}
              >
                <FolderIcon />
                {p.title}
                <ArrowUpRightIcon className="ml-auto size-4 opacity-50" />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

