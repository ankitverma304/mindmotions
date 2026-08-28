import { notFound } from "next/navigation";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { UiLang } from "@/lib/content/types";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { FirstVisitPrompt } from "@/components/first-visit-prompt";

const VALID_LOCALES: UiLang[] = ["hi", "en"];

export function generateStaticParams() {
  return VALID_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as UiLang)) notFound();
  const lang = locale as UiLang;

  return (
    <LocaleProvider lang={lang}>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer lang={lang} />
      <MobileBottomNav />
      <FirstVisitPrompt />
    </LocaleProvider>
  );
}
