export class SessionConfirmationPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../10-advanced-ui-interactions/homework/pages/session-confirmation.html",
      import.meta.url
    ).href;

    // Locators
    this.formatText = page.locator("p:has-text('Session Format:')");
    this.topicsText = page.locator("p:has-text('Topics:')");
    this.audienceText = page.locator("p:has-text('Audience Level:')");
    this.filesText = page.locator("p:has-text('Files:')");
  }

  // Optional helper getters
  async getFormat() {
    return this.formatText.innerText();
  }

  async getTopics() {
    return this.topicsText.innerText();
  }

  async getAudienceLevel() {
    return this.audienceText.innerText();
  }

  async getUploadedFiles() {
    return this.filesText.innerText();
  }
}
