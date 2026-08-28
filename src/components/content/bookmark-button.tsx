"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { ContentKind } from "@/lib/content/types";
import { useBookmarks } from "@/lib/hooks/use-bookmarks";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export function BookmarkButton({
  kind,
  slug,
  title,
  emoji,
}: {
  kind: ContentKind;
  slug: string;
  title: string;
  emoji?: string;
}) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { dict } = useDict();
  const active = isBookmarked(kind, slug);

  return (
    <button
      onClick={() => toggleBookmark({ kind, slug, title, emoji })}
      className={cn(
        "focus-ring inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium",
        active ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface hover:bg-surface-2"
      )}
      aria-pressed={active}
    >
      {active ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
      {active ? dict.bookmarked : dict.bookmark}
    </button>
  );
}
