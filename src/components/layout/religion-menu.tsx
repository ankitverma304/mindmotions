"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { ChevronDown, Layers } from "lucide-react";
import { religions } from "@/lib/content/religions";
import { t } from "@/lib/content/types";
import { useLocale } from "@/lib/i18n/locale-context";
import { useReligionTheme } from "@/lib/theme/religion-theme";
import { cn } from "@/lib/utils";

export function ReligionMenu() {
  const lang = useLocale();
  const { religion, setReligion } = useReligionTheme();
  const current = religions.find((r) => r.slug === religion);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="focus-ring flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium hover:bg-surface-2">
          <span aria-hidden>{current ? current.symbol : "🪔"}</span>
          <span className="hidden sm:inline">{current ? t(current.name, lang) : lang === "hi" ? "सभी धर्म" : "All Religions"}</span>
          <ChevronDown className="size-3.5 text-muted" aria-hidden />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 w-64 rounded-2xl border border-border bg-surface p-2 shadow-xl"
        >
          <DropdownMenu.Item
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm outline-none hover:bg-surface-2",
              religion === "default" && "bg-surface-2 font-medium"
            )}
            onSelect={() => setReligion("default")}
          >
            <Layers className="size-4 text-muted" aria-hidden />
            {lang === "hi" ? "सभी परंपराएं" : "All Traditions"}
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          {religions.map((r) => (
            <DropdownMenu.Item key={r.slug} asChild>
              <Link
                href={`/${lang}/religions/${r.slug}`}
                onClick={() => setReligion(r.slug)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm outline-none hover:bg-surface-2",
                  religion === r.slug && "bg-surface-2 font-medium"
                )}
              >
                <span aria-hidden>{r.symbol}</span>
                {t(r.name, lang)}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
