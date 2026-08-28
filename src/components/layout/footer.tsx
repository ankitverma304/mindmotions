import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionary";
import { UiLang, LANG_LABELS } from "@/lib/content/types";
import { BrandLogo } from "@/components/brand-logo";

export function Footer({ lang }: { lang: UiLang }) {
  const dict = getDictionary(lang);
  const contentLangs = ["hi", "en", "sa", "pa", "ur", "bn", "mr", "gu", "ta", "te"] as const;

  const exploreLinks = [
    { href: `/${lang}/festivals`, label: dict.navFestivals },
    { href: `/${lang}/aarti`, label: dict.navAarti },
    { href: `/${lang}/puja`, label: dict.navPuja },
    { href: `/${lang}/stories`, label: dict.navStories },
    { href: `/${lang}/religions`, label: dict.navKnowledge },
    { href: `/${lang}/regional`, label: dict.navRegional },
  ];

  const legalLinks = [
    { href: `/${lang}/about`, label: dict.footerAbout },
    { href: `/${lang}/contact`, label: dict.footerContact },
    { href: `/${lang}/editorial-policy`, label: dict.footerEditorial },
    { href: `/${lang}/privacy`, label: dict.footerPrivacy },
    { href: `/${lang}/terms`, label: dict.footerTerms },
  ];

  return (
    <footer className="mt-16 border-t border-border bg-surface pb-24 pt-12 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={`/${lang}`} className="flex items-center" aria-label={dict.siteName}>
              <BrandLogo variant="full" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">{dict.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{dict.footerExplore}</h3>
            <ul className="mt-3 space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-muted hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{dict.footerLegal}</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-muted hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${lang}/sources`} className="focus-ring text-sm text-muted hover:text-text">
                  {dict.footerSources}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{dict.footerLanguages}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {contentLangs.map((code) => (
                <span key={code} className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs text-muted">
                  {LANG_LABELS[code]}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">
              {lang === "hi" ? "और भाषाएं जल्द जुड़ेंगी।" : "More languages coming soon."}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} MindMotions.in — {lang === "hi"
              ? "यह एक सूचनात्मक मंच है। हम किसी धर्म का अपमान नहीं करते, किसी की तुलना नहीं करते और यह दावा नहीं करते कि कोई एक परंपरा 'सही' है।"
              : "This is an informational platform. We do not insult any religion, compare traditions negatively, or claim one tradition is the 'correct' one."}
          </p>
        </div>
      </div>
    </footer>
  );
}
