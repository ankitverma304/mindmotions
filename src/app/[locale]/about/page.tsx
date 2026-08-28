import type { Metadata } from "next";
import { UiLang } from "@/lib/content/types";
import { getDictionary } from "@/lib/i18n/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as UiLang);
  return { title: dict.footerAbout };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = locale as UiLang;

  const content =
    lang === "hi"
      ? {
          title: "MindMotions के बारे में",
          paras: [
            "MindMotions एक बहुभाषी सूचनात्मक मंच है, जो त्योहारों, पूजा-विधियों, आरतियों, प्रार्थनाओं और धार्मिक-सांस्कृतिक परंपराओं की सरल, विश्वसनीय जानकारी उपलब्ध कराता है।",
            "हमारा उद्देश्य किसी धर्म का प्रचार करना नहीं, बल्कि परिवारों — विशेषकर बच्चों और वरिष्ठ नागरिकों — को उनकी और दूसरों की परंपराओं को समझने में मदद करना है।",
            "हम धार्मिक मान्यता, ऐतिहासिक तथ्य, सांस्कृतिक परंपरा, लोककथा और आधुनिक व्याख्या के बीच स्पष्ट अंतर रखने की कोशिश करते हैं, ताकि पाठक हमेशा जान सकें कि वे किस तरह की जानकारी पढ़ रहे हैं।",
            "हम किसी धर्म की तुलना दूसरे से बेहतर या बदतर के रूप में नहीं करते।",
          ],
        }
      : {
          title: "About MindMotions",
          paras: [
            "MindMotions is a multilingual informational platform offering simple, reliable information about festivals, puja procedures, aarti, prayers and religious-cultural traditions.",
            "Our goal is not to promote any single religion, but to help families — especially children and senior citizens — understand their own and others' traditions.",
            "We try to clearly distinguish between religious belief, historical fact, cultural tradition, folklore and modern interpretation, so readers always know what kind of information they are reading.",
            "We do not compare any religion as better or worse than another.",
          ],
        };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold sm:text-3xl">{content.title}</h1>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
        {content.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
