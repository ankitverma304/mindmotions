import Link from "next/link";
import type { Metadata } from "next";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { religions } from "@/lib/content/religions";
import { getUpcomingFestivals } from "@/lib/content/festivals";
import { aartis } from "@/lib/content/aartis";
import { getRandomFact } from "@/lib/content/facts";
import { HeroSearch } from "@/components/content/hero-search";
import { FestivalCard } from "@/components/content/festival-card";
import { ReligionCard } from "@/components/content/religion-card";
import { AartiCard } from "@/components/content/aarti-card";
import { Section } from "@/components/content/section";
import { InfoTypeBadge } from "@/components/ui/badge";
import { ArrowRight, Baby, MapPin } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);
  return {
    title: { absolute: `${dict.siteName} — ${dict.tagline}` },
    description: dict.heroSubtitle,
  };
}

const POPULAR_SEARCHES = ["Diwali", "Holi", "Ganesh Aarti", "Hanuman Chalisa", "Eid", "Gurpurab", "Christmas", "Lakshmi Puja"];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  const upcoming = getUpcomingFestivals(new Date(), 8);
  const todays = upcoming.slice(0, 4);
  const nextUpcoming = upcoming.slice(0, 6);
  const fact = getRandomFact(new Date().getDate());

  return (
    <div>
      {/* Hero */}
      <section className="pattern-bg border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-20">
          <h1 className="font-devanagari-serif max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            {dict.heroHeadline}
          </h1>
          <p className="max-w-2xl text-sm text-muted sm:text-base">{dict.heroSubtitle}</p>
          <HeroSearch />
        </div>
      </section>

      {/* Today's / upcoming important festivals */}
      <Section
        title={dict.todaysFestivals}
        viewAllHref={`/${lang}/festivals`}
        viewAllLabel={dict.allFestivals}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {todays.map((f) => (
            <FestivalCard key={f.id} festival={f} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Browse by religion */}
      <Section title={dict.browseByReligion} subtitle={dict.exploreAllTraditions} className="bg-surface-2/40">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {religions.map((r) => (
            <ReligionCard key={r.slug} religion={r} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Upcoming festivals */}
      <Section title={dict.upcomingFestivals} viewAllHref={`/${lang}/festivals`} viewAllLabel={dict.viewAll}>
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {nextUpcoming.map((f) => (
            <div key={f.id} className="w-64 shrink-0">
              <FestivalCard festival={f} lang={lang} />
            </div>
          ))}
        </div>
      </Section>

      {/* Popular Aarti & Prayers */}
      <Section title={dict.popularAarti} viewAllHref={`/${lang}/aarti`} viewAllLabel={dict.viewAll} className="bg-surface-2/40">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aartis.map((a) => (
            <AartiCard key={a.id} aarti={a} lang={lang} />
          ))}
        </div>
      </Section>

      {/* Why do we celebrate? */}
      <Section title={dict.whyWeCelebrate}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { q: lang === "hi" ? "क्यों मनाते हैं?" : "Why do we celebrate it?" },
            { q: lang === "hi" ? "कब मनाते हैं?" : "When is it celebrated?" },
            { q: lang === "hi" ? "कैसे मनाते हैं?" : "How is it celebrated?" },
            { q: lang === "hi" ? "इसकी कहानी क्या है?" : "What is the story?" },
            { q: lang === "hi" ? "पूजा में क्या किया जाता है?" : "What happens in the puja?" },
            { q: lang === "hi" ? "बच्चों को कैसे समझाएं?" : "How to explain it to children?" },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-border bg-surface p-5 text-sm font-medium">
              {item.q}
            </div>
          ))}
        </div>
        <Link
          href={`/${lang}/festivals/diwali`}
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          {lang === "hi" ? "दीपावली के उदाहरण से समझें" : "See these answered for Diwali"}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      {/* Regional traditions teaser */}
      <Section title={dict.regionalTraditions} viewAllHref={`/${lang}/regional`} viewAllLabel={dict.viewAll} className="bg-surface-2/40">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
          <MapPin className="size-6 shrink-0 text-primary" aria-hidden />
          <p className="text-sm text-muted">
            {lang === "hi"
              ? "एक ही त्योहार भारत के अलग-अलग हिस्सों में अलग-अलग तरीकों से मनाया जाता है — उत्तर, दक्षिण, पूर्व, पश्चिम और पूर्वोत्तर भारत की परंपराओं को जानें, बिना किसी परंपरा को दूसरी से बेहतर बताए।"
              : "The same festival is celebrated differently across India's regions — explore North, South, East, West and Northeast Indian traditions, without ranking one above another."}
          </p>
        </div>
      </Section>

      {/* Children's Corner teaser */}
      <Section title={dict.childrensCorner} viewAllHref={`/${lang}/children`} viewAllLabel={dict.viewAll}>
        <Link
          href={`/${lang}/children`}
          className="focus-ring flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:shadow-lg"
        >
          <Baby className="size-6 shrink-0 text-primary" aria-hidden />
          <div>
            <p className="font-semibold">{lang === "hi" ? "होली की कहानी — 5 मिनट में समझें" : "The Story of Holi — Understand in 5 Minutes"}</p>
            <p className="mt-1 text-sm text-muted">
              {lang === "hi"
                ? "बहुत समय पहले हिरण्यकशिपु नाम का एक राजा था... सरल भाषा में पूरी कहानी पढ़ें।"
                : "Long ago there was a king named Hiranyakashipu... read the full story in simple language."}
            </p>
          </div>
        </Link>
      </Section>

      {/* Today's Knowledge */}
      <Section title={dict.todaysKnowledge} className="bg-surface-2/40">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <InfoTypeBadge type={fact.infoType} lang={lang} />
          <p className="mt-3 text-lg font-medium">{lang === "hi" ? "क्या आप जानते हैं?" : "Did you know?"}</p>
          <p className="mt-1 text-sm text-muted">{t(fact.text, lang)}</p>
          {fact.relatedSlug && fact.relatedKind && (
            <Link
              href={`/${lang}/${fact.relatedKind === "festival" ? "festivals" : fact.relatedKind}/${fact.relatedSlug}`}
              className="focus-ring mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              {dict.knowMore}
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          )}
        </div>
      </Section>

      {/* Popular searches */}
      <Section title={dict.popularSearches}>
        <div className="flex flex-wrap gap-2">
          {POPULAR_SEARCHES.map((p) => (
            <Link
              key={p}
              href={`/${lang}/search?q=${encodeURIComponent(p)}`}
              className="focus-ring rounded-full border border-border bg-surface px-4 py-2 text-sm hover:bg-surface-2"
            >
              {p}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
