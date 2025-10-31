//1.
function processAllTestUsers(testUsers) {
  for (let i = 0; i < testUsers.length; i++) {
    console.log(`Processing user ${i + 1} : ${testUsers}`);

    console.log(`Total users processed: ${testUsers.length}`);

    return testUsers.length;
  }
}

//2.:
function validateAllEmails(emailArray) {
  let validEmails = [];
  let invalidEmails = [];

  for (let i = 0; i < emailArray.length; i++) {
    let email = emailArray[i];
    if (email.includes("@")) {
      validEmails.push(email);
      console.log(`Email ${i + 1}: ${email} - VALID`);
    } else {
      invalidEmails.push(email);
      console.log(`Email ${i + 1}: ${email} - INVALID`);
    }
  }

  console.log(
    `Valid emails: ${validEmails.length}, Invalid emails: ${invalidEmails.length}`
  );
  return [validEmails, invalidEmails];
}

//3.:
function calculateResponseTimes(responseTimesArray) {
  let totalTime = 0;
  slowestTime = 0;

  for (let i = 0; i < responseTimesArray.length; i++) {
    let currentTime = responseTimesArray[i];
    totalTime += currentTime;

    if (currentTime > slowestTime) {
      slowestTime = currentTime;
    }
    console.log(`Response ${i + 1} : ${currentTime.ms}`);
  }
  let averageTime = totalTime / responseTimesArray.length;

  console.log(`Total time: ${totalTime}`);
  console.log(`Average time: ${averageTime}`);
  console.log(`Slowest time: ${slowestTime}`);

  return [totalTime, averageTime, slowestTime];
}

//4.:
function simulateTestExecution(testCases) {
  let executionResults = [];

  for (let i = 0; i < testCases.length; i++) {
    let testName = testCases[i];
    let status = i % 3 === 0 ? "FAIL" : "PASS";
    let result = `${testName}:${status}`;

    executionResults.push(result);
    console.log(`Executed: ${testName} - ${status}`);
  }

  let passCount = [];
  let failCount = [];

  for (let i = 0; i < executionResults.length; i++) {
    if (executionResults[i].includes(":PASS")) {
      passCount++;
    } else {
      failCount++;
    }
  }
  console.log(`Passed tests: ${passCount}, Failed: ${failCount}`);

  return executionResults;
}

//Step 2.2: While Loop Processing Systems:
//1.:
function retryFailedTest(testName) {
  let attempts = 0;
  let maxRetries = 3;
  let testPassed = false;

  while (attempts < maxRetries && !testPassed) {
    attempts++;
    let status = "Fail";

    if (attempts === 3) {
      testPassed = true;
      status = "PASS";
    }

    console.log(`Retry attempt ${attempts} for ${testName}: ${status}`);
  }

  console.log(
    testPassed
      ? `${testName} test passed after ${attempts} attempts`
      : `${testName} test failed after ${attempts} attempts`
  );

  return [testPassed, attempts];
}

//2.:
function monitorTestQueue(testQueue) {
  let processedCount = 0;
  let maxProcessingTime = 10;

  while (testQueue.length > 0 && processedCount < maxProcessingTime) {
    testQueue.pop();
    processedCount++;

    console.log(
      `Processed test ${processedCount}, Queue remaining: ${testQueue.length}`
    );
  }

  if (testQueue.length === 0) {
    console.log("Queue fully processed!");
  } else {
    console.log("Stopped: Max processing time reached");
  }

  return [processedCount, testQueue.length];
}

//3.:
function waitForTestCompletion(expectedDuration) {
  let elapsedTime = 0;
  let testComplete = false;

  while (!testComplete && elapsedTime < expectedDuration * 2) {
    elapsedTime++;

    if (elapsedTime >= expectedDuration) {
      testComplete = true;
    }

    if (elapsedTime % 2 === 0) {
      console.log(`Waiting... Elapsed time: ${elapsedTime}`);
    }
  }

  if (testComplete) {
    console.log(`Test completed in ${elapsedTime} iterations`);
  } else {
    console.log(`Test timed out after ${elapsedTime} iterations`);
  }

  return [testComplete, elapsedTime];
}

//Step 2.3: Loop Pattern Comparisons:

function compareLoopApproaches(dataArray) {
  console.log("Comparing for loop vs while loop approaches");

  let forProcessedCount = 0;

  for (let i = 0; i < dataArray.length; i++) {
    forProcessedCount++;

    let whileProcessedCount = 0;
    let index = 0;
    while (index < dataArray.length) {
      whileProcessedCount++;
      index++;
    }

    console.log(`For loop processed: ${forProcessedCount}`);
    console.log(`While loop processed: ${whileProcessedCount}`);
    console.log("Comparison complete!");

    return [forProcessedCount, whileProcessedCount];
  }
}
