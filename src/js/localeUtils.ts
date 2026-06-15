import type { CollectionEntry, DataEntryMap } from "astro:content";
import { locales, defaultLocale } from "@/config/siteSettings.json";

export function getLocaleFromUrl(_url: URL): (typeof locales)[number] {
  return defaultLocale;
}

export function filterCollectionByLanguage<T extends keyof DataEntryMap>(
  collection: CollectionEntry<T>[],
  _locale?: (typeof locales)[number],
  _removeLocale?: boolean,
): CollectionEntry<T>[] {
  return collection;
}

export function removeLocaleFromSlug(slug: string): string {
  const SlugElements = slug.split("/");
  const newSlugElements = SlugElements.filter(
    //@ts-expect-error element is guaranteed to be an appropriate string
    (element) => !locales.includes(element),
  );
  return newSlugElements.join("/");
}