//Step 1.1: Create Basic Test Data Arrays:
//1.

function initializeTestData() {
  let testUsers = [];
  let testEnvironments = ["development", "staging", "production"];
  let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log(`Length of testUsers: ${testUsers.length}`);
  console.log(`Length of testEnvironments: ${testEnvironments.length}`);
  console.log(`Length of browserTypes: ${browserTypes.length}`);

  return [testUsers, testEnvironments, browserTypes];
}

initializeTestData();

//2.
function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {
  console.log(`First environment:  ${testEnvironments[0]}`);
  console.log(
    `Last environment: ${testEnvironments[testEnvironments.length - 1]}`
  );

  console.log(`First browser: ${browserTypes[0]}`);
  console.log(`Last browser: ${browserTypes[browserTypes.length - 1]}`);

  console.log(`First test user: ${testUsers[0]}`);
  console.log(`Last user: ${testUsers[testUsers.length - 1]}`);

  let totalDataElements =
    testUsers.length + testEnvironments.length + browserTypes.length;

  console.log(`Total data elements in all arrays is: ${totalDataElements}`);

  return totalDataElements;
}

const [testUsers, testEnvironments, browserTypes] = initializeTestData();

displayTestDataInfo(testUsers, testEnvironments, browserTypes);

//Step 1.2: Build Test Data Manipulation Functions:
//1.:

function addTestUsers(userArray, newUserEmail) {
  console.log(`Current number of users: ${userArray.length}`);

  userArray.push(newUserEmail);

  console.log(`New users: ${userArray.length}`);
  console.log(`Completed user list: ${userArray}`);

  return userArray.length;
}

//2.:
function buildTestQueue() {
  let testQueue = [];

  const testCases = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset",
    "profile_update",
  ];

  for (let testName of testCases) {
    testQueue.push(testName);
    console.log(`Added ${testName}, Queue length: ${testQueue.length}`);

    return testQueue;
  }
}

//3.:
function processTestQueue(testQueue) {
  while (testQueue.length > 0) {
    let testName = testQueue.pop();
    processedCount++;

    console.log(`"Processing: ${testName}, Remaining: ${testQueue.length}`);

    console.log("All tests processed, queue is empty");

    return processedCount;
  }
}

//4.:
function manageTestResults() {
  let passedTests = [];
  let failedTests = [];
  let skippedTests = [];

  passedTests.push("login_functionality", "user_registration");
  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log(`Passed tests: ${passedTests.length}`);
  console.log(`Failed tests: ${failedTests.length}`);
  console.log(`Skipped tests: ${skippedTests.length}`);

  return [passedTests, failedTests, skippedTests];
}

//Step 1.3: Advanced Array Operations for Test Scenarios :
//1.:

function rotateTestEnvironments(environmentsArray) {
  console.log(`First element`, environmentsArray);

  const firstElement = environmentsArray[0];

  const lastElement = environmentsArray.pop();

  environmentsArray.push(firstElement);

  environmentsArray[0] = lastElement;

  console.log("After rotation:", environmentsArray);

  return environmentsArray;
}
//2.:
function validateTestDataIntegrity(testUsers, estEnvironments, browserTypes) {
  let validationIssues = [0];

  console.log("Validating test data integrity...");

  if (testUsers.length === 0) {
    validationIssues.push("No test users defined");
    console.log("No test users defined");
  } else {
    console.log("Test users are OK");
  }

  if (testEnvironments.length < 2) {
    validationIssues.push("Insufficient environments");
  } else {
    console.log("Environments are OK");
  }

  if (browserTypes.length < 3) {
    validationIssues.push("Not enough browsers for testing");
  } else {
    console.log("Browsers are OK");
  }

  console.log(`Validation check result: ${validationIssues}`);

  return validationIssues;
}

//3.:
function generateTestReport(passedTests, failedTests, skippedTests) {
  const passedCount = passedTests.length;
  const failedCount = failedTests.length;
  const skippedCount = skippedTests.length;

  const totalTests = passedCount + failedCount + skippedCount;

  console.log(`Passed tests: ${passedCount}`);
  console.log(`Failed tests: ${failedCount}`);
  console.log(`Skipped tests: ${skippedCount}`);
  console.log(`Total tests: ${totaTests}`);

  if (failedTests > 0) {
    console.log(`First test failed! ${failedTests[0]}`);
  } else {
    console.log("All tests passed!");
  }
  console.log("===========");

  return [totalTests, passedCount, failedCount, skippedCount];
}
