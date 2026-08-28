"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { UiLang } from "../content/types";
import { getDictionary } from "./dictionary";

const LocaleContext = createContext<UiLang>("hi");

export function LocaleProvider({ lang, children }: { lang: UiLang; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

export function useLocale(): UiLang {
  return useContext(LocaleContext);
}

export function useDict() {
  const lang = useLocale();
  return { lang, dict: getDictionary(lang) };
}
