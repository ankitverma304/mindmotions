"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, HandHeart, Search, Bookmark } from "lucide-react";
import { useDict } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const { lang, dict } = useDict();
  const pathname = usePathname();

  const items = [
    { href: `/${lang}`, label: dict.mobileHome, icon: Home },
    { href: `/${lang}/festivals`, label: dict.mobileFestivals, icon: CalendarDays },
    { href: `/${lang}/aarti`, label: dict.mobilePrayer, icon: HandHeart },
    { href: `/${lang}/search`, label: dict.mobileSearch, icon: Search },
    { href: `/${lang}/bookmarks`, label: dict.bookmark, icon: Bookmark },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur lg:hidden"
      aria-label="Mobile bottom navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-muted",
                active && "text-primary"
              )}
            >
              <Icon className="size-5" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
