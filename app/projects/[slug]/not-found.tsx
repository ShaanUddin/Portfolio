import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PortfolioShell } from "@/components/portfolio-shell";

export default function ProjectNotFound() {
  return (
    <PortfolioShell mainClassName="px-3 sm:px-5 lg:px-6">
      <div className="flex min-h-[60dvh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Project not found</h1>
        <p className="mt-2 max-w-md text-muted-foreground">That case study doesn’t exist (yet).</p>
        <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-xl")}>
          Back to projects
        </Link>
      </div>
    </PortfolioShell>
  );
}
