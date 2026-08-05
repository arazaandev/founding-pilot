import { describe, expect, it } from "vitest";
import { calibrationApplicationSchema } from "./calibration-schema";

const valid = {
  fullName: "Daffa Test",
  workEmail: "dtest@example.org",
  jobTitle: "Founder",
  companyName: "Example Technology Services",
  companyWebsite: "https://example.org",
  country: "Indonesia",
  primaryMarket: "Indonesia",
  validationTrack: "software_it_services",
  serviceCapabilities: ["Data and AI"],
  typicalClientProfile: "Indonesian financial-services companies.",
  credibleDeliveryProof: "Cloud data-platform delivery for regulated industries.",
  acquisitionChannels: ["Referrals and existing relationships"],
  recentAcquisitionSuccess: "A referral led to an introduction.",
  paidPilotReadiness: "Yes",
  weeklyFeedbackAvailability: "Yes",
  contactConsent: true,
  privacyConsent: true,
  website: "",
  utm: { utm_source: "linkedin" },
};

describe("calibration application schema", () => {
  it("accepts a software and IT services application", () => expect(calibrationApplicationSchema.safeParse(valid).success).toBe(true));
  it("accepts a specialist recruitment application", () => expect(calibrationApplicationSchema.safeParse({ ...valid, validationTrack: "specialist_recruitment", serviceCapabilities: ["Technology and digital"] }).success).toBe(true));
  it("accepts another B2B service with a clear description", () => expect(calibrationApplicationSchema.safeParse({ ...valid, validationTrack: "other_b2b_service", serviceCapabilities: [], credibleDeliveryProof: "Commercial research services supported by three relevant case studies." }).success).toBe(true));
  it("requires a useful description for another B2B service", () => expect(calibrationApplicationSchema.safeParse({ ...valid, validationTrack: "other_b2b_service", serviceCapabilities: [], credibleDeliveryProof: "Consulting" }).success).toBe(false));
  it("requires capabilities for either active track", () => expect(calibrationApplicationSchema.safeParse({ ...valid, serviceCapabilities: [] }).success).toBe(false));
  it("rejects an unknown validation track", () => expect(calibrationApplicationSchema.safeParse({ ...valid, validationTrack: "generic_services" }).success).toBe(false));
  it("rejects a completed spam honeypot", () => expect(calibrationApplicationSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false));
  it("requires explicit privacy consent", () => expect(calibrationApplicationSchema.safeParse({ ...valid, privacyConsent: false }).success).toBe(false));
  it("restricts commercial readiness to published choices", () => expect(calibrationApplicationSchema.safeParse({ ...valid, paidPilotReadiness: "Maybe later" }).success).toBe(false));
});
