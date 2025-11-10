import { test, expect } from "@playwright/test";
import { SessionFormPage } from "../page-objects/SessionFormPage.js";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage.js";
import path from "node:path";

test.describe("Session Submission with Page Object Model", () => {
  test("Happy path - successful submission and confirmation", async ({ page }) => {
    const formPage = new SessionFormPage(page);
    const confirmationPage = new SessionConfirmationPage(page);

    console.log("Step 1: Navigate to the registration form");
    await formPage.goto();

    console.log("Step 2: Complete the full session submission");
    await formPage.completeSubmission({
      format: "panel", // Panel Discussion
      topics: ["testing", "visual"],
      audience: "intermediate",
      files: [
        path.resolve(
          "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
        ),
      ],
    });

    console.log("Step 3: Verify confirmation page details");
    await expect(page).toHaveURL(/session-confirmation\.html/);
    await expect(confirmationPage.formatText).toContainText("Panel Discussion");
    await expect(confirmationPage.topicsText).toContainText("Automated Testing");
    await expect(confirmationPage.topicsText).toContainText("Visual Regression");
    await expect(confirmationPage.audienceText).toContainText("Intermediate");
    await expect(confirmationPage.filesText).toContainText("sample-resume.pdf");

    console.log("✓ Happy path passed successfully!");
  });

  test("Negative path - validation blocks submission when required data is missing", async ({ page }) => {
    const formPage = new SessionFormPage(page);

    console.log("Navigate to the registration form");
    await formPage.goto();

    console.log("Fill only some fields, skip session format");
    await formPage.selectTopics(["testing", "visual"]);
    await formPage.selectAudienceLevel("intermediate");
    await formPage.acceptCodeOfConduct();

    console.log("Handle validation dialog on submit");
    page.once("dialog", async (dialog) => {
      console.log("Dialog type:", dialog.type());
      console.log("Dialog message:", dialog.message());
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toContain("Please select a session format");
      await dialog.accept();
      console.log("✓ Dialog accepted");
    });

    console.log("Step 4: Try to submit form");
    await formPage.submitForm();

    console.log("Step 5: Verify navigation did NOT occur");
    await expect(page).toHaveURL(/registration-form\.html/);

    console.log("✓ Negative path passed successfully!");
  });
});
