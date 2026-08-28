import { Aarti } from "./types";

// All aarti texts below are traditional, centuries/decades-old devotional
// compositions in the public domain (several attributed to Pandit Shraddha
// Ram Phillauri, 1837-1881). Where authorship is uncertain they are marked
// "Traditional". No modern copyrighted translation is reproduced.

export const aartis: Aarti[] = [
  {
    id: "aarti-ganesh",
    slug: "ganesh-aarti",
    religion: "hinduism",
    deity: { hi: "श्री गणेश", en: "Shri Ganesha" },
    title: { hi: "श्री गणेश आरती", en: "Shri Ganesh Aarti" },
    textHindi: `जय गणेश जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

जय गणेश जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एक दंत दयावंत, चार भुजा धारी।
माथे सिंदूर सोहे, मूसे की सवारी॥
जय गणेश जय गणेश, जय गणेश देवा।

पान चढ़े फल चढ़े, और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥
जय गणेश जय गणेश, जय गणेश देवा।

अंधन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥
जय गणेश जय गणेश, जय गणेश देवा।

सूरश्याम शरण आए, सफल कीजे सेवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश जय गणेश, जय गणेश देवा।`,
    transliteration: `Jai Ganesh Jai Ganesh, Jai Ganesh Deva.
Mata jaki Parvati, Pita Mahadeva.

Jai Ganesh Jai Ganesh, Jai Ganesh Deva.
Mata jaki Parvati, Pita Mahadeva.

Ek dant dayavant, chaar bhuja dhaari.
Maathe sindoor sohe, muse ki savaari.
Jai Ganesh Jai Ganesh, Jai Ganesh Deva.

Paan chadhe phal chadhe, aur chadhe mewa.
Ladduan ka bhog lage, sant karein seva.
Jai Ganesh Jai Ganesh, Jai Ganesh Deva.

Andhan ko aankh det, kodhin ko kaaya.
Baanjhan ko putra det, nirdhan ko maaya.
Jai Ganesh Jai Ganesh, Jai Ganesh Deva.

Soor Shyam sharan aaye, saphal kije seva.
Mata jaki Parvati, Pita Mahadeva.
Jai Ganesh Jai Ganesh, Jai Ganesh Deva.`,
    meaning: {
      hi: "इस आरती में भगवान गणेश की जय-जयकार की जाती है, जो पार्वती-शिव के पुत्र हैं। उनसे विघ्न दूर करने, कष्ट मिटाने और भक्तों की सेवा सफल करने की प्रार्थना की जाती है।",
      en: "This aarti hails Lord Ganesha, son of Parvati and Shiva, praying to him to remove obstacles, end suffering, and bless devotees' efforts with success.",
    },
    source: {
      label: "पारंपरिक गणेश आरती",
      author: "परंपरागत (Traditional)",
      license: "Public Domain",
      copyrightStatus: "Public Domain (traditional composition)",
    },
    keywords: ["ganesh aarti", "गणेश आरती", "jai ganesh jai ganesh", "ganpati aarti"],
    emoji: "🐘",
  },
  {
    id: "aarti-hanuman",
    slug: "hanuman-aarti",
    religion: "hinduism",
    deity: { hi: "श्री हनुमान", en: "Shri Hanuman" },
    title: { hi: "श्री हनुमान आरती", en: "Shri Hanuman Aarti" },
    textHindi: `आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपे।
रोग दोष जाके निकट न झांके॥
आरती कीजै हनुमान लला की।

अंजनि पुत्र महा बलदाई।
संतन के प्रभु सदा सहाई॥
आरती कीजै हनुमान लला की।

दे बीरा रघुनाथ पठाए।
लंका जारि सिया सुधि लाए॥
आरती कीजै हनुमान लला की।

लंका सो कोट समुद्र सी खाई।
जात पवनसुत बार न लाई॥
आरती कीजै हनुमान लला की।

लक्ष्मण मूर्छित पड़े सकारे।
लाए संजीवन प्राण उबारे॥
आरती कीजै हनुमान लला की।

जो हनुमानजी की आरती गावे।
बसि बैकुंठ परमपद पावे॥
आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥`,
    transliteration: `Aarti kije Hanuman Lala ki.
Dusht dalan Raghunath kala ki.

Jaake bal se girivar kaanpe.
Rog dosh jaake nikat na jhaanke.
Aarti kije Hanuman Lala ki.

Anjani putra maha baldayi.
Santan ke prabhu sada sahayi.
Aarti kije Hanuman Lala ki.

De beera Raghunath pathaaye.
Lanka jaari Siya sudhi laaye.
Aarti kije Hanuman Lala ki.

Lanka so kot samudra si khaayi.
Jaat Pavansut baar na laayi.
Aarti kije Hanuman Lala ki.

Lakshman moorchhit pade sakaare.
Laaye Sanjeevan praan ubaare.
Aarti kije Hanuman Lala ki.

Jo Hanumanji ki aarti gaave.
Basi Baikunth paramapad paave.
Aarti kije Hanuman Lala ki.
Dusht dalan Raghunath kala ki.`,
    meaning: {
      hi: "इस आरती में हनुमान जी की वीरता, राम-भक्ति और सेवा-भाव की स्तुति की जाती है — जैसे लंका दहन, संजीवनी बूटी लाना और भक्तों की रक्षा करना।",
      en: "This aarti praises Hanuman's courage, devotion to Rama, and selfless service — including burning Lanka, fetching the Sanjeevani herb, and protecting devotees.",
    },
    source: {
      label: "पारंपरिक हनुमान आरती",
      author: "परंपरागत (Traditional)",
      license: "Public Domain",
      copyrightStatus: "Public Domain (traditional composition)",
    },
    keywords: ["hanuman aarti", "हनुमान आरती", "aarti kije hanuman lala ki", "bajrangbali aarti"],
    emoji: "🚩",
  },
  {
    id: "aarti-shiv",
    slug: "shiv-aarti",
    religion: "hinduism",
    deity: { hi: "श्री शिव", en: "Shri Shiva" },
    title: { hi: "ॐ जय शिव ओंकारा (शिव आरती)", en: "Om Jai Shiv Omkara (Shiv Aarti)" },
    textHindi: `ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्धांगी धारा॥
ॐ जय शिव ओंकारा।

एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥
ॐ जय शिव ओंकारा।

दो भुज चार चतुर्भुज दसभुज अति सोहे।
त्रिगुण रूप निरखता त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा।

श्वेताम्बर पीताम्बर बाघम्बर अंगे।
सनकादिक गरुणादिक भूतादिक संगे॥
ॐ जय शिव ओंकारा।

कर के मध्य कमंडल चक्र त्रिशूल धरता।
जगकर्ता जगभर्ता जगपालनकर्ता॥
ॐ जय शिव ओंकारा।

ब्रह्मा विष्णु सदाशिव जानत अविवेका।
प्रणवाक्षर मध्ये ये तीनों एका॥
ॐ जय शिव ओंकारा।
जय शिव ओंकारा, ॐ जय शिव ओंकारा।`,
    transliteration: `Om Jai Shiv Omkara, Swami Jai Shiv Omkara.
Brahma Vishnu Sadashiv, Ardhangi Dhaara.
Om Jai Shiv Omkara.

Ekaanan Chaturaanan Panchaanan Raaje.
Hansaasan Garudaasan Vrishvaahan Saaje.
Om Jai Shiv Omkara.

Do bhuj chaar chaturbhuj dasbhuj ati sohe.
Trigun roop nirakhata tribhuvan jan mohe.
Om Jai Shiv Omkara.

Shwetambar peetambar baaghambar ange.
Sanakaadik garunaadik bhootaadik sange.
Om Jai Shiv Omkara.

Kar ke madhya kamandal chakra trishul dharata.
Jagakarta jagabharta jagapaalanakarta.
Om Jai Shiv Omkara.

Brahma Vishnu Sadashiv jaanat aviveka.
Pranavaakshar madhye ye teeno eka.
Om Jai Shiv Omkara.
Jai Shiv Omkara, Om Jai Shiv Omkara.`,
    meaning: {
      hi: "इस आरती में भगवान शिव को सृष्टि के रचयिता, पालक और उनके त्रिदेव स्वरूप (ब्रह्मा-विष्णु-महेश) की एकता के रूप में वर्णित किया गया है।",
      en: "This aarti describes Lord Shiva as the creator and sustainer of the universe, and reflects on the unity of the Trimurti — Brahma, Vishnu and Mahesh (Shiva).",
    },
    source: {
      label: "पारंपरिक शिव आरती",
      author: "पंडित श्रद्धा राम फिल्लौरी (परंपरागत रूप से जिम्मेदार)",
      license: "Public Domain",
      copyrightStatus: "Public Domain (19th-century composition)",
    },
    keywords: ["shiv aarti", "शिव आरती", "om jai shiv omkara", "mahadev aarti"],
    emoji: "🔱",
  },
  {
    id: "aarti-lakshmi",
    slug: "lakshmi-aarti",
    religion: "hinduism",
    deity: { hi: "श्री लक्ष्मी", en: "Shri Lakshmi" },
    title: { hi: "ॐ जय लक्ष्मी माता (लक्ष्मी आरती)", en: "Om Jai Lakshmi Mata (Lakshmi Aarti)" },
    textHindi: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निसदिन सेवत, हर विष्णु विधाता॥
ॐ जय लक्ष्मी माता।

उमा रमा ब्रह्माणी, तुम ही जग-माता।
सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता।

दुर्गा रूप निरंजनि, सुख-संपत्ति दाता।
जो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता।

जिस घर तुम रहती, तहां सब सद्गुण आता।
सब संभव हो जाता, मन नहीं घबराता॥
ॐ जय लक्ष्मी माता।

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
खान-पान का वैभव, सब तुमसे आता॥
ॐ जय लक्ष्मी माता।

महालक्ष्मीजी की आरती, जो कोई नर गाता।
उर आनंद समाता, पाप उतर जाता॥
ॐ जय लक्ष्मी माता।`,
    transliteration: `Om Jai Lakshmi Mata, Maiya Jai Lakshmi Mata.
Tumako nisadin sevat, Har Vishnu Vidhata.
Om Jai Lakshmi Mata.

Uma Rama Brahmani, tum hi jag-mata.
Surya-Chandrama dhyaavat, Narad Rishi gaata.
Om Jai Lakshmi Mata.

Durga roop niranjani, sukh-sampatti daata.
Jo koi tumako dhyaavat, riddhi-siddhi dhan paata.
Om Jai Lakshmi Mata.

Jis ghar tum rahati, tahaan sab sadgun aata.
Sab sambhav ho jaata, man nahi ghabraata.
Om Jai Lakshmi Mata.

Tum bin yagya na hote, vastra na koi paata.
Khaan-paan ka vaibhav, sab tumase aata.
Om Jai Lakshmi Mata.

Mahalakshmiji ki aarti, jo koi nar gaata.
Ur aanand samaata, paap utar jaata.
Om Jai Lakshmi Mata.`,
    meaning: {
      hi: "इस आरती में देवी लक्ष्मी को धन, समृद्धि और सौभाग्य की देवी के रूप में पूजा जाता है। भक्त उनसे अपने घर में सुख-शांति और समृद्धि बनाए रखने की प्रार्थना करते हैं।",
      en: "This aarti worships Goddess Lakshmi as the deity of wealth, prosperity and good fortune. Devotees pray to her for lasting peace and prosperity in their homes.",
    },
    source: {
      label: "पारंपरिक लक्ष्मी आरती",
      author: "पंडित श्रद्धा राम फिल्लौरी (परंपरागत रूप से जिम्मेदार)",
      license: "Public Domain",
      copyrightStatus: "Public Domain (19th-century composition)",
    },
    keywords: ["lakshmi aarti", "लक्ष्मी आरती", "om jai lakshmi mata", "diwali aarti"],
    emoji: "🪷",
  },
  {
    id: "aarti-durga",
    slug: "durga-aarti",
    religion: "hinduism",
    deity: { hi: "श्री दुर्गा", en: "Shri Durga" },
    title: { hi: "जय अम्बे गौरी (दुर्गा आरती)", en: "Jai Ambe Gauri (Durga Aarti)" },
    textHindi: `जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निसदिन सेवत, हर ब्रह्मा शिवरी॥
जय अम्बे गौरी।

मांग सिंदूर विराजत, टीको मृगमद को।
उज्जवल से दोउ नैना, चंद्रवदन नीको॥
जय अम्बे गौरी।

कनक समान कलेवर, रक्ताम्बर राजे।
रक्तपुष्प गल माला, कंठन पर साजे॥
जय अम्बे गौरी।

केहरि वाहन राजत, खड्ग खप्पर धारी।
सुर-नर मुनिजन सेवत, तिनके दुख हारी॥
जय अम्बे गौरी।

शुम्भ-निशुम्भ बिदारे, महिषासुर घाती।
धूम्र विलोचन नैना, निशिदिन मदमाती॥
जय अम्बे गौरी।

अम्बे तुम हो जगमाता, तुम ही हो शिव प्यारी।
तुम बिन राखनहारा, संकट को टारी॥
जय अम्बे गौरी।`,
    transliteration: `Jai Ambe Gauri, Maiya Jai Shyama Gauri.
Tumako nisadin sevat, Har Brahma Shivari.
Jai Ambe Gauri.

Maang sindoor viraajat, teeko mrigamad ko.
Ujjwal se dou naina, chandravadan neeko.
Jai Ambe Gauri.

Kanak samaan kalevar, raktaambar raaje.
Raktapushp gal maala, kanthan par saaje.
Jai Ambe Gauri.

Kehari vaahan raajat, khadg khappar dhaari.
Sur-nar munijan sevat, tinake dukh haari.
Jai Ambe Gauri.

Shumbh-Nishumbh bidaare, Mahishasur ghaati.
Dhoomra vilochan naina, nishidin madamaati.
Jai Ambe Gauri.

Ambe tum ho jagamaata, tum hi ho Shiv pyaari.
Tum bin raakhanahaara, sankat ko taari.
Jai Ambe Gauri.`,
    meaning: {
      hi: "इस आरती में देवी दुर्गा की शक्ति और सौंदर्य का वर्णन है, जिन्होंने शुंभ-निशुंभ और महिषासुर जैसे राक्षसों का वध किया। भक्त उनसे संकट दूर करने की प्रार्थना करते हैं।",
      en: "This aarti describes the power and beauty of Goddess Durga, who is said to have vanquished demons such as Shumbh-Nishumbh and Mahishasura. Devotees pray to her to remove hardship.",
    },
    source: {
      label: "पारंपरिक दुर्गा आरती",
      author: "परंपरागत (Traditional)",
      license: "Public Domain",
      copyrightStatus: "Public Domain (traditional composition)",
    },
    keywords: ["durga aarti", "दुर्गा आरती", "jai ambe gauri", "navratri aarti"],
    emoji: "🔯",
  },
];

export function getAarti(slug: string) {
  return aartis.find((a) => a.slug === slug);
}
