"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useBookmarks } from "@/lib/hooks/use-bookmarks";
import { KIND_PATH } from "@/lib/content/kind-meta";
import { useDict } from "@/lib/i18n/locale-context";

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const { lang, dict } = useDict();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-2">
        <Bookmark className="size-6 text-primary" aria-hidden />
        <h1 className="text-2xl font-bold sm:text-3xl">{dict.bookmark}</h1>
      </div>
      <p className="mt-2 text-sm text-muted">
        {lang === "hi"
          ? "आपके सहेजे गए त्योहार, आरती, पूजा और कहानियां यहां दिखेंगी — यह आपके डिवाइस में सुरक्षित रहती हैं।"
          : "Your saved festivals, aarti, puja and stories appear here — stored locally on your device."}
      </p>

      {bookmarks.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted">
          {lang === "hi" ? "अभी कुछ भी सहेजा नहीं गया है।" : "Nothing bookmarked yet."}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {bookmarks
            .sort((a, b) => b.addedAt - a.addedAt)
            .map((b) => (
              <li key={`${b.kind}-${b.slug}`} className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4">
                <span className="text-2xl" aria-hidden>
                  {b.emoji ?? "📌"}
                </span>
                <Link href={`/${lang}${KIND_PATH[b.kind]}/${b.slug}`} className="focus-ring flex-1 text-sm font-semibold hover:underline">
                  {b.title}
                </Link>
                <button
                  onClick={() => toggleBookmark(b)}
                  className="focus-ring rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
                >
                  {lang === "hi" ? "हटाएं" : "Remove"}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
