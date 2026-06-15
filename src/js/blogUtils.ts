import { type CollectionEntry, getCollection } from "astro:content";
import { removeLocaleFromSlug } from "@/js/localeUtils";
import { slugify } from "@/js/textUtils";
import { locales } from "@/config/siteSettings.json";

export async function getAllPosts(
  lang?: (typeof locales)[number],
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  const formattedPosts = formatPosts(posts, {
    filterOutFuturePosts: true,
    sortByDate: true,
    limit: undefined,
    removeLocale: true,
  });

  return formattedPosts;
}

interface FormatPostsOptions {
  filterOutFuturePosts?: boolean;
  sortByDate?: boolean;
  limit?: number;
  removeLocale?: boolean;
}

export function formatPosts(
  posts: CollectionEntry<"blog">[],
  {
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
    removeLocale = true,
  }: FormatPostsOptions = {},
): CollectionEntry<"blog">[] {
  const filteredPosts = posts.reduce((acc: CollectionEntry<"blog">[], post) => {
    const { pubDate } = post.data;

    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;

    acc.push(post);

    return acc;
  }, []);

  if (sortByDate) {
    filteredPosts.sort(
      (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  if (removeLocale) {
    filteredPosts.forEach((post) => {
      post.id = removeLocaleFromSlug(post.id);
    });
  }

  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

export function arePostsRelated(
  postOne: CollectionEntry<"blog">,
  postTwo: CollectionEntry<"blog">,
): boolean {
  if (postOne.id === postTwo.id) return false;

  if (
    !postOne.data.categories ||
    !postTwo.data.categories ||
    postOne.data.categories.length === 0 ||
    postTwo.data.categories.length === 0
  )
    return false;

  const postOneCategories = postOne.data.categories
    .filter((category): category is string => typeof category === "string")
    .map((category) => slugify(category));

  const postTwoCategories = postTwo.data.categories
    .filter((category): category is string => typeof category === "string")
    .map((category) => slugify(category));

  const categoriesMatch = postOneCategories.some((category) =>
    postTwoCategories.includes(category),
  );

  return categoriesMatch;
}

export function countItems(items: string[]): object {
  const countedItems = items.reduce((acc, item) => {
    const val = acc[slugify(item)] || 0;

    return {
      ...acc,
      [slugify(item)]: val + 1,
    };
  }, {});

  return countedItems;
}

export function sortByValue(jsObj: object): [string, number][] {
  const array: [string, number][] = [];
  for (const i in jsObj) {
    array.push([i, jsObj[i]]);
  }

  const sorted = array.sort((a, b) => {
    return b[1] - a[1];
  });

  return sorted;
}