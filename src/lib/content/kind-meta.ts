import { ContentKind, LocalizedText } from "./types";

export const KIND_LABEL: Record<ContentKind, LocalizedText> = {
  festival: { hi: "त्योहार", en: "Festival" },
  aarti: { hi: "आरती", en: "Aarti" },
  puja: { hi: "पूजा", en: "Puja" },
  story: { hi: "कहानी", en: "Story" },
  faq: { hi: "प्रश्न", en: "FAQ" },
};

export const KIND_PATH: Record<ContentKind, string> = {
  festival: "/festivals",
  aarti: "/aarti",
  puja: "/puja",
  story: "/stories",
  faq: "/faq",
};
