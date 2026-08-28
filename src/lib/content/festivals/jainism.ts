import { Festival } from "../types";

export const jainFestivals: Festival[] = [
  {
    id: "fest-mahavir-jayanti",
    slug: "mahavir-jayanti",
    religion: "jainism",
    title: { hi: "महावीर जयंती", en: "Mahavir Jayanti" },
    region: ["north-india", "west-india", "global"],
    date: { type: "lunar", month: 4, nextOccurrence: "2027-04-20", displayDate: { hi: "अप्रैल 2027 (चैत्र शुक्ल त्रयोदशी)", en: "April 2027 (Chaitra Shukla Trayodashi)" } },
    duration: { hi: "1 दिन", en: "1 day" },
    shortDescription: {
      hi: "महावीर जयंती जैन धर्म के चौबीसवें और अंतिम तीर्थंकर भगवान महावीर के जन्म का उत्सव है।",
      en: "Mahavir Jayanti celebrates the birth of Bhagwan Mahavira, the twenty-fourth and last Tirthankara of Jainism.",
    },
    whatIsIt: {
      hi: "यह दिन भगवान महावीर के जन्म की स्मृति में मनाया जाता है, जिनकी शिक्षाओं — अहिंसा, सत्य, अपरिग्रह — पर जैन धर्म का आधार टिका है।",
      en: "This day commemorates the birth of Bhagwan Mahavira, whose teachings — non-violence, truth and non-attachment — form the foundation of Jainism.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "जैन परंपरा में भगवान महावीर को अंतिम (चौबीसवें) तीर्थंकर के रूप में पूजा जाता है, जिन्होंने कठोर तपस्या के बाद केवल-ज्ञान (पूर्ण ज्ञान) प्राप्त किया।", en: "In Jain tradition, Bhagwan Mahavira is revered as the last (twenty-fourth) Tirthankara, who attained Kevala Jnana (omniscience) after rigorous asceticism." } },
      { infoType: "historical-fact", text: { hi: "अधिकांश इतिहासकार महावीर को गौतम बुद्ध के समकालीन (लगभग छठी शताब्दी ईसा पूर्व) मानते हैं, हालांकि सटीक जन्म-तिथि को लेकर विद्वानों में मतभेद हैं।", en: "Most historians place Mahavira as a contemporary of Gautama Buddha (around the sixth century BCE), though scholars differ on the exact birth date." } },
    ],
    story: {
      forChildren: { hi: "भगवान महावीर एक राजकुमार थे, लेकिन उन्होंने सुख-सुविधाएं छोड़कर सच्चाई और शांति की खोज में तपस्या की। उन्होंने सिखाया कि किसी को भी दुख नहीं पहुंचाना चाहिए — यहां तक कि सबसे छोटे जीव को भी नहीं। इसे अहिंसा कहते हैं।", en: "Bhagwan Mahavira was a prince, but he gave up comfort to seek truth and peace through deep meditation. He taught that no one should ever hurt any living being — not even the smallest creature. This is called ahimsa (non-violence)." },
      general: { hi: "महावीर का जन्म एक राजपरिवार में हुआ माना जाता है। तीस वर्ष की आयु में उन्होंने राजसी जीवन त्याग दिया और बारह वर्षों तक कठोर तपस्या की। इसके बाद उन्हें केवल-ज्ञान प्राप्त हुआ। उन्होंने अहिंसा, सत्य, अस्तेय (चोरी न करना), ब्रह्मचर्य और अपरिग्रह (अनावश्यक संग्रह न करना) के पांच व्रतों की शिक्षा दी।", en: "Mahavira is believed to have been born into a royal family. At the age of thirty he renounced royal life and undertook twelve years of intense asceticism, after which he attained Kevala Jnana. He taught the five vows of non-violence, truth, non-stealing, celibacy and non-attachment." },
      detailed: { hi: "जैन परंपरा में समय को चक्रीय माना जाता है, जिसमें चौबीस तीर्थंकर मार्गदर्शक के रूप में अवतरित होते हैं — महावीर इस चक्र के अंतिम तीर्थंकर हैं। उनकी शिक्षाओं का प्रभाव जैन दर्शन के दो प्रमुख संप्रदायों — श्वेतांबर और दिगंबर — दोनों में देखा जाता है, हालांकि जीवन-वृत्तांत के कुछ विवरणों में इन संप्रदायों की मान्यताएं थोड़ी भिन्न हैं।", en: "Jain tradition views time as cyclical, with twenty-four Tirthankaras appearing as guides in each cycle — Mahavira is the last of this cycle. His teachings shape both major Jain traditions, Svetambara and Digambara, though some details of his life account differ slightly between them." },
    },
    howCelebrated: {
      hi: "जैन मंदिरों में विशेष पूजा और जुलूस होते हैं, महावीर की मूर्ति का अभिषेक किया जाता है, प्रवचन आयोजित होते हैं, दान दिया जाता है और अहिंसा व करुणा के संदेश का प्रचार किया जाता है।",
      en: "Jain temples hold special prayers and processions, Mahavira's idol is ritually bathed (abhishek), discourses are held, charity is given, and the message of non-violence and compassion is spread.",
    },
    childExplanation: { hi: "महावीर जयंती हमें सिखाती है कि किसी भी जीव को दुख नहीं पहुंचाना चाहिए। यह भगवान महावीर के जन्मदिन का त्योहार है, जिन्होंने अहिंसा का रास्ता दिखाया।", en: "Mahavir Jayanti teaches us not to hurt any living being. It celebrates the birthday of Bhagwan Mahavira, who showed the path of non-violence." },
    faqs: [
      { question: { hi: "तीर्थंकर किसे कहते हैं?", en: "Who is a Tirthankara?" }, answer: { hi: "जैन परंपरा में तीर्थंकर वे आध्यात्मिक गुरु माने जाते हैं जिन्होंने केवल-ज्ञान प्राप्त कर मोक्ष का मार्ग दिखाया।", en: "In Jain tradition, a Tirthankara is a spiritual teacher believed to have attained omniscience and shown the path to liberation." }, infoType: "religious-belief" },
    ],
    sources: [{ label: "जैन आगम एवं परंपरा (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["mahavir jayanti", "महावीर जयंती", "bhagwan mahavir", "mahavir jayanti kyu manate hain"],
    emoji: "🤍",
    seo: {
      title: { hi: "महावीर जयंती क्यों मनाई जाती है? | MindMotions", en: "Why is Mahavir Jayanti Celebrated? | MindMotions" },
      description: { hi: "भगवान महावीर का जीवन, शिक्षाएं और महावीर जयंती की परंपराएं।", en: "The life and teachings of Bhagwan Mahavira, and Mahavir Jayanti traditions." },
    },
  },
];
