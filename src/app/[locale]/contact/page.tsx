import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerContact };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{lang === "hi" ? "संपर्क करें" : "Contact Us"}</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        {lang === "hi"
          ? "किसी जानकारी में सुधार, स्रोत सुझाव, या सामान्य प्रश्न के लिए हमें लिखें। हम हर सुझाव को गंभीरता से पढ़ते हैं।"
          : "Write to us for content corrections, source suggestions, or general questions. We read every message carefully."}
      </p>
      <a
        href="mailto:hello@mindmotions.in"
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-2"
      >
        <Mail className="size-4" aria-hidden />
        hello@mindmotions.in
      </a>
    </div>
  );
}
