/** Terminal “window” stays dark for contrast on both themes; outer wrapper uses border tokens. */
export function TerminalAvatar() {
  return (
    <div className="w-full max-w-[220px] rounded-xl border border-border bg-zinc-950 p-4 font-mono text-[10px] leading-relaxed text-zinc-300 shadow-sm dark:border-white/10 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-xs">
      <div className="mb-3 flex items-center gap-2 text-[10px] text-zinc-500">
        <span className="size-2 rounded-full bg-red-500/90" />
        <span className="size-2 rounded-full bg-amber-400/90" />
        <span className="size-2 rounded-full bg-emerald-400/90" />
        <span className="ml-auto">zsh</span>
      </div>
      <p className="text-emerald-300/90">shaan@portfolio ~ %</p>
      <p className="text-violet-300/90">whoami</p>
      <pre className="mt-2 overflow-hidden text-[8px] leading-none text-zinc-200 sm:text-[10px]">
        {` ██████╗ ██╗  ██╗
██╔════╝ ██║  ██║
███████╗ ███████║
╚════██║ ██╔══██║
███████║ ██║  ██║
╚══════╝ ╚═╝  ╚═╝`}
      </pre>
      <p className="mt-2 text-zinc-500"># terminal avatar — no camera required</p>
      <p className="mt-3 text-emerald-300/90">
        shaan@portfolio ~ %<span className="animate-pulse">▍</span>
      </p>
    </div>
  );
}
