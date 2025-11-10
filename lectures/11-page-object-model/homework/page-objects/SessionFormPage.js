export class SessionFormPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/registration-form.html",
      import.meta.url
    ).href;

    //Locators:
    this.formatDropdown = page.locator("#session-format");
    this.topicTesting = page.locator("#topic-testing");
    this.topicVisual = page.locator("#topic-visual");
    this.levelIntro = page.locator("#level-intro");
    this.levelIntermediate = page.locator("#level-intermediate");
    this.levelAdvanced = page.locator("#level-advanced");
    this.fileInput = page.locator("#materials");
    this.codeOfConduct = page.locator("#code-of-conduct");
    this.submitButton = page.locator("#submit-proposal");
  }

  //open page:
  async goto() {
    await this.page.goto(this.url);
  }

  // Select the session format
  async selectSessionFormat(formatValue) {
    await this.formatDropdown.selectOption(formatValue);
    await this.page.waitForTimeout(500);
  }

  //select topics:
  async selectTopics(topicsArray) {
    for (const topic of topicsArray) {
      if (topic === "testing") await this.topicTesting.check();
      if (topic === "visual") await this.topicVisual.check();
    }
  }

  //select audience level:
  async selectAudienceLevel(levelValue) {
    if (levelValue === "introductory") await this.levelIntro.check();
    if (levelValue === "intermediate") await this.levelIntermediate.check();
    if (levelValue === "advanced") await this.levelAdvanced.check();
  }
  //upload files:
  async uploadFiles(filePaths) {
    await this.fileInput.setInputFiles(filePaths);
  }

  //accept code of conduct:
  async acceptCodeOfConduct() {
    await this.codeOfConduct.check();
  }

  //submit the form:
  async submitForm() {
    await this.submitButton.click();
    await this.page.waitForURL(/session-confirmation\.html/);
  }

  //complete full happy path submission:
  // data = { format, topics, audience, files }

  async completeSubmission(data) {
    await this.selectSessionFormat(data.format);
    await this.selectTopics(data.topics);
    await this.selectAudienceLevel(data.audience);
    await this.uploadFiles(data.files);
    await this.acceptCodeOfConduct();
    await this.submitForm();
  }
}
