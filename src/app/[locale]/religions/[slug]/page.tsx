import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { religions, getReligion } from "@/lib/content/religions";
import { getFestivalsByReligion } from "@/lib/content/festivals";
import { aartis } from "@/lib/content/aartis";
import { pujas } from "@/lib/content/pujas";
import { LANG_LABELS, UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { FestivalCard } from "@/components/content/festival-card";
import { AartiCard } from "@/components/content/aarti-card";
import { ApplyReligionTheme } from "@/components/apply-religion-theme";
import Link from "next/link";

export function generateStaticParams() {
  return religions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const religion = getReligion(slug);
  if (!religion) return {};
  return {
    title: `${t(religion.name, lang)} | MindMotions`,
    description: t(religion.shortDescription, lang),
    alternates: { canonical: `/${lang}/religions/${slug}`, languages: { hi: `/hi/religions/${slug}`, en: `/en/religions/${slug}` } },
  };
}

export default async function ReligionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const religion = getReligion(slug);
  if (!religion) notFound();

  const religionFestivals = getFestivalsByReligion(religion.slug);
  const religionAartis = aartis.filter((a) => a.religion === religion.slug);
  const religionPujas = pujas.filter((p) => p.religion === religion.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <ApplyReligionTheme religion={religion.slug} />

      <header className="pattern-bg rounded-3xl border border-border bg-surface p-6 sm:p-10">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-primary text-3xl text-primary-foreground" aria-hidden>
          {religion.symbol}
        </span>
        <h1 className="font-devanagari-serif mt-4 text-3xl font-bold sm:text-4xl">{t(religion.name, lang)}</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{t(religion.intro, lang)}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {religion.languages.map((code) => (
            <span key={code} className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs text-muted">
              {LANG_LABELS[code]}
            </span>
          ))}
        </div>
      </header>

      {religionFestivals.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{dict.navFestivals}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {religionFestivals.map((f) => (
              <FestivalCard key={f.id} festival={f} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {religionAartis.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{dict.navAarti}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {religionAartis.map((a) => (
              <AartiCard key={a.id} aarti={a} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {religionPujas.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{dict.navPuja}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {religionPujas.map((p) => (
              <Link
                key={p.id}
                href={`/${lang}/puja/${p.slug}`}
                className="focus-ring flex flex-col rounded-2xl border border-border bg-surface p-5 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden>
                  {p.emoji}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{t(p.title, lang)}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{t(p.purpose, lang)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
