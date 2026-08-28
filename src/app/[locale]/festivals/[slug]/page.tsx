import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allFestivals, getFestival } from "@/lib/content/festivals";
import { getReligion } from "@/lib/content/religions";
import { getAarti } from "@/lib/content/aartis";
import { pujas } from "@/lib/content/pujas";
import { REGION_LABELS, UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { InfoTypeBadge } from "@/components/ui/badge";
import { StoryTabs } from "@/components/content/story-tabs";
import { ShareButtons } from "@/components/content/share-buttons";
import { BookmarkButton } from "@/components/content/bookmark-button";
import { AartiCard } from "@/components/content/aarti-card";
import { CheckCircle2, XCircle, MapPin } from "lucide-react";

export function generateStaticParams() {
  return allFestivals.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const festival = getFestival(slug);
  if (!festival) return {};
  return {
    title: t(festival.seo.title, lang),
    description: t(festival.seo.description, lang),
    alternates: {
      canonical: `/${lang}/festivals/${slug}`,
      languages: { hi: `/hi/festivals/${slug}`, en: `/en/festivals/${slug}` },
    },
    openGraph: {
      title: t(festival.seo.title, lang),
      description: t(festival.seo.description, lang),
      type: "article",
    },
  };
}

export default async function FestivalDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const festival = getFestival(slug);
  if (!festival) notFound();

  const religion = getReligion(festival.religion);
  const relatedPuja = pujas.find((p) => p.relatedFestivalSlug === festival.slug);
  const puja = festival.puja;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t(festival.title, lang),
    description: t(festival.shortDescription, lang),
    inLanguage: lang,
    about: religion ? t(religion.name, lang) : undefined,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: festival.faqs.map((f) => ({
      "@type": "Question",
      name: t(f.question, lang),
      acceptedAnswer: { "@type": "Answer", text: t(f.answer, lang) },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.navHome, item: `/${lang}` },
      { "@type": "ListItem", position: 2, name: dict.navFestivals, item: `/${lang}/festivals` },
      { "@type": "ListItem", position: 3, name: t(festival.title, lang), item: `/${lang}/festivals/${festival.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-muted" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-text">
          {dict.navHome}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/festivals`} className="hover:text-text">
          {dict.navFestivals}
        </Link>{" "}
        / <span className="text-text">{t(festival.title, lang)}</span>
      </nav>

      <header className="mt-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden>
            {festival.emoji}
          </span>
          <div>
            <h1 className="font-devanagari-serif text-2xl font-bold sm:text-4xl">{t(festival.title, lang)}</h1>
            {festival.alsoKnownAs && (
              <p className="mt-0.5 text-sm text-muted">
                {dict.alsoKnownAs}: {t(festival.alsoKnownAs, lang)}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-surface p-4 text-sm sm:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{dict.religion}</p>
            <p className="mt-0.5 font-medium">{religion ? t(religion.name, lang) : "—"}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{dict.region}</p>
            <p className="mt-0.5 font-medium">{festival.region.map((r) => t(REGION_LABELS[r], lang)).join(", ")}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{dict.date}</p>
            <p className="mt-0.5 font-medium">{t(festival.date.displayDate, lang)}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">{dict.duration}</p>
            <p className="mt-0.5 font-medium">{festival.duration ? t(festival.duration, lang) : "—"}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <BookmarkButton kind="festival" slug={festival.slug} title={t(festival.title, lang)} emoji={festival.emoji} />
        </div>
      </header>

      {/* 1. What is it */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">
          {t(festival.title, lang)} {dict.whatIsIt}
        </h2>
        <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-text">{t(festival.whatIsIt, lang)}</p>
      </section>

      {/* 2. Why celebrated */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{dict.whyCelebrated}</h2>
        <p className="mt-2 text-sm text-muted">{dict.disputedNote}</p>
        <div className="mt-4 space-y-4">
          {festival.whyCelebrated.map((block, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-4">
              <InfoTypeBadge type={block.infoType} lang={lang} />
              <p className="mt-2 text-[15px] leading-relaxed">{t(block.text, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Story */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{dict.theStory}</h2>
        <div className="mt-4">
          <StoryTabs
            story={festival.story}
            lang={lang}
            labels={{ forChildren: dict.forChildren, generalReader: dict.generalReader, detailedInfo: dict.detailedInfo }}
          />
        </div>
      </section>

      {/* How celebrated */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{dict.howCelebrated}</h2>
        <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed">{t(festival.howCelebrated, lang)}</p>
      </section>

      {/* Puja */}
      {puja && (
        <section className="mt-10 rounded-2xl border border-border bg-surface-2/40 p-5 sm:p-6">
          <h2 className="text-xl font-semibold">{dict.howToPerformPuja}</h2>
          <p className="mt-1 text-sm text-muted">{t(puja.title, lang)}</p>

          <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">{dict.materials}</h3>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {puja.materials.map((m, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                {t(m, lang)}
              </li>
            ))}
          </ul>

          <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">{dict.steps}</h3>
          <ol className="mt-2 space-y-2">
            {puja.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{t(s, lang)}</span>
              </li>
            ))}
          </ol>

          {puja.prasad && (
            <p className="mt-4 text-sm">
              <span className="font-semibold">{dict.prasad}: </span>
              {t(puja.prasad, lang)}
            </p>
          )}

          {puja.aartiSlug && getAarti(puja.aartiSlug) && (
            <div className="mt-4 max-w-sm">
              <AartiCard aarti={getAarti(puja.aartiSlug)!} lang={lang} />
            </div>
          )}

          {puja.note && <p className="mt-4 text-xs text-muted">{t(puja.note, lang)}</p>}

          {relatedPuja && (
            <Link
              href={`/${lang}/puja/${relatedPuja.slug}`}
              className="focus-ring mt-4 inline-block text-sm font-semibold text-primary"
            >
              {dict.relatedPuja} →
            </Link>
          )}
        </section>
      )}

      {/* Regional variations */}
      {festival.regionalVariations && festival.regionalVariations.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{dict.acrossIndia}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {festival.regionalVariations.map((rv, i) => (
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

      {/* Do's and Don'ts */}
      {festival.dosAndDonts && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{dict.dosAndDonts}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-primary">{dict.dos}</p>
              <ul className="mt-2 space-y-1.5">
                {festival.dosAndDonts.dos.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {t(d, lang)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted">{dict.donts}</p>
              <ul className="mt-2 space-y-1.5">
                {festival.dosAndDonts.donts.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
                    {t(d, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Explain to children */}
      <section className="mt-10 rounded-2xl border border-border bg-surface p-5">
        <h2 className="text-lg font-semibold">{dict.explainToChildren}</h2>
        <p className="mt-2 text-[15px] leading-relaxed">{t(festival.childExplanation, lang)}</p>
      </section>

      {/* FAQs */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{dict.faqs}</h2>
        <div className="mt-4 space-y-3">
          {festival.faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-surface p-4">
              <summary className="focus-ring cursor-pointer list-none text-sm font-semibold marker:content-none">
                {t(f.question, lang)}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(f.answer, lang)}</p>
              {f.infoType && (
                <div className="mt-2">
                  <InfoTypeBadge type={f.infoType} lang={lang} />
                </div>
              )}
            </details>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">{dict.sources}</h2>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          {festival.sources.map((s, i) => (
            <li key={i}>
              {s.label}
              {s.copyrightStatus ? ` — ${s.copyrightStatus}` : ""}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <ShareButtons title={t(festival.title, lang)} />
      </div>
    </div>
  );
}
