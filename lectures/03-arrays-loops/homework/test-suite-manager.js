/**
 * Integration Task: Complete Test Suite Management System
 *
 * Objective: Integrate all components from previous tasks into a unified
 * test suite management system that demonstrates a realistic QA automation workflow.
 *
 * Note: This integration uses standard ES Modules (import/export) to compose the system.
 */

// Task 1 helpers
import {
  initializeTestData,
  displayTestDataInfo,
  addTestUsers,
  buildTestQueue,
  generateTestReport,
} from "./task01/test-data-manager.js";

// Task 2 helpers
import {
  processAllTestUsers,
  validateAllEmails,
  calculateResponseTimes,
  monitorTestQueue,
  retryFailedTest,
} from "./task02/test-processing-engine.js";

// Task 3 helpers
import {
  processTestEnvironments,
  findFirstCriticalError,
  processValidTestsOnly,
  analyzeTestResults,
} from "./task03/advanced-test-processor.js";

/**
 * Executes a full, integrated test suite from start to finish.
 * This function orchestrates calls to functions from all three tasks,
 * showing how they work together in a sequence.
 * @returns {Array[]} A combined array of key results from all tasks.
 */
export function executeFullTestSuite() {
  console.log("--- Executing Full Test Suite ---");

  // 1. Initialize Data (from Task 1)
  const initData = initializeTestData();
  const testUsers = initData[0];
  const testEnvironments = initData[1];
  const browserTypes = initData[2];
  addTestUsers(testUsers, "final@test.com");
  // Use all arrays to display info and avoid unused variables
  displayTestDataInfo(testUsers, testEnvironments, browserTypes);

  // 2. Process and Validate Data (from Task 2)
  processAllTestUsers(testUsers);
  const emailValidationResult = validateAllEmails(["valid@email.com", "invalid-email"]);

  // 3. Run Complex Scenarios (from Task 3)
  const testNames = ["Login", "Purchase", "Logout", "API Check"];
  const testResults = ["PASS", "FAIL", "PASS", "PASS"];
  const executionTimes = [500, 2500, 300, 1500];
  const analysisArrays = analyzeTestResults(testNames, testResults, executionTimes);
  const criticalIssues = analysisArrays[0];
  const slowTests = analysisArrays[1];
  const successfulTests = analysisArrays[2];

  // 4. Generate Final Report (from Task 1)
  const finalReport = generateTestReport(successfulTests, criticalIssues, []);

  console.log("--- Full Test Suite Execution Complete ---");

  // Return a combined object with all the important results.
  return [emailValidationResult, [criticalIssues, slowTests, successfulTests], finalReport];
}

/**
 * Runs a demonstration of the complete, integrated test suite workflow.
 * This function sets up sample data and calls the main execution function,
 * then displays a final summary.
 */
export function runTestSuiteDemo() {
  console.log("***************************************************");
  console.log("** Running: Complete Test Suite Management System Demo **");
  console.log("***************************************************\n");

  // --- Setup Sample Data ---
  const sampleTestCases = ["HomePage_Loads", "ContactForm_Submits", "Search_ReturnsResults"];
  const sampleEnvironments = ["Staging", "Production"];
  const sampleResponseTimes = [120, 250, 90, 310, 500];

  // --- Execute Workflow ---

  // Task 1 Demo: Initialize and manage data
  console.log("\n--- Phase 1: Data Management (Task 1) ---");
  const demoInit = initializeTestData();
  const users = demoInit[0];
  const envsList = demoInit[1];
  const browsers = demoInit[2];
  addTestUsers(users, "demo.user@test.com");
  displayTestDataInfo(users, envsList, browsers);
  const testQueue = buildTestQueue();

  // Task 2 Demo: Process data with loops
  console.log("\n--- Phase 2: Data Processing (Task 2) ---");
  processAllTestUsers(users);
  calculateResponseTimes(sampleResponseTimes);
  monitorTestQueue(testQueue); // This will empty the queue
  retryFailedTest("flaky_api_call");

  // Task 3 Demo: Advanced analysis and control flow
  console.log("\n--- Phase 3: Advanced Analysis (Task 3) ---");
  processTestEnvironments(sampleTestCases, sampleEnvironments);
  const sampleTestResults = ["PASS", "FAIL", "FAIL", "PASS", "FAIL"];
  const sampleErrorMessages = [
    "",
    "timeout",
    "CRITICAL: service outage",
    "",
    "warning: minor validation",
  ];
  findFirstCriticalError(sampleTestResults, sampleErrorMessages);

  const names = ["Smoke_Login", "Checkout", "Profile_Update", "Reports"];
  const statuses = ["valid", "invalid", "valid", "skipped"];
  processValidTestsOnly(names, statuses);
  const analysisResult = analyzeTestResults(
    ["Login", "API", "UI"],
    ["PASS", "FAIL", "PASS"],
    [800, 1200, 900]
  );

  // Final Report Generation
  console.log("\n--- Phase 4: Final Report ---");
  const crit = analysisResult[0];
  const succ = analysisResult[2];
  generateTestReport(succ, crit, []);

  // Execute the master controller and print its summary
  console.log("\n--- Phase 5: Master Controller Summary ---");
  const fullSummary = executeFullTestSuite();
  console.log("Master Controller Output:", fullSummary);

  console.log("\n***************************************************");
  console.log("**           Integration Demo Complete           **");
  console.log("***************************************************");
}

// --- Main Execution ---
runTestSuiteDemo();
