"use client";

import Link from "next/link";
import { useDict } from "@/lib/i18n/locale-context";

export default function LocaleNotFound() {
  const { lang, dict } = useDict();
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="text-6xl" aria-hidden>
        🪔
      </span>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
        {lang === "hi" ? "यह पृष्ठ नहीं मिला" : "Page not found"}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {lang === "hi"
          ? "हो सकता है यह जानकारी अभी उपलब्ध न हो, या लिंक बदल गया हो।"
          : "This information may not be available yet, or the link may have changed."}
      </p>
      <Link
        href={`/${lang}`}
        className="focus-ring mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        {dict.navHome}
      </Link>
    </div>
  );
}
