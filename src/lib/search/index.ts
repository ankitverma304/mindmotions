import { allFestivals } from "../content/festivals";
import { aartis } from "../content/aartis";
import { pujas } from "../content/pujas";
import { SearchDoc } from "../content/types";

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip latin diacritics
    .replace(/[^\p{L}\p{N}\s]/gu, " ") // strip punctuation, keep unicode letters/numbers
    .replace(/\s+/g, " ")
    .trim();
}

let cachedIndex: SearchDoc[] | null = null;

export function buildSearchIndex(): SearchDoc[] {
  if (cachedIndex) return cachedIndex;

  const docs: SearchDoc[] = [];

  for (const f of allFestivals) {
    docs.push({
      kind: "festival",
      slug: f.slug,
      religion: f.religion,
      title: f.title.hi,
      titleEn: f.title.en,
      category: "festival",
      shortText: f.shortDescription.hi,
      keywords: [...f.keywords, f.title.hi, f.title.en, f.alsoKnownAs?.hi ?? "", f.alsoKnownAs?.en ?? ""],
    });
  }

  for (const a of aartis) {
    docs.push({
      kind: "aarti",
      slug: a.slug,
      religion: a.religion,
      title: a.title.hi,
      titleEn: a.title.en,
      category: "aarti",
      shortText: a.meaning.hi,
      keywords: [...a.keywords, a.title.hi, a.title.en, a.deity.hi, a.deity.en],
    });
  }

  for (const p of pujas) {
    docs.push({
      kind: "puja",
      slug: p.slug,
      religion: p.religion,
      title: p.title.hi,
      titleEn: p.title.en,
      category: "puja",
      shortText: p.purpose.hi,
      keywords: [...p.keywords, p.title.hi, p.title.en],
    });
  }

  cachedIndex = docs;
  return docs;
}

export interface SearchResult {
  doc: SearchDoc;
  score: number;
}

export function search(query: string, limit = 20): SearchResult[] {
  const q = normalize(query);
  if (!q) return [];
  const tokens = q.split(" ").filter(Boolean);
  const docs = buildSearchIndex();

  const results: SearchResult[] = [];

  for (const doc of docs) {
    const haystackParts = [doc.title, doc.titleEn, doc.shortText, ...doc.keywords];
    const normalizedParts = haystackParts.map(normalize);
    const combined = normalizedParts.join(" | ");

    let score = 0;

    // Exact / prefix match on title is worth the most.
    const titleNorm = normalize(doc.title);
    const titleEnNorm = normalize(doc.titleEn);
    if (titleNorm === q || titleEnNorm === q) score += 100;
    else if (titleNorm.startsWith(q) || titleEnNorm.startsWith(q)) score += 60;
    else if (titleNorm.includes(q) || titleEnNorm.includes(q)) score += 40;

    // Whole-query substring match anywhere (keywords/synonyms/transliterations).
    if (combined.includes(q)) score += 30;

    // Token overlap — lets "diwali kyu manate hain" match keyword "diwali kyu manate hain"
    // and partial queries like "holi story" match multiple fields.
    let tokenHits = 0;
    for (const token of tokens) {
      if (token.length < 2) continue;
      if (combined.includes(token)) tokenHits++;
    }
    score += tokenHits * 8;

    if (score > 0) results.push({ doc, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
