import { Puja } from "./types";

export const pujas: Puja[] = [
  {
    id: "puja-lakshmi",
    slug: "lakshmi-puja",
    religion: "hinduism",
    title: { hi: "लक्ष्मी पूजा", en: "Lakshmi Puja" },
    category: { hi: "पर्व पूजा", en: "Festival Puja" },
    purpose: {
      hi: "दीपावली की रात देवी लक्ष्मी और भगवान गणेश की पूजा कर घर में सुख-समृद्धि व शुभारंभ का आह्वान किया जाता है।",
      en: "On Diwali night, Goddess Lakshmi and Lord Ganesha are worshipped to invite prosperity, well-being and auspicious new beginnings into the home.",
    },
    group: {
      title: { hi: "लक्ष्मी-गणेश पूजा विधि", en: "Lakshmi-Ganesh Puja Method" },
      materials: [
        { hi: "दीपक और शुद्ध घी/तेल", en: "Diya and pure ghee/oil" },
        { hi: "रोली, चावल (अक्षत), हल्दी", en: "Roli, rice (akshat), turmeric" },
        { hi: "ताज़े फूल और माला", en: "Fresh flowers and garland" },
        { hi: "मिठाई, फल और खील-बताशे", en: "Sweets, fruits, puffed rice and sugar candy" },
        { hi: "लक्ष्मी-गणेश की मूर्ति या चित्र", en: "Idol or picture of Lakshmi-Ganesha" },
        { hi: "कलश, नारियल और आम के पत्ते", en: "Kalash, coconut and mango leaves" },
        { hi: "चांदी/तांबे के सिक्के (वैकल्पिक)", en: "Silver/copper coins (optional)" },
        { hi: "बहीखाता (व्यापारी परिवारों में, वैकल्पिक)", en: "Account ledger (for trading families, optional)" },
      ],
      steps: [
        { hi: "पूजा स्थान को गंगाजल से शुद्ध करें और एक चौकी पर लाल कपड़ा बिछाएं।", en: "Purify the puja area with Ganga water and spread a red cloth on a low table." },
        { hi: "चौकी पर मुट्ठी भर अनाज रखकर उस पर कलश स्थापित करें और उसमें जल, सुपारी व सिक्का डालें।", en: "Place a handful of grain on the table and set up the kalash on it, filling it with water, a betel nut and a coin." },
        { hi: "कलश पर आम के पत्ते रखें और ऊपर नारियल रखें।", en: "Place mango leaves on the kalash and set a coconut on top." },
        { hi: "लक्ष्मी-गणेश की मूर्ति या चित्र स्थापित करें और दीपक जलाएं।", en: "Install the Lakshmi-Ganesha idol or picture and light the diya." },
        { hi: "सबसे पहले भगवान गणेश की पूजा करें — रोली, चावल, फूल और दूर्वा अर्पित करें।", en: "Worship Lord Ganesha first — offer roli, rice, flowers and durva grass." },
        { hi: "इसके बाद देवी लक्ष्मी की पूजा करें — रोली-चावल लगाएं, फूल व मिठाई अर्पित करें।", en: "Then worship Goddess Lakshmi — apply roli-rice and offer flowers and sweets." },
        { hi: "यदि बहीखाता पूजन की परंपरा है, तो नए खाते की पहली प्रविष्टि करें।", en: "If following the account-ledger tradition, make the first entry in the new ledger." },
        { hi: "लक्ष्मी और गणेश की आरती करें।", en: "Perform the aarti for Lakshmi and Ganesha." },
        { hi: "परिवार के साथ प्रसाद ग्रहण करें और घर में दीये जलाएं।", en: "Share the prasad with family and light diyas around the home." },
      ],
      aartiSlug: "lakshmi-aarti",
      prasad: { hi: "मिठाई, फल, खील-बताशे", en: "Sweets, fruits, puffed rice and sugar candy" },
      regionalVariations: [
        { region: "west-india", description: { hi: "गुजरात और महाराष्ट्र में इसी रात 'चोपड़ा पूजन' (नए बहीखाते की शुरुआत) की परंपरा है।", en: "In Gujarat and Maharashtra, the same night includes 'Chopda Pujan' — starting a fresh account ledger." } },
        { region: "north-india", description: { hi: "उत्तर भारत के अधिकांश घरों में पूजा के बाद पटाखे चलाने की परंपरा है, हालांकि यह क्षेत्रीय नियमों के अधीन है।", en: "In much of North India, firecrackers follow the puja, though this is subject to local regulations." } },
      ],
      note: {
        hi: "यह विधि एक व्यापक रूप से प्रचलित परंपरा का सरल सारांश है। परिवार, संप्रदाय और क्षेत्र के अनुसार क्रम व सामग्री में अंतर हो सकता है — इसे एकमात्र 'सही' तरीका न समझें।",
        en: "This is a simplified summary of a widely followed tradition. The exact order and materials can differ by family, sect and region — it should not be read as the single 'correct' method.",
      },
    },
    regionalVariations: [],
    relatedFestivalSlug: "diwali",
    keywords: ["lakshmi puja", "लक्ष्मी पूजा", "lakshmi puja kaise kare", "diwali puja vidhi", "chopda pujan"],
    emoji: "🪔",
  },
  {
    id: "puja-ganesh",
    slug: "ganesh-puja",
    religion: "hinduism",
    title: { hi: "गणेश पूजा", en: "Ganesh Puja" },
    category: { hi: "पर्व पूजा", en: "Festival Puja" },
    purpose: {
      hi: "किसी भी शुभ कार्य या गणेश चतुर्थी के अवसर पर विघ्नहर्ता भगवान गणेश की पूजा कर बाधाओं को दूर करने की प्रार्थना की जाती है।",
      en: "Performed at the start of any auspicious task or during Ganesh Chaturthi, praying to Lord Ganesha, the remover of obstacles.",
    },
    group: {
      title: { hi: "गणेश स्थापना एवं पूजा विधि", en: "Ganesh Sthapana & Puja Method" },
      materials: [
        { hi: "गणेश प्रतिमा (आदर्श रूप से मिट्टी की)", en: "Ganesha idol (ideally clay)" },
        { hi: "दूर्वा घास", en: "Durva grass" },
        { hi: "लाल फूल और लाल वस्त्र", en: "Red flowers and red cloth" },
        { hi: "मोदक या लड्डू", en: "Modak or laddu" },
        { hi: "रोली, चावल, जनेऊ (वैकल्पिक)", en: "Roli, rice, sacred thread (optional)" },
      ],
      steps: [
        { hi: "शुभ मुहूर्त में चौकी पर लाल कपड़ा बिछाकर मूर्ति स्थापित करें।", en: "At an auspicious time, spread a red cloth on a low table and install the idol." },
        { hi: "प्राण-प्रतिष्ठा मंत्रों के साथ मूर्ति में भगवान का आह्वान करें (जो यह परंपरा मानते हैं)।", en: "Invoke the deity into the idol with pran-pratishtha mantras (for those who follow this tradition)." },
        { hi: "दीपक जलाएं, रोली-चावल व दूर्वा अर्पित करें।", en: "Light the diya and offer roli-rice and durva grass." },
        { hi: "मोदक का भोग लगाएं और आरती करें।", en: "Offer modak and perform the aarti." },
      ],
      aartiSlug: "ganesh-aarti",
      prasad: { hi: "मोदक और लड्डू", en: "Modak and laddu" },
      note: { hi: "मूर्ति के आकार, सामग्री और विसर्जन से जुड़ी परंपराएं क्षेत्र व परिवार अनुसार भिन्न होती हैं।", en: "Idol size, material and immersion customs vary by region and family." },
    },
    relatedFestivalSlug: "ganesh-chaturthi",
    keywords: ["ganesh puja", "गणेश पूजा", "ganpati puja vidhi", "ganesh sthapana"],
    emoji: "🐘",
  },
  {
    id: "puja-satyanarayan",
    slug: "satyanarayan-puja",
    religion: "hinduism",
    title: { hi: "सत्यनारायण पूजा", en: "Satyanarayan Puja" },
    category: { hi: "विशेष पूजा", en: "Special Puja" },
    purpose: {
      hi: "भगवान विष्णु के सत्यनारायण स्वरूप की पूजा, जो आमतौर पर पूर्णिमा, विशेष उपलब्धियों या घर में शुभ अवसरों पर की जाती है।",
      en: "Worship of Lord Vishnu in his Satyanarayan form, typically performed on full-moon days, after special achievements, or on auspicious occasions at home.",
    },
    group: {
      title: { hi: "सत्यनारायण पूजा एवं कथा विधि", en: "Satyanarayan Puja & Katha Method" },
      materials: [
        { hi: "भगवान विष्णु/सत्यनारायण की तस्वीर या मूर्ति", en: "Picture or idol of Vishnu/Satyanarayan" },
        { hi: "पंचामृत (दूध, दही, घी, शहद, शक्कर)", en: "Panchamrit (milk, curd, ghee, honey, sugar)" },
        { hi: "केले के पत्ते और फल", en: "Banana leaves and fruit" },
        { hi: "सूजी का प्रसाद (शीरा)", en: "Semolina prasad (sheera/halwa)" },
        { hi: "तुलसी दल", en: "Tulsi leaves" },
      ],
      steps: [
        { hi: "प्रातः स्नान कर स्वच्छ वस्त्र पहनें और व्रत का संकल्प लें।", en: "Bathe in the morning, wear clean clothes and take the fasting vow." },
        { hi: "पूजा स्थान सजाकर भगवान सत्यनारायण की तस्वीर स्थापित करें।", en: "Decorate the puja space and install the picture of Satyanarayan." },
        { hi: "पंचामृत से अभिषेक करें।", en: "Perform abhishek with panchamrit." },
        { hi: "सत्यनारायण कथा का श्रवण या पाठ करें।", en: "Listen to or recite the Satyanarayan Katha." },
        { hi: "आरती करें और सूजी के प्रसाद का भोग लगाएं।", en: "Perform the aarti and offer the semolina prasad." },
        { hi: "प्रसाद सभी उपस्थित लोगों में बांटें।", en: "Distribute the prasad to everyone present." },
      ],
      prasad: { hi: "सूजी का शीरा (हलवा) और फल", en: "Semolina sheera (halwa) and fruit" },
      note: { hi: "यह पूजा प्रायः शाम को परिवार व मित्रों को आमंत्रित कर सामूहिक रूप से की जाती है।", en: "This puja is often performed in the evening with family and friends invited to join." },
    },
    keywords: ["satyanarayan puja", "सत्यनारायण पूजा", "satyanarayan katha vidhi"],
    emoji: "🙏",
  },
  {
    id: "puja-daily",
    slug: "daily-puja",
    religion: "hinduism",
    title: { hi: "नित्य पूजा (दैनिक पूजा)", en: "Nitya Puja (Daily Puja)" },
    category: { hi: "दैनिक पूजा", en: "Daily Puja" },
    purpose: {
      hi: "अनेक हिंदू परिवारों में प्रतिदिन सुबह घर के मंदिर में इष्टदेव की सरल पूजा करने की परंपरा है।",
      en: "In many Hindu households, a simple daily morning worship of the family's chosen deity is a common home tradition.",
    },
    group: {
      title: { hi: "सरल दैनिक पूजा विधि", en: "Simple Daily Puja Method" },
      materials: [
        { hi: "दीपक और अगरबत्ती", en: "Diya and incense" },
        { hi: "ताज़ा जल", en: "Fresh water" },
        { hi: "फूल (वैकल्पिक)", en: "Flowers (optional)" },
      ],
      steps: [
        { hi: "स्नान के बाद घर के मंदिर की सफाई करें।", en: "After bathing, clean the home altar." },
        { hi: "दीपक और अगरबत्ती जलाएं।", en: "Light the diya and incense." },
        { hi: "जल अर्पित करें और इष्टदेव का ध्यान करें।", en: "Offer water and meditate on the chosen deity." },
        { hi: "अपनी परंपरा के अनुसार मंत्र या स्तोत्र का पाठ करें।", en: "Recite a mantra or stotra according to one's own tradition." },
      ],
      note: { hi: "दैनिक पूजा की अवधि और विधि हर परिवार में अलग हो सकती है — इसमें कोई एक 'अनिवार्य' तरीका नहीं है।", en: "The length and method of daily puja vary widely by family — there is no single 'mandatory' way to do it." },
    },
    keywords: ["daily puja", "नित्य पूजा", "dainik puja vidhi", "morning puja"],
    emoji: "🕉️",
  },
];

export function getPuja(slug: string) {
  return pujas.find((p) => p.slug === slug);
}
