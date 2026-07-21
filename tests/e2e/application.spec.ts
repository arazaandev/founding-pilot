import { test, expect, type Page } from "@playwright/test";

async function completeApplication(page:Page) {
  await page.getByLabel("Full name").fill("Daffa Test");
  await page.getByLabel("Work email").fill("dtest@example.org");
  await page.getByLabel("Job title").fill("Founder");
  await page.getByLabel("Agency name").fill("Example Recruitment");
  await page.getByLabel("Agency website").fill("example.org");
  await page.getByLabel("Country").fill("Indonesia");
  await page.getByLabel("Primary market served").fill("Indonesia");
  await page.getByRole("button",{name:"Continue"}).click();
  await page.getByLabel("Number of recruiters").fill("5");
  await page.getByLabel("Technology",{exact:true}).check();
  await page.getByRole("button",{name:"Continue"}).click();
  await page.getByLabel(/Hours per week/).fill("8");
  await page.getByLabel(/biggest challenge/).fill("Finding credible reasons to approach relevant accounts this week.");
  await page.getByRole("button",{name:"Continue"}).click();
  await page.getByLabel(/agree to be contacted/).check();
  await page.getByLabel(/read the privacy notice/).check();
}

test("desktop application validates, preserves entries, attributes UTM data, and reaches thank-you",async({page})=>{
  await page.goto("/apply?utm_source=linkedin&utm_campaign=founding-pilot");
  await expect(page.locator('input[name="website"]')).toBeHidden();
  await expect(page.locator('input[name="website"]')).toHaveAttribute("tabindex","-1");
  await page.getByRole("button",{name:"Continue"}).click();
  await expect(page.locator('p.warning[role="alert"]')).toContainText("complete every field");
  await page.getByLabel("Full name").fill("Saved Applicant");
  await page.reload();
  await expect(page.getByLabel("Full name")).toHaveValue("Saved Applicant");
  await page.evaluate(()=>localStorage.removeItem("pilot-application"));
  await page.reload();
  let submitted:any;
  await page.route("**/api/applications",async route=>{submitted=route.request().postDataJSON();await route.fulfill({status:200,contentType:"application/json",body:JSON.stringify({ok:true,id:"test-id"})});});
  await completeApplication(page);
  await page.getByRole("button",{name:"Submit application"}).click();
  await expect(page).toHaveURL(/thank-you/);
  expect(submitted.agencyWebsite).toBe("https://example.org");
  expect(submitted.contactConsent).toBe(true);
  expect(submitted.privacyConsent).toBe(true);
  expect(submitted.website).toBe("");
  expect(submitted.utm).toEqual({utm_source:"linkedin",utm_campaign:"founding-pilot"});
});

test("mobile application presents duplicate submissions clearly",async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.route("**/api/applications",route=>route.fulfill({status:409,contentType:"application/json",body:JSON.stringify({error:"An application from this email was recently received."})}));
  await page.goto("/apply");
  await completeApplication(page);
  await page.getByRole("button",{name:"Submit application"}).click();
  await expect(page.locator('p.warning[role="alert"]')).toContainText("recently received");
  await expect(page.getByRole("button",{name:"Submit application"})).toBeEnabled();
});
