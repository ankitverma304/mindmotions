import { Festival } from "../types";

export const christianFestivals: Festival[] = [
  {
    id: "fest-christmas",
    slug: "christmas",
    religion: "christianity",
    title: { hi: "क्रिसमस", en: "Christmas" },
    alsoKnownAs: { hi: "बड़ा दिन", en: "Xmas / Noel" },
    region: ["north-india", "south-india", "east-india", "west-india", "northeast-india", "global"],
    date: { type: "fixed", month: 12, nextOccurrence: "2026-12-25", displayDate: { hi: "25 दिसंबर", en: "25 December" } },
    duration: { hi: "1 दिन (उत्सव सीज़न लंबा)", en: "1 day (season extends longer)" },
    shortDescription: {
      hi: "क्रिसमस ईसा मसीह के जन्म का उत्सव है, जो प्रार्थना, गिरजाघर की सजावट, क्रिसमस ट्री और परिवार संग उत्सव के साथ मनाया जाता है।",
      en: "Christmas celebrates the birth of Jesus Christ, marked by prayer, church services, Christmas trees and family gatherings.",
    },
    whatIsIt: {
      hi: "क्रिसमस ईसाई धर्म के सबसे बड़े त्योहारों में से एक है, जो यीशु मसीह के जन्म की स्मृति में मनाया जाता है। भारत सहित दुनिया भर में यह धार्मिक और सांस्कृतिक दोनों रूपों में मनाया जाता है।",
      en: "Christmas is one of Christianity's biggest festivals, commemorating the birth of Jesus Christ. It is celebrated in both religious and cultural forms across India and the world.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "ईसाई मान्यता के अनुसार यीशु मसीह का जन्म बेथलेहम में हुआ था, जिन्हें ईसाई परंपरा में ईश्वर के पुत्र और मानवता के उद्धारकर्ता के रूप में माना जाता है।", en: "Christian belief holds that Jesus Christ was born in Bethlehem, regarded in Christian tradition as the Son of God and saviour of humanity." } },
      { infoType: "historical-fact", text: { hi: "यीशु के जन्म की सटीक तारीख ऐतिहासिक रूप से अनिश्चित है; 25 दिसंबर की तारीख चौथी शताब्दी से चर्च परंपरा में स्थापित हुई — यह एक दस्तावेज़ीकृत ऐतिहासिक तथ्य है, न कि धार्मिक ग्रंथों में उल्लिखित तारीख।", en: "The exact date of Jesus's birth is historically uncertain; 25 December was established in church tradition from the fourth century onward — this is a documented historical fact, not a date stated in scripture itself." } },
    ],
    story: {
      forChildren: { hi: "बहुत समय पहले बेथलेहम शहर में एक तबेले में यीशु मसीह का जन्म हुआ, क्योंकि सराय में जगह नहीं थी। आसमान में एक चमकता तारा दिखा जिसने चरवाहों और तीन बुद्धिमान लोगों (मैगी) को उस जगह तक पहुंचाया। यीशु के जन्म की खुशी में हम क्रिसमस मनाते हैं, पेड़ सजाते हैं और उपहार बांटते हैं।", en: "Long ago in the town of Bethlehem, Jesus was born in a stable because there was no room at the inn. A bright star appeared in the sky and guided shepherds and three wise men (the Magi) to the place. We celebrate Christmas in joy of his birth, decorating trees and giving gifts." },
      general: { hi: "बाइबल के अनुसार मरियम (मैरी) और यूसुफ बेथलेहम गए, जहां सराय में जगह न मिलने पर यीशु का जन्म एक तबेले में हुआ। चरवाहों को स्वर्गदूतों ने खुशखबरी दी, और पूर्व से आए तीन बुद्धिमान व्यक्ति एक तारे का अनुसरण करते हुए उपहार लेकर पहुंचे। ईसाई परंपरा में यीशु के जन्म को मानवता के लिए आशा और उद्धार के संदेश के रूप में देखा जाता है।", en: "According to the Bible, Mary and Joseph travelled to Bethlehem, where — finding no room at the inn — Jesus was born in a stable. Angels brought the news to shepherds, and three wise men from the East followed a star bearing gifts. In Christian tradition, Jesus's birth is seen as a message of hope and salvation for humanity." },
      detailed: { hi: "क्रिसमस की तारीख (25 दिसंबर) बाइबल में स्पष्ट रूप से नहीं दी गई है; यह चौथी शताब्दी में चर्च परंपरा के रूप में स्थापित हुई। कुछ इतिहासकार इसे उस समय की रोमन सर्दियों की उत्सव परंपराओं से भी जोड़ते हैं, हालांकि इस पर विद्वानों में पूर्ण सहमति नहीं है। आधुनिक क्रिसमस उत्सव में क्रिसमस ट्री, सांता क्लॉज़ और उपहार देने की परंपराएं यूरोप और अमेरिका की सांस्कृतिक परंपराओं से जुड़कर विकसित हुईं और बाद में विश्व भर में लोकप्रिय हुईं।", en: "The 25 December date is not explicitly stated in the Bible; it was established as church tradition in the fourth century. Some historians link it to Roman winter festival customs of the time, though scholars are not in full agreement on this. Modern Christmas customs such as the Christmas tree, Santa Claus and gift-giving developed from European and American cultural traditions and later became popular worldwide." },
    },
    howCelebrated: {
      hi: "गिरजाघरों में मध्यरात्रि प्रार्थना (मिडनाइट मास) होती है, घरों और गिरजाघरों को सजाया जाता है, क्रिसमस ट्री सजाई जाती है, कैरोल गाए जाते हैं, उपहार बांटे जाते हैं और परिवार साथ मिलकर विशेष भोज करते हैं। भारत में गोवा, केरल और पूर्वोत्तर राज्यों में यह विशेष उत्साह से मनाया जाता है।",
      en: "Churches hold midnight mass, homes and churches are decorated, Christmas trees are set up, carols are sung, gifts are exchanged, and families share a festive meal. In India, Goa, Kerala and the Northeastern states celebrate with particular enthusiasm.",
    },
    dosAndDonts: {
      dos: [{ hi: "कैरोल गाना और परिवार-मित्रों के साथ समय बिताना पारंपरिक रूप से प्रिय है।", en: "Singing carols and spending time with family and friends is a cherished tradition." }],
      donts: [],
    },
    childExplanation: { hi: "क्रिसमस यीशु मसीह के जन्मदिन का त्योहार है। हम पेड़ सजाते हैं, गाने गाते हैं और एक-दूसरे को उपहार देते हैं क्योंकि यह प्यार और खुशियां बांटने का दिन है।", en: "Christmas celebrates the birth of Jesus Christ. We decorate trees, sing songs, and give each other gifts because it is a day of sharing love and joy." },
    faqs: [
      { question: { hi: "क्या 25 दिसंबर यीशु के जन्म की सटीक तारीख है?", en: "Is 25 December the exact date Jesus was born?" }, answer: { hi: "यह ऐतिहासिक रूप से निश्चित नहीं है। बाइबल जन्म-तिथि स्पष्ट नहीं बताती; 25 दिसंबर चर्च परंपरा में चौथी शताब्दी से स्थापित हुई तारीख है।", en: "This is not historically certain. The Bible does not specify a birth date; 25 December is the date established by church tradition from the fourth century." }, infoType: "historical-fact" },
    ],
    sources: [{ label: "बाइबल (न्यू टेस्टामेंट) एवं चर्च ऐतिहासिक परंपरा", copyrightStatus: "Public Domain (scripture) / editorial summary" }],
    keywords: ["christmas", "क्रिसमस", "xmas", "christmas kyu manaya jata hai", "why is christmas celebrated", "bada din"],
    emoji: "🎄",
    seo: {
      title: { hi: "क्रिसमस क्यों मनाया जाता है? | MindMotions", en: "Why is Christmas Celebrated? | MindMotions" },
      description: { hi: "क्रिसमस की कहानी, इतिहास और उत्सव की परंपराएं — सरल भाषा में।", en: "The story of Christmas, its history and celebration traditions — explained simply." },
    },
  },
  {
    id: "fest-easter",
    slug: "easter",
    religion: "christianity",
    title: { hi: "ईस्टर", en: "Easter" },
    region: ["north-india", "south-india", "east-india", "west-india", "northeast-india", "global"],
    date: { type: "lunar", month: 4, nextOccurrence: "2027-03-28", displayDate: { hi: "मार्च/अप्रैल 2027 (वसंत पूर्णिमा के बाद पहला रविवार)", en: "March/April 2027 (first Sunday after the spring full moon)" } },
    duration: { hi: "1 दिन (लेंट के 40 दिनों के बाद)", en: "1 day (after the 40 days of Lent)" },
    shortDescription: {
      hi: "ईस्टर ईसाई धर्म का सबसे पवित्र पर्व है, जो यीशु मसीह के पुनरुत्थान के उपलक्ष्य में मनाया जाता है।",
      en: "Easter is Christianity's holiest festival, celebrating the resurrection of Jesus Christ.",
    },
    whatIsIt: {
      hi: "ईस्टर गुड फ्राइडे (यीशु के क्रूस पर बलिदान की स्मृति) के तीसरे दिन मनाया जाता है, जब ईसाई मान्यता के अनुसार यीशु मसीह पुनः जीवित हुए थे।",
      en: "Easter is observed on the third day after Good Friday (which commemorates Jesus's crucifixion), when Christian belief holds that Jesus rose again from the dead.",
    },
    whyCelebrated: [
      { infoType: "religious-belief", text: { hi: "ईसाई मान्यता के अनुसार यीशु मसीह को क्रूस पर चढ़ाए जाने के तीसरे दिन पुनर्जीवित होना ईसाई धर्म के केंद्रीय विश्वास — मृत्यु पर विजय और अनन्त जीवन की आशा — का आधार है।", en: "Christian belief holds that Jesus's resurrection on the third day after crucifixion is the foundation of Christianity's central faith — victory over death and the hope of eternal life." } },
    ],
    story: {
      forChildren: { hi: "यीशु मसीह को क्रूस पर चढ़ाया गया, और उनके अनुयायी बहुत दुखी थे। लेकिन तीसरे दिन जब कुछ महिलाएं उनकी कब्र पर गईं, तो कब्र खाली मिली — यीशु फिर से जीवित हो उठे थे। इसी खुशी में ईस्टर मनाया जाता है।", en: "Jesus was crucified, and his followers were very sad. But on the third day, when some women went to his tomb, they found it empty — Jesus had risen again. Easter celebrates this joyful moment." },
      general: { hi: "गुड फ्राइडे को यीशु मसीह को क्रूस पर चढ़ाया गया था। बाइबल के अनुसार तीसरे दिन (रविवार) उनकी कब्र खाली पाई गई और वे अपने शिष्यों को दिखाई दिए। यह घटना ईस्टर रविवार के रूप में मनाई जाती है और इससे पहले लेंट के चालीस दिनों में उपवास व आत्मचिंतन किया जाता है।", en: "On Good Friday, Jesus was crucified. According to the Bible, on the third day (Sunday) his tomb was found empty and he appeared to his disciples. This event is celebrated as Easter Sunday, preceded by forty days of fasting and reflection during Lent." },
      detailed: { hi: "ईस्टर की तारीख चंद्र-सौर गणना पर आधारित है — यह वसंत विषुव के बाद आने वाली पहली पूर्णिमा के बाद के पहले रविवार को मनाया जाता है, इसलिए यह हर साल बदलती है। ईस्टर एग और ईस्टर बनी जैसी परंपराएं बाद में यूरोपीय लोक-रीतियों से जुड़ीं, जो नए जीवन और वसंत के प्रतीक मानी जाती हैं — ये सांस्कृतिक परंपराएं हैं, धार्मिक शिक्षा का हिस्सा नहीं।", en: "Easter's date follows a lunisolar calculation — the first Sunday after the first full moon following the spring equinox — so it changes every year. Traditions like Easter eggs and the Easter bunny were later folded in from European folk customs symbolising new life and spring — these are cultural traditions, not part of core religious teaching." },
    },
    howCelebrated: {
      hi: "लेंट के चालीस दिन उपवास व आत्मचिंतन में बिताए जाते हैं, गुड फ्राइडे को विशेष प्रार्थना होती है, और ईस्टर रविवार को गिरजाघरों में उत्सव प्रार्थना, परिवार संग भोज और बच्चों के लिए ईस्टर एग खोज जैसी गतिविधियां होती हैं।",
      en: "The forty days of Lent are spent in fasting and reflection, Good Friday involves solemn prayer, and Easter Sunday is marked with festive church services, family meals and activities like Easter egg hunts for children.",
    },
    childExplanation: { hi: "ईस्टर हमें बताता है कि यीशु मसीह मृत्यु के बाद फिर से जीवित हो उठे। यह उम्मीद और नई शुरुआत का त्योहार है।", en: "Easter tells us that Jesus rose again after death. It is a festival of hope and new beginnings." },
    faqs: [
      { question: { hi: "ईस्टर की तारीख हर साल क्यों बदलती है?", en: "Why does Easter's date change every year?" }, answer: { hi: "क्योंकि यह वसंत विषुव के बाद की पहली पूर्णिमा के बाद के रविवार पर आधारित है, जो एक चंद्र-सौर गणना है।", en: "Because it is calculated as the Sunday after the first full moon following the spring equinox — a lunisolar calculation." }, infoType: "historical-fact" },
    ],
    sources: [{ label: "बाइबल (न्यू टेस्टामेंट)", copyrightStatus: "Public Domain (scripture)" }],
    keywords: ["easter", "ईस्टर", "good friday", "easter kyu manaya jata hai", "resurrection sunday"],
    emoji: "✝️",
    seo: {
      title: { hi: "ईस्टर क्यों मनाया जाता है? | MindMotions", en: "Why is Easter Celebrated? | MindMotions" },
      description: { hi: "ईस्टर का महत्व, यीशु के पुनरुत्थान की कथा और लेंट की परंपरा।", en: "Easter's significance, the story of the resurrection, and the tradition of Lent." },
    },
  },
];
