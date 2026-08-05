import { expect, test, type Page } from "@playwright/test";

async function completeApplication(page: Page, track: "software" | "recruitment") {
  await page.getByLabel("Your name").fill("Daffa Test");
  await page.getByLabel("Work email").fill(`${track}@example.org`);
  await page.getByLabel("Your role").fill("Founder");
  await page.getByLabel("Company name").fill(track === "software" ? "Example Technology Services" : "Example Specialist Search");
  await page.getByLabel("Company website").fill("example.org");
  await page.getByRole("button", { name: "Continue" }).click();
  if (track === "recruitment") await page.getByRole("radio", { name: /^Specialist recruitment/ }).check();
  await page.getByLabel(track === "software" ? "Data and AI" : "Technology and digital", { exact: true }).check();
  await page.getByLabel("Describe your typical client profile").fill("Indonesian financial-services companies with 200 to 2,000 employees.");
  await page.getByLabel(/Services and proof/).fill(track === "software" ? "Cloud data-platform delivery for regulated industries." : "Senior data and engineering search with relevant placement proof.");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel("Referrals and existing relationships").check();
  await page.getByLabel(/what worked most recently/).fill("A referral from an existing client led to a qualified introduction.");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByLabel(/agree to be contacted/).check();
  await page.getByLabel(/read the privacy notice/).check();
}

test("desktop IT-services calibration validates, persists, attributes UTM data, and reaches thank-you", async ({ page }) => {
  await page.goto("/apply?utm_source=linkedin&utm_campaign=calibration");
  await expect(page.locator('input[name="website"]')).toBeHidden();
  await expect(page.locator('input[name="website"]')).toHaveAttribute("tabindex", "-1");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.locator('p.warning[role="alert"]')).toContainText("complete every field");
  await page.getByLabel("Your name").fill("Saved Applicant");
  await page.reload();
  await expect(page.getByLabel("Your name")).toHaveValue("Saved Applicant");
  await page.evaluate(() => localStorage.removeItem("pilot-application"));
  await page.reload();
  let submitted: Record<string, any> = {};
  await page.route("**/api/applications", async (route) => { submitted = route.request().postDataJSON(); await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, id: "test-id" }) }); });
  await completeApplication(page, "software");
  await page.getByRole("button", { name: "Apply for calibration" }).click();
  await expect(page).toHaveURL(/thank-you/);
  expect(submitted.companyWebsite).toBe("https://example.org");
  expect(submitted.validationTrack).toBe("software_it_services");
  expect(submitted.serviceCapabilities).toEqual(["Data and AI"]);
  expect(submitted.acquisitionChannels).toEqual(["Referrals and existing relationships"]);
  expect(submitted.paidPilotReadiness).toBe("Possibly, depending on results");
  expect(submitted.weeklyFeedbackAvailability).toBe("Yes");
  expect(submitted.contactConsent).toBe(true);
  expect(submitted.privacyConsent).toBe(true);
  expect(submitted.website).toBe("");
  expect(submitted.utm).toEqual({ utm_source: "linkedin", utm_campaign: "calibration" });
});

test("mobile recruitment calibration presents duplicate submissions clearly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.route("**/api/applications", (route) => route.fulfill({ status: 409, contentType: "application/json", body: JSON.stringify({ error: "An application from this email was recently received." }) }));
  await page.goto("/apply");
  await completeApplication(page, "recruitment");
  await page.getByRole("button", { name: "Apply for calibration" }).click();
  await expect(page.locator('p.warning[role="alert"]')).toContainText("recently received");
  await expect(page.getByRole("button", { name: "Apply for calibration" })).toBeEnabled();
});
