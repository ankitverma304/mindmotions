"use client";

import { useMemo, useState } from "react";
import { aartis } from "@/lib/content/aartis";
import { religions } from "@/lib/content/religions";
import { ReligionSlug, t } from "@/lib/content/types";
import { AartiCard } from "@/components/content/aarti-card";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export default function AartiListPage() {
  const { lang, dict } = useDict();
  const [religionFilter, setReligionFilter] = useState<ReligionSlug | "all">("all");

  const filtered = useMemo(
    () => (religionFilter === "all" ? aartis : aartis.filter((a) => a.religion === religionFilter)),
    [religionFilter]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.navAarti}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        {lang === "hi"
          ? "हिंदी, संस्कृत मूल पाठ, लिप्यंतरण और अर्थ के साथ — एक शांत, ध्यान-अनुकूल रीडिंग अनुभव।"
          : "With Hindi text, transliteration and meaning — a calm, distraction-free reading experience."}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => setReligionFilter("all")}
          className={cn(
            "focus-ring rounded-full border border-border px-3.5 py-1.5 text-sm font-medium",
            religionFilter === "all" ? "bg-primary text-primary-foreground border-primary" : "bg-surface hover:bg-surface-2"
          )}
        >
          {lang === "hi" ? "सभी" : "All"}
        </button>
        {religions.map((r) => (
          <button
            key={r.slug}
            onClick={() => setReligionFilter(r.slug)}
            className={cn(
              "focus-ring rounded-full border border-border px-3.5 py-1.5 text-sm font-medium",
              religionFilter === r.slug ? "bg-primary text-primary-foreground border-primary" : "bg-surface hover:bg-surface-2"
            )}
          >
            {t(r.name, lang)}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <AartiCard key={a.id} aarti={a} lang={lang} />
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-10 text-center text-sm text-muted">{dict.noResults}</p>}
    </div>
  );
}
