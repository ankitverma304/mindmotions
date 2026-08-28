"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Minus, Plus, AlignJustify, Printer, Volume2 } from "lucide-react";
import { Aarti, UiLang, t } from "@/lib/content/types";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export function AartiReader({ aarti, lang }: { aarti: Aarti; lang: UiLang }) {
  const { dict } = useDict();
  const [fontSize, setFontSize] = useState(18);
  const [relaxed, setRelaxed] = useState(true);

  const tabs = [
    { value: "hindi", label: dict.originalText, content: aarti.textHindi },
    ...(aarti.textSanskrit ? [{ value: "sanskrit", label: "संस्कृत", content: aarti.textSanskrit }] : []),
    ...(aarti.transliteration ? [{ value: "translit", label: dict.transliteration, content: aarti.transliteration }] : []),
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface-2/60 p-2 print:hidden">
        <div className="flex items-center gap-1 rounded-full border border-border bg-surface px-1.5 py-1">
          <button
            aria-label="Decrease font size"
            onClick={() => setFontSize((s) => Math.max(14, s - 2))}
            className="focus-ring flex size-7 items-center justify-center rounded-full hover:bg-surface-2"
          >
            <Minus className="size-3.5" />
          </button>
          <span className="w-8 text-center text-xs text-muted">{fontSize}</span>
          <button
            aria-label="Increase font size"
            onClick={() => setFontSize((s) => Math.min(30, s + 2))}
            className="focus-ring flex size-7 items-center justify-center rounded-full hover:bg-surface-2"
          >
            <Plus className="size-3.5" />
          </button>
        </div>
        <button
          onClick={() => setRelaxed((v) => !v)}
          className={cn(
            "focus-ring flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-surface-2",
            relaxed && "border-primary text-primary"
          )}
        >
          <AlignJustify className="size-3.5" />
          {dict.fontSize}
        </button>
        <button
          disabled
          title={lang === "hi" ? "ऑडियो जल्द उपलब्ध होगा" : "Audio coming soon"}
          className="focus-ring flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium opacity-50"
        >
          <Volume2 className="size-3.5" />
          {dict.listen}
        </button>
        <button
          onClick={() => window.print()}
          className="focus-ring flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
        >
          <Printer className="size-3.5" />
          {dict.print}
        </button>
      </div>

      <Tabs.Root defaultValue="hindi" className="mt-5">
        <Tabs.List className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface-2 p-1 print:hidden">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="focus-ring rounded-full px-3.5 py-1.5 text-sm font-medium text-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className={cn(
              "font-devanagari-serif mt-5 whitespace-pre-line text-center",
              relaxed ? "leading-[2.1]" : "leading-relaxed",
              tab.value === "translit" && "font-sans text-left sm:text-center"
            )}
            style={{ fontSize }}
          >
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">{dict.meaning}</h2>
        <p className="mt-2 text-[15px] leading-relaxed">{t(aarti.meaning, lang)}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-surface-2/40 p-4 text-xs text-muted">
        <span className="font-semibold">{dict.sources}: </span>
        {aarti.source.label}
        {aarti.source.author ? ` · ${aarti.source.author}` : ""}
        {aarti.source.copyrightStatus ? ` · ${aarti.source.copyrightStatus}` : ""}
      </div>
    </div>
  );
}
