import type { Metadata } from "next";
import { allFestivals } from "@/lib/content/festivals";
import { aartis } from "@/lib/content/aartis";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerSources };
}

export default async function SourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.footerSources}</h1>
      <p className="mt-3 text-sm text-muted">
        {lang === "hi"
          ? "प्रत्येक पेज पर उल्लिखित स्रोतों की पूरी सूची यहां संकलित है।"
          : "A complete list of the sources cited across individual pages."}
      </p>

      <h2 className="mt-8 text-lg font-semibold">{dict.navFestivals}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {allFestivals.map((f) => (
          <li key={f.id} className="text-muted">
            <span className="font-medium text-text">{t(f.title, lang)}: </span>
            {f.sources.map((s) => s.label).join("; ")}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-semibold">{dict.navAarti}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {aartis.map((a) => (
          <li key={a.id} className="text-muted">
            <span className="font-medium text-text">{t(a.title, lang)}: </span>
            {a.source.label}
            {a.source.copyrightStatus ? ` — ${a.source.copyrightStatus}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
