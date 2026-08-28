"use client";

import { useEffect } from "react";
import { ReligionSlug } from "@/lib/content/types";
import { useReligionTheme } from "@/lib/theme/religion-theme";

/** Applies a religion's visual theme when its landing page is opened directly
 * (e.g. via search or a shared link), so the theme always matches what's on screen. */
export function ApplyReligionTheme({ religion }: { religion: ReligionSlug }) {
  const { setReligion } = useReligionTheme();
  useEffect(() => {
    setReligion(religion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [religion]);
  return null;
}
