//1.:
export function analyzeTestResults(testNames, testResults, executionTimes) {
  let criticalFailures = [];
  let slowTests = [];
  let quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    const name = testNames[i];
    const result = testResults[i];
    const time = executionTimes[i];

    if (result === "FAIL" && name.includes("login")) {
      criticalFailures.push(name);
      console.log(`Critical failure: ${name}`);
    } else if (result === "PASS" && time > 2000) {
      slowTests.push(name);
      console.log(`Slow test: ${name} (${time})`);
    } else if (result === "PASS" && time < 500) {
      quickPasses.push(name);
      console.log(`Quick pass: ${name} (${time})`);
    }
  }

  console.log(`Critical Failures: ${criticalFailures.length}`);
  console.log(`Slow Tests: ${slowTests.length}`);
  console.log(`Quick Passes: ${quickPasses.length}`);

  return [criticalFailures, slowTests, quickPasses];
}

//2.:
function processTestEnvironments(testCases, environments) {
  let environmentResults = [];

  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      const test = testCases[i];
      const env = environments[j];
      let status = "PASS";

      if (env === "production" && Math.random() < 0.4) {
        status = "FAIL";
      } else if (env !== "production" && Math.random() < 0.2) {
        status = "FAIL";
      }

      const result = `${test}|${env}|${status}`;
      environmentResults.push(result);

      console.log(`Processed combination: ${test} in ${env} -> ${status}`);
    }
  }

  return environmentResults;
}

//3.:
function validateTestDataQuality(emails, passwords, ages) {
  let validUsers = [];
  let invalidUsers = [];
  let fixableUsers = [];

  for (i = 0; i < emails.length; i++) {
    let email = emails[i];
    let password = passwords[i];
    let age = ages[i];

    let emailValid = email.includes("@") && email.includes(".");
    let passwordValid = password.length >= 8;
    let ageValid = age >= 18 && age <= 100;

    let passedChecks = [emailValid, passwordValid, ageValid].filter(
      (v) => v
    ).length;

    if (passedChecks === 3) {
      validUsers.push(email);
      console.log(`${email} is valid`);
    } else if (passedChecks === 2) {
      fixableUsers.push(email);
      console.log(`${email} is fixable`);
    } else {
      invalidUsers.push(email);
      console.log(`${email} is invalid`);
    }
  }

  return [validUsers, invalidUsers, fixableUsers];
}

//Step 3.2: Loop Control with Break and Continue:
function findFirstCriticalError(testResults, errorMessages) {
  let criticalIndex = -1;

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      if (errorMessages[i].includes("critical")) {
        console.log(`Critical error found at index ${i}: ${errorMessages[i]}`);
        criticalIndex = i;
        break;
      }
    }
  }

  if (criticalIndex === -1) {
    console.log("No critical errors found.");
  }

  return criticalIndex;
}
//5.:
function processValidTestsOnly(testNames, testStatuses) {
  let processedTests = [];

  for (let i = 0; i < testNames.length; i++) {
    let name = testNames[i];
    let status = testStatuses[i];

    if (status === "SKIP" || status === "INVALID") {
      console.log(`Skipping test: ${name} (status: ${status})`);
      continue;
    }

    processedTests.push(name);
    console.log(`Processed valid test: ${name}`);
  }

  return processedTests;
}

//6.:
function monitorTestExecutionWithLimits(testQueue, maxFailures) {
  let failureCount = 0;
  let processedCount = 0;

  while (testQueue.length > 0) {
    let test = testQueue.pop();
    let passed = Math.random() > 0.2;
    processedCount++;

    if (!passed) {
      failureCount++;
      console.log(` Test failed: ${test} (Total fails: ${failureCount})`);
    } else {
      console.log(`Test passed: ${test}`);
    }

    if (failureCount >= maxFailures) {
      console.log("Maximum failure limit reached, stopping execution.");
      break;
    }
  }

  return [processedCount, failureCount, testQueue.length];
}

//Step 3.3: Comprehensive Test Scenario Processing :

function executeComprehensiveTestSuite(testCases, environments, userRoles) {
  let passedResults = [];
  let failedResults = [];
  let skippedResults = [];
  let criticalResults = [];

  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      for (let k = 0; k < userRoles.length; k++) {
        let caseName = testCases[i];
        let env = environments[j];
        let role = userRoles[k];
        let status = "PASS";

        if (env === "production" && Math.random() < 0.3) {
          status = "FAIL";
        } else if (
          env === "staging" &&
          role === "admin" &&
          Math.random() < 0.2
        ) {
          status = "FAIL";
        }

        if (caseName.includes("critical") && status === "FAIL") {
          criticalResults.push(`${caseName}|${env}|${role}|CRITICAL_FAIL`);
          console.log(`Critical failure: ${caseName} in ${env} as ${role}`);
          continue;
        }

        if (role === "guest" && env === "staging") {
          console.log(`Skipping guest test on staging: ${caseName}`);
          skippedResults.push(`${caseName}|${env}|${role}|SKIPPED`);
          continue;
        }

        if (status === "PASS") {
          passedResults.push(`${caseName}|${env}|${role}|PASS`);
        } else {
          failedResults.push(`${caseName}|${env}|${role}|FAIL`);
        }
      }
    }
  }

  return [passedResults, failedResults, skippedResults, criticalResults];
}

//8.:
function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes,
  resultEnvironments
) {
  let totalCount = resultNames.length;
  let passCount = 0;
  let failCount = 0;
  let slowCount = 0;
  let productionFails = 0;

  for (let i = 0; i < resultNames.length; i++) {
    let status = resultStatuses[i];
    let time = resultTimes[i];
    let env = resultEnvironments[i];

    if (status === "PASS") passCount++;
    else if (status === "FAIL") failCount++;

    if (time > 2000) slowCount++;

    if (env === "production" && status === "FAIL") productionFails++;

    if (status === "FAIL" && env === "staging" && time > 1500) {
      console.log(`Slow failure in staging: ${resultNames[i]} (${time})`);
    }
  }

  console.log("===== Detailed Test Report =====");
  console.log(`Total: ${totalCount}`);
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Slow (>2000ms): ${slowCount}`);
  console.log(`Production Failures: ${productionFails}`);

  return [totalCount, passCount, failCount, slowCount];
}
