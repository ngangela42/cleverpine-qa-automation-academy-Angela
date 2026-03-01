import { test, expect } from "@playwright/test";
import { validUsers, invalidUsers } from "../support/userData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

// Valid tests:
validUsers.forEach((u) => {
  test(`login succeeds: ${u.username}`, async ({ page }) => {
    await page.goto(loginUrl);

    await page.locator("#username").fill(u.username);
    await page.locator("#password").fill(u.password);
    await page.locator("#login-button").click();

    const successMessage = page.locator("#success-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(`Welcome ${u.username}`);
  });
});

// Invalid tests:
invalidUsers.forEach((u) => {
  test(`login fails: ${u.description}`, async ({ page }) => {
    await page.goto(loginUrl);

    if (u.username !== "") {
      await page.locator("#username").fill(u.username);
    }

    if (u.password !== "") {
      await page.locator("#password").fill(u.password);
    }

    await page.locator("#login-button").click();

    await expect(page.locator("#error-message")).toBeVisible();
  });
});
