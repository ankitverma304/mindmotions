import { ReligionSlug } from "./types";

/** Static per-religion accent colours, used for small previews (e.g. the
 * religion selector grid) that must show each religion's identity at once,
 * independent of the single active `data-religion` theme on <html>. */
export const RELIGION_ACCENT: Record<ReligionSlug, { bg: string; fg: string; soft: string }> = {
  hinduism: { bg: "#d9722c", fg: "#ffffff", soft: "#fff8ee" },
  islam: { bg: "#0f6f5c", fg: "#ffffff", soft: "#f3faf7" },
  sikhism: { bg: "#1b4b93", fg: "#ffffff", soft: "#f2f6fc" },
  christianity: { bg: "#1e3a5f", fg: "#ffffff", soft: "#f7f9fc" },
  jainism: { bg: "#a67c00", fg: "#ffffff", soft: "#fffdf7" },
  buddhism: { bg: "#b5651d", fg: "#ffffff", soft: "#fff9f2" },
};
