import { Festival } from "../types";

export const sikhFestivals: Festival[] = [
  {
    id: "fest-gurpurab",
    slug: "gurpurab",
    religion: "sikhism",
    title: { hi: "गुरुपर्व", en: "Gurpurab", pa: "ਗੁਰਪੁਰਬ" },
    alsoKnownAs: { hi: "गुरु नानक जयंती", en: "Guru Nanak Jayanti" },
    region: ["north-india", "global"],
    date: { type: "lunar", month: 11, nextOccurrence: "2026-11-24", displayDate: { hi: "24 नवंबर 2026 (कार्तिक पूर्णिमा)", en: "24 November 2026 (Kartik Purnima)" } },
    duration: { hi: "3 दिन (अखंड पाठ सहित)", en: "3 days (including Akhand Path)" },
    shortDescription: {
      hi: "गुरुपर्व सिख गुरुओं के जन्म या ज्ञान-प्राप्ति दिवस के उपलक्ष्य में मनाया जाता है; सबसे प्रमुख गुरुपर्व गुरु नानक देव जी की जयंती है।",
      en: "Gurpurab commemorates the birth or key milestones of the Sikh Gurus; the most widely observed is Guru Nanak Dev Ji's birth anniversary.",
    },
    whatIsIt: {
      hi: "गुरुपर्व सिख धर्म के गुरुओं से जुड़े महत्वपूर्ण दिनों का उत्सव है। गुरु नानक जयंती इनमें सबसे प्रमुख मानी जाती है, जो सिख धर्म के प्रथम गुरु के जन्म का उत्सव है।",
      en: "Gurpurab marks important days associated with the Sikh Gurus. Guru Nanak Jayanti, the most prominent, celebrates the birth of the first Sikh Guru.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "सिख परंपरा में गुरु नानक देव जी को पहला गुरु और सिख धर्म का संस्थापक माना जाता है, जिन्होंने एक ईश्वर, समानता और सेवा की शिक्षा दी।", en: "In Sikh tradition, Guru Nanak Dev Ji is regarded as the first Guru and founder of Sikhism, who taught belief in one God, equality and selfless service." } },
      { infoType: "historical-fact", text: { hi: "गुरु नानक देव जी का जन्म 1469 ई. में तलवंडी (अब ननकाना साहिब, पाकिस्तान) में हुआ था — यह ऐतिहासिक रूप से दस्तावेज़ीकृत तथ्य है।", en: "Guru Nanak Dev Ji was born in 1469 CE in Talwandi (now Nankana Sahib, Pakistan) — a historically documented fact." } },
    ],
    story: {
      forChildren: { hi: "गुरु नानक देव जी सिखों के पहले गुरु थे। वे लोगों को सिखाते थे कि सब इंसान बराबर हैं, ईमानदारी से काम करना चाहिए और दूसरों की मदद करनी चाहिए। उनके जन्मदिन को गुरुपर्व के रूप में मनाया जाता है।", en: "Guru Nanak Dev Ji was the first Sikh Guru. He taught that all people are equal, that one should work honestly, and help others. His birthday is celebrated as Gurpurab." },
      general: { hi: "गुरु नानक देव जी का जन्म 1469 में पंजाब क्षेत्र में हुआ। उन्होंने एक ईश्वर की उपासना, जाति-भेद के विरोध, समानता और 'नाम जपो, किरत करो, वंड छको' (ईश्वर का नाम जपें, ईमानदारी से कमाएं, बांटकर खाएं) के सिद्धांत का प्रचार किया। उनकी शिक्षाएं आगे चलकर गुरु ग्रंथ साहिब में संकलित हुईं।", en: "Guru Nanak Dev Ji was born in 1469 in the Punjab region. He preached devotion to one God, opposition to caste discrimination, equality, and the principle of 'Naam Japo, Kirat Karo, Vand Chhako' (remember God, earn honestly, share with others). His teachings were later compiled into the Guru Granth Sahib." },
      detailed: { hi: "गुरु नानक देव जी ने भारत और उसके बाहर व्यापक यात्राएं (उदासियां) कीं और विभिन्न धर्मों के लोगों से संवाद किया। गुरुपर्व के अवसर पर गुरुद्वारों में अखंड पाठ (गुरु ग्रंथ साहिब का निरंतर पाठ), नगर कीर्तन (शोभायात्रा) और लंगर (सामूहिक भोज) का आयोजन होता है। गुरुपर्व केवल गुरु नानक जयंती तक सीमित नहीं है — अन्य गुरुओं के जन्म या ज्ञान-दिवस भी गुरुपर्व के रूप में मनाए जाते हैं।", en: "Guru Nanak Dev Ji undertook extensive journeys (Udasis) within and beyond India, engaging with people of different faiths. On Gurpurab, gurdwaras hold Akhand Path (continuous recitation of the Guru Granth Sahib), Nagar Kirtan (a procession) and Langar (community meal). Gurpurab is not limited to Guru Nanak Jayanti alone — the birth or key anniversaries of other Gurus are also marked as Gurpurabs." },
    },
    howCelebrated: {
      hi: "गुरुद्वारों में तीन दिन पहले से अखंड पाठ आरंभ होता है, मुख्य दिन सुबह नगर कीर्तन (पालकी शोभायात्रा) निकाला जाता है, कीर्तन-कथा होती है, और लंगर में सभी को बिना भेदभाव भोजन कराया जाता है।",
      en: "Akhand Path begins three days before at gurdwaras, a Nagar Kirtan procession is held on the main day, kirtan and katha (hymn-singing and discourse) take place, and langar serves food to everyone without distinction.",
    },
    childExplanation: { hi: "गुरुपर्व गुरु नानक देव जी के जन्मदिन का त्योहार है। वे सबको बराबर मानने और मिल-बांटकर खाने की सीख देते थे, इसलिए इस दिन लंगर में सबके लिए मुफ़्त खाना बनता है।", en: "Gurpurab celebrates Guru Nanak Dev Ji's birthday. He taught that everyone is equal and should share what they have, which is why free food is served to everyone at langar on this day." },
    faqs: [
      { question: { hi: "लंगर क्या है?", en: "What is langar?" }, answer: { hi: "लंगर गुरुद्वारे में चलने वाला सामूहिक निःशुल्क भोजन है, जो जाति, धर्म या हैसियत के भेदभाव के बिना सभी के लिए खुला होता है — यह समानता की सिख शिक्षा का व्यावहारिक रूप माना जाता है।", en: "Langar is the free communal meal served at gurdwaras, open to everyone regardless of caste, religion or status — regarded as a practical expression of the Sikh teaching of equality." }, infoType: "cultural-belief" },
    ],
    sources: [{ label: "गुरु ग्रंथ साहिब एवं सिख ऐतिहासिक स्रोत (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["gurpurab", "गुरुपर्व", "guru nanak jayanti", "गुरु नानक जयंती", "gurpurab kyu manate hain", "guru nanak birthday"],
    emoji: "☬",
    seo: {
      title: { hi: "गुरुपर्व (गुरु नानक जयंती) क्यों मनाया जाता है? | MindMotions", en: "Why is Gurpurab (Guru Nanak Jayanti) Celebrated? | MindMotions" },
      description: { hi: "गुरु नानक देव जी का जीवन, गुरुपर्व की परंपराएं, अखंड पाठ और लंगर।", en: "The life of Guru Nanak Dev Ji, Gurpurab traditions, Akhand Path and langar." },
    },
  },
  {
    id: "fest-baisakhi",
    slug: "baisakhi",
    religion: "sikhism",
    title: { hi: "बैसाखी", en: "Baisakhi", pa: "ਵਿਸਾਖੀ" },
    alsoKnownAs: { hi: "वैशाखी", en: "Vaisakhi" },
    region: ["north-india", "global"],
    date: { type: "fixed", month: 4, nextOccurrence: "2027-04-14", displayDate: { hi: "13/14 अप्रैल", en: "13/14 April" } },
    duration: { hi: "1 दिन", en: "1 day" },
    shortDescription: {
      hi: "बैसाखी पंजाब का फसल उत्सव है और सिख परंपरा में 1699 में खालसा पंथ की स्थापना की स्मृति में भी मनाया जाता है।",
      en: "Baisakhi is Punjab's harvest festival, and in Sikh tradition it also marks the founding of the Khalsa Panth in 1699.",
    },
    whatIsIt: {
      hi: "बैसाखी दोहरे महत्व का दिन है — यह रबी फसल की कटाई का उत्सव है और सिखों के लिए खालसा पंथ की स्थापना का ऐतिहासिक दिन भी है।",
      en: "Baisakhi carries a dual significance — it is a celebration of the rabi harvest, and for Sikhs it is also the historic day of the Khalsa Panth's founding.",
    },
    whyCelebrated: [
      { infoType: "historical-fact", text: { hi: "1699 में गुरु गोबिंद सिंह जी ने आनंदपुर साहिब में खालसा पंथ की स्थापना की, जो सिख इतिहास की एक प्रलेखित महत्वपूर्ण घटना है।", en: "In 1699, Guru Gobind Singh Ji founded the Khalsa Panth at Anandpur Sahib — a well-documented landmark event in Sikh history." } },
      { infoType: "cultural-belief", text: { hi: "पंजाब में यह रबी की फसल (विशेषकर गेहूं) पकने और कटाई के मौसम का पारंपरिक उत्सव भी है, जिसमें भांगड़ा जैसे लोक-नृत्य किए जाते हैं।", en: "In Punjab it is also a traditional celebration of the rabi harvest (especially wheat), marked by folk dances such as bhangra." } },
    ],
    story: {
      forChildren: { hi: "बहुत साल पहले गुरु गोबिंद सिंह जी ने बैसाखी के दिन खालसा नाम का एक विशेष समूह बनाया, जिसमें हिम्मती और ईमानदार लोग शामिल थे जो सबकी रक्षा करते थे। पंजाब में यह दिन नई फसल आने की खुशी में भी मनाया जाता है।", en: "Many years ago, on Baisakhi, Guru Gobind Singh Ji formed a special group called the Khalsa, made up of brave and honest people who protected everyone. In Punjab, this day is also celebrated with joy for the new harvest." },
      general: { hi: "1699 में आनंदपुर साहिब में एक विशाल सभा के दौरान गुरु गोबिंद सिंह जी ने पांच स्वयंसेवकों (पंज प्यारे) की परीक्षा ली और उन्हें अमृत छका कर खालसा पंथ की स्थापना की। इसी दिन को पंजाब में सदियों से प्रचलित फसल-उत्सव के साथ भी जोड़ा जाता है, जब रबी की फसल पककर तैयार होती है।", en: "During a large gathering at Anandpur Sahib in 1699, Guru Gobind Singh Ji tested five volunteers (the Panj Pyare), initiated them with Amrit, and founded the Khalsa Panth. The same day is also tied to the centuries-old harvest festival in Punjab, when the rabi crop is ready." },
      detailed: { hi: "खालसा की स्थापना सिख इतिहास में एक निर्णायक मोड़ मानी जाती है, जिसने सिखों को एक विशिष्ट पहचान और आचार-संहिता दी। इस ऐतिहासिक घटना और पंजाब की पारंपरिक कृषि-उत्सव परंपरा — दोनों का मेल बैसाखी को एक साथ धार्मिक और सांस्कृतिक महत्व देता है।", en: "The founding of the Khalsa is regarded as a defining turning point in Sikh history, giving Sikhs a distinct identity and code of conduct. This historic event, combined with Punjab's older agricultural festival tradition, gives Baisakhi both religious and cultural significance." },
    },
    howCelebrated: {
      hi: "गुरुद्वारों में विशेष दीवान (सभा), कीर्तन और नगर कीर्तन का आयोजन होता है। पंजाब में खेतों में मेले लगते हैं, भांगड़ा-गिद्दा किया जाता है और नई फसल का उत्सव मनाया जाता है।",
      en: "Gurdwaras hold special diwans (congregations), kirtan and Nagar Kirtan processions. In Punjab, fairs are held in the fields, bhangra and giddha are performed, and the new harvest is celebrated.",
    },
    childExplanation: { hi: "बैसाखी दो कारणों से खास है — यह खालसा पंथ की शुरुआत का दिन है और पंजाब में नई फसल आने की खुशी का त्योहार भी है।", en: "Baisakhi is special for two reasons — it marks the founding of the Khalsa Panth, and it is also a joyful harvest festival in Punjab." },
    faqs: [
      { question: { hi: "खालसा पंथ क्या है?", en: "What is the Khalsa Panth?" }, answer: { hi: "खालसा गुरु गोबिंद सिंह जी द्वारा 1699 में स्थापित सिखों का एक विशिष्ट समुदाय है, जिसकी अपनी पहचान और आचार-संहिता है।", en: "The Khalsa is a distinct Sikh community founded by Guru Gobind Singh Ji in 1699, with its own identity and code of conduct." }, infoType: "historical-fact" },
    ],
    sources: [{ label: "सिख ऐतिहासिक स्रोत (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["baisakhi", "vaisakhi", "बैसाखी", "khalsa panth", "baisakhi kyu manate hain"],
    emoji: "🌾",
    seo: {
      title: { hi: "बैसाखी क्यों मनाई जाती है? | MindMotions", en: "Why is Baisakhi Celebrated? | MindMotions" },
      description: { hi: "बैसाखी का इतिहास, खालसा पंथ की स्थापना और पंजाब का फसल उत्सव।", en: "Baisakhi's history, the founding of the Khalsa Panth, and Punjab's harvest festival." },
    },
  },
];
