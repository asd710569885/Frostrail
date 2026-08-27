const directReplacements: Record<string, string> = {
  "Confirmed": "Yes",
  "Confirmed broadly": "Yes; details not published",
  "Officially confirmed": "Yes",
  "Not confirmed": "Not announced",
  "Confirmed archetype": "Weapon type",
  "Confirmed category": "Known category",
  "Confirmed creature": "Hostile creature",
  "Confirmed design feature": "Part of the current design",
  "Developer-confirmed tool": "Named tool",
  "Confirmed system placeholder": "System entry",
  "Confirmed effects": "Known effects",
  "Confirmed use": "Known use",
  "Confirmed act": "Key event",
};

/** Keeps pre-release gaps readable without turning every page into a data report. */
export function playerFacingCopy(value: string): string {
  const direct = directReplacements[value];
  if (direct) return direct;

  return value
    .replace(/remain TBA\b/gi, "have not been published")
    .replace(/remains TBA\b/gi, "has not been published")
    .replace(/still TBA\b/gi, "still unpublished")
    .replace(/currently TBA\b/gi, "not yet published")
    .replace(/\bTBA MB(?: RAM| available space)?\b/gi, "Not published")
    .replace(/\bTBA\b/g, "Not published")
    .replace(/\bnot confirmed\b/gi, "not announced")
    .replace(/\bofficially confirmed\b/gi, "announced")
    .replace(/\bdeveloper-confirmed\b/gi, "developer-described")
    .replace(/\bconfirmed\b/gi, "known");
}
