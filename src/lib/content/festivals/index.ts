import { Festival, ReligionSlug } from "../types";
import { hinduFestivals } from "./hinduism";
import { islamFestivals } from "./islam";
import { sikhFestivals } from "./sikhism";
import { christianFestivals } from "./christianity";
import { jainFestivals } from "./jainism";
import { buddhistFestivals } from "./buddhism";

export const allFestivals: Festival[] = [
  ...hinduFestivals,
  ...islamFestivals,
  ...sikhFestivals,
  ...christianFestivals,
  ...jainFestivals,
  ...buddhistFestivals,
];

export function getFestival(slug: string): Festival | undefined {
  return allFestivals.find((f) => f.slug === slug);
}

export function getFestivalsByReligion(religion: ReligionSlug): Festival[] {
  return allFestivals.filter((f) => f.religion === religion);
}

export function getUpcomingFestivals(fromDate: Date = new Date(), limit?: number): Festival[] {
  const sorted = [...allFestivals].sort(
    (a, b) => new Date(a.date.nextOccurrence).getTime() - new Date(b.date.nextOccurrence).getTime()
  );
  const upcoming = sorted.filter((f) => new Date(f.date.nextOccurrence).getTime() >= fromDate.setHours(0, 0, 0, 0));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function daysUntil(dateIso: string, fromDate: Date = new Date()): number {
  const from = new Date(fromDate);
  from.setHours(0, 0, 0, 0);
  const target = new Date(dateIso);
  target.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - from.getTime()) / 86400000);
}
