import { getCollection } from "astro:content";
import type { DataEntryMap } from "astro:content";
import {
  textTranslations,
  routeTranslations,
  siteDataTranslations,
  navDataTranslations,
  faqDataTranslations,
  teamDataTranslations,
  testimonialDataTranslations,
} from "@/config/translationData.json";
import { locales, defaultLocale } from "@/config/siteSettings.json";

type DataKey = "siteData" | "navData" | "faqData" | "teamData" | "testimonialData";

const dataMap: Record<DataKey, unknown> = {
  siteData: siteDataTranslations,
  navData: navDataTranslations,
  faqData: faqDataTranslations,
  teamData: teamDataTranslations,
  testimonialData: testimonialDataTranslations,
};

export function useTranslations(_locale?: keyof typeof textTranslations) {
  return function t(key: keyof typeof textTranslations) {
    return textTranslations[key] || textTranslations[key];
  };
}

export function getTranslatedData<T extends DataKey>(data: T, _locale?: (typeof locales)[number]) {
  return dataMap[data];
}

export function getLocalizedRoute(
  _locale: (typeof locales)[number],
  baseRoute: string = "/",
): string {
  const isExternalLink = /^(https?:\/\/|mailto:|tel:|sms:)/i.test(baseRoute);
  const isId = baseRoute.startsWith("#");
  if (isExternalLink || isId) {
    return baseRoute;
  }

  const normalized = baseRoute.replace(/^\/?|\/?$/g, "");
  if (normalized === "") return "/";

  return `/${normalized}/`;
}

export async function getLocalizedPathname(
  _locale: (typeof locales)[number],
  url: URL,
): Promise<string> {
  return url.pathname;
}

export async function generateRouteTranslations() {
  const dynamicRouteTranslations: Record<string, Record<string, string>> = {};

  for (const locale of locales) {
    dynamicRouteTranslations[locale] = { ...routeTranslations };
  }

  const collections = Object.keys({ blog: "blog", services: "services", otherPages: "otherPages" }) as Array<keyof DataEntryMap>;

  const allEntries = await Promise.all(
    collections.map(async (collection) => {
      const entries = await getCollection(collection);
      return entries.map((entry) => ({ ...entry, collection }));
    }),
  );

  const allContent = allEntries.flat();

  let generatedMappingKeyCounter = 1;

  allContent.forEach((entry) => {
    const slug = entry.id;

    const mappingKey = "mappingKey" in entry.data ? entry.data.mappingKey : undefined;

    if (mappingKey) {
      for (const locale of locales) {
        if (!dynamicRouteTranslations[locale]) {
          dynamicRouteTranslations[locale] = {};
        }
        dynamicRouteTranslations[locale][mappingKey] = slug;
      }
    } else {
      const generatedKey = `content${generatedMappingKeyCounter++}_Key`;
      for (const locale of locales) {
        if (!dynamicRouteTranslations[locale]) {
          dynamicRouteTranslations[locale] = {};
        }
        dynamicRouteTranslations[locale][generatedKey] = slug;
      }
    }
  });

  return dynamicRouteTranslations;
}