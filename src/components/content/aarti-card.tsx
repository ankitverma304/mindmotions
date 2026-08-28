import Link from "next/link";
import { Aarti, t, UiLang } from "@/lib/content/types";

export function AartiCard({ aarti, lang }: { aarti: Aarti; lang: UiLang }) {
  return (
    <Link
      href={`/${lang}/aarti/${aarti.slug}`}
      className="focus-ring flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-shadow hover:shadow-lg"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-xl" aria-hidden>
        {aarti.emoji}
      </span>
      <span>
        <span className="block text-sm font-semibold">{t(aarti.title, lang)}</span>
        <span className="block text-xs text-muted">{t(aarti.deity, lang)}</span>
      </span>
    </Link>
  );
}
