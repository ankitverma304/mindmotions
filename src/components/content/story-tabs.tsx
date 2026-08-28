"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { LocalizedText, UiLang, t } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function StoryTabs({
  story,
  lang,
  labels,
}: {
  story: { forChildren: LocalizedText; general: LocalizedText; detailed: LocalizedText };
  lang: UiLang;
  labels: { forChildren: string; generalReader: string; detailedInfo: string };
}) {
  return (
    <Tabs.Root defaultValue="general" className="w-full">
      <Tabs.List className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-surface-2 p-1">
        {[
          { value: "children", label: labels.forChildren },
          { value: "general", label: labels.generalReader },
          { value: "detailed", label: labels.detailedInfo },
        ].map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "focus-ring rounded-full px-3.5 py-1.5 text-sm font-medium text-muted",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            )}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value="children" className="mt-4 whitespace-pre-line text-[15px] leading-relaxed">
        {t(story.forChildren, lang)}
      </Tabs.Content>
      <Tabs.Content value="general" className="mt-4 whitespace-pre-line text-[15px] leading-relaxed">
        {t(story.general, lang)}
      </Tabs.Content>
      <Tabs.Content value="detailed" className="mt-4 whitespace-pre-line text-[15px] leading-relaxed">
        {t(story.detailed, lang)}
      </Tabs.Content>
    </Tabs.Root>
  );
}
