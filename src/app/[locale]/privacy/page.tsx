import type { Metadata } from "next";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerPrivacy };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;

  const sections =
    lang === "hi"
      ? [
          { h: "हम क्या संग्रहीत करते हैं", p: "आपकी भाषा और धर्म प्राथमिकता, तथा सहेजे गए (बुकमार्क) आइटम केवल आपके ब्राउज़र के लोकल स्टोरेज में रखे जाते हैं — ये हमारे सर्वर पर नहीं भेजे जाते।" },
          { h: "कुकीज़", p: "यह प्रोटोटाइप ट्रैकिंग कुकीज़ का उपयोग नहीं करता।" },
          { h: "तीसरे पक्ष की सेवाएं", p: "भविष्य में एनालिटिक्स या CMS सेवाएं जोड़े जाने पर इस नीति को अपडेट किया जाएगा।" },
        ]
      : [
          { h: "What we store", p: "Your language and religion preference, along with bookmarked items, are stored only in your browser's local storage — they are not sent to our servers." },
          { h: "Cookies", p: "This prototype does not use tracking cookies." },
          { h: "Third-party services", p: "This policy will be updated if analytics or CMS services are added in the future." },
        ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{lang === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}</h1>
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
