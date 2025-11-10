import { test, expect } from "@playwright/test";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage.js";

  test("Test A", async ({ page }) => {
    const tablePage = new SubmissionsTablePage(page);

    console.log("Navigate to the table page");
    await tablePage.navigate();

    console.log("Verify total row count");
    const rowCount = await tablePage.getRowCount?.() ?? (await tablePage.rows.count());
    expect(rowCount).toBe(5);

    console.log("Verify header texts");
    const expectedHeaders = [
      "Speaker",
      "Session Format",
      "Topics",
      "Audience Level",
      "Files",
      "Status",
      "Actions",
    ];
    const actualHeaders = await tablePage.getHeaders();
    expect(actualHeaders).toEqual(expectedHeaders);

    console.log("Verify total submissions count");
    const total = await tablePage.getTotalCount();
    expect(total).toBe(5);

    console.log("Table headers and counts verified successfully!");
  });

  test("Test B", async ({ page }) => {
    const tablePage = new SubmissionsTablePage(page);

    console.log("Navigate to the table page");
    await tablePage.navigate();

    console.log("Aalert dialog before clicking Approve");
    page.once("dialog", async (dialog) => {
      console.log("Dialog type:", dialog.type());
      console.log("Dialog message:", dialog.message());
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toContain("Approved submission for John Doe");
      await dialog.accept();
      console.log("Dialog accepted");
    });

    console.log("Approve John Doe");
    await tablePage.approve("John Doe");

    console.log("Verify status updated to Approved");
    const status = await tablePage.getStatus("John Doe");
    expect(status).toBe("Approved");

    console.log("Verify total submissions count unchanged");
    const total = await tablePage.getTotalCount();
    expect(total).toBe(5);

    console.log("Approve flow verified successfully!");
  });

  test("Test C)", async ({ page }) => {
    const tablePage = new SubmissionsTablePage(page);

    console.log("Navigate to the table page");
    await tablePage.navigate();

    console.log("Handle confirm dialog before clicking Decline");
    page.once("dialog", async (dialog) => {
      console.log("Dialog type:", dialog.type());
      console.log("Dialog message:", dialog.message());
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toContain(
        "Are you sure you want to decline the submission for Jane Smith?"
      );
      await dialog.accept();
      console.log("Confirm accepted");
    });

    console.log("Decline Jane Smith");
    await tablePage.decline("Jane Smith");

    console.log("Verify row removed");
    const janeRow = tablePage.getRowBySpeaker("Jane Smith");
    await expect(janeRow).toHaveCount(0);

    console.log("Verify total submissions decremented");
    const total = await tablePage.getTotalCount();
    expect(total).toBe(4);

    console.log("Decline flow verified successfully!");
  });

