import { type TestimonialItem } from "./types/configDataTypes";

import Driver1 from "@images/testimonial-driver1.jpg";
import Driver2 from "@images/testimonial-driver2.jpg";
import Driver3 from "@images/testimonial-driver3.jpg";
import Driver4 from "@images/testimonial-driver4.jpg";
import Driver5 from "@images/testimonial-driver5.jpg";

export const testimonialData: TestimonialItem[] = [
  {
    avatar: Driver1,
    name: "Tariq M",
    title: "Taxi Driver, London",
    testimonial: `ICC Taxi Claims had me back on the road within 24 hours. After my non-fault accident, they sorted everything — replacement vehicle, repairs, the lot. Couldn't recommend them enough.`,
  },
  {
    avatar: Driver2,
    name: "James W",
    title: "Private Hire Driver",
    testimonial: `I was worried about losing income after someone went into the back of my car. ICC sorted a like-for-like replacement vehicle the same day. Professional service from start to finish.`,
  },
  {
    avatar: Driver3,
    name: "Ahmed K",
    title: "London Black Cab Driver",
    testimonial: `As a black cab driver, being off the road isn't an option. ICC understood exactly what I needed and handled everything with the other party's insurer. Top-notch service.`,
  },
  {
    avatar: Driver4,
    name: "Susan R",
    title: "Private Individual",
    testimonial: `After my accident, I had no idea what to do. ICC guided me through the whole process — credit hire vehicle, body shop repairs, and they dealt with all the paperwork. Stress-free.`,
  },
  {
    avatar: Driver5,
    name: "Davinder S",
    title: "Taxi Driver, Birmingham",
    testimonial: `Brilliant service. Got a replacement vehicle quickly, and the repairs were done to a high standard. The team kept me updated throughout. Would definitely use again if needed.`,
  },
];

export default testimonialData;