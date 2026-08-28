import { InfoType, LocalizedText, ReligionSlug } from "./types";

export interface DailyFact {
  id: string;
  religion?: ReligionSlug;
  infoType: InfoType;
  text: LocalizedText;
  relatedSlug?: string;
  relatedKind?: "festival" | "aarti" | "puja";
}

export const dailyFacts: DailyFact[] = [
  {
    id: "fact-1",
    religion: "hinduism",
    infoType: "cultural-belief",
    text: {
      hi: "भारत के अलग-अलग क्षेत्रों में दीपावली से जुड़ी परंपराएं अलग-अलग हैं — कहीं यह राम की वापसी का उत्सव है, तो कहीं काली पूजा या महावीर के निर्वाण का दिन।",
      en: "Diwali traditions differ across India — in some regions it celebrates Rama's return, elsewhere it is Kali Puja or the day of Mahavira's nirvana.",
    },
    relatedSlug: "diwali",
    relatedKind: "festival",
  },
  {
    id: "fact-2",
    religion: "islam",
    infoType: "historical-fact",
    text: {
      hi: "इस्लामी कैलेंडर चंद्र-आधारित है, इसलिए रमज़ान और ईद हर साल ग्रेगोरियन कैलेंडर में लगभग 10-11 दिन पहले आते हैं।",
      en: "The Islamic calendar is lunar, so Ramadan and Eid shift roughly 10-11 days earlier each year on the Gregorian calendar.",
    },
    relatedSlug: "ramadan",
    relatedKind: "festival",
  },
  {
    id: "fact-3",
    religion: "sikhism",
    infoType: "historical-fact",
    text: {
      hi: "गुरु नानक देव जी का जन्म 1469 ई. में तलवंडी में हुआ था, जिसे आज ननकाना साहिब (पाकिस्तान) के नाम से जाना जाता है।",
      en: "Guru Nanak Dev Ji was born in 1469 CE in Talwandi, known today as Nankana Sahib in Pakistan.",
    },
    relatedSlug: "gurpurab",
    relatedKind: "festival",
  },
  {
    id: "fact-4",
    religion: "christianity",
    infoType: "historical-fact",
    text: {
      hi: "बाइबल में यीशु मसीह के जन्म की सटीक तारीख नहीं दी गई है — 25 दिसंबर की परंपरा चौथी शताब्दी में स्थापित हुई।",
      en: "The Bible does not specify an exact date for Jesus's birth — the 25 December tradition was established in the fourth century.",
    },
    relatedSlug: "christmas",
    relatedKind: "festival",
  },
  {
    id: "fact-5",
    religion: "jainism",
    infoType: "religious-belief",
    text: {
      hi: "जैन परंपरा में चौबीस तीर्थंकर माने जाते हैं, जिनमें भगवान महावीर अंतिम तीर्थंकर थे।",
      en: "Jain tradition recognises twenty-four Tirthankaras, of whom Bhagwan Mahavira was the last.",
    },
    relatedSlug: "mahavir-jayanti",
    relatedKind: "festival",
  },
  {
    id: "fact-6",
    religion: "buddhism",
    infoType: "religious-belief",
    text: {
      hi: "बौद्ध मान्यता के अनुसार गौतम बुद्ध के जीवन की तीन प्रमुख घटनाएं — जन्म, ज्ञान-प्राप्ति और महापरिनिर्वाण — सभी वैशाख पूर्णिमा के दिन हुईं।",
      en: "Buddhist belief holds that three major events in Gautama Buddha's life — birth, enlightenment and mahaparinirvana — all occurred on Vaishakha Purnima.",
    },
    relatedSlug: "buddha-purnima",
    relatedKind: "festival",
  },
  {
    id: "fact-7",
    infoType: "cultural-belief",
    text: {
      hi: "होली और ईस्टर दोनों ही अलग-अलग परंपराओं में वसंत ऋतु और नई शुरुआत से जुड़े त्योहार माने जाते हैं।",
      en: "Both Holi and Easter are, in their respective traditions, associated with spring and new beginnings.",
    },
  },
  {
    id: "fact-8",
    religion: "hinduism",
    infoType: "folklore",
    text: {
      hi: "होली की दही-हांडी जैसी कई परंपराएं समय के साथ सामाजिक उत्सव और खेल के रूप में भी विकसित हुई हैं, जो मूल धार्मिक कथा से आगे बढ़कर सांस्कृतिक पहचान बन गई हैं।",
      en: "Traditions like Dahi Handi have, over time, also grown into social celebrations and games — becoming cultural identities that extend beyond their original religious story.",
    },
  },
];

export function getRandomFact(seed?: number): DailyFact {
  const idx = seed !== undefined ? seed % dailyFacts.length : Math.floor(Math.random() * dailyFacts.length);
  return dailyFacts[idx];
}
