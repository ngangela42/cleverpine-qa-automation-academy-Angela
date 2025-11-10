import { test, expect } from "@playwright/test";
import { SessionFormPage } from "../page-objects/SessionFormPage.js";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage.js";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage.js";
import path from "node:path";

  test("Test A", async ({ page }) => {
    const formPage = new SessionFormPage(page);
    const confirmationPage = new SessionConfirmationPage(page);

    await test.step("Navigate to registration form", async () => {
      await formPage.goto();
    });

    await test.step("Complete the full submission flow", async () => {
      await formPage.completeSubmission({
        format: "panel",
        topics: ["testing", "visual"],
        audience: "intermediate",
        files: [
          path.resolve(
            "lectures/10-advanced-ui-interactions/test-files/sample-resume.pdf"
          ),
        ],
      });
    });

    await test.step("Verify confirmation page details", async () => {
      await expect(page).toHaveURL(/session-confirmation\.html/);
      await expect(confirmationPage.formatText).toContainText("Panel Discussion");
      await expect(confirmationPage.topicsText).toContainText("Automated Testing");
      await expect(confirmationPage.topicsText).toContainText("Visual Regression");
      await expect(confirmationPage.audienceText).toContainText("Intermediate");
      await expect(confirmationPage.filesText).toContainText("sample-resume.pdf");
    });

    console.log("Success!");
  });

  test("Test B)", async ({ page }) => {
    const tablePage = new SubmissionsTablePage(page);

    await test.step("Navigate to submissions table", async () => {
      await tablePage.navigate();
    });

    await test.step("Handle alert for Approve and approve John Doe", async () => {
      page.once("dialog", async (dialog) => {
        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toContain("Approved submission for John Doe");
        await dialog.accept();
      });

      await tablePage.approve("John Doe");
      const status = await tablePage.getStatus("John Doe");
      expect(status).toBe("Approved");
      console.log("John Doe approved successfully!");
    });

    await test.step("Handle confirm for Decline and decline Jane Smith", async () => {
      page.once("dialog", async (dialog) => {
        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toContain(
          "Are you sure you want to decline the submission for Jane Smith?"
        );
        await dialog.accept();
      });

      await tablePage.decline("Jane Smith");

      const janeRow = tablePage.getRowBySpeaker("Jane Smith");
      await expect(janeRow).toHaveCount(0);

      const total = await tablePage.getTotalCount();
      expect(total).toBe(4);
      console.log("Jane Smith declined successfully!");
    });
  });

