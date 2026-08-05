import { z } from "zod";

export const validationTrackSchema = z.enum([
  "specialist_recruitment",
  "software_it_services",
  "other_b2b_service",
]);

export const calibrationApplicationSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  workEmail: z.string().trim().email(),
  jobTitle: z.string().trim().min(2).max(100),
  companyName: z.string().trim().min(2).max(150),
  companyWebsite: z.string().url(),
  country: z.string().trim().min(2),
  primaryMarket: z.string().trim().min(2),
  validationTrack: validationTrackSchema,
  serviceCapabilities: z.array(z.string()).max(12),
  typicalClientProfile: z.string().trim().min(10).max(1500),
  credibleDeliveryProof: z.string().trim().min(10).max(1500),
  acquisitionChannels: z.array(z.string()).min(1).max(10),
  recentAcquisitionSuccess: z.string().max(1500),
  paidPilotReadiness: z.enum(["Yes", "Possibly, depending on results", "Not currently"]),
  weeklyFeedbackAvailability: z.enum(["Yes", "Possibly", "No"]),
  contactConsent: z.literal(true),
  privacyConsent: z.literal(true),
  website: z.string().max(0).optional(),
  utm: z.record(z.string(), z.string()).optional(),
}).superRefine((data, context) => {
  if (data.validationTrack !== "other_b2b_service" && data.serviceCapabilities.length === 0) {
    context.addIssue({
      code: "custom",
      path: ["serviceCapabilities"],
      message: "Select at least one service capability.",
    });
  }
  if (data.validationTrack === "other_b2b_service" && data.credibleDeliveryProof.length < 20) {
    context.addIssue({
      code: "custom",
      path: ["credibleDeliveryProof"],
      message: "Describe the service and delivery proof in at least 20 characters.",
    });
  }
});

export type CalibrationApplication = z.infer<typeof calibrationApplicationSchema>;
