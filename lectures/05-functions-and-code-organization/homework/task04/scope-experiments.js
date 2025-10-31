let testEnvironment = "staging";
let maxRetries = 3;

// 1.:

function runTest(testName, attempts) {
  let testResult;

  if (attempts < maxRetries) {
    testResult = "PASS";
  } else {
    testResult = "FAIL";
  }

  console.log("Inside runTest -> attempts:", attempts);

  return (
    "Test: " +
    testName +
    "Environment: " +
    testEnvironment +
    "Attempts: " +
    attempts +
    "MaxRetries: " +
    maxRetries +
    "Result: " +
    testResult
  );
}

// 2.:

function configureRetries(newMaxRetries) {
  maxRetries = newMaxRetries;
  return maxRetries;
}

console.log("Globals before configuration: ");
console.log("Environment:", testEnvironment);
console.log("Max retries:", maxRetries);

console.log("\nUpdating maxRetries...");
configureRetries(5);

console.log("Globals after configuration: ");
console.log("Environment:", testEnvironment);
console.log("Max retries:", maxRetries);

console.log("Run tests: ");
console.log(runTest("LoginTest", 2));
console.log(runTest("PaymentTest", 5));

//console.log(attempts); * Uncommenting this line causes an error because the variable is function-scoped.”
