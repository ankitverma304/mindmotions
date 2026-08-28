import type { Metadata } from "next";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerTerms };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;

  const sections =
    lang === "hi"
      ? [
          { h: "उद्देश्य", p: "MindMotions केवल सूचनात्मक उद्देश्यों के लिए है। यहां दी गई जानकारी धार्मिक, ऐतिहासिक या चिकित्सीय सलाह का विकल्प नहीं है।" },
          { h: "सामग्री की सटीकता", p: "हम सटीकता के लिए प्रयासरत रहते हैं, लेकिन धार्मिक और ऐतिहासिक विषयों पर विभिन्न परंपराओं में मान्यताएं भिन्न हो सकती हैं। कृपया स्रोत अनुभाग देखें।" },
          { h: "उचित उपयोग", p: "कृपया इस सामग्री का उपयोग सम्मानजनक और गैर-द्वेषपूर्ण तरीके से करें।" },
        ]
      : [
          { h: "Purpose", p: "MindMotions is for informational purposes only. Content here is not a substitute for religious, historical or medical advice." },
          { h: "Content accuracy", p: "We strive for accuracy, but beliefs on religious and historical topics vary across traditions. Please refer to the sources section on each page." },
          { h: "Fair use", p: "Please use this content respectfully and not for hateful purposes." },
        ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{lang === "hi" ? "उपयोग की शर्तें" : "Terms of Use"}</h1>
      <div className="mt-6 space-y-6">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-semibold">{s.h}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
