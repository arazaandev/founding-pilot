export const siteConfig = {
  name: process.env.NEXT_PUBLIC_PRODUCT_NAME || "Founding Pilot",
  logoText: process.env.NEXT_PUBLIC_PRODUCT_NAME || "Founding Pilot",
  headline: "Find companies that may need recruitment support before your competitors do.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  pilotCapacity: process.env.NEXT_PUBLIC_PILOT_CAPACITY || "10",
  accent: "#155e75",
};
