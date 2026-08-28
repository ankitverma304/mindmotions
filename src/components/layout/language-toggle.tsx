"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/locale-context";
import { UiLang } from "@/lib/content/types";
import { cn } from "@/lib/utils";

function pathForLocale(pathname: string, lang: UiLang) {
  const parts = pathname.split("/");
  parts[1] = lang;
  return parts.join("/") || "/";
}

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname();
  const lang = useLocale();

  const langs: { code: UiLang; label: string }[] = [
    { code: "hi", label: "हिंदी" },
    { code: "en", label: "English" },
  ];

  return (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-xs", className)}>
      {langs.map((l) => (
        <Link
          key={l.code}
          href={pathForLocale(pathname, l.code)}
          className={cn(
            "focus-ring rounded-full px-2.5 py-1 font-medium transition-colors",
            lang === l.code ? "bg-primary text-primary-foreground" : "text-muted hover:text-text"
          )}
          aria-current={lang === l.code ? "true" : undefined}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
