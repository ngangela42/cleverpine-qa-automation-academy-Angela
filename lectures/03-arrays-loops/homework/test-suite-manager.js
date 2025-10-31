// Генерирано е цялото с chatgpt за проверка - да го махна !!!!!!!!!!

// ===========================================
// Test Suite Manager
// Integration of Arrays, Loops & Conditionals
// ===========================================
//
// Това е финалният контролер на тестовия суит,
// който комбинира всички концепции от лекции 1–3.
// Демонстрира:
//  - Създаване и манипулиране на масиви (push, pop, length)
//  - Обработка с for и while цикли
//  - Условни оператори в цикли
//  - Управление на break / continue
//  - Интегриран тестов workflow
// ===========================================

// --------------------------------------------------
// TASK 1 Functions – Arrays & Basic Operations
// --------------------------------------------------

function initializeTestData() {
  let testUsers = [];
  let testEnvironments = ["development", "staging", "production"];
  let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log("=== Initializing Test Data ===");
  console.log(
    `Users: ${testUsers.length}, Environments: ${testEnvironments.length}, Browsers: ${browserTypes.length}`,
  );

  return [testUsers, testEnvironments, browserTypes];
}

function buildTestQueue() {
  let testQueue = [];
  const tests = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset",
    "profile_update",
  ];

  console.log("\n=== Building Test Queue ===");
  for (let test of tests) {
    testQueue.push(test);
    console.log(`Added ${test}, Queue length: ${testQueue.length}`);
  }

  return testQueue;
}

// --------------------------------------------------
// TASK 2 Functions – Loop-Based Processing
// --------------------------------------------------

function processAllTestUsers(testUsers) {
  console.log("\n=== Processing All Test Users ===");

  for (let i = 0; i < testUsers.length; i++) {
    console.log(`Processing user ${i + 1}: ${testUsers[i]}`);
  }

  console.log(`Total users processed: ${testUsers.length}`);
  return testUsers.length;
}

function simulateTestExecution(testCases) {
  console.log("\n=== Simulating Test Execution ===");
  let executionResults = [];

  for (let i = 0; i < testCases.length; i++) {
    let testName = testCases[i];
    let status = i % 3 === 0 ? "FAIL" : "PASS";
    let result = `${testName}:${status}`;
    executionResults.push(result);
    console.log(`Executed: ${testName} - ${status}`);
  }

  return executionResults;
}

// --------------------------------------------------
// TASK 3 Functions – Advanced Processing & Conditionals
// --------------------------------------------------

function analyzeTestResults(testNames, testResults, executionTimes) {
  console.log("\n=== Analyzing Test Results ===");
  let criticalFailures = [];
  let slowTests = [];
  let quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    if (testResults[i] === "FAIL" && testNames[i].includes("login")) {
      criticalFailures.push(testNames[i]);
    } else if (testResults[i] === "PASS" && executionTimes[i] > 2000) {
      slowTests.push(testNames[i]);
    } else if (testResults[i] === "PASS" && executionTimes[i] < 500) {
      quickPasses.push(testNames[i]);
    }
  }

  console.log(`Critical Failures: ${criticalFailures.length}`);
  console.log(`Slow Tests: ${slowTests.length}`);
  console.log(`Quick Passes: ${quickPasses.length}`);

  return [criticalFailures, slowTests, quickPasses];
}

// --------------------------------------------------
// INTEGRATION STEP 1 – Master Test Controller
// --------------------------------------------------

function executeFullTestSuite() {
  console.log("\n==============================");
  console.log("🚀 Starting Full Test Suite Execution");
  console.log("==============================");

  // 1️⃣ Initialize data
  const [testUsers, testEnvironments, browserTypes] = initializeTestData();

  // 2️⃣ Build test queue
  const testQueue = buildTestQueue();

  // 3️⃣ Simulate test users
  testUsers.push("qa1@test.com", "qa2@test.com", "qa3@test.com");
  processAllTestUsers(testUsers);

  // 4️⃣ Execute test queue
  const executionResults = simulateTestExecution(testQueue);

  // 5️⃣ Analyze results (simulate data)
  const testNames = testQueue;
  const testOutcomes = executionResults.map((r) => r.split(":")[1]);
  const executionTimes = [350, 2100, 480, 3000, 800];

  const [critical, slow, quick] = analyzeTestResults(
    testNames,
    testOutcomes,
    executionTimes,
  );

  console.log("\n✅ Full Test Suite Summary:");
  console.log(`Critical Failures: ${critical.length}`);
  console.log(`Slow Tests: ${slow.length}`);
  console.log(`Quick Passes: ${quick.length}`);

  return [critical, slow, quick];
}

// --------------------------------------------------
// INTEGRATION STEP 2 – Complete Demo Workflow
// --------------------------------------------------

function runTestSuiteDemo() {
  console.log("\n========================================");
  console.log("🏁 Running Complete Test Suite Demo");
  console.log("========================================");

  // Sample test data
  const testCases = [
    "login_test",
    "logout_test",
    "profile_test",
    "critical_payment_test",
  ];
  const environments = ["staging", "production"];
  const userRoles = ["admin", "guest"];

  console.log("\n🔹 Initializing & Executing Full Suite...");
  const summary = executeFullTestSuite();

  console.log("\n🔹 Simulating Advanced Scenario Processing...");
  const [critical, slow, quick] = summary;

  console.log("\nFinal Metrics:");
  console.log(`Critical: ${critical.length}`);
  console.log(`Slow: ${slow.length}`);
  console.log(`Quick: ${quick.length}`);

  console.log("\n✅ Test Suite Demo Completed Successfully!");
}

// --------------------------------------------------
// EXECUTION
// --------------------------------------------------

runTestSuiteDemo();
