"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allFestivals } from "@/lib/content/festivals";
import { getReligion } from "@/lib/content/religions";
import { t } from "@/lib/content/types";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

const MONTHS_HI = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CalendarPage() {
  const { lang, dict } = useDict();
  const currentMonth = new Date().getMonth() + 1;
  const [month, setMonth] = useState(currentMonth);
  const months = lang === "hi" ? MONTHS_HI : MONTHS_EN;

  const festivalsInMonth = useMemo(
    () =>
      allFestivals
        .filter((f) => f.date.month === month)
        .sort((a, b) => new Date(a.date.nextOccurrence).getTime() - new Date(b.date.nextOccurrence).getTime()),
    [month]
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.navCalendar}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "चंद्र-आधारित त्योहारों की तारीखें हर साल बदलती हैं — यहां दी गई तारीखें अनुमानित/उदाहरण के रूप में हैं।"
          : "Dates for lunar-calendar festivals shift every year — dates shown here are illustrative examples."}
      </p>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {months.map((m, i) => {
          const monthNum = i + 1;
          return (
            <button
              key={m}
              onClick={() => setMonth(monthNum)}
              className={cn(
                "focus-ring shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium",
                month === monthNum ? "bg-primary text-primary-foreground border-primary" : "bg-surface hover:bg-surface-2"
              )}
            >
              {m}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-3">
        {festivalsInMonth.map((f) => {
          const religion = getReligion(f.religion);
          return (
            <Link
              key={f.id}
              href={`/${lang}/festivals/${f.slug}`}
              className="focus-ring flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 hover:shadow-lg"
            >
              <span className="text-2xl" aria-hidden>
                {f.emoji}
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{t(f.title, lang)}</span>
                <span className="block text-xs text-muted">
                  {religion ? t(religion.name, lang) : ""} · {t(f.date.displayDate, lang)}
                </span>
              </span>
            </Link>
          );
        })}
        {festivalsInMonth.length === 0 && (
          <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted">
            {lang === "hi" ? "इस महीने कोई त्योहार सूचीबद्ध नहीं है।" : "No festivals listed for this month."}
          </p>
        )}
      </div>
    </div>
  );
}
