import { test, expect } from "@playwright/test";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

test("successful login", async ({ page }) => {
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();

  const successMessage = page.locator("#success-message");
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText("Welcome admin");
});

test("unsuccessful login", async ({ page }) => {
  await page.locator("#username").fill("wrong");
  await page.locator("#password").fill("wrong");
  await page.locator("#login-button").click();

  const errorMessage = page.locator("#error-message");
  await expect(errorMessage).toBeVisible();
});


