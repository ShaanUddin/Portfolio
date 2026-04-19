const CONTRIBUTIONS_TEXT_REGEX = /([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i;

/** Fetches last-year contribution total from GitHub’s public contributions SVG. */
export async function getGithubContributions(username: string): Promise<{ totalContributions: number | null }> {
  const safeUsername = username.trim();
  const url = `https://github.com/users/${encodeURIComponent(safeUsername)}/contributions`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 * 60 * 6 },
      headers: {
        "User-Agent": "portfolio-stats",
        Accept: "image/svg+xml,text/html;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      return { totalContributions: null };
    }

    const svg = await res.text();
    const match = svg.match(CONTRIBUTIONS_TEXT_REGEX);
    const totalContributions = match?.[1] ? Number(match[1].replace(/,/g, "")) : null;

    if (!Number.isFinite(totalContributions)) {
      return { totalContributions: null };
    }

    return { totalContributions };
  } catch {
    return { totalContributions: null };
  }
}
