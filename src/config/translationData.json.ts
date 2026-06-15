import siteData from "./siteData.json";
import navData from "./navData.json";
import faqData from "./faqData.json";
import teamData from "./teamData.json";
import testimonialData from "./testimonialData.json";

export const siteDataTranslations = siteData;
export const navDataTranslations = navData;
export const faqDataTranslations = faqData;
export const teamDataTranslations = teamData;
export const testimonialDataTranslations = testimonialData;

export const textTranslations = {
  hero_text: "Everything you need for an amazing website.",
  hero_description:
    "A template for small business needs. Multiple pages and sections, blog, animations - all ready to go.",
  back_to_all_posts: "Back to all posts",
  updated: "Updated",
} as const;

export const routeTranslations = {
  aboutKey: "about",
  categoryKey: "categories",
  categoryKey2: "categories/*",
  categoryKey3: "categories",
  blogKey: "blog",
  servicesKey: "services",
} as const;