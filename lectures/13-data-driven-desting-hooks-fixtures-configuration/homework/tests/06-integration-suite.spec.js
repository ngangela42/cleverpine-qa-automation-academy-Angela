import { test, expect } from "../support/fixtures/testData.js";
import { validUsers } from "../support/userData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

const integrationUsers = validUsers.slice(0, 2);

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

integrationUsers.forEach((user) => {
  test(`login succeeds for: ${user.username}`, async ({ page }) => {
    await page.locator("#username").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-button").click();

    const successMessage = page.locator("#success-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toHaveText(`Welcome ${user.username}`);
  });
});

test("validate testUser fixture data", async ({ testUser }) => {
  expect(testUser.email).toContain("@");
  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
