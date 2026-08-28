"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { search as runSearch } from "@/lib/search";
import { getReligion } from "@/lib/content/religions";
import { t } from "@/lib/content/types";
import { KIND_LABEL, KIND_PATH } from "@/lib/content/kind-meta";
import { useDict } from "@/lib/i18n/locale-context";

// Keyed by the initial ?q= value from the parent, so a new incoming query
// (e.g. from the homepage search box) resets local state via remount instead
// of syncing it inside an effect.
function SearchInner({ initialQ }: { initialQ: string }) {
  const [query, setQuery] = useState(initialQ);
  const { lang, dict } = useDict();

  const results = useMemo(() => runSearch(query, 30), [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.search}</h1>

      <div className="mt-5 flex items-center gap-2 rounded-2xl border border-border bg-surface p-2 shadow-sm">
        <SearchIcon className="ml-2 size-5 shrink-0 text-muted" aria-hidden />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.searchPlaceholder}
          autoFocus
          className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted sm:text-base"
        />
      </div>

      <p className="mt-4 text-sm text-muted">
        {query.trim()
          ? `${results.length} ${lang === "hi" ? "परिणाम मिले" : "results found"}`
          : lang === "hi"
            ? "खोजना शुरू करने के लिए ऊपर टाइप करें।"
            : "Start typing above to search."}
      </p>

      <ul className="mt-4 space-y-3">
        {results.map(({ doc }) => {
          const religion = getReligion(doc.religion);
          return (
            <li key={`${doc.kind}-${doc.slug}`}>
              <Link
                href={`/${lang}${KIND_PATH[doc.kind]}/${doc.slug}`}
                className="focus-ring block rounded-2xl border border-border bg-surface p-4 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted">
                    {t(KIND_LABEL[doc.kind], lang)}
                  </span>
                  {religion && (
                    <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-medium text-muted">
                      {t(religion.name, lang)}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-semibold">{lang === "hi" ? doc.title : doc.titleEn}</p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{doc.shortText}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      {query.trim() && results.length === 0 && <p className="mt-10 text-center text-sm text-muted">{dict.noResults}</p>}
    </div>
  );
}

function SearchParamsReader() {
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";
  return <SearchInner key={initialQ} initialQ={initialQ} />;
}

export default function SearchPage() {
  return (
    <Suspense fallback={null}>
      <SearchParamsReader />
    </Suspense>
  );
}
