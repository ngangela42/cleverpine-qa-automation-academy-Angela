import { test, expect } from "@playwright/test";
import { getLocalUrl } from "../task01/getLocalUrl.js";

test("Test A", async ({ page }) => {
  const tableUrl = getLocalUrl("../../pages/table-page.html", import.meta.url);
  await page.goto(tableUrl);

  // Count rows:
  const rows = await page.locator("tbody tr").count();
  console.log("Found rows:", rows);
  expect(rows).toBe(5);

  // Verify headers:
  const expectedHeaders = [
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ];

  const headerTexts = await page.locator("thead th").allTextContents();
  console.log("Header texts:", headerTexts);
  expect(headerTexts).toEqual(expectedHeaders);

  // Verify total submissions:
  console.log("Verify total submissions");
  const totalCount = await page.locator("#total-count").innerText();
  expect(totalCount.trim()).toBe("5");

  console.log("Table headers and counts verified successfully!");
});

test("Test B)", async ({ page }) => {
  const tableUrl = getLocalUrl("../../pages/table-page.html", import.meta.url);
  await page.goto(tableUrl);

  console.log("Locate row for John Doe");
  const johnRow = page.locator("tbody tr", { hasText: "John Doe" });
  await expect(johnRow).toBeVisible();

  // Register dialog handler before clicking
  console.log("Set up dialog handler for Approve");
  page.once("dialog", async (dialog) => {
    console.log("Dialog type:", dialog.type());
    console.log("Dialog message:", dialog.message());
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe");
    await dialog.accept();
    console.log("✓ Alert accepted");
  });

  console.log("Click Approve");
  await johnRow.getByRole("button", { name: "Approve" }).click();

  // Verify row is still visible and status updated
  await expect(johnRow).toBeVisible();
  await expect(johnRow.locator(".status-pill")).toHaveText("Approved");

  //Verify total submissions unchanged
  console.log("Verify total submissions unchanged");
  const totalCount = await page.locator("#total-count").innerText();
  expect(totalCount.trim()).toBe("5");

  console.log("Approve flow verified successfully!");
});

test("Test C)", async ({ page }) => {
  const tableUrl = getLocalUrl("../../pages/table-page.html", import.meta.url);
  await page.goto(tableUrl);

  // Locate Jane Smith's row
  const janeRow = page.locator("tbody tr", { hasText: "Jane Smith" });
  await expect(janeRow).toBeVisible();

  // Register dialog handler for Decline
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

  // Click Decline
  await janeRow.getByRole("button", { name: "Decline" }).click();

  // Verify row is removed
  await expect(janeRow).toHaveCount(0);

  // Verify total submissions decremented by 1
  console.log("Verify total submissions decremented");
  const totalCount = await page.locator("#total-count").innerText();
  expect(totalCount.trim()).toBe("4");

  console.log("Decline flow verified successfully!");
});
