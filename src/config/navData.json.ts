/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// utils
import { getAllPosts, countItems, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
// const posts = await getAllPosts("en");
// const allCategories = posts.map((post) => post.data.categories).flat();
// const countedCategories = countItems(allCategories);
// const processedCategories = sortByValue(countedCategories);

// types
import { type navItem } from "./types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "What We Do",
    dropdown: [
      {
        text: "Credit Hire Vehicles",
        link: "/services/credit-hire",
      },
      {
        text: "Vehicle Repairs",
        link: "/services/vehicle-repairs",
      },
      {
        text: "Vehicle Storage",
        link: "/services/vehicle-storage",
      },
    ],
  },
  {
    text: "Our Fleet",
    link: "/fleet",
  },
  {
    text: "Introducers & Partners",
    link: "/introducers",
  },
];

export default navConfig;