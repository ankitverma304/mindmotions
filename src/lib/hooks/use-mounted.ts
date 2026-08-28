"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only after the client has hydrated — for reading browser-only APIs
 * (e.g. resolved theme, navigator.share) without a hydration mismatch. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
