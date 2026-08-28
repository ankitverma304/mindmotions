"use client";

import { createContext, useContext, useEffect, useCallback, useSyncExternalStore, ReactNode } from "react";
import { ReligionSlug } from "../content/types";

export type ReligionTheme = ReligionSlug | "default";

interface ReligionThemeContextValue {
  religion: ReligionTheme;
  setReligion: (r: ReligionTheme) => void;
  hasChosen: boolean;
}

const ReligionThemeContext = createContext<ReligionThemeContextValue | null>(null);

const STORAGE_KEY = "mindmotions-religion-theme";
const CHOSEN_KEY = "mindmotions-religion-chosen";
const CHANGE_EVENT = "mindmotions-religion-changed";

function readReligion(): ReligionTheme {
  if (typeof window === "undefined") return "default";
  return (window.localStorage.getItem(STORAGE_KEY) as ReligionTheme | null) ?? "default";
}

function readChosen(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CHOSEN_KEY) === "1";
}

function getServerReligion(): ReligionTheme {
  return "default";
}

function getServerChosen(): boolean {
  return false;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function ReligionThemeProvider({ children }: { children: ReactNode }) {
  const religion = useSyncExternalStore(subscribe, readReligion, getServerReligion);
  const hasChosen = useSyncExternalStore(subscribe, readChosen, getServerChosen);

  useEffect(() => {
    if (religion === "default") {
      document.documentElement.removeAttribute("data-religion");
    } else {
      document.documentElement.setAttribute("data-religion", religion);
    }
  }, [religion]);

  const setReligion = useCallback((r: ReligionTheme) => {
    window.localStorage.setItem(STORAGE_KEY, r);
    window.localStorage.setItem(CHOSEN_KEY, "1");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return (
    <ReligionThemeContext.Provider value={{ religion, setReligion, hasChosen }}>
      {children}
    </ReligionThemeContext.Provider>
  );
}

export function useReligionTheme() {
  const ctx = useContext(ReligionThemeContext);
  if (!ctx) throw new Error("useReligionTheme must be used within ReligionThemeProvider");
  return ctx;
}
