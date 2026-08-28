"use client";

import { useCallback, useSyncExternalStore } from "react";
import { ContentKind } from "../content/types";

export interface BookmarkEntry {
  kind: ContentKind;
  slug: string;
  title: string;
  emoji?: string;
  addedAt: number;
}

const STORAGE_KEY = "mindmotions-bookmarks";
const CHANGE_EVENT = "mindmotions-bookmarks-changed";
const EMPTY: BookmarkEntry[] = [];

let cachedRaw: string | null = null;
let cachedParsed: BookmarkEntry[] = EMPTY;

function getSnapshot(): BookmarkEntry[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedParsed;
  cachedRaw = raw;
  try {
    cachedParsed = raw ? (JSON.parse(raw) as BookmarkEntry[]) : EMPTY;
  } catch {
    cachedParsed = EMPTY;
  }
  return cachedParsed;
}

function getServerSnapshot(): BookmarkEntry[] {
  return EMPTY;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function writeBookmarks(entries: BookmarkEntry[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useBookmarks() {
  const bookmarks = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isBookmarked = useCallback(
    (kind: ContentKind, slug: string) => bookmarks.some((b) => b.kind === kind && b.slug === slug),
    [bookmarks]
  );

  const toggleBookmark = useCallback((entry: Omit<BookmarkEntry, "addedAt">) => {
    const current = getSnapshot();
    const exists = current.some((b) => b.kind === entry.kind && b.slug === entry.slug);
    const next = exists
      ? current.filter((b) => !(b.kind === entry.kind && b.slug === entry.slug))
      : [...current, { ...entry, addedAt: Date.now() }];
    writeBookmarks(next);
  }, []);

  return { bookmarks, isBookmarked, toggleBookmark };
}
