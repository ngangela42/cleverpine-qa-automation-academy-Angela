import { test, expect } from "@playwright/test";
import { getLocalUrl } from "./getLocalUrl.js";
import path from "node:path";

test("Happy path", async ({ page }) => {
  console.log("Navigate to the form");
  const formUrl = getLocalUrl(
    "../../pages/registration-form.html",
    import.meta.url
  );
  await page.goto(formUrl);

  // Select session format:
  console.log("Select session format:");
  await page.locator("#session-format").selectOption("panel");

  // Check topics:
  console.log("Check topics");
  await page.locator("#topic-testing").check();
  await page.locator("#topic-visual").check();

  // Verify they are checked:
  console.log("Verification topics are checked");
  await expect(page.locator("#topic-testing")).toBeChecked();
  await expect(page.locator("#topic-visual")).toBeChecked();

  // Select audience level:
  console.log("Select audience level");
  await page.locator("#level-intermediate").check();
  await expect(page.locator("#level-intermediate")).toBeChecked();

  // Upload supporting file:
  const filePath = path.resolve(
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
  );
  await page.locator("#materials").setInputFiles(filePath);

  // Verify uploaded file name via DOM API:
  const uploadedFileName = await page
    .locator("#materials")
    .evaluate((el) => el.files[0]?.name);
  expect(uploadedFileName).toBe("sample-resume.pdf");
  console.log("Uploaded file:", uploadedFileName);

  // Accept code of conduct:
  await page.locator("#code-of-conduct").check();
  await expect(page.locator("#code-of-conduct")).toBeChecked();

  console.log("Submit the form");
  await page.click("#submit-proposal");
  await page.waitForURL(/session-confirmation\.html/);

  // Verify confirmation page content:
  console.log("Verify confirmation page content");
  await expect(page).toHaveURL(/session-confirmation\.html/);
  await expect(page.locator("body")).toContainText("Panel Discussion");
  await expect(page.locator("body")).toContainText("Automated Testing");
  await expect(page.locator("body")).toContainText("Visual Regression");
  await expect(page.locator("body")).toContainText("Intermediate");
  await expect(page.locator("body")).toContainText("sample-resume.pdf");

  console.log("✓ Session submission completed successfully!");
});

//Test: Negative — validation blocks submission when required data is missing:

test("Negative path - missing field", async ({ page }) => {
  console.log("Navigate to the form");
  const formUrl = new URL("../../pages/registration-form.html", import.meta.url)
    .href;
  await page.goto(formUrl);

  //skipping the one required input:
  console.log("Skipping one required input to confirm the negative test");

  console.log("Fill other fields normally");
  await page.locator("#topic-testing").check();
  await page.locator("#level-intermediate").check();

  const filePath =
    "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf";
  await page.locator("#materials").setInputFiles(filePath);
  await page.locator("#code-of-conduct").check();

  // Listen for validation dialog:
  console.log("Dialog message:", dialog.message());
  await dialog.accept();

  // Try to submit:
  console.log("Try to submit the form");
  await page.click("#submit-proposal");

  // Verify navigation didn't happen:
  console.log("Step 6: Verify navigation did NOT happen");
  await expect(page).toHaveURL(/registration-form\.html/);

  console.log("Validation blocked submission successfully!");
});
