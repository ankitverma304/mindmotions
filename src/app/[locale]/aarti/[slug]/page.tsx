import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aartis, getAarti } from "@/lib/content/aartis";
import { getReligion } from "@/lib/content/religions";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { AartiReader } from "@/components/content/aarti-reader";
import { BookmarkButton } from "@/components/content/bookmark-button";
import { ShareButtons } from "@/components/content/share-buttons";

export function generateStaticParams() {
  return aartis.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const aarti = getAarti(slug);
  if (!aarti) return {};
  return {
    title: `${t(aarti.title, lang)} | MindMotions`,
    description: t(aarti.meaning, lang),
    alternates: {
      canonical: `/${lang}/aarti/${slug}`,
      languages: { hi: `/hi/aarti/${slug}`, en: `/en/aarti/${slug}` },
    },
  };
}

export default async function AartiDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const aarti = getAarti(slug);
  if (!aarti) notFound();
  const religion = getReligion(aarti.religion);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <nav className="text-xs text-muted" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-text">
          {dict.navHome}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/aarti`} className="hover:text-text">
          {dict.navAarti}
        </Link>{" "}
        / <span className="text-text">{t(aarti.title, lang)}</span>
      </nav>

      <header className="mt-4 text-center">
        <span className="text-4xl" aria-hidden>
          {aarti.emoji}
        </span>
        <h1 className="font-devanagari-serif mt-2 text-2xl font-bold sm:text-3xl">{t(aarti.title, lang)}</h1>
        <p className="mt-1 text-sm text-muted">
          {religion ? t(religion.name, lang) : ""} · {t(aarti.deity, lang)}
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <BookmarkButton kind="aarti" slug={aarti.slug} title={t(aarti.title, lang)} emoji={aarti.emoji} />
        </div>
      </header>

      <div className="mt-8">
        <AartiReader aarti={aarti} lang={lang} />
      </div>

      <div className="mt-8">
        <ShareButtons title={t(aarti.title, lang)} />
      </div>
    </div>
  );
}
