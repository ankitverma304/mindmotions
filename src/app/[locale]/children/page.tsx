import Link from "next/link";
import type { Metadata } from "next";
import { allFestivals } from "@/lib/content/festivals";
import { UiLang, t } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";
import { Baby } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.childrensCorner };
}

export default async function ChildrenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Baby className="size-6" aria-hidden />
        </span>
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{dict.childrensCorner}</h1>
          <p className="text-sm text-muted">
            {lang === "hi" ? "बहुत सरल भाषा में, 5 मिनट में समझने लायक कहानियां।" : "Very simple language — stories you can understand in 5 minutes."}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allFestivals.map((f) => (
          <Link
            key={f.id}
            href={`/${lang}/stories/${f.slug}`}
            className="focus-ring flex flex-col rounded-2xl border border-border bg-surface p-5 hover:shadow-lg"
          >
            <span className="text-3xl" aria-hidden>
              {f.emoji}
            </span>
            <h2 className="mt-3 text-lg font-semibold">{t(f.title, lang)}</h2>
            <p className="mt-1 text-xs font-semibold text-primary">
              {lang === "hi" ? "5 मिनट में समझें" : "Understand in 5 minutes"}
            </p>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{t(f.story.forChildren, lang)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
