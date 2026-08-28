// Core content model for MindMotions.
// Designed so new religions, languages, festivals, aartis and pujas can be
// added as data only — no UI/architecture changes required.

/** UI chrome language — kept small on purpose. */
export type UiLang = "hi" | "en";

/** Content languages a piece of text may be authored in. Extend freely. */
export type LangCode =
  | "hi"
  | "en"
  | "sa" // Sanskrit
  | "ur" // Urdu
  | "pa" // Punjabi
  | "bn"
  | "mr"
  | "gu"
  | "ta"
  | "te"
  | "kn"
  | "ml"
  | "or"
  | "as";

export const LANG_LABELS: Record<LangCode, string> = {
  hi: "हिंदी",
  en: "English",
  sa: "संस्कृत",
  ur: "اردو",
  pa: "ਪੰਜਾਬੀ",
  bn: "বাংলা",
  mr: "मराठी",
  gu: "ગુજરાતી",
  ta: "தமிழ்",
  te: "తెలుగు",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  or: "ଓଡ଼ିଆ",
  as: "অসমীয়া",
};

export const RTL_LANGS: LangCode[] = ["ur"];

/** A piece of text available in one or more languages. hi + en are the baseline. */
export type LocalizedText = Partial<Record<LangCode, string>> & {
  hi: string;
  en: string;
};

export type ReligionSlug =
  | "hinduism"
  | "islam"
  | "sikhism"
  | "christianity"
  | "jainism"
  | "buddhism";

export interface Religion {
  slug: ReligionSlug;
  name: LocalizedText;
  symbol: string; // unicode glyph used as a light accent, never a figurative icon
  languages: LangCode[]; // languages relevant to this religion's content
  themeId: ReligionSlug;
  shortDescription: LocalizedText;
  intro: LocalizedText;
}

export type RegionSlug =
  | "north-india"
  | "south-india"
  | "east-india"
  | "west-india"
  | "northeast-india"
  | "global";

export const REGION_LABELS: Record<RegionSlug, LocalizedText> = {
  "north-india": { hi: "उत्तर भारत", en: "North India" },
  "south-india": { hi: "दक्षिण भारत", en: "South India" },
  "east-india": { hi: "पूर्वी भारत", en: "East India" },
  "west-india": { hi: "पश्चिम भारत", en: "West India" },
  "northeast-india": { hi: "पूर्वोत्तर भारत", en: "Northeast India" },
  global: { hi: "वैश्विक", en: "Global" },
};

/** How a source document should be trusted / attributed. */
export interface Source {
  label: string;
  author?: string;
  license?: string; // e.g. "Public Domain", "CC-BY-4.0"
  copyrightStatus?: string; // e.g. "Public Domain (traditional text)"
  url?: string;
}

/** The "fact-check" information-type layer (spec section 20). */
export type InfoType =
  | "religious-belief" // 🟢 धार्मिक परंपरा
  | "historical-fact" // 🔵 ऐतिहासिक तथ्य
  | "cultural-belief" // 🟡 सांस्कृतिक मान्यता
  | "folklore" // 🟣 लोककथा
  | "modern-interpretation"; // ⚪ आधुनिक व्याख्या

export const INFO_TYPE_META: Record<
  InfoType,
  { color: string; dot: string; label: LocalizedText }
> = {
  "religious-belief": {
    color: "#1a7f37",
    dot: "🟢",
    label: { hi: "धार्मिक परंपरा", en: "Religious tradition" },
  },
  "historical-fact": {
    color: "#0969da",
    dot: "🔵",
    label: { hi: "ऐतिहासिक तथ्य", en: "Historical fact" },
  },
  "cultural-belief": {
    color: "#9a6700",
    dot: "🟡",
    label: { hi: "सांस्कृतिक मान्यता", en: "Cultural belief" },
  },
  folklore: {
    color: "#8250df",
    dot: "🟣",
    label: { hi: "लोककथा", en: "Folklore" },
  },
  "modern-interpretation": {
    color: "#57606a",
    dot: "⚪",
    label: { hi: "आधुनिक व्याख्या", en: "Modern interpretation" },
  },
};

export interface FestivalDate {
  /** "fixed" = same Gregorian date every year, "lunar" = varies by lunar/religious calendar */
  type: "fixed" | "lunar";
  month?: number; // 1-12, approximate month for fixed dates / calendar placement
  /** ISO date for a specific upcoming occurrence, used for "today / this week" sorting */
  nextOccurrence: string;
  displayDate: LocalizedText;
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
  infoType?: InfoType;
}

export interface RegionalVariation {
  region: RegionSlug;
  description: LocalizedText;
}

export interface InfoBlock {
  infoType: InfoType;
  text: LocalizedText;
}

export interface PujaStepGroup {
  title: LocalizedText;
  materials: LocalizedText[];
  steps: LocalizedText[];
  mantraSlug?: string;
  aartiSlug?: string;
  prasad?: LocalizedText;
  regionalVariations?: RegionalVariation[];
  note?: LocalizedText;
}

export interface Festival {
  id: string;
  slug: string;
  religion: ReligionSlug;
  title: LocalizedText;
  alsoKnownAs?: LocalizedText;
  region: RegionSlug[];
  date: FestivalDate;
  duration?: LocalizedText;
  shortDescription: LocalizedText;
  whatIsIt: LocalizedText;
  whyCelebrated: InfoBlock[];
  story: {
    forChildren: LocalizedText;
    general: LocalizedText;
    detailed: LocalizedText;
  };
  howCelebrated: LocalizedText;
  puja?: PujaStepGroup;
  mantraSlugs?: string[];
  aartiSlugs?: string[];
  regionalVariations?: RegionalVariation[];
  dosAndDonts?: { dos: LocalizedText[]; donts: LocalizedText[] };
  childExplanation: LocalizedText;
  faqs: FaqItem[];
  sources: Source[];
  keywords: string[]; // includes transliterations & synonyms for search
  emoji: string;
  seo: { title: LocalizedText; description: LocalizedText };
}

export interface Aarti {
  id: string;
  slug: string;
  religion: ReligionSlug;
  deity: LocalizedText;
  title: LocalizedText;
  textHindi: string;
  textSanskrit?: string;
  transliteration?: string;
  meaning: LocalizedText;
  source: Source;
  keywords: string[];
  emoji: string;
}

export interface Puja {
  id: string;
  slug: string;
  religion: ReligionSlug;
  title: LocalizedText;
  category: LocalizedText;
  purpose: LocalizedText;
  group: PujaStepGroup;
  regionalVariations?: RegionalVariation[];
  relatedFestivalSlug?: string;
  keywords: string[];
  emoji: string;
}

export type ContentKind = "festival" | "aarti" | "puja" | "story" | "faq";

export interface SearchDoc {
  kind: ContentKind;
  slug: string;
  religion: ReligionSlug;
  title: string;
  titleEn: string;
  category: string;
  shortText: string;
  keywords: string[];
}

export function t<T extends LocalizedText>(
  text: T | undefined,
  lang: UiLang | LangCode,
  fallback: UiLang = "hi"
): string {
  if (!text) return "";
  return text[lang] ?? text[fallback] ?? text.en ?? text.hi ?? "";
}
