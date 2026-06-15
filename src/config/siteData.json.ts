import { type SiteDataProps } from "./types/configDataTypes";

const siteData: SiteDataProps = {
  name: "ICC Taxi Claims",
  title: "ICC Taxi Claims - Keeping You Moving After a Non-Fault Accident",
  description:
    "At ICC TAXI CLAIMS, we provide reliable credit hire vehicles for private individuals and taxi drivers while their vehicle is off the road. Replacement vehicles, repairs, and storage handled for you.",

  contact: {
    address1: "1234 Main Street",
    address2: "London, UK",
    phone: "(123) 456-7890",
    email: "info@icctaxiclaims.co.uk",
  },

  author: {
    name: "ICC Taxi Claims",
    email: "info@icctaxiclaims.co.uk",
    twitter: "",
  },

  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "ICC Taxi Claims logo",
  },
};

export default siteData;