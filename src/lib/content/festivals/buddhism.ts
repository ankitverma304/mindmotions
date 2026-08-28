import { Festival } from "../types";

export const buddhistFestivals: Festival[] = [
  {
    id: "fest-buddha-purnima",
    slug: "buddha-purnima",
    religion: "buddhism",
    title: { hi: "बुद्ध पूर्णिमा", en: "Buddha Purnima" },
    alsoKnownAs: { hi: "वैशाख पूर्णिमा, वेसाक", en: "Vaishakha Purnima, Vesak" },
    region: ["north-india", "east-india", "northeast-india", "global"],
    date: { type: "lunar", month: 5, nextOccurrence: "2027-05-21", displayDate: { hi: "मई 2027 (वैशाख पूर्णिमा)", en: "May 2027 (Vaishakha Purnima)" } },
    duration: { hi: "1 दिन", en: "1 day" },
    shortDescription: {
      hi: "बुद्ध पूर्णिमा गौतम बुद्ध के जन्म, ज्ञान-प्राप्ति और महापरिनिर्वाण — तीनों की स्मृति में मनाई जाती है।",
      en: "Buddha Purnima commemorates the birth, enlightenment and mahaparinirvana of Gautama Buddha — all believed to have occurred on this day.",
    },
    whatIsIt: {
      hi: "बौद्ध परंपरा में यह वर्ष का सबसे पवित्र दिन माना जाता है, क्योंकि मान्यता है कि गौतम बुद्ध के जीवन की तीन प्रमुख घटनाएं इसी तिथि को हुईं।",
      en: "In Buddhist tradition this is regarded as the holiest day of the year, as belief holds that three major events in Gautama Buddha's life occurred on this date.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "बौद्ध मान्यता के अनुसार गौतम बुद्ध का जन्म, बोधगया में उनकी ज्ञान-प्राप्ति और कुशीनगर में उनका महापरिनिर्वाण — ये तीनों घटनाएं वैशाख पूर्णिमा के दिन हुईं।", en: "Buddhist belief holds that Gautama Buddha's birth, his enlightenment at Bodh Gaya, and his mahaparinirvana at Kushinagar all occurred on the day of Vaishakha Purnima." } },
      { infoType: "historical-fact", text: { hi: "गौतम बुद्ध का ऐतिहासिक अस्तित्व और लुंबिनी (वर्तमान नेपाल) में जन्म व्यापक रूप से स्वीकृत ऐतिहासिक तथ्य है, हालांकि सटीक तिथियों पर विद्वानों में कुछ मतभेद रहता है।", en: "The historical existence of Gautama Buddha and his birth at Lumbini (in present-day Nepal) is widely accepted historical fact, though scholars differ somewhat on exact dates." } },
    ],
    story: {
      forChildren: { hi: "बहुत समय पहले सिद्धार्थ नाम के एक राजकुमार थे। उन्होंने महल की सुख-सुविधाएं छोड़कर दुख के कारण को समझने के लिए यात्रा की। एक पेड़ के नीचे बैठकर उन्हें सच्चा ज्ञान मिला और वे 'बुद्ध' यानी 'जागृत व्यक्ति' कहलाए। उन्होंने लोगों को दया और शांति से जीना सिखाया।", en: "Long ago there was a prince named Siddhartha. He left the comforts of his palace to understand the cause of suffering. Sitting under a tree, he found true wisdom and became known as the 'Buddha', meaning 'the awakened one'. He taught people to live with kindness and peace." },
      general: { hi: "सिद्धार्थ गौतम का जन्म लुंबिनी में एक राजपरिवार में हुआ। सांसारिक दुखों को देखकर उन्होंने 29 वर्ष की आयु में महल त्याग दिया। वर्षों की खोज के बाद बोधगया में एक पीपल के पेड़ के नीचे उन्हें ज्ञान प्राप्त हुआ और वे बुद्ध कहलाए। उन्होंने चार आर्य सत्य और अष्टांगिक मार्ग की शिक्षा दी, जो दुख से मुक्ति का रास्ता बताते हैं।", en: "Siddhartha Gautama was born into a royal family in Lumbini. Troubled by the suffering he saw in the world, he left the palace at the age of 29. After years of seeking, he attained enlightenment under a Bodhi tree at Bodh Gaya and became the Buddha. He taught the Four Noble Truths and the Eightfold Path, describing a way out of suffering." },
      detailed: { hi: "बुद्ध की शिक्षाएं आगे चलकर बौद्ध धर्म के रूप में विकसित हुईं और श्रीलंका, म्यांमार, थाईलैंड, तिब्बत, चीन व जापान सहित एशिया के कई देशों में फैलीं, जहां इसने स्थानीय संस्कृति के अनुसार अलग-अलग रूप लिए (जैसे थेरवाद और महायान परंपराएं)। भारत में सारनाथ, बोधगया और कुशीनगर बौद्ध धर्म के प्रमुख तीर्थ स्थल माने जाते हैं।", en: "The Buddha's teachings evolved into Buddhism and spread across Sri Lanka, Myanmar, Thailand, Tibet, China and Japan among other countries, taking different regional forms (such as the Theravada and Mahayana traditions). In India, Sarnath, Bodh Gaya and Kushinagar are regarded as major Buddhist pilgrimage sites." },
    },
    howCelebrated: {
      hi: "बौद्ध विहारों में विशेष प्रार्थना, ध्यान और बुद्ध की मूर्ति की शोभायात्रा होती है, दीप जलाए जाते हैं, धर्मोपदेश सुने जाते हैं और दान-पुण्य किया जाता है।",
      en: "Buddhist monasteries hold special prayers, meditation and processions of the Buddha's statue, lamps are lit, teachings (dharma talks) are heard, and acts of charity are performed.",
    },
    childExplanation: { hi: "बुद्ध पूर्णिमा गौतम बुद्ध के जन्म, ज्ञान-प्राप्ति और निर्वाण की याद में मनाई जाती है। बुद्ध ने हमें दया और शांति से रहना सिखाया।", en: "Buddha Purnima marks the birth, enlightenment and nirvana of Gautama Buddha. He taught us to live with kindness and peace." },
    faqs: [
      { question: { hi: "बुद्ध पूर्णिमा को 'वेसाक' भी क्यों कहते हैं?", en: "Why is Buddha Purnima also called 'Vesak'?" }, answer: { hi: "श्रीलंका, म्यांमार, थाईलैंड जैसे देशों में इसे स्थानीय भाषाओं में 'वेसाक' कहा जाता है, जो वैशाख महीने से जुड़ा नाम है।", en: "In countries like Sri Lanka, Myanmar and Thailand, it is known in local languages as 'Vesak', a name derived from the month of Vaishakha." }, infoType: "cultural-belief" },
    ],
    sources: [{ label: "त्रिपिटक एवं बौद्ध परंपरा (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["buddha purnima", "बुद्ध पूर्णिमा", "vesak", "buddha jayanti", "gautam buddha"],
    emoji: "☸️",
    seo: {
      title: { hi: "बुद्ध पूर्णिमा क्यों मनाई जाती है? | MindMotions", en: "Why is Buddha Purnima Celebrated? | MindMotions" },
      description: { hi: "गौतम बुद्ध का जीवन, ज्ञान-प्राप्ति की कथा और बुद्ध पूर्णिमा की परंपराएं।", en: "The life of Gautama Buddha, the story of his enlightenment, and Buddha Purnima traditions." },
    },
  },
];
