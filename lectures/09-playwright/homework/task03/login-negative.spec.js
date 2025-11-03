import { test, expect } from "@playwright/test";

// Test A — Invalid credentials:

test("Login fail with invalid credentials", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  await page.fill('input[name="usernameOrEmail"]', "12234@testt.com");
  await page.fill('input[name="password"]', "nenennnene");

  await page.click("text=Sign in");

  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");

  const signInButton = page.locator("text=Sign in");
  await expect(signInButton).toBeVisible();

  const profileLink = page.locator('a[href*="users/"]');
  await expect(profileLink).not.toBeVisible();
});

// Test B — Empty field submission:

test("Login fail when fields are empty", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/login");

  const signInButton = page.locator("text=Sign in");
  await signInButton.click();

  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");

  await expect(signInButton).toBeVisible();

  const profileLink = page.locator('a[href*="users/"]');
  await expect(profileLink).not.toBeVisible();
});
