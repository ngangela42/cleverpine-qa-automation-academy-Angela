export class SubmissionsTablePage {
  constructor(page) {
    this.page = page;

    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/table-page.html",
      import.meta.url
    ).href;

    this.table = page.locator("table");
    this.headers = page.locator("thead th");
    this.rows = page.locator("tbody tr");
    this.totalCount = page.locator("#total-count");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  getRowBySpeaker(name) {
    return this.page.locator("tbody tr", { hasText: name });
  }

  async getHeaders() {
    return await this.headers.allTextContents();
  }

  async getTotalCount() {
    const text = await this.totalCount.innerText();
    return parseInt(text.trim(), 10);
  }

  async approve(name) {
    const row = this.getRowBySpeaker(name);
    await row.getByRole("button", { name: "Approve" }).click();
    await this.page.waitForTimeout(1000);
  }

  async decline(name) {
    const row = this.getRowBySpeaker(name);
    await row.getByRole("button", { name: "Decline" }).click();
  }

  async getStatus(name) {
    const row = this.getRowBySpeaker(name);
    const statusLocator = row.locator(".status-pill");

    return await statusLocator.innerText();
  }
}
