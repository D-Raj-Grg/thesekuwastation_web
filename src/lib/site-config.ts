/**
 * Single source of truth for contact + brand info.
 * EDIT HERE to update phone, hours, address everywhere on the site.
 *
 * TODO (from owner): confirm real phone, WhatsApp, and opening hours.
 * Google Maps profile is JS-gated so these could not be auto-filled.
 */

const PHONE_DISPLAY = "+977 98XX-XXXXXX"; // TODO: real number
const PHONE_E164 = "+97798XXXXXXXX"; // TODO: real number, no spaces (for tel:/wa.me)

export const site = {
  name: "The Sekuwa Station",
  shortName: "Sekuwa Station",
  eyebrow: "Charcoal Grilled · Nepali Kitchen",
  tagline: "Smoke, spice & fire — straight off the grill",
  description:
    "Charcoal-grilled sekuwa, chhoila, sukuti and momo — freshly grilled to order, every order.",

  phoneDisplay: PHONE_DISPLAY,
  phoneHref: `tel:${PHONE_E164}`,
  whatsappHref: `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(
    "Namaste! I'd like to place an order at The Sekuwa Station.",
  )}`,

  hours: [{ days: "Open daily", time: "9:00 AM – 10:00 PM" }],
  hoursShort: "Open daily · 9 AM – 10 PM",

  address: "Kavrepalanchok, Nepal", // TODO: refine exact locality
  coords: { lat: 27.4225113, lng: 85.0317371 },
  mapsUrl: "https://maps.app.goo.gl/PBgba65kdYqWC1HH7",
  // directions deep-link to the exact pin
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=27.4225113,85.0317371&destination_place_id=ChIJu5MsWwBJ6zkRAPXGQVm1jwA",
  // embeddable map (no API key needed)
  mapEmbedUrl:
    "https://www.google.com/maps?q=27.4225113,85.0317371&z=16&output=embed",

  currency: "NPR",
  delivery: { live: false, label: "Delivery — coming soon" },

  // Drop a compressed loop at public/hero-grill.mp4 and flip this to true.
  heroVideo: false,

  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    tiktok: "", // TODO
  },
} as const;

export type Site = typeof site;
