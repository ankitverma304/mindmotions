import Link from "next/link";
import { Religion, t, UiLang } from "@/lib/content/types";
import { RELIGION_ACCENT } from "@/lib/content/religion-colors";

export function ReligionCard({ religion, lang }: { religion: Religion; lang: UiLang }) {
  const accent = RELIGION_ACCENT[religion.slug];
  return (
    <Link
      href={`/${lang}/religions/${religion.slug}`}
      className="focus-ring group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span
        className="flex size-14 items-center justify-center rounded-2xl text-2xl"
        style={{ background: accent.bg, color: accent.fg }}
        aria-hidden
      >
        {religion.symbol}
      </span>
      <span className="text-base font-semibold">{t(religion.name, lang)}</span>
      <span className="line-clamp-2 text-xs text-muted">{t(religion.shortDescription, lang)}</span>
    </Link>
  );
}
