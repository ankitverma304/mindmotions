import Link from "next/link";
import type { Metadata } from "next";
import { allFestivals } from "@/lib/content/festivals";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.navStories };
}

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.navStories}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "बच्चों के लिए सरल भाषा से लेकर विस्तृत जानकारी तक — हर स्तर पर पढ़ने के विकल्प के साथ।"
          : "From simple language for children to in-depth detail — with a reading level for everyone."}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allFestivals.map((f) => (
          <Link
            key={f.id}
            href={`/${lang}/stories/${f.slug}`}
            className="focus-ring flex flex-col rounded-2xl border border-border bg-surface p-5 hover:shadow-lg"
          >
            <span className="text-3xl" aria-hidden>
              {f.emoji}
            </span>
            <h2 className="mt-3 text-lg font-semibold">{t(f.title, lang)}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{t(f.story.general, lang)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
