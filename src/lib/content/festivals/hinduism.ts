import { Festival } from "../types";

export const hinduFestivals: Festival[] = [
  {
    id: "fest-diwali",
    slug: "diwali",
    religion: "hinduism",
    title: { hi: "दीपावली", en: "Diwali", sa: "दीपावली" },
    alsoKnownAs: { hi: "दिवाली, दीपोत्सव", en: "Deepavali, Festival of Lights" },
    region: ["north-india", "south-india", "east-india", "west-india", "global"],
    date: {
      type: "lunar",
      month: 11,
      nextOccurrence: "2026-11-08",
      displayDate: { hi: "8 नवंबर 2026 (कार्तिक अमावस्या)", en: "8 November 2026 (Kartik Amavasya)" },
    },
    duration: { hi: "5 दिन", en: "5 days" },
    shortDescription: {
      hi: "दीपावली रोशनी, दीयों और मिठाइयों का त्योहार है, जो अंधकार पर प्रकाश की और बुराई पर अच्छाई की जीत का प्रतीक माना जाता है।",
      en: "Diwali is the festival of lights, diyas and sweets, widely regarded as a symbol of light's victory over darkness and good over evil.",
    },
    whatIsIt: {
      hi: "दीपावली या दीवाली भारत के सबसे बड़े त्योहारों में से एक है। इसे हिंदू, जैन और सिख समुदाय अलग-अलग कारणों से मनाते हैं। घरों को दीयों और रोशनी से सजाया जाता है, रंगोली बनाई जाती है और परिवार साथ मिलकर पूजा करते हैं।",
      en: "Diwali (Deepavali) is one of India's largest festivals. It is celebrated by Hindu, Jain and Sikh communities, each for somewhat different reasons. Homes are decorated with diyas and lights, rangoli is drawn, and families come together for puja.",
    },
    whyCelebrated: [
      {
        infoType: "religious-belief",
        text: {
          hi: "अनेक हिंदू परंपराओं में मान्यता है कि इस दिन भगवान राम, माता सीता और लक्ष्मण चौदह वर्ष के वनवास और रावण पर विजय के बाद अयोध्या लौटे थे, जिसकी खुशी में नगरवासियों ने दीप जलाए थे।",
          en: "In many Hindu traditions it is believed that on this day Lord Rama, Sita and Lakshmana returned to Ayodhya after fourteen years of exile and victory over Ravana, and the citizens lit lamps in celebration.",
        },
      },
      {
        infoType: "religious-belief",
        text: {
          hi: "बंगाल और पूर्वी भारत के कई क्षेत्रों में इस रात्रि को देवी काली की पूजा की जाती है, जिसे काली पूजा कहा जाता है।",
          en: "In Bengal and parts of Eastern India, this night is dedicated to the worship of Goddess Kali, known as Kali Puja.",
        },
      },
      {
        infoType: "religious-belief",
        text: {
          hi: "पश्चिम और उत्तर भारत के कई क्षेत्रों में इस दिन देवी लक्ष्मी और भगवान गणेश की पूजा की जाती है, जो समृद्धि और शुभारंभ का प्रतीक मानी जाती है।",
          en: "In much of Western and Northern India, this day centres on the worship of Goddess Lakshmi and Lord Ganesha, symbolising prosperity and new beginnings.",
        },
      },
      {
        infoType: "religious-belief",
        text: {
          hi: "जैन परंपरा में यह दिन भगवान महावीर के निर्वाण (मोक्ष प्राप्ति) की स्मृति में मनाया जाता है।",
          en: "In the Jain tradition, this day commemorates the nirvana (spiritual liberation) of Bhagwan Mahavira.",
        },
      },
      {
        infoType: "cultural-belief",
        text: {
          hi: "यह त्योहार खरीफ की फसल कटने के बाद आता है, इसलिए इसे कृषि से जुड़े नए वर्ष और नई शुरुआत के उत्सव के रूप में भी देखा जाता है।",
          en: "The festival falls after the kharif harvest, so it is also widely seen as a celebration of a new agricultural cycle and fresh beginnings.",
        },
      },
      {
        infoType: "historical-fact",
        text: {
          hi: "दीपावली से जुड़े दीप जलाने के उल्लेख प्राचीन भारतीय ग्रंथों और यात्रा-वृत्तांतों में मिलते हैं, जो दर्शाते हैं कि यह परंपरा सदियों पुरानी है, हालांकि इसके सटीक आरंभ की तारीख को लेकर इतिहासकारों में एकमत नहीं है।",
          en: "References to lamp-lighting festivals appear in ancient Indian texts and travel accounts, showing the practice is centuries old, though historians do not agree on one precise date of origin.",
        },
      },
    ],
    story: {
      forChildren: {
        hi: "बहुत समय पहले भगवान राम, माता सीता और उनके भाई लक्ष्मण चौदह साल के लिए जंगल गए थे। वहां रावण नाम के राक्षस राजा ने सीता माता का अपहरण कर लिया। भगवान राम ने रावण को हराया और सीता माता को वापस लाए। जब वे अयोध्या लौटे, तो वहां के लोगों ने बहुत खुश होकर पूरे शहर में दीये जलाए। इसीलिए हर साल हम दीये जलाकर दीपावली मनाते हैं।",
        en: "Long ago, Lord Rama, Mother Sita and his brother Lakshmana went to the forest for fourteen years. There, a demon king named Ravana took Sita away. Rama defeated Ravana and brought Sita back. When they returned to Ayodhya, the happy townspeople lit lamps all over the city. That is why, every year, we light diyas to celebrate Diwali.",
      },
      general: {
        hi: "रामायण के अनुसार, भगवान राम को उनके पिता राजा दशरथ के वचन के कारण चौदह वर्ष का वनवास मिला। वनवास के दौरान रावण ने सीता माता का हरण किया। राम ने हनुमान और वानर सेना की सहायता से लंका पर चढ़ाई की, रावण का वध किया और सीता को मुक्त कराया। चौदह वर्ष पूरे होने पर जब राम, सीता और लक्ष्मण अयोध्या लौटे, तो अयोध्यावासियों ने घी के दीये जलाकर और नगर को सजाकर उनका स्वागत किया — यही परंपरा दीपावली के रूप में आगे बढ़ी।",
        en: "According to the Ramayana, Lord Rama was sent into fourteen years of exile due to a promise his father, King Dasharatha, had made. During the exile, Ravana abducted Sita. With the help of Hanuman and the vanara army, Rama marched on Lanka, defeated Ravana and freed Sita. When the fourteen years ended and Rama, Sita and Lakshmana returned to Ayodhya, its people welcomed them by lighting rows of oil lamps and decorating the city — a tradition that continued as Diwali.",
      },
      detailed: {
        hi: "दीपावली की कहानियां क्षेत्र के अनुसार बदलती हैं। उत्तर भारत में यह मुख्यतः राम की अयोध्या वापसी से जुड़ी है। पश्चिम भारत के कई क्षेत्रों में इसे भगवान विष्णु द्वारा राजा बलि को पाताल भेजने और लक्ष्मी जी के प्राकट्य से भी जोड़ा जाता है। बंगाल में इसी रात्रि को काली पूजा होती है, जो शक्ति और अंधकार पर विजय का प्रतीक मानी जाती है। दक्षिण भारत के कई भागों में इसे भगवान कृष्ण द्वारा नरकासुर के वध की कथा से जोड़कर नरक चतुर्दशी के रूप में मनाया जाता है। जैन परंपरा में यह भगवान महावीर के निर्वाण का दिन है। इस तरह दीपावली एक साझा त्योहार है, जिसकी कहानियां अलग-अलग समुदायों और क्षेत्रों में अलग-अलग हैं — इसलिए किसी एक कथा को ही 'एकमात्र सही व्याख्या' नहीं माना जाना चाहिए।",
        en: "Diwali's stories vary by region and community. In North India it is chiefly linked to Rama's return to Ayodhya. In parts of Western India it is also connected to Vishnu sending King Bali to the netherworld, and to the emergence of Goddess Lakshmi. In Bengal, the same night is marked as Kali Puja, symbolising the power that overcomes darkness. In parts of South India it is observed as Naraka Chaturdashi, linked to Krishna's defeat of the demon Narakasura. In the Jain tradition it marks Mahavira's nirvana. Diwali is thus a shared festival whose stories differ across communities and regions — no single account should be treated as the only correct explanation.",
      },
    },
    howCelebrated: {
      hi: "घरों की सफाई और सजावट, दीये व रोशनी जलाना, रंगोली बनाना, नए कपड़े पहनना, लक्ष्मी-गणेश पूजा करना, मिठाइयां व उपहार बांटना, और परिवार व मित्रों से मिलना-जुलना — ये दीपावली के सामान्य रूप से देखे जाने वाले रिवाज़ हैं। कई जगह पटाखे भी चलाए जाते हैं, हालांकि प्रदूषण की चिंताओं के चलते कई शहरों में इन पर नियम लागू हैं।",
      en: "Cleaning and decorating homes, lighting diyas and lights, drawing rangoli, wearing new clothes, performing Lakshmi-Ganesh puja, sharing sweets and gifts, and visiting family and friends are common Diwali customs. Firecrackers are also part of celebrations in many places, though several cities now regulate them due to pollution concerns.",
    },
    puja: {
      title: { hi: "लक्ष्मी-गणेश पूजा", en: "Lakshmi-Ganesh Puja" },
      materials: [
        { hi: "दीपक और तेल/घी", en: "Diya and oil/ghee" },
        { hi: "फूल", en: "Flowers" },
        { hi: "रोली और चावल (अक्षत)", en: "Roli and rice (akshat)" },
        { hi: "मिठाई और फल", en: "Sweets and fruits" },
        { hi: "लक्ष्मी-गणेश की मूर्ति या चित्र", en: "Idol or picture of Lakshmi-Ganesh" },
        { hi: "कलश और सिक्के", en: "Kalash and coins" },
      ],
      steps: [
        { hi: "पूजा स्थान को साफ करें और गंगाजल छिड़कें।", en: "Clean the puja area and sprinkle Ganga water." },
        { hi: "एक चौकी पर लाल कपड़ा बिछाकर लक्ष्मी-गणेश की मूर्ति या चित्र स्थापित करें।", en: "Place a red cloth on a low table and set up the Lakshmi-Ganesh idol or picture." },
        { hi: "दीपक जलाएं और अगरबत्ती लगाएं।", en: "Light the diya and incense sticks." },
        { hi: "सबसे पहले भगवान गणेश की पूजा करें, फिर देवी लक्ष्मी की।", en: "Worship Lord Ganesha first, then Goddess Lakshmi." },
        { hi: "रोली-चावल लगाएं, फूल अर्पित करें और मंत्रों का जाप करें।", en: "Apply roli-rice, offer flowers, and chant mantras." },
        { hi: "आरती करें और परिवार के साथ प्रसाद बांटें।", en: "Perform the aarti and share prasad with the family." },
      ],
      aartiSlug: "lakshmi-aarti",
      mantraSlug: undefined,
      prasad: { hi: "मिठाई, फल और खील-बताशे", en: "Sweets, fruits, and puffed rice with sugar candy" },
      note: {
        hi: "यह विधि एक सामान्य रूप से प्रचलित परंपरा है। परिवार और क्षेत्र के अनुसार क्रम और सामग्री में अंतर हो सकता है।",
        en: "This is a commonly followed sequence. The exact order and materials can vary by family and region.",
      },
    },
    aartiSlugs: ["lakshmi-aarti", "ganesh-aarti"],
    regionalVariations: [
      {
        region: "north-india",
        description: { hi: "राम की अयोध्या वापसी की कथा प्रमुख है; अयोध्या में विशेष दीपोत्सव आयोजित होता है।", en: "The story of Rama's return to Ayodhya is central; a large Deepotsav is held in Ayodhya." },
      },
      {
        region: "east-india",
        description: { hi: "पश्चिम बंगाल और असम में इसी रात्रि को काली पूजा प्रमुखता से मनाई जाती है।", en: "In West Bengal and Assam, this night is prominently observed as Kali Puja." },
      },
      {
        region: "south-india",
        description: { hi: "नरक चतुर्दशी को नरकासुर वध से जोड़ा जाता है; कई घरों में तेल स्नान की परंपरा है।", en: "Naraka Chaturdashi is linked to the slaying of Narakasura; an oil bath tradition is common in many homes." },
      },
      {
        region: "west-india",
        description: { hi: "गुजरात और महाराष्ट्र में यह व्यापारिक नववर्ष (बहीखाता पूजन) से भी जुड़ा है।", en: "In Gujarat and Maharashtra it is also linked to the business new year and the ritual of opening fresh account books (Chopda Pujan)." },
      },
    ],
    dosAndDonts: {
      dos: [
        { hi: "घर की सफाई और सजावट करें।", en: "Clean and decorate the home." },
        { hi: "पटाखे चलाते समय सुरक्षा का ध्यान रखें और अनुमति-प्राप्त समय व स्थान का पालन करें।", en: "Follow local safety rules, permitted timings and locations when using firecrackers." },
      ],
      donts: [
        { hi: "प्रदूषण नियमों की अनदेखी न करें।", en: "Do not ignore local pollution and noise regulations." },
        { hi: "आतिशबाज़ी को स्वास्थ्य या पर्यावरण के लिए हानिरहित न मानें।", en: "Do not assume fireworks are harmless to health or the environment." },
      ],
    },
    childExplanation: {
      hi: "दीपावली रोशनी और खुशियों का त्योहार है। हम दीये जलाते हैं क्योंकि इसकी कहानी बताती है कि अच्छाई ने बुराई को हराया था, इसलिए लोग रोशनी करके खुशी मनाते हैं।",
      en: "Diwali is a festival of light and happiness. We light diyas because the story behind it tells us that goodness won over evil, so people celebrate by lighting up their homes.",
    },
    faqs: [
      {
        question: { hi: "दीपावली कितने दिन मनाई जाती है?", en: "How many days is Diwali celebrated over?" },
        answer: { hi: "उत्तर भारत में यह आमतौर पर पांच दिनों का उत्सव है — धनतेरस, नरक चतुर्दशी, दीपावली, गोवर्धन पूजा और भाई दूज। सभी क्षेत्रों में यह क्रम एक जैसा नहीं होता।", en: "In North India it is commonly a five-day celebration — Dhanteras, Naraka Chaturdashi, Diwali, Govardhan Puja and Bhai Dooj. This sequence is not identical across all regions." },
        infoType: "cultural-belief",
      },
      {
        question: { hi: "क्या दीपावली की कहानी सब जगह एक जैसी है?", en: "Is the Diwali story the same everywhere?" },
        answer: { hi: "नहीं। इस विषय पर अलग-अलग परंपराओं में अलग-अलग मान्यताएं मिलती हैं — जैसे राम की वापसी, काली पूजा, या महावीर का निर्वाण।", en: "No. Different traditions hold different beliefs on this — such as Rama's return, Kali Puja, or Mahavira's nirvana." },
        infoType: "cultural-belief",
      },
    ],
    sources: [
      { label: "वाल्मीकि रामायण (पारंपरिक स्रोत)", copyrightStatus: "Public Domain (ancient text)" },
      { label: "क्षेत्रीय लोक-परंपराएं और सांस्कृतिक अध्ययन", copyrightStatus: "Editorial summary" },
    ],
    keywords: [
      "diwali", "deepavali", "दीपावली", "दिवाली", "diwali kyu manate hain", "why is diwali celebrated",
      "festival of lights", "lakshmi puja", "dhanteras",
    ],
    emoji: "🪔",
    seo: {
      title: { hi: "दीपावली क्यों और कैसे मनाई जाती है? | MindMotions", en: "Why and How is Diwali Celebrated? | MindMotions" },
      description: { hi: "दीपावली का इतिहास, कहानी, पूजा विधि, आरती और क्षेत्रीय परंपराएं — सरल हिंदी और अंग्रेज़ी में।", en: "Diwali's history, story, puja rituals, aarti and regional traditions — explained simply in Hindi and English." },
    },
  },
  {
    id: "fest-holi",
    slug: "holi",
    religion: "hinduism",
    title: { hi: "होली", en: "Holi" },
    alsoKnownAs: { hi: "रंगों का त्योहार", en: "Festival of Colours" },
    region: ["north-india", "west-india", "global"],
    date: {
      type: "lunar",
      month: 3,
      nextOccurrence: "2027-03-22",
      displayDate: { hi: "मार्च 2027 (फाल्गुन पूर्णिमा)", en: "March 2027 (Phalguna Purnima)" },
    },
    duration: { hi: "2 दिन", en: "2 days" },
    shortDescription: {
      hi: "होली रंगों, हंसी-ठिठोली और वसंत ऋतु के स्वागत का त्योहार है, जो होलिका दहन की रात के अगले दिन मनाया जाता है।",
      en: "Holi is the festival of colours, playful fun and the welcome of spring, celebrated the day after the Holika Dahan bonfire.",
    },
    whatIsIt: {
      hi: "होली भारत के सबसे उल्लासपूर्ण त्योहारों में से एक है। पहली रात होलिका दहन होता है और अगले दिन लोग एक-दूसरे को रंग व गुलाल लगाकर होली खेलते हैं।",
      en: "Holi is one of India's most joyous festivals. The first night involves the Holika Dahan bonfire, and the next day people play with colours and gulal.",
    },
    whyCelebrated: [
      {
        infoType: "religious-belief",
        text: {
          hi: "पौराणिक कथा के अनुसार राक्षस राजा हिरण्यकशिपु के पुत्र प्रह्लाद भगवान विष्णु के परम भक्त थे। हिरण्यकशिपु ने अपनी बहन होलिका से प्रह्लाद को आग में लेकर बैठने को कहा, क्योंकि होलिका को आग में न जलने का वरदान प्राप्त था। कथा के अनुसार प्रह्लाद की भक्ति के कारण वे सुरक्षित बच गए और होलिका जल गई — इसी की स्मृति में होलिका दहन किया जाता है।",
          en: "According to the legend, Prahlad — son of demon king Hiranyakashipu — was a devoted follower of Lord Vishnu. Hiranyakashipu asked his sister Holika, who had a boon of being immune to fire, to sit in a bonfire holding Prahlad. The story holds that Prahlad's devotion protected him and Holika perished instead — commemorated today as Holika Dahan.",
        },
      },
      {
        infoType: "religious-belief",
        text: {
          hi: "ब्रज क्षेत्र (मथुरा-वृंदावन) में होली को राधा-कृष्ण की प्रेम-लीला से जोड़ा जाता है, जहां कृष्ण द्वारा राधा और गोपियों के साथ रंग खेलने की कथाएं प्रचलित हैं।",
          en: "In the Braj region (Mathura-Vrindavan), Holi is linked to the legends of Radha and Krishna, who are said to have played with colours together with the gopis.",
        },
      },
      {
        infoType: "cultural-belief",
        text: {
          hi: "होली को वसंत ऋतु के आगमन और रबी फसल की कटाई से जुड़ा त्योहार भी माना जाता है, जो प्रकृति में नए रंगों के आगमन का उत्सव है।",
          en: "Holi is also widely regarded as a celebration of spring's arrival and the rabi harvest, marking new colours in nature.",
        },
      },
    ],
    story: {
      forChildren: {
        hi: "बहुत समय पहले हिरण्यकशिपु नाम का एक राजा था, जो खुद को भगवान मानता था। लेकिन उसका बेटा प्रह्लाद भगवान विष्णु का भक्त था। राजा ने प्रह्लाद को आग में बैठाने की कोशिश की, लेकिन प्रह्लाद बच गया क्योंकि उसकी भक्ति सच्ची थी। इसी खुशी में लोग होलिका दहन करते हैं और अगले दिन रंगों से होली खेलते हैं।",
        en: "Long ago there was a king named Hiranyakashipu who believed himself to be a god. But his son Prahlad was devoted to Lord Vishnu instead. The king tried to have Prahlad sit in a fire, but Prahlad survived because his devotion was true. In celebration, people light the Holika bonfire and play with colours the next day.",
      },
      general: {
        hi: "हिरण्यकशिपु चाहता था कि सब लोग उसकी पूजा करें, पर उसका पुत्र प्रह्लाद भगवान विष्णु का भक्त था। कई प्रयासों के बावजूद प्रह्लाद को नुकसान नहीं पहुंचाया जा सका। अंततः हिरण्यकशिपु की बहन होलिका, जिसे आग में न जलने का वरदान था, प्रह्लाद को गोद में लेकर चिता पर बैठी। कथा के अनुसार होलिका जलकर भस्म हो गई और प्रह्लाद सुरक्षित रहा। इसी घटना की स्मृति में होलिका दहन की परंपरा शुरू हुई मानी जाती है, और अगले दिन रंगों के साथ नई शुरुआत का उत्सव मनाया जाता है।",
        en: "Hiranyakashipu wanted everyone to worship him, but his son Prahlad remained devoted to Vishnu. Despite several attempts, Prahlad could not be harmed. Eventually, Hiranyakashipu's sister Holika, who had a boon protecting her from fire, sat on a pyre holding Prahlad. According to the story, Holika was consumed by the fire while Prahlad emerged unharmed. This event is remembered through Holika Dahan, followed the next day by a joyful celebration of colours and new beginnings.",
      },
      detailed: {
        hi: "होली की कथाएं क्षेत्र के अनुसार भिन्न हैं। उत्तर भारत के अधिकांश हिस्सों में प्रह्लाद-होलिका की कथा प्रचलित है। ब्रज क्षेत्र में इसे राधा-कृष्ण की लीलाओं से जोड़ा जाता है, जहां लठमार होली जैसी विशेष परंपराएं भी हैं। महाराष्ट्र में इसे रंगपंचमी के रूप में कुछ दिन बाद भी मनाया जाता है। दक्षिण भारत के कुछ हिस्सों में कामदेव की कथा से इसे जोड़ा जाता है। इस विषय पर अलग-अलग परंपराओं में अलग-अलग मान्यताएं मिलती हैं, और इन्हें एक-दूसरे का विकल्प नहीं बल्कि सह-अस्तित्व में देखा जाना चाहिए।",
        en: "Holi's stories differ by region. Most of North India follows the Prahlad-Holika legend. In the Braj region it is linked to the Radha-Krishna legends, including distinctive customs like Lathmar Holi. In Maharashtra a related celebration, Rangapanchami, follows a few days later. Parts of South India connect it to the legend of Kamadeva. Different traditions hold different beliefs on this subject, and these should be seen as coexisting rather than competing explanations.",
      },
    },
    howCelebrated: {
      hi: "पहली शाम होलिका दहन किया जाता है, जिसमें लकड़ी और उपलों की चिता जलाई जाती है। अगले दिन 'रंगवाली होली' खेली जाती है, जिसमें लोग एक-दूसरे को रंग और गुलाल लगाते हैं, पिचकारी से पानी डालते हैं और गुझिया व ठंडाई जैसे व्यंजनों का आनंद लेते हैं।",
      en: "On the first evening, Holika Dahan is performed with a bonfire of wood and cow-dung cakes. The next day is 'Rangwali Holi', when people apply colours and gulal to each other, play with water pichkaris, and enjoy foods like gujiya and thandai.",
    },
    puja: {
      title: { hi: "होलिका दहन पूजा", en: "Holika Dahan Puja" },
      materials: [
        { hi: "लकड़ी और उपले", en: "Wood and dried cow-dung cakes" },
        { hi: "रोली, चावल, फूल", en: "Roli, rice, flowers" },
        { hi: "कच्चा सूत (मौली)", en: "Raw cotton thread (moli)" },
        { hi: "नारियल और गुड़", en: "Coconut and jaggery" },
      ],
      steps: [
        { hi: "होलिका स्थल की परिक्रमा करते हुए कच्चा सूत लपेटें।", en: "Circle the Holika pyre while wrapping raw thread around it." },
        { hi: "रोली-चावल और फूल अर्पित करें।", en: "Offer roli-rice and flowers." },
        { hi: "जल अर्पित करें और चिता प्रज्वलित करें।", en: "Offer water and light the pyre." },
        { hi: "परिवार के साथ परिक्रमा कर प्रसाद बांटें।", en: "Circumambulate with family and share prasad." },
      ],
      prasad: { hi: "गुड़, नारियल और नए अनाज से बने व्यंजन", en: "Jaggery, coconut, and dishes made from new-season grain" },
      note: { hi: "स्थानीय परंपरा और सुरक्षा नियमों के अनुसार विधि में अंतर हो सकता है।", en: "Practices vary by local tradition and are subject to local fire-safety rules." },
    },
    aartiSlugs: [],
    regionalVariations: [
      { region: "north-india", description: { hi: "ब्रज की लठमार होली और मथुरा-वृंदावन के विशेष आयोजन प्रसिद्ध हैं।", en: "Braj's Lathmar Holi and special celebrations in Mathura-Vrindavan are well known." } },
      { region: "west-india", description: { hi: "महाराष्ट्र में रंगपंचमी के रूप में उत्सव कुछ दिन आगे बढ़ता है।", en: "In Maharashtra, celebrations extend a few more days as Rangapanchami." } },
    ],
    dosAndDonts: {
      dos: [{ hi: "जहां संभव हो प्राकृतिक/हर्बल रंगों का प्रयोग करें।", en: "Prefer natural or herbal colours where possible." }],
      donts: [{ hi: "किसी की सहमति के बिना जबरन रंग न लगाएं।", en: "Do not apply colour on anyone without their consent." }, { hi: "आंखों और संवेदनशील त्वचा के पास सावधानी बरतें।", en: "Be careful around eyes and sensitive skin." }],
    },
    childExplanation: {
      hi: "होली हमें सिखाती है कि सच्चाई और भक्ति हमेशा जीतती है। इसीलिए हम रंगों से खेलकर खुशी मनाते हैं और एक-दूसरे को गले लगाते हैं।",
      en: "Holi teaches us that truth and devotion always win. That is why we celebrate with colours and hug one another in joy.",
    },
    faqs: [
      {
        question: { hi: "होलिका दहन और होली में क्या अंतर है?", en: "What is the difference between Holika Dahan and Holi?" },
        answer: { hi: "होलिका दहन पहली रात की जाने वाली अग्नि-पूजा है, जबकि होली अगले दिन खेली जाने वाली रंगों की उत्सव है।", en: "Holika Dahan is the bonfire ritual performed the first night, while Holi itself is the colour-play celebration the next day." },
      },
    ],
    sources: [{ label: "पारंपरिक लोककथाएं और पुराण-आधारित कथा-परंपरा", copyrightStatus: "Public Domain / traditional" }],
    keywords: ["holi", "होली", "holi kyu manate hain", "why is holi celebrated", "holika dahan", "festival of colours", "holi story"],
    emoji: "🎨",
    seo: {
      title: { hi: "होली क्यों मनाई जाती है? कहानी और परंपराएं | MindMotions", en: "Why is Holi Celebrated? Story & Traditions | MindMotions" },
      description: { hi: "होली की कहानी, होलिका दहन, क्षेत्रीय परंपराएं और सुरक्षित होली खेलने के सुझाव।", en: "Holi's story, Holika Dahan, regional customs and tips for playing Holi safely." },
    },
  },
  {
    id: "fest-ganesh-chaturthi",
    slug: "ganesh-chaturthi",
    religion: "hinduism",
    title: { hi: "गणेश चतुर्थी", en: "Ganesh Chaturthi" },
    alsoKnownAs: { hi: "विनायक चतुर्थी", en: "Vinayaka Chaturthi" },
    region: ["west-india", "south-india", "global"],
    date: { type: "lunar", month: 9, nextOccurrence: "2026-09-14", displayDate: { hi: "14 सितंबर 2026 (भाद्रपद शुक्ल चतुर्थी)", en: "14 September 2026 (Bhadrapada Shukla Chaturthi)" } },
    duration: { hi: "10 दिन (सामान्यतः)", en: "10 days (typically)" },
    shortDescription: {
      hi: "गणेश चतुर्थी भगवान गणेश के जन्म का उत्सव है, जिसमें घरों और सार्वजनिक पंडालों में गणेश प्रतिमा स्थापित की जाती है।",
      en: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, with idols installed in homes and public pandals.",
    },
    whatIsIt: {
      hi: "यह त्योहार भगवान गणेश की पूजा को समर्पित है, जिन्हें विघ्नहर्ता और शुभारंभ का देवता माना जाता है। महाराष्ट्र में यह विशेष रूप से बड़े पैमाने पर सार्वजनिक रूप से मनाया जाता है।",
      en: "This festival is dedicated to Lord Ganesha, regarded as the remover of obstacles and the deity of new beginnings. It is celebrated on a particularly large public scale in Maharashtra.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "मान्यता है कि इस दिन भगवान गणेश का जन्म हुआ था, जो देवी पार्वती और भगवान शिव के पुत्र माने जाते हैं।", en: "It is believed that Lord Ganesha was born on this day, regarded as the son of Goddess Parvati and Lord Shiva." } },
      { infoType: "historical-fact", text: { hi: "इस त्योहार को एक बड़े सार्वजनिक उत्सव का रूप लोकमान्य बाल गंगाधर तिलक ने 19वीं सदी के अंत में दिया, ताकि लोग सामूहिक रूप से एकत्र हो सकें — यह एक दस्तावेज़ीकृत ऐतिहासिक तथ्य है।", en: "The tradition of large public celebrations was popularised by Lokmanya Bal Gangadhar Tilak in the late 19th century as a way to bring communities together — this is a well-documented historical fact." } },
    ],
    story: {
      forChildren: { hi: "गणेश जी हाथी के सिर वाले भगवान हैं। कहा जाता है कि माता पार्वती ने उन्हें बनाया था। गणेश जी को हर काम की शुरुआत में सबसे पहले पूजा जाता है, इसलिए उनका जन्मदिन बहुत खुशी से मनाया जाता है।", en: "Ganesha is the elephant-headed god. It is said that Goddess Parvati created him. Ganesha is worshipped first before starting any task, so his birthday is celebrated with great joy." },
      general: { hi: "पौराणिक कथा के अनुसार देवी पार्वती ने अपने उबटन से एक बालक की आकृति बनाई और उसे प्राण दिए। भगवान शिव से हुए एक गलतफहमी भरे प्रसंग के बाद, कथा में वर्णन है कि शिव ने बालक को हाथी का सिर देकर पुनर्जीवित किया — यही गणेश जी हैं। उन्हें विघ्नहर्ता और प्रथम पूज्य देवता माना जाता है।", en: "According to the legend, Goddess Parvati fashioned a boy from turmeric paste and gave him life. After a mix-up involving Lord Shiva, the story recounts that Shiva revived the boy with an elephant's head — this became Ganesha. He is regarded as the remover of obstacles and the deity worshipped first." },
      detailed: { hi: "गणेश जन्म से जुड़ी कथाएं पुराणों में अलग-अलग रूपों में मिलती हैं, और क्षेत्रीय लोक-परंपराओं में भी विविधता है। महाराष्ट्र में सार्वजनिक गणेशोत्सव की परंपरा 19वीं सदी के अंत में सामाजिक-राजनीतिक एकजुटता के उद्देश्य से लोकप्रिय हुई, जो आज एक बड़े सांस्कृतिक उत्सव का रूप ले चुकी है।", en: "Stories of Ganesha's birth appear in varied forms across the Puranas, with further diversity in regional folk traditions. The public Ganeshotsav tradition in Maharashtra was popularised in the late 19th century for social and political unity, and has since grown into a major cultural celebration." },
    },
    howCelebrated: {
      hi: "घरों और पंडालों में गणेश प्रतिमा स्थापित की जाती है, दैनिक आरती व मोदक का भोग लगाया जाता है, और अंतिम दिन धूमधाम से 'गणेश विसर्जन' किया जाता है, जिसमें मूर्ति को जल में विसर्जित किया जाता है।",
      en: "Ganesha idols are installed in homes and pandals, with daily aarti and modak offerings, culminating in 'Ganesh Visarjan' — immersing the idol in water with much festivity.",
    },
    puja: {
      title: { hi: "गणेश स्थापना पूजा", en: "Ganesh Sthapana Puja" },
      materials: [{ hi: "गणेश प्रतिमा (मिट्टी की, पर्यावरण-अनुकूल)", en: "Ganesha idol (preferably clay, eco-friendly)" }, { hi: "मोदक/लड्डू", en: "Modak/laddu" }, { hi: "दूर्वा घास", en: "Durva grass" }, { hi: "लाल फूल", en: "Red flowers" }],
      steps: [
        { hi: "शुभ मुहूर्त में प्रतिमा की स्थापना करें।", en: "Install the idol at an auspicious time." },
        { hi: "प्राण-प्रतिष्ठा और षोडशोपचार पूजा करें।", en: "Perform pran-pratishtha and the sixteen-step puja." },
        { hi: "दूर्वा और मोदक अर्पित करें।", en: "Offer durva grass and modak." },
        { hi: "प्रतिदिन आरती करें और अंतिम दिन विसर्जन करें।", en: "Perform daily aarti and immerse the idol on the final day." },
      ],
      aartiSlug: "ganesh-aarti",
      prasad: { hi: "मोदक और लड्डू", en: "Modak and laddu" },
      note: { hi: "मूर्ति विसर्जन के लिए पर्यावरण-अनुकूल (मिट्टी की) मूर्तियों को प्राथमिकता देना कई शहरों में अनुशंसित है।", en: "Eco-friendly clay idols are recommended for immersion in many cities to reduce water pollution." },
    },
    aartiSlugs: ["ganesh-aarti"],
    regionalVariations: [
      { region: "west-india", description: { hi: "महाराष्ट्र और गोवा में यह सबसे बड़ा सार्वजनिक उत्सव है, जिसमें विशाल पंडाल और जुलूस होते हैं।", en: "In Maharashtra and Goa this is the largest public celebration, with huge pandals and processions." } },
      { region: "south-india", description: { hi: "आंध्र प्रदेश, तेलंगाना और कर्नाटक में इसे विनायक चविथी/चतुर्थी के रूप में घरों में भी मनाया जाता है।", en: "In Andhra Pradesh, Telangana and Karnataka it is also observed at home as Vinayaka Chavithi/Chaturthi." } },
    ],
    childExplanation: { hi: "गणेश चतुर्थी गणेश जी के जन्मदिन का त्योहार है। हम उनकी मूर्ति घर लाते हैं, उनकी पूजा करते हैं और मोदक खिलाते हैं क्योंकि गणेश जी को मोदक बहुत पसंद हैं।", en: "Ganesh Chaturthi celebrates Ganesha's birthday. We bring his idol home, worship him and offer modak because Ganesha loves modak." },
    faqs: [
      { question: { hi: "गणेश विसर्जन क्यों किया जाता है?", en: "Why is Ganesh Visarjan performed?" }, answer: { hi: "मान्यता है कि विसर्जन के साथ गणेश जी अपने धाम लौट जाते हैं, यह जीवन के आने-जाने के चक्र का भी प्रतीक माना जाता है।", en: "It is believed that immersion marks Ganesha's return to his abode, and is also seen as symbolic of life's cycle of arrival and departure." }, infoType: "cultural-belief" },
    ],
    sources: [{ label: "पौराणिक कथा-परंपरा एवं क्षेत्रीय सांस्कृतिक दस्तावेज़", copyrightStatus: "Public Domain / editorial summary" }],
    keywords: ["ganesh chaturthi", "गणेश चतुर्थी", "vinayaka chaturthi", "ganpati", "ganesh chaturthi kyu manate hain", "modak"],
    emoji: "🐘",
    seo: {
      title: { hi: "गणेश चतुर्थी क्यों मनाई जाती है? | MindMotions", en: "Why is Ganesh Chaturthi Celebrated? | MindMotions" },
      description: { hi: "गणेश चतुर्थी का इतिहास, कथा, पूजा विधि और विसर्जन परंपरा।", en: "Ganesh Chaturthi's history, story, puja process and the immersion tradition." },
    },
  },
  {
    id: "fest-janmashtami",
    slug: "janmashtami",
    religion: "hinduism",
    title: { hi: "जन्माष्टमी", en: "Janmashtami" },
    alsoKnownAs: { hi: "कृष्ण जन्माष्टमी", en: "Krishna Janmashtami" },
    region: ["north-india", "west-india", "global"],
    date: { type: "lunar", month: 9, nextOccurrence: "2026-09-04", displayDate: { hi: "4 सितंबर 2026 (भाद्रपद कृष्ण अष्टमी)", en: "4 September 2026 (Bhadrapada Krishna Ashtami)" } },
    duration: { hi: "1-2 दिन", en: "1-2 days" },
    shortDescription: {
      hi: "जन्माष्टमी भगवान कृष्ण के जन्म का उत्सव है, जिसमें उपवास, आधी रात की पूजा और दही-हांडी जैसे उत्सव शामिल हैं।",
      en: "Janmashtami celebrates the birth of Lord Krishna, marked by fasting, midnight puja and events like Dahi Handi.",
    },
    whatIsIt: {
      hi: "यह त्योहार भगवान विष्णु के अवतार माने जाने वाले भगवान कृष्ण के जन्म की स्मृति में मनाया जाता है। भक्त उपवास रखते हैं और आधी रात को, जिस समय कृष्ण के जन्म की मान्यता है, विशेष पूजा करते हैं।",
      en: "This festival commemorates the birth of Lord Krishna, regarded as an avatar of Vishnu. Devotees fast and hold special worship at midnight, the time traditionally believed to mark his birth.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "मान्यता है कि मथुरा में अत्याचारी राजा कंस के कारागार में देवकी और वासुदेव के पुत्र के रूप में भगवान कृष्ण का जन्म हुआ, ताकि वे अधर्म का नाश कर सकें।", en: "It is believed that Krishna was born in a prison in Mathura to Devaki and Vasudeva, under the tyrannical rule of King Kansa, to end injustice." } },
    ],
    story: {
      forChildren: { hi: "बहुत समय पहले मथुरा में कंस नाम का एक बुरा राजा था। एक आवाज़ ने उसे बताया कि उसकी बहन देवकी का आठवां बेटा उसे हराएगा। इसलिए कंस ने देवकी को कैद कर लिया। जब कृष्ण का जन्म हुआ, उनके पिता वासुदेव उन्हें आधी रात में सुरक्षित यशोदा माता के घर ले गए। कृष्ण बड़े होकर बहुत बहादुर और चतुर बने।", en: "Long ago there was a cruel king named Kansa in Mathura. A voice warned him that his sister Devaki's eighth son would defeat him, so he imprisoned her. When Krishna was born, his father Vasudeva carried him safely at midnight to Mother Yashoda's home. Krishna grew up to be brave and clever." },
      general: { hi: "पौराणिक कथा के अनुसार मथुरा के राजा कंस को भविष्यवाणी मिली थी कि देवकी की आठवीं संतान उसका वध करेगी। इस डर से कंस ने देवकी और वासुदेव को कारागार में डाल दिया। जब आठवीं संतान के रूप में कृष्ण का जन्म हुआ, वासुदेव चमत्कारिक रूप से उन्हें यमुना पार गोकुल में यशोदा और नंद के घर छोड़ आए, जहां कृष्ण का पालन-पोषण हुआ।", en: "According to the legend, King Kansa of Mathura had received a prophecy that Devaki's eighth child would kill him. Fearing this, he imprisoned Devaki and Vasudeva. When Krishna was born as the eighth child, Vasudeva miraculously carried him across the Yamuna to Gokul, leaving him with Yashoda and Nanda, who raised him." },
      detailed: { hi: "कृष्ण जन्म की कथा भागवत पुराण और महाभारत जैसे ग्रंथों में विस्तार से वर्णित है। कृष्ण का जीवन — बाल लीलाएं, गोवर्धन पर्वत उठाना, महाभारत में अर्जुन को गीता का उपदेश — भारतीय संस्कृति में गहराई से रचा-बसा है। विभिन्न संप्रदाय (जैसे वैष्णव परंपरा) कृष्ण को स्वयं भगवान विष्णु का पूर्ण अवतार मानते हैं, जबकि यह आध्यात्मिक मान्यता है, ऐतिहासिक तथ्य के रूप में सत्यापित नहीं।", en: "The story of Krishna's birth is detailed in texts such as the Bhagavata Purana and the Mahabharata. Krishna's life — his childhood exploits, lifting Govardhan hill, and delivering the Gita's teachings to Arjuna in the Mahabharata — is deeply woven into Indian culture. Various traditions (such as Vaishnavism) regard Krishna as a complete avatar of Vishnu himself; this is a matter of spiritual belief, not a historically verified fact." },
    },
    howCelebrated: {
      hi: "भक्त दिन भर उपवास रखते हैं, मंदिरों को सजाया जाता है, आधी रात को कृष्ण जन्म की पूजा होती है, झांकियां सजाई जाती हैं और महाराष्ट्र-गुजरात में 'दही-हांडी' का आयोजन होता है, जिसमें मानव-पिरामिड बनाकर ऊंचाई पर बंधी दही की हांडी फोड़ी जाती है।",
      en: "Devotees fast through the day, temples are decorated, midnight puja marks Krishna's birth, elaborate tableaux (jhankis) are set up, and in Maharashtra-Gujarat the 'Dahi Handi' event sees human pyramids formed to break a hanging pot of curd.",
    },
    puja: {
      title: { hi: "कृष्ण जन्म पूजा", en: "Krishna Janma Puja" },
      materials: [{ hi: "बाल कृष्ण की मूर्ति", en: "Idol of infant Krishna" }, { hi: "पालना/झूला", en: "Cradle/swing" }, { hi: "माखन-मिश्री", en: "Butter and rock sugar" }, { hi: "तुलसी दल", en: "Tulsi leaves" }],
      steps: [
        { hi: "दिन भर उपवास रखें (जो लोग रखते हैं)।", en: "Observe a day-long fast (for those who do)." },
        { hi: "आधी रात को बाल कृष्ण की मूर्ति को झूले में स्थापित करें।", en: "At midnight, place the infant Krishna idol in a cradle." },
        { hi: "अभिषेक करें और नए वस्त्र पहनाएं।", en: "Perform abhishek and dress the idol in new clothes." },
        { hi: "आरती करें और माखन-मिश्री का भोग लगाएं।", en: "Perform aarti and offer butter and rock sugar." },
      ],
      prasad: { hi: "माखन-मिश्री और पंजीरी", en: "Butter-sugar and panjiri" },
    },
    aartiSlugs: [],
    regionalVariations: [
      { region: "north-india", description: { hi: "मथुरा-वृंदावन में यह विशेष भव्यता से मनाया जाता है, जो कृष्ण की जन्मभूमि मानी जाती है।", en: "In Mathura-Vrindavan, regarded as Krishna's birthplace, celebrations are especially grand." } },
      { region: "west-india", description: { hi: "महाराष्ट्र और गुजरात में दही-हांडी एक लोकप्रिय सार्वजनिक आयोजन है।", en: "In Maharashtra and Gujarat, Dahi Handi is a popular public event." } },
    ],
    childExplanation: { hi: "जन्माष्टमी कृष्ण भगवान के जन्मदिन का त्योहार है। कृष्ण भगवान बचपन में बहुत शरारती और माखन के शौकीन थे, इसलिए हम उनके जन्मदिन पर माखन-मिश्री चढ़ाते हैं।", en: "Janmashtami celebrates Lord Krishna's birthday. As a child, Krishna was mischievous and loved butter, so we offer butter and rock sugar on his birthday." },
    faqs: [
      { question: { hi: "दही-हांडी क्यों खेली जाती है?", en: "Why is Dahi Handi played?" }, answer: { hi: "यह बाल कृष्ण की माखन चुराने की शरारतों की याद में खेला जाने वाला एक लोकप्रिय सांस्कृतिक खेल है।", en: "It is a popular cultural game recalling young Krishna's playful attempts to steal butter." }, infoType: "cultural-belief" },
    ],
    sources: [{ label: "भागवत पुराण, महाभारत (पारंपरिक स्रोत)", copyrightStatus: "Public Domain (ancient texts)" }],
    keywords: ["janmashtami", "जन्माष्टमी", "krishna janmashtami", "कृष्ण जन्माष्टमी", "dahi handi", "krishna birthday"],
    emoji: "🦚",
    seo: {
      title: { hi: "जन्माष्टमी क्यों मनाई जाती है? | MindMotions", en: "Why is Janmashtami Celebrated? | MindMotions" },
      description: { hi: "कृष्ण जन्माष्टमी की कथा, पूजा विधि, दही-हांडी परंपरा और क्षेत्रीय विविधताएं।", en: "Krishna Janmashtami's story, puja process, the Dahi Handi tradition and regional variations." },
    },
  },
];
