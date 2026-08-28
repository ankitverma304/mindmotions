"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDict } from "@/lib/i18n/locale-context";
import { LanguageToggle } from "./language-toggle";
import { ReligionMenu } from "./religion-menu";
import { DarkModeToggle } from "./dark-mode-toggle";
import { SearchOverlay } from "./search-overlay";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

export function Header() {
  const { lang, dict } = useDict();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: `/${lang}`, label: dict.navHome },
    { href: `/${lang}/festivals`, label: dict.navFestivals },
    { href: `/${lang}/aarti`, label: dict.navAarti },
    { href: `/${lang}/puja`, label: dict.navPuja },
    { href: `/${lang}/stories`, label: dict.navStories },
    { href: `/${lang}/religions`, label: dict.navKnowledge },
    { href: `/${lang}/regional`, label: dict.navRegional },
    { href: `/${lang}/about`, label: dict.navAbout },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={`/${lang}`} className="focus-ring flex items-center shrink-0" aria-label={dict.siteName}>
          <span className="sm:hidden">
            <BrandLogo variant="symbol" priority />
          </span>
          <span className="hidden sm:block">
            <BrandLogo variant="full" priority />
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-surface-2 hover:text-text",
                  active && "bg-surface-2 text-text"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SearchOverlay />
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <div className="hidden sm:block">
            <ReligionMenu />
          </div>
          <DarkModeToggle />
          <button
            className="focus-ring flex size-9 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-surface px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="focus-ring rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-surface-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <LanguageToggle />
            <ReligionMenu />
          </div>
        </div>
      )}
    </header>
  );
}
