import type { Organization } from "schema-dts";

// Pulled from src/config/siteData.json.ts so structured-data components can
// reuse the same site-wide info without re-running the translation layer.
export const SITE_NAME = "ICC Taxi Claims";
export const SITE_DESCRIPTION =
	"At ICC TAXI CLAIMS, we provide reliable credit hire vehicles for private individuals and taxi drivers while their vehicle is off the road. Replacement vehicles, repairs, and storage handled for you.";

const siteOrigin = import.meta.env.SITE ?? "https://www.icctaxiclaims.co.uk";

export const SITE_ORGANIZATION: Organization = {
	"@type": "Organization",
	name: SITE_NAME,
	url: new URL("/", siteOrigin).href,
	logo: {
		"@type": "ImageObject",
		url: new URL("/favicons/android-chrome-512x512.png", siteOrigin).href,
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+441619752359",
		contactType: "customer support",
		email: "info@icctaxiclaims.co.uk",
		areaServed: "UK",
	},
};

export const SITE_LICENSE = "";
export const SITE_LANGUAGE = "en";
