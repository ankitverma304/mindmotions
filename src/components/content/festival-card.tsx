import Link from "next/link";
import { Festival, t, UiLang } from "@/lib/content/types";
import { getReligion } from "@/lib/content/religions";
import { daysUntil } from "@/lib/content/festivals";
import { getDictionary } from "@/lib/i18n/dictionary";
import { ArrowRight } from "lucide-react";

export function FestivalCard({ festival, lang }: { festival: Festival; lang: UiLang }) {
  const dict = getDictionary(lang);
  const religion = getReligion(festival.religion);
  const remaining = daysUntil(festival.date.nextOccurrence);

  return (
    <Link
      href={`/${lang}/festivals/${festival.slug}`}
      className="focus-ring group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl" aria-hidden>
          {festival.emoji}
        </span>
        {remaining >= 0 && remaining <= 60 && (
          <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted">
            {remaining === 0 ? dict.today : `${remaining} ${dict.daysLeft}`}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{t(festival.title, lang)}</h3>
      <p className="mt-1 text-xs font-medium text-muted">
        {religion ? t(religion.name, lang) : ""} · {t(festival.date.displayDate, lang)}
      </p>
      <p className="mt-2 line-clamp-2 text-sm text-muted">{t(festival.shortDescription, lang)}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {dict.knowMore}
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
