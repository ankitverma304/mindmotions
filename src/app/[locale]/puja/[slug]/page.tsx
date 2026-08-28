import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pujas, getPuja } from "@/lib/content/pujas";
import { getAarti } from "@/lib/content/aartis";
import { getFestival } from "@/lib/content/festivals";
import { REGION_LABELS, UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { AartiCard } from "@/components/content/aarti-card";
import { BookmarkButton } from "@/components/content/bookmark-button";
import { ShareButtons } from "@/components/content/share-buttons";
import { MapPin } from "lucide-react";

export function generateStaticParams() {
  return pujas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const puja = getPuja(slug);
  if (!puja) return {};
  return {
    title: `${t(puja.title, lang)} | MindMotions`,
    description: t(puja.purpose, lang),
    alternates: { canonical: `/${lang}/puja/${slug}`, languages: { hi: `/hi/puja/${slug}`, en: `/en/puja/${slug}` } },
  };
}

export default async function PujaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const puja = getPuja(slug);
  if (!puja) notFound();

  const aarti = puja.group.aartiSlug ? getAarti(puja.group.aartiSlug) : undefined;
  const festival = puja.relatedFestivalSlug ? getFestival(puja.relatedFestivalSlug) : undefined;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <nav className="text-xs text-muted" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-text">
          {dict.navHome}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/puja`} className="hover:text-text">
          {dict.navPuja}
        </Link>{" "}
        / <span className="text-text">{t(puja.title, lang)}</span>
      </nav>

      <header className="mt-4">
        <span className="text-4xl" aria-hidden>
          {puja.emoji}
        </span>
        <h1 className="font-devanagari-serif mt-2 text-2xl font-bold sm:text-3xl">{t(puja.title, lang)}</h1>
        <p className="mt-1 text-sm text-muted">{t(puja.category, lang)}</p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed">{t(puja.purpose, lang)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <BookmarkButton kind="puja" slug={puja.slug} title={t(puja.title, lang)} emoji={puja.emoji} />
          {festival && (
            <Link
              href={`/${lang}/festivals/${festival.slug}`}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium hover:bg-surface-2"
            >
              {festival.emoji} {t(festival.title, lang)}
            </Link>
          )}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.materials}</h2>
        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {puja.group.materials.map((m, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {t(m, lang)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.steps}</h2>
        <ol className="mt-3 space-y-3">
          {puja.group.steps.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <span className="leading-relaxed">{t(s, lang)}</span>
            </li>
          ))}
        </ol>
      </section>

      {puja.group.prasad && (
        <p className="mt-6 text-sm">
          <span className="font-semibold">{dict.prasad}: </span>
          {t(puja.group.prasad, lang)}
        </p>
      )}

      {aarti && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.relatedAarti}</h2>
          <div className="mt-3 max-w-sm">
            <AartiCard aarti={aarti} lang={lang} />
          </div>
        </section>
      )}

      {puja.group.regionalVariations && puja.group.regionalVariations.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.acrossIndia}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {puja.group.regionalVariations.map((rv, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface p-4">
                <p className="flex items-center gap-1.5 text-sm font-semibold">
                  <MapPin className="size-3.5 text-primary" aria-hidden />
                  {t(REGION_LABELS[rv.region], lang)}
                </p>
                <p className="mt-1.5 text-sm text-muted">{t(rv.description, lang)}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {puja.group.note && (
        <p className="mt-6 rounded-2xl border border-border bg-surface-2/40 p-4 text-xs text-muted">{t(puja.group.note, lang)}</p>
      )}

      <div className="mt-8">
        <ShareButtons title={t(puja.title, lang)} />
      </div>
    </div>
  );
}
