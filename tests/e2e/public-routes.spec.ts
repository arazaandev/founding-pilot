import { expect, test } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];
const routes = ["/", "/sample-opportunity", "/apply", "/thank-you", "/privacy"];

for (const viewport of viewports) {
  test(`${viewport.name} public routes have one h1 and no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator("h1")).toHaveCount(1);
      const dimensions = await page.evaluate(() => ({
        body: document.body.scrollWidth,
        document: document.documentElement.scrollWidth,
        viewport: window.innerWidth,
        offenders: [...document.querySelectorAll("body *")].map((element) => ({ selector: `${element.tagName.toLowerCase()}.${element.className}`, rect: element.getBoundingClientRect().toJSON() })).filter((item) => item.rect.right > window.innerWidth + 1 || item.rect.left < -1).slice(0, 8),
      }));
      const detail = dimensions.offenders.map((item) => `${item.selector}: left ${item.rect.left}, right ${item.rect.right}`).join("; ");
      expect(dimensions.body, `${route} body overflow at ${viewport.width}px. ${detail}`).toBeLessThanOrEqual(dimensions.viewport);
      expect(dimensions.document, `${route} document overflow at ${viewport.width}px. ${detail}`).toBeLessThanOrEqual(dimensions.viewport);
    }
  });
}

test("mobile navigation opens, closes on Escape, and exposes one link set", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open menu" });
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link")).toHaveCount(4);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Main navigation" })).not.toBeVisible();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("sample brief keeps commercial potential separate and review controls disabled", async ({ page }) => {
  await page.goto("/sample-opportunity");
  await expect(page.getByText("Commercial potential", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Evidence confidence", { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/Fictional demonstration/).first()).toBeVisible();
  for (const label of ["Approve", "Edit", "Reject", "Postpone"]) await expect(page.getByRole("button", { name: label })).toBeDisabled();
});

test("homepage walkthrough moves from evidence to interpretation and a human-reviewed next step", async ({ page }) => {
  await page.goto("/");

  const section = page.getByRole("region", { name: "From public evidence to a commercial next step" });
  await expect(section).toBeVisible();
  await expect(section.getByText("Fictional demonstration", { exact: true })).toBeVisible();
  await expect(section.getByText(/No real company, customer, or source data/)).toBeVisible();
  await expect(section.getByText(/not a live autonomous monitoring dashboard/)).toBeVisible();

  const evidenceTab = section.getByRole("tab", { name: /Evidence observed/ });
  const interpretationTab = section.getByRole("tab", { name: /Lancara’s interpretation/ });
  const actionTab = section.getByRole("tab", { name: /Recommended next step/ });
  const panel = section.getByRole("tabpanel");

  await expect(evidenceTab).toHaveAttribute("aria-selected", "true");
  await expect(panel).toContainText("Three related changes appeared within two weeks");
  await expect(panel).toContainText("Last checked 2 August 2026");

  await evidenceTab.focus();
  await page.keyboard.press("ArrowRight");
  await expect(interpretationTab).toBeFocused();
  await expect(interpretationTab).toHaveAttribute("aria-selected", "true");
  await expect(panel).toContainText("Data-platform modernization window");
  await expect(panel).toContainText("Commercial potential");
  await expect(panel).toContainText("Evidence confidence");
  await expect(panel).toContainText("Why Lancara may be wrong");

  await page.keyboard.press("End");
  await expect(actionTab).toBeFocused();
  await expect(actionTab).toHaveAttribute("aria-selected", "true");
  await expect(panel).toContainText("Verify before approach");
  await expect(panel).toContainText("Head of Data");
  await expect(panel).toContainText("Conversation objective");
  await expect(panel).toContainText("Human-controlled recommendation");

  await page.keyboard.press("Home");
  await expect(evidenceTab).toBeFocused();
  await expect(evidenceTab).toHaveAttribute("aria-selected", "true");

  await expect(section.getByRole("link", { name: /Explore the complete fictional brief/ })).toHaveAttribute("href", "/sample-opportunity");
  await expect(section.getByRole("link", { name: /Request a free calibration/ })).toHaveAttribute("href", "/apply");
});

test("reduced motion leaves homepage content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "From public evidence to a commercial next step" })).toBeVisible();
  await expect(page.getByRole("tabpanel")).toContainText("Three related changes appeared within two weeks");
  await expect(page.getByRole("heading", { name: /Prospecting is rarely a list problem/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Two markets under active comparison/ })).toBeVisible();
});
