//  1.1:
function initializeTestData() {
  const testUsers = [];

  const testEnvironments = ["development", "staging", "production"];
  const browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log("Length of testUsers: " + testUsers.length);
  console.log("Length of testEnvironments: " + testEnvironments.length);
  console.log("Length of browserTypes: " + browserTypes.length);

  return [testUsers, testEnvironments, browserTypes];
}

const result = initializeTestData();
const testUsers = result[0];
const testEnvironments = result[1];
const browserTypes = result[2];

// 1.1.2:
function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {
  console.log("First environment: " + testEnvironments[0]);
  console.log("Last environment: " + testEnvironments[testEnvironments.length - 1]);

  console.log("First browser: " + browserTypes[0]);
  console.log("Last browser: " + browserTypes[browserTypes.length - 1]);

  console.log("First test user: " + testUsers[0]);
  console.log("Last test user: " + testUsers[testUsers.length - 1]);

  const totalDataElements = testUsers.length + testEnvironments.length + browserTypes.length;
  console.log("Total data elements in all arrays is: " + totalDataElements);

  return totalDataElements;
}

displayTestDataInfo(testUsers, testEnvironments, browserTypes);

// 1.2:
export function addTestUsers(userArray, newUserEmail) {
  console.log("Current number of users: " + userArray.length);

  userArray.push(newUserEmail);

  console.log("New number of users: " + userArray.length);
  console.log("All users: " + userArray);

  return userArray.length;
}

addTestUsers(testUsers, "qa.tester@test.com");

function buildTestQueue() {
  const testQueue = [];
  const testCases = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset",
    "profile_update",
  ];

  for (let i = 0; i < testCases.length; i++) {
    const testName = testCases[i];
    testQueue.push(testName);
    console.log("Added " + testName + ", Queue length: " + testQueue.length);
  }

  return testQueue;
}

const queue = buildTestQueue();

export function processTestQueue(testQueue) {
  let processedCount = 0;

  while (testQueue.length > 0) {
    const testName = testQueue.pop();
    processedCount = processedCount + 1;
    console.log("Processing: " + testName + ", Remaining: " + testQueue.length);
  }

  console.log("All tests processed, queue is empty.");
  return processedCount;
}

processTestQueue(queue);

function manageTestResults() {
  const passedTests = [];
  const failedTests = [];
  const skippedTests = [];

  passedTests.push("login_functionality");
  passedTests.push("user_registration");
  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log("Passed tests: " + passedTests.length);
  console.log("Failed tests: " + failedTests.length);
  console.log("Skipped tests: " + skippedTests.length);

  return [passedTests, failedTests, skippedTests];
}

const results = manageTestResults();
const passedTests = results[0];
const failedTests = results[1];
const skippedTests = results[2];

//1.3:
function rotateTestEnvironments(environmentsArray) {
  console.log("Before rotation: " + environmentsArray);

  const firstElement = environmentsArray[0];
  const lastElement = environmentsArray[environmentsArray.length - 1];

  environmentsArray[0] = lastElement;
  environmentsArray[environmentsArray.length - 1] = firstElement;

  console.log("After rotation: " + environmentsArray);

  return environmentsArray;
}

rotateTestEnvironments(testEnvironments);

function validateTestDataIntegrity(testUsers, testEnvironments, browserTypes) {
  const validationIssues = [];

  console.log("Validating test data integrity...");

  if (testUsers.length === 0) {
    validationIssues.push("No test users defined");
    console.log("No test users defined");
  } else {
    console.log("Test users are OK");
  }

  if (testEnvironments.length < 2) {
    validationIssues.push("Insufficient environments");
    console.log("Not enough environments");
  } else {
    console.log("Environments are OK");
  }

  if (browserTypes.length < 3) {
    validationIssues.push("Not enough browsers for testing");
    console.log("Not enough browsers");
  } else {
    console.log("Browsers are OK");
  }

  console.log("Validation check result: " + validationIssues);
  return validationIssues;
}

validateTestDataIntegrity(testUsers, testEnvironments, browserTypes);

function generateTestReport(passedTests, failedTests, skippedTests) {
  const passedCount = passedTests.length;
  const failedCount = failedTests.length;
  const skippedCount = skippedTests.length;

  const totalTests = passedCount + failedCount + skippedCount;

  console.log("Passed tests: " + passedCount);
  console.log("Failed tests: " + failedCount);
  console.log("Skipped tests: " + skippedCount);
  console.log("Total tests: " + totalTests);

  if (failedCount > 0) {
    console.log("First test failed: " + failedTests[0]);
  } else {
    console.log("All tests passed!");
  }

  return [totalTests, passedCount, failedCount, skippedCount];
}

generateTestReport(passedTests, failedTests, skippedTests);
