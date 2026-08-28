import Link from "next/link";
import type { Metadata } from "next";
import { allFestivals } from "@/lib/content/festivals";
import { REGION_LABELS, RegionSlug, UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.regionalTraditions };
}

export default async function RegionalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const regionSlugs = Object.keys(REGION_LABELS) as RegionSlug[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.regionalTraditions}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "एक ही त्योहार को भारत के अलग-अलग क्षेत्र अलग ढंग से मनाते हैं। यहां किसी परंपरा को दूसरी से बेहतर नहीं बताया गया है।"
          : "The same festival is observed differently across India's regions. No tradition here is presented as better than another."}
      </p>

      <div className="mt-8 space-y-10">
        {regionSlugs.map((region) => {
          const festivalsHere = allFestivals.filter((f) => f.region.includes(region));
          if (festivalsHere.length === 0) return null;
          return (
            <section key={region}>
              <h2 className="text-xl font-semibold">{t(REGION_LABELS[region], lang)}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {festivalsHere.map((f) => {
                  const variation = f.regionalVariations?.find((v) => v.region === region);
                  return (
                    <Link
                      key={f.id}
                      href={`/${lang}/festivals/${f.slug}`}
                      className="focus-ring flex gap-3 rounded-2xl border border-border bg-surface p-4 hover:shadow-lg"
                    >
                      <span className="text-2xl" aria-hidden>
                        {f.emoji}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{t(f.title, lang)}</span>
                        <span className="mt-1 block line-clamp-2 text-xs text-muted">
                          {variation ? t(variation.description, lang) : t(f.shortDescription, lang)}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
