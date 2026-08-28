import type { Metadata } from "next";
import { religions } from "@/lib/content/religions";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { ReligionCard } from "@/components/content/religion-card";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.exploreAllTraditions };
}

export default async function ReligionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.exploreAllTraditions}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "यहां किसी भी परंपरा को श्रेष्ठ या हीन नहीं दिखाया गया है — हर धर्म को उसकी अपनी मान्यताओं के आधार पर समझाया गया है।"
          : "No tradition is presented as superior or inferior here — each religion is explained on its own terms."}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {religions.map((r) => (
          <ReligionCard key={r.slug} religion={r} lang={lang} />
        ))}
      </div>
    </div>
  );
}
