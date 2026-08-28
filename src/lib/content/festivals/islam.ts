import { Festival } from "../types";

export const islamFestivals: Festival[] = [
  {
    id: "fest-eid-ul-fitr",
    slug: "eid-ul-fitr",
    religion: "islam",
    title: { hi: "ईद-उल-फ़ित्र", en: "Eid-ul-Fitr", ur: "عید الفطر" },
    alsoKnownAs: { hi: "मीठी ईद", en: "Sweet Eid" },
    region: ["north-india", "south-india", "east-india", "west-india", "global"],
    date: { type: "lunar", month: 3, nextOccurrence: "2027-03-09", displayDate: { hi: "मार्च 2027 (शव्वाल का चांद दिखने पर, अनुमानित)", en: "March 2027 (on sighting the Shawwal moon, estimated)" } },
    duration: { hi: "1 दिन (उत्सव कुछ दिन चलता है)", en: "1 day (celebrations extend a few days)" },
    shortDescription: {
      hi: "ईद-उल-फ़ित्र रमज़ान के एक महीने के रोज़ों के समापन पर मनाया जाने वाला त्योहार है, जिसमें विशेष नमाज़, दान और सामूहिक भोज होते हैं।",
      en: "Eid-ul-Fitr marks the end of the month-long Ramadan fasts, observed with special prayers, charity and communal feasting.",
    },
    whatIsIt: {
      hi: "ईद-उल-फ़ित्र इस्लाम के दो प्रमुख त्योहारों में से एक है। यह रमज़ान महीने के रोज़ों के पूरा होने की खुशी में मनाया जाता है। इस दिन सुबह विशेष 'ईद की नमाज़' अदा की जाती है।",
      en: "Eid-ul-Fitr is one of the two major Islamic festivals. It celebrates the completion of the month of fasting during Ramadan. A special 'Eid prayer' is offered in the morning.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "इस्लामी मान्यता के अनुसार रमज़ान के महीने में मुसलमान अल्लाह की इबादत, आत्म-संयम और रोज़े के ज़रिए खुद को शुद्ध करते हैं। ईद-उल-फ़ित्र इस आध्यात्मिक यात्रा के सफल समापन और अल्लाह के शुक्रगुज़ार होने का दिन माना जाता है।", en: "In Islamic belief, the month of Ramadan is a time of worship, self-restraint and purification through fasting. Eid-ul-Fitr is regarded as the day of gratitude to Allah for the successful completion of this spiritual journey." } },
      { infoType: "cultural-belief", text: { hi: "यह परिवार और समुदाय के साथ मिलकर खुशी मनाने, नए कपड़े पहनने और एक-दूसरे को मिठाई खिलाने का दिन भी माना जाता है — इसलिए इसे 'मीठी ईद' भी कहा जाता है।", en: "It is also seen as a day to celebrate with family and community, wear new clothes, and share sweets with one another — which is why it is also called 'Sweet Eid'." } },
    ],
    story: {
      forChildren: { hi: "रमज़ान में बड़े लोग एक महीने तक सुबह से शाम तक बिना कुछ खाए-पिए रोज़ा रखते हैं। जब यह महीना पूरा होता है, तो ईद-उल-फ़ित्र मनाई जाती है। इस दिन सब नए कपड़े पहनते हैं, नमाज़ पढ़ने जाते हैं, सेवइयां खाते हैं और एक-दूसरे को 'ईद मुबारक' कहते हैं।", en: "During Ramadan, grown-ups fast from dawn to sunset for a whole month without eating or drinking. When the month ends, Eid-ul-Fitr is celebrated. Everyone wears new clothes, goes to offer prayers, eats sweet vermicelli (sewaiyaan), and wishes each other 'Eid Mubarak'." },
      general: { hi: "रमज़ान इस्लामी कैलेंडर का नौवां और सबसे पवित्र महीना है, जिसमें बालिग़ और स्वस्थ मुसलमान सूर्योदय से सूर्यास्त तक रोज़ा रखते हैं। मान्यता है कि इसी महीने में कुरान का अवतरण आरंभ हुआ था। महीने के अंत में शव्वाल का चांद दिखने पर ईद-उल-फ़ित्र मनाई जाती है — सुबह विशेष नमाज़ अदा की जाती है, ज़कात-उल-फ़ित्र (दान) दिया जाता है, और परिवार-समाज के साथ उत्सव मनाया जाता है।", en: "Ramadan is the ninth and holiest month of the Islamic calendar, during which adult, healthy Muslims fast from sunrise to sunset. It is believed that the revelation of the Quran began in this month. Eid-ul-Fitr is celebrated when the Shawwal moon is sighted at the month's end — a special morning prayer is offered, Zakat-ul-Fitr (charity) is given, and celebrations are shared with family and community." },
      detailed: { hi: "ईद-उल-फ़ित्र की तिथि चंद्र-कैलेंडर पर आधारित होने के कारण हर साल लगभग 10-11 दिन पहले आती है और चांद दिखने के आधार पर अलग-अलग देशों में एक-दो दिन का अंतर हो सकता है। परंपरा के अनुसार ईद की नमाज़ से पहले ज़कात-उल-फ़ित्र देना ज़रूरी माना जाता है, ताकि ज़रूरतमंद लोग भी उत्सव में शामिल हो सकें। यह त्योहार भारत, पाकिस्तान, बांग्लादेश सहित दुनिया भर में मुसलमान अपने स्थानीय रीति-रिवाज़ों के साथ मनाते हैं — जैसे विशेष पकवान, पारिवारिक मेल-मिलाप और ईदी (बड़ों द्वारा बच्चों को उपहार/पैसे देना)।", en: "Because Eid-ul-Fitr follows the lunar calendar, it falls roughly 10-11 days earlier each year and can vary by a day or two across countries depending on local moon sighting. Tradition holds that Zakat-ul-Fitr should be given before the Eid prayer so that those in need can also join the celebration. The festival is observed across India, Pakistan, Bangladesh and worldwide with local customs — special dishes, family gatherings, and 'Eidi' (money or gifts given to children by elders)." },
    },
    howCelebrated: {
      hi: "सुबह ग़ुस्ल (स्नान) कर नए या साफ़ कपड़े पहने जाते हैं, ईदगाह या मस्जिद में सामूहिक ईद की नमाज़ अदा की जाती है, ज़कात-उल-फ़ित्र दिया जाता है, और घर पर सेवइयां व अन्य पकवान बनाकर परिवार-मित्रों संग साझा किए जाते हैं। बच्चों को 'ईदी' दी जाती है।",
      en: "People bathe and wear new or clean clothes in the morning, offer the communal Eid prayer at an Eidgah or mosque, give Zakat-ul-Fitr, and prepare sewaiyaan and other dishes to share with family and friends. Children receive 'Eidi'.",
    },
    dosAndDonts: {
      dos: [{ hi: "ईद की नमाज़ से पहले ज़कात-उल-फ़ित्र देना पारंपरिक रूप से अनुशंसित है।", en: "Giving Zakat-ul-Fitr before the Eid prayer is traditionally recommended." }],
      donts: [{ hi: "किसी के रोज़े या इबादत के तरीके पर टिप्पणी न करें।", en: "Do not comment on how someone else fasts or worships." }],
    },
    childExplanation: { hi: "ईद-उल-फ़ित्र तब मनाई जाती है जब रमज़ान के एक महीने के रोज़े पूरे हो जाते हैं। यह शुक्रिया अदा करने, नए कपड़े पहनने और मिठाई खाने की खुशी का दिन है।", en: "Eid-ul-Fitr is celebrated when the month-long Ramadan fasts are complete. It is a day of gratitude, new clothes, and sweet celebrations." },
    faqs: [
      { question: { hi: "ईद-उल-फ़ित्र की तारीख हर साल क्यों बदलती है?", en: "Why does the date of Eid-ul-Fitr change every year?" }, answer: { hi: "इस्लामी कैलेंडर चंद्र-आधारित है, इसलिए यह ग्रेगोरियन (सौर) कैलेंडर की तुलना में हर साल लगभग 10-11 दिन पहले खिसक जाता है।", en: "The Islamic calendar is lunar, so it shifts roughly 10-11 days earlier each year relative to the Gregorian (solar) calendar." }, infoType: "historical-fact" },
    ],
    sources: [{ label: "कुरान एवं इस्लामी परंपरा (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["eid", "eid ul fitr", "ईद", "ईद उल फितर", "eid kyun manate hain", "why is eid celebrated", "ramadan eid", "meethi eid"],
    emoji: "🌙",
    seo: {
      title: { hi: "ईद-उल-फ़ित्र क्यों मनाई जाती है? | MindMotions", en: "Why is Eid-ul-Fitr Celebrated? | MindMotions" },
      description: { hi: "ईद-उल-फ़ित्र का महत्व, रमज़ान से संबंध और उत्सव की परंपराएं।", en: "The significance of Eid-ul-Fitr, its connection to Ramadan, and celebration customs." },
    },
  },
  {
    id: "fest-eid-ul-adha",
    slug: "eid-ul-adha",
    religion: "islam",
    title: { hi: "ईद-उल-अज़हा", en: "Eid-ul-Adha", ur: "عید الاضحی" },
    alsoKnownAs: { hi: "बकरीद, क़ुर्बानी की ईद", en: "Bakrid, Festival of Sacrifice" },
    region: ["north-india", "south-india", "east-india", "west-india", "global"],
    date: { type: "lunar", month: 5, nextOccurrence: "2027-05-16", displayDate: { hi: "मई 2027 (ज़ुल हिज्जा की 10वीं तारीख, अनुमानित)", en: "May 2027 (10th of Dhul Hijjah, estimated)" } },
    duration: { hi: "1-3 दिन", en: "1-3 days" },
    shortDescription: {
      hi: "ईद-उल-अज़हा त्याग और समर्पण का त्योहार है, जो हज यात्रा के समय मनाया जाता है और इसमें क़ुर्बानी की परंपरा शामिल है।",
      en: "Eid-ul-Adha is a festival of sacrifice and devotion, observed during the Hajj pilgrimage period and marked by the tradition of animal sacrifice (Qurbani).",
    },
    whatIsIt: {
      hi: "यह त्योहार पैग़ंबर इब्राहीम (अ.) की अल्लाह के प्रति समर्पण की भावना की याद में मनाया जाता है। यह हज यात्रा के समापन के आसपास आता है।",
      en: "This festival commemorates Prophet Ibrahim's (AS) devotion and submission to Allah. It falls around the conclusion of the Hajj pilgrimage.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "इस्लामी मान्यता के अनुसार अल्लाह ने पैग़ंबर इब्राहीम (अ.) की परीक्षा ली और उन्हें अपने पुत्र की क़ुर्बानी देने को कहा। जब इब्राहीम (अ.) ने समर्पण दिखाया, तो अल्लाह ने पुत्र के स्थान पर एक मेंढे की क़ुर्बानी स्वीकार की। इसी घटना की स्मृति में क़ुर्बानी की परंपरा निभाई जाती है।", en: "Islamic belief holds that Allah tested Prophet Ibrahim (AS) by asking him to sacrifice his son. When Ibrahim showed complete submission, Allah accepted the sacrifice of a ram in his son's place. This event is commemorated through the tradition of Qurbani." } },
    ],
    story: {
      forChildren: { hi: "बहुत समय पहले पैग़ंबर इब्राहीम (अ.) ने अल्लाह के लिए अपना सबसे प्यारा चीज़ क़ुर्बान करने का फैसला किया। जब वे तैयार हुए, अल्लाह ने उनकी सच्ची भक्ति देखकर उन्हें बेटे की जगह एक जानवर की क़ुर्बानी देने को कहा। इसी याद में ईद-उल-अज़हा पर लोग क़ुर्बानी करते हैं और मांस को ज़रूरतमंदों के साथ बांटते हैं।", en: "Long ago, Prophet Ibrahim (AS) decided to sacrifice the thing most dear to him for Allah. When he was ready, Allah — seeing his true devotion — asked him to sacrifice an animal instead of his son. In memory of this, people perform Qurbani on Eid-ul-Adha and share the meat with those in need." },
      general: { hi: "पैग़ंबर इब्राहीम (अ.) को स्वप्न में आदेश मिला कि वे अपने पुत्र इस्माईल (अ.) की क़ुर्बानी दें। पिता और पुत्र दोनों ने अल्लाह की इच्छा के आगे समर्पण किया। अंतिम क्षण में अल्लाह ने एक मेंढा भेजा और पुत्र के स्थान पर उसकी क़ुर्बानी क़ुबूल की गई। इस घटना को समर्पण और विश्वास की सर्वोच्च मिसाल माना जाता है, और हर साल क़ुर्बानी करके इसे याद किया जाता है — क़ुर्बानी का मांस तीन हिस्सों में बांटा जाता है: परिवार, रिश्तेदार और ज़रूरतमंद।", en: "Prophet Ibrahim (AS) received a command in a dream to sacrifice his son Ismail (AS). Both father and son submitted to Allah's will. At the final moment, Allah sent a ram, and its sacrifice was accepted instead. This event is regarded as the supreme example of submission and faith, and is remembered each year through Qurbani — the meat is traditionally divided into three parts: for family, relatives, and those in need." },
      detailed: { hi: "ईद-उल-अज़हा हज यात्रा से जुड़ा है, जो इस्लाम के पांच स्तंभों में से एक है। जो मुसलमान आर्थिक और शारीरिक रूप से सक्षम हैं, वे जीवन में एक बार मक्का की हज यात्रा करते हैं। जो हज पर नहीं जाते, वे भी अपने शहरों में क़ुर्बानी की परंपरा निभाते हैं। क़ुर्बानी के मांस के बंटवारे की परंपरा को सामाजिक समानता और साझा करने की भावना से भी जोड़ा जाता है।", en: "Eid-ul-Adha is linked to the Hajj pilgrimage, one of the five pillars of Islam. Muslims who are financially and physically able undertake the Hajj to Mecca once in their lifetime. Those not on Hajj also observe the Qurbani tradition in their own cities. The custom of sharing the sacrificial meat is also connected to values of social equality and communal sharing." },
    },
    howCelebrated: {
      hi: "सुबह ईद की नमाज़ अदा की जाती है, इसके बाद जो सक्षम हैं वे बकरी, भेड़ या अन्य पशु की क़ुर्बानी देते हैं। मांस को परिवार, रिश्तेदारों और ज़रूरतमंदों में बांटा जाता है, और घरों में विशेष पकवान बनते हैं।",
      en: "The Eid prayer is offered in the morning, after which those who are able perform the sacrifice of a goat, sheep or other animal. The meat is shared among family, relatives and those in need, and special dishes are prepared at home.",
    },
    childExplanation: { hi: "ईद-उल-अज़हा हमें त्याग और भरोसे के बारे में सिखाती है। लोग जानवर की क़ुर्बानी देकर उसका मांस ज़रूरतमंद लोगों के साथ बांटते हैं ताकि सब मिलकर त्योहार मना सकें।", en: "Eid-ul-Adha teaches us about sacrifice and trust. People perform Qurbani and share the meat with those in need so that everyone can join the celebration." },
    faqs: [
      { question: { hi: "क़ुर्बानी का मांस किसके साथ बांटा जाता है?", en: "Who is the Qurbani meat shared with?" }, answer: { hi: "परंपरा अनुसार इसे तीन बराबर हिस्सों में बांटा जाता है — परिवार के लिए, रिश्तेदारों के लिए और ज़रूरतमंदों के लिए, हालांकि पारिवारिक रीति में अंतर हो सकता है।", en: "Tradition divides it into three roughly equal parts — for family, for relatives, and for those in need — though family customs can vary." }, infoType: "cultural-belief" },
    ],
    sources: [{ label: "कुरान एवं इस्लामी परंपरा (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["eid ul adha", "bakrid", "बकरीद", "ईद उल अज़हा", "qurbani", "eid ul adha kyun manate hain"],
    emoji: "🐐",
    seo: {
      title: { hi: "ईद-उल-अज़हा (बकरीद) क्यों मनाई जाती है? | MindMotions", en: "Why is Eid-ul-Adha (Bakrid) Celebrated? | MindMotions" },
      description: { hi: "ईद-उल-अज़हा का इतिहास, इब्राहीम (अ.) की कथा और क़ुर्बानी की परंपरा।", en: "The history of Eid-ul-Adha, the story of Ibrahim (AS), and the Qurbani tradition." },
    },
  },
  {
    id: "fest-ramadan",
    slug: "ramadan",
    religion: "islam",
    title: { hi: "रमज़ान", en: "Ramadan", ur: "رمضان" },
    region: ["north-india", "south-india", "east-india", "west-india", "global"],
    date: { type: "lunar", month: 2, nextOccurrence: "2027-02-08", displayDate: { hi: "फरवरी-मार्च 2027 (अनुमानित)", en: "February-March 2027 (estimated)" } },
    duration: { hi: "लगभग 29-30 दिन", en: "Approximately 29-30 days" },
    shortDescription: {
      hi: "रमज़ान इस्लामी कैलेंडर का पवित्र महीना है, जिसमें मुसलमान सूर्योदय से सूर्यास्त तक रोज़ा रखते हैं, नमाज़ और कुरान पाठ करते हैं।",
      en: "Ramadan is the holy month of the Islamic calendar during which Muslims fast from dawn to sunset, pray and recite the Quran.",
    },
    whatIsIt: {
      hi: "रमज़ान इस्लाम के पांच स्तंभों में से एक — रोज़ा (सौम) — का महीना है। इस दौरान मुसलमान सुबह सहरी करके रोज़ा रखते हैं और शाम को इफ़्तार से रोज़ा खोलते हैं।",
      en: "Ramadan is the month observing one of the five pillars of Islam — fasting (Sawm). Muslims eat a pre-dawn meal (sehri) to begin the fast and break it at sunset with iftar.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "इस्लामी मान्यता के अनुसार इसी महीने में पैग़ंबर मुहम्मद (स.) पर कुरान का पहला अवतरण (वह्य) हुआ था। रोज़ा आत्म-संयम, सहनशीलता और अल्लाह के प्रति निकटता का साधन माना जाता है।", en: "Islamic belief holds that the first revelation of the Quran to Prophet Muhammad (PBUH) occurred in this month. Fasting is regarded as a means of self-discipline, patience and closeness to Allah." } },
      { infoType: "cultural-belief", text: { hi: "यह महीना दान, सामुदायिक इफ़्तार और परिवार के साथ अधिक समय बिताने से भी जुड़ा है।", en: "The month is also associated with charity, communal iftars, and spending more time with family." } },
    ],
    story: {
      forChildren: { hi: "रमज़ान में बड़े लोग एक महीने तक दिन में कुछ नहीं खाते-पीते और शाम को साथ मिलकर इफ़्तार करते हैं। ऐसा इसलिए किया जाता है ताकि वे अल्लाह के करीब महसूस करें और भूखे लोगों की तकलीफ़ को समझ सकें।", en: "During Ramadan, grown-ups do not eat or drink during the day for a whole month, and break their fast together in the evening with iftar. This is done to feel closer to Allah and to understand the hardship of those who go hungry." },
      general: { hi: "रमज़ान इस्लामी चंद्र-कैलेंडर का नौवां महीना है। बालिग़ और स्वस्थ मुसलमान भोर से सूर्यास्त तक भोजन, पानी और अन्य चीज़ों से परहेज़ करते हैं। रात में तरावीह की विशेष नमाज़ पढ़ी जाती है और कुरान का पाठ किया जाता है। महीने की आखिरी विषम रातों में से एक 'शब-ए-क़द्र' को विशेष रूप से पवित्र माना जाता है।", en: "Ramadan is the ninth month of the Islamic lunar calendar. Adult, healthy Muslims abstain from food, water and other needs from dawn to sunset. Special Taraweeh prayers are offered at night, and the Quran is recited. One of the odd nights in the last part of the month, 'Laylat-ul-Qadr' (Shab-e-Qadr), is considered especially sacred." },
      detailed: { hi: "रोज़ा रखने से छूट कुछ श्रेणियों को दी जाती है — जैसे बीमार, यात्री, गर्भवती महिलाएं और बुज़ुर्ग — जो बाद में रोज़े पूरे कर सकते हैं या फ़िदया (दान) दे सकते हैं, यह इस्लामी न्यायशास्त्र की परंपरा है। रमज़ान का अंत ईद-उल-फ़ित्र के साथ होता है।", en: "Certain groups are traditionally exempted from fasting — such as the sick, travellers, pregnant women and the elderly — who may make up the fasts later or give fidya (charity) instead, per Islamic jurisprudence. Ramadan concludes with Eid-ul-Fitr." },
    },
    howCelebrated: {
      hi: "सुबह सूर्योदय से पहले सहरी खाई जाती है, दिन भर रोज़ा रखा जाता है, शाम को सूर्यास्त पर इफ़्तार से रोज़ा खोला जाता है, और रात को तरावीह की नमाज़ अदा की जाती है। मस्जिदों और घरों में सामूहिक इफ़्तार आम है।",
      en: "A pre-dawn meal (sehri) is eaten before sunrise, the fast is observed all day, it is broken at sunset with iftar, and Taraweeh prayers are offered at night. Communal iftars at mosques and homes are common.",
    },
    childExplanation: { hi: "रमज़ान में मुसलमान एक महीने तक दिन में खाना-पीना नहीं करते। यह उन्हें सब्र सिखाता है और भूखे लोगों की तकलीफ़ समझने में मदद करता है।", en: "During Ramadan, Muslims do not eat or drink during daylight hours for a month. It teaches patience and helps them understand the hardship of those who go hungry." },
    faqs: [
      { question: { hi: "रोज़े में क्या-क्या नहीं किया जाता?", en: "What is avoided during a fast?" }, answer: { hi: "सूर्योदय से सूर्यास्त तक खाना, पानी और धूम्रपान से परहेज़ किया जाता है; यह परंपरा और स्थानीय धार्मिक मार्गदर्शन के अनुसार थोड़ा भिन्न हो सकता है।", en: "Food, water and smoking are avoided from dawn to sunset; specifics can vary slightly by tradition and local religious guidance." }, infoType: "religious-belief" },
    ],
    sources: [{ label: "कुरान एवं इस्लामी परंपरा (सामान्य सार्वजनिक ज्ञान)", copyrightStatus: "Editorial summary" }],
    keywords: ["ramadan", "रमज़ान", "रमजान", "ramzan", "roza", "sehri iftar"],
    emoji: "☪️",
    seo: {
      title: { hi: "रमज़ान क्या है और क्यों मनाया जाता है? | MindMotions", en: "What is Ramadan and Why is it Observed? | MindMotions" },
      description: { hi: "रमज़ान के रोज़े, सहरी-इफ़्तार, तरावीह और शब-ए-क़द्र के बारे में सरल जानकारी।", en: "A simple guide to Ramadan fasting, sehri-iftar, Taraweeh and Laylat-ul-Qadr." },
    },
  },
];
