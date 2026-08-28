import type { Metadata } from "next";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerEditorial };
}

export default async function EditorialPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;

  const sections =
    lang === "hi"
      ? [
          {
            h: "मान्यता बनाम तथ्य",
            p: "हम हर जानकारी को 'धार्मिक परंपरा', 'ऐतिहासिक तथ्य', 'सांस्कृतिक मान्यता', 'लोककथा' या 'आधुनिक व्याख्या' के रूप में स्पष्ट रूप से चिह्नित करते हैं, ताकि पाठक भ्रमित न हों।",
          },
          {
            h: "तटस्थता",
            p: "हम किसी भी धर्म का अपमान नहीं करते, किसी की तुलना दूसरे से बेहतर या बदतर के रूप में नहीं करते, और विवादित विषयों पर स्पष्ट रूप से कहते हैं कि अलग-अलग परंपराओं में अलग-अलग मान्यताएं हैं।",
          },
          {
            h: "स्रोत और कॉपीराइट",
            p: "धार्मिक ग्रंथों और आरतियों के लिए हम सार्वजनिक डोमेन या उचित रूप से लाइसेंस प्राप्त सामग्री को प्राथमिकता देते हैं, और जहां संभव हो स्रोत व लेखक का उल्लेख करते हैं। हम आधुनिक कॉपीराइट-प्राप्त अनुवाद या पुस्तकों की नकल नहीं करते।",
          },
          {
            h: "सुधार",
            p: "यदि आपको कोई तथ्यात्मक त्रुटि दिखे, तो कृपया हमें संपर्क पृष्ठ के माध्यम से बताएं।",
          },
        ]
      : [
          {
            h: "Belief vs. fact",
            p: "We clearly label every piece of information as 'religious tradition', 'historical fact', 'cultural belief', 'folklore' or 'modern interpretation', so readers are never confused about what they are reading.",
          },
          {
            h: "Neutrality",
            p: "We do not insult any religion, do not compare one as better or worse than another, and clearly state on disputed topics that different traditions hold different beliefs.",
          },
          {
            h: "Sources and copyright",
            p: "For scriptures and aartis we prefer public-domain or properly licensed material, and credit the source and author where possible. We do not reproduce modern copyrighted translations or books.",
          },
          {
            h: "Corrections",
            p: "If you spot a factual error, please let us know via the Contact page.",
          },
        ];

  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{dict.footerEditorial}</h1>
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
