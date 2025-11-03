import { test, expect } from "@playwright/test";

test("Successful log in test", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/posts/all");

  await page.click('a[href="/users/login"]');

  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");

  const signInButton = page.locator("form button");
  await expect(signInButton).toBeVisible();

  await page.fill('input[name="usernameOrEmail"]', "ang111");
  await page.fill('input[name="password"]', "Aa123456789!");

  await signInButton.click();

  const profileLink = page.locator('a[href*="/users/"] >> text=Profile');
  await expect(profileLink).toBeVisible();

  await profileLink.click();

  await expect(page).toHaveURL(/\/users\/\d+$/);

  const profileHeading = page.locator("h2");
  await expect(profileHeading).toBeVisible();
});
