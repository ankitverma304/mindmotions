import Link from "next/link";
import type { Metadata } from "next";
import { pujas } from "@/lib/content/pujas";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.navPuja };
}

export default async function PujaListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.howToPerformPuja}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "सामग्री सूची, चरण-दर-चरण विधि, मंत्र और आरती के साथ — दैनिक, पर्व और विशेष पूजाओं की सरल जानकारी।"
          : "Materials, step-by-step method, mantras and aarti — simple guidance for daily, festival and special pujas."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pujas.map((p) => (
          <Link
            key={p.id}
            href={`/${lang}/puja/${p.slug}`}
            className="focus-ring flex flex-col rounded-2xl border border-border bg-surface p-5 hover:shadow-lg"
          >
            <span className="text-3xl" aria-hidden>
              {p.emoji}
            </span>
            <h2 className="mt-3 text-lg font-semibold">{t(p.title, lang)}</h2>
            <p className="mt-1 text-xs font-medium text-muted">{t(p.category, lang)}</p>
            <p className="mt-2 line-clamp-2 text-sm text-muted">{t(p.purpose, lang)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
