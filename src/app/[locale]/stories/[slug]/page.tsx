import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allFestivals, getFestival } from "@/lib/content/festivals";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { StoryTabs } from "@/components/content/story-tabs";
import { ShareButtons } from "@/components/content/share-buttons";
import { BookmarkButton } from "@/components/content/bookmark-button";
import { ArrowRight } from "lucide-react";

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
    title: `${t(festival.title, lang)} ${lang === "hi" ? "की कहानी" : "— Story"} | MindMotions`,
    description: t(festival.shortDescription, lang),
    alternates: { canonical: `/${lang}/stories/${slug}`, languages: { hi: `/hi/stories/${slug}`, en: `/en/stories/${slug}` } },
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  const festival = getFestival(slug);
  if (!festival) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <nav className="text-xs text-muted" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-text">
          {dict.navHome}
        </Link>{" "}
        /{" "}
        <Link href={`/${lang}/stories`} className="hover:text-text">
          {dict.navStories}
        </Link>{" "}
        / <span className="text-text">{t(festival.title, lang)}</span>
      </nav>

      <header className="mt-4">
        <span className="text-4xl" aria-hidden>
          {festival.emoji}
        </span>
        <h1 className="font-devanagari-serif mt-2 text-2xl font-bold sm:text-3xl">{t(festival.title, lang)}</h1>
        <p className="mt-1 text-sm text-muted">{dict.theStory}</p>
        <div className="mt-4">
          <BookmarkButton kind="story" slug={festival.slug} title={t(festival.title, lang)} emoji={festival.emoji} />
        </div>
      </header>

      <div className="mt-8">
        <StoryTabs
          story={festival.story}
          lang={lang}
          labels={{ forChildren: dict.forChildren, generalReader: dict.generalReader, detailedInfo: dict.detailedInfo }}
        />
      </div>

      <Link
        href={`/${lang}/festivals/${festival.slug}`}
        className="focus-ring mt-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        {lang === "hi" ? "पूरी त्योहार जानकारी देखें" : "See full festival details"}
        <ArrowRight className="size-4" aria-hidden />
      </Link>

      <div className="mt-8">
        <ShareButtons title={t(festival.title, lang)} />
      </div>
    </div>
  );
}
