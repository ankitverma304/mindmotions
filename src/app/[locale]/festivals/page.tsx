"use client";

import { useMemo, useState } from "react";
import { allFestivals, getUpcomingFestivals } from "@/lib/content/festivals";
import { REGION_LABELS, ReligionSlug, RegionSlug, t } from "@/lib/content/types";
import { religions } from "@/lib/content/religions";
import { FestivalCard } from "@/components/content/festival-card";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

type TimeFilter = "all" | "today" | "week" | "month" | "upcoming";

export default function FestivalsPage() {
  const { lang, dict } = useDict();
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [religionFilter, setReligionFilter] = useState<ReligionSlug | "all">("all");
  const [regionFilter, setRegionFilter] = useState<RegionSlug | "all">("all");

  const filtered = useMemo(() => {
    let list = [...allFestivals];
    if (religionFilter !== "all") list = list.filter((f) => f.religion === religionFilter);
    if (regionFilter !== "all") list = list.filter((f) => f.region.includes(regionFilter));

    if (timeFilter !== "all") {
      const upcoming = getUpcomingFestivals();
      const upcomingSlugs = new Set(upcoming.map((f) => f.slug));
      if (timeFilter === "upcoming") {
        list = list.filter((f) => upcomingSlugs.has(f.slug));
      } else {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const horizonDays = timeFilter === "today" ? 0 : timeFilter === "week" ? 7 : 31;
        list = list.filter((f) => {
          const days = Math.round((new Date(f.date.nextOccurrence).getTime() - now.getTime()) / 86400000);
          return days >= 0 && days <= horizonDays;
        });
      }
    }

    return list.sort((a, b) => new Date(a.date.nextOccurrence).getTime() - new Date(b.date.nextOccurrence).getTime());
  }, [timeFilter, religionFilter, regionFilter]);

  const timeFilters: { key: TimeFilter; label: string }[] = [
    { key: "all", label: dict.allFestivals },
    { key: "today", label: dict.today },
    { key: "week", label: dict.thisWeek },
    { key: "month", label: dict.thisMonth },
    { key: "upcoming", label: dict.upcoming },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.navFestivals}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {timeFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setTimeFilter(f.key)}
            className={cn(
              "focus-ring rounded-full border border-border px-3.5 py-1.5 text-sm font-medium",
              timeFilter === f.key ? "bg-primary text-primary-foreground border-primary" : "bg-surface hover:bg-surface-2"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">{dict.religion}</span>
          <select
            value={religionFilter}
            onChange={(e) => setReligionFilter(e.target.value as ReligionSlug | "all")}
            className="focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
          >
            <option value="all">{lang === "hi" ? "सभी" : "All"}</option>
            {religions.map((r) => (
              <option key={r.slug} value={r.slug}>
                {t(r.name, lang)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">{dict.region}</span>
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value as RegionSlug | "all")}
            className="focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-sm"
          >
            <option value="all">{lang === "hi" ? "सभी" : "All"}</option>
            {Object.entries(REGION_LABELS).map(([slug, label]) => (
              <option key={slug} value={slug}>
                {t(label, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">
        {filtered.length} {lang === "hi" ? "त्योहार मिले" : "festivals found"}
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((f) => (
          <FestivalCard key={f.id} festival={f} lang={lang} />
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-10 text-center text-sm text-muted">{dict.noResults}</p>}
    </div>
  );
}
