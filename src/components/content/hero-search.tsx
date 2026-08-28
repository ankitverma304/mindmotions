"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useDict } from "@/lib/i18n/locale-context";

const EXAMPLES_HI = ["Diwali क्यों मनाई जाती है?", "Holi story", "लक्ष्मी आरती", "Hanuman Chalisa", "ईद क्यों मनाई जाती है?"];
const EXAMPLES_EN = ["Why is Diwali celebrated?", "Holi story", "Lakshmi Aarti", "Hanuman Chalisa", "Why is Eid celebrated?"];

export function HeroSearch() {
  const [q, setQ] = useState("");
  const router = useRouter();
  const { lang, dict } = useDict();
  const examples = lang === "hi" ? EXAMPLES_HI : EXAMPLES_EN;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/${lang}/search?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <div className="w-full max-w-2xl">
      <p className="mb-2 text-sm font-medium text-muted">{dict.searchQuestion}</p>
      <form onSubmit={submit} className="flex items-center gap-2 rounded-2xl border border-border bg-surface p-2 shadow-sm">
        <Search className="ml-2 size-5 shrink-0 text-muted" aria-hidden />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={dict.searchPlaceholder}
          className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted sm:text-base"
        />
        <button
          type="submit"
          className="focus-ring shrink-0 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          {dict.search}
        </button>
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <button
            key={ex}
            onClick={() => router.push(`/${lang}/search?q=${encodeURIComponent(ex)}`)}
            className="focus-ring rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted hover:bg-surface"
          >
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}
