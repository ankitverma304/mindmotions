import { Religion } from "./types";

export const religions: Religion[] = [
  {
    slug: "hinduism",
    themeId: "hinduism",
    symbol: "ॐ", // ॐ
    name: { hi: "हिंदू धर्म", en: "Hinduism" },
    languages: ["hi", "sa", "en"],
    shortDescription: {
      hi: "विश्व की सबसे प्राचीन जीवित परंपराओं में से एक, जिसमें अनेक ग्रंथ, देवी-देवता और क्षेत्रीय परंपराएं शामिल हैं।",
      en: "One of the world's oldest living traditions, encompassing many scriptures, deities and regional practices.",
    },
    intro: {
      hi: "हिंदू धर्म भारतीय उपमहाद्वीप की सबसे प्राचीन परंपराओं में से एक है। इसमें अनेक संप्रदाय, ग्रंथ और क्षेत्रीय रीति-रिवाज़ शामिल हैं, इसलिए इसे एक भी परिभाषा में बांधना कठिन है।",
      en: "Hinduism is one of the oldest traditions of the Indian subcontinent. It encompasses many schools of thought, scriptures and regional customs, which is why it resists a single definition.",
    },
  },
  {
    slug: "islam",
    themeId: "islam",
    symbol: "☪", // ☪
    name: { hi: "इस्लाम", en: "Islam" },
    languages: ["hi", "ur", "en"],
    shortDescription: {
      hi: "एक एकेश्वरवादी परंपरा जो कुरान की शिक्षाओं और पैगंबर मुहम्मद (स.) के जीवन पर आधारित है।",
      en: "A monotheistic tradition based on the teachings of the Quran and the life of Prophet Muhammad (PBUH).",
    },
    intro: {
      hi: "इस्लाम एक एकेश्वरवादी धर्म है जिसकी शिक्षाएं कुरान और पैगंबर मुहम्मद (स.) की सुन्नत पर आधारित हैं। दुनिया भर में मुसलमान इसे अलग-अलग सांस्कृतिक संदर्भों में मानते हैं।",
      en: "Islam is a monotheistic faith whose teachings are drawn from the Quran and the traditions (sunnah) of Prophet Muhammad (PBUH). Muslims around the world practice it within diverse cultural contexts.",
    },
  },
  {
    slug: "sikhism",
    themeId: "sikhism",
    symbol: "☬", // ☬
    name: { hi: "सिख धर्म", en: "Sikhism" },
    languages: ["hi", "pa", "en"],
    shortDescription: {
      hi: "गुरु नानक देव जी और नौ अन्य सिख गुरुओं की शिक्षाओं पर आधारित परंपरा, जिसका केंद्र गुरु ग्रंथ साहिब है।",
      en: "A tradition founded on the teachings of Guru Nanak Dev Ji and nine successor Gurus, centred on the Guru Granth Sahib.",
    },
    intro: {
      hi: "सिख धर्म की स्थापना गुरु नानक देव जी ने पंद्रहवीं शताब्दी में पंजाब क्षेत्र में की थी। इसकी शिक्षाएं गुरु ग्रंथ साहिब में संकलित हैं।",
      en: "Sikhism was founded by Guru Nanak Dev Ji in the Punjab region in the fifteenth century. Its teachings are compiled in the Guru Granth Sahib.",
    },
  },
  {
    slug: "christianity",
    themeId: "christianity",
    symbol: "✝", // ✝
    name: { hi: "ईसाई धर्म", en: "Christianity" },
    languages: ["hi", "en"],
    shortDescription: {
      hi: "ईसा मसीह के जीवन और शिक्षाओं पर आधारित परंपरा, जो बाइबल पर आधारित है।",
      en: "A tradition centred on the life and teachings of Jesus Christ, based on the Bible.",
    },
    intro: {
      hi: "ईसाई धर्म ईसा मसीह के जीवन, शिक्षाओं और पुनरुत्थान में विश्वास पर आधारित है। भारत सहित दुनिया भर में इसके अनेक संप्रदाय और परंपराएं हैं।",
      en: "Christianity is centred on the life, teachings and resurrection of Jesus Christ. It has many denominations and traditions across the world, including in India.",
    },
  },
  {
    slug: "jainism",
    themeId: "jainism",
    symbol: "☸", // ☸ used as a neutral dharma-wheel style glyph
    name: { hi: "जैन धर्म", en: "Jainism" },
    languages: ["hi", "en"],
    shortDescription: {
      hi: "अहिंसा, अनेकांतवाद और तपस्या पर आधारित प्राचीन भारतीय श्रमण परंपरा, जिसके मार्गदर्शक तीर्थंकर हैं।",
      en: "An ancient Indian shramana tradition centred on non-violence (ahimsa), many-sidedness (anekantavada) and asceticism, guided by the Tirthankaras.",
    },
    intro: {
      hi: "जैन धर्म भारत की प्राचीन श्रमण परंपराओं में से एक है, जिसका केंद्रीय सिद्धांत अहिंसा है। इसके मार्गदर्शक चौबीस तीर्थंकर माने जाते हैं, जिनमें अंतिम भगवान महावीर थे।",
      en: "Jainism is one of India's ancient shramana traditions, with non-violence as its central principle. It recognises twenty-four Tirthankaras as spiritual guides, the last being Bhagwan Mahavira.",
    },
  },
  {
    slug: "buddhism",
    themeId: "buddhism",
    symbol: "☸", // ☸
    name: { hi: "बौद्ध धर्म", en: "Buddhism" },
    languages: ["hi", "en"],
    shortDescription: {
      hi: "गौतम बुद्ध की शिक्षाओं पर आधारित परंपरा, जो दुख, उसके कारण और उससे मुक्ति के मार्ग की व्याख्या करती है।",
      en: "A tradition based on the teachings of Gautama Buddha, explaining suffering, its causes and the path to liberation from it.",
    },
    intro: {
      hi: "बौद्ध धर्म की नींव गौतम बुद्ध ने रखी, जिन्हें ईसा पूर्व छठी शताब्दी के आसपास बोधगया में ज्ञान प्राप्त हुआ था। यह परंपरा एशिया के कई देशों में अलग-अलग रूपों में प्रचलित है।",
      en: "Buddhism was founded by Gautama Buddha, who is said to have attained enlightenment at Bodh Gaya around the sixth century BCE. The tradition is practised in varied forms across many Asian countries.",
    },
  },
];

export function getReligion(slug: string) {
  return religions.find((r) => r.slug === slug);
}
