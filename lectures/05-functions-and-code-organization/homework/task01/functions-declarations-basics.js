// 1.:

function countPassedTests(results) {
  let count = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS") {
      count++;
    }
  }
  return count;
}

// 2.:

function formatExecutionTime(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    const seconds = milliseconds;
    return seconds.toFixed(1) + "s";
  }
}

// 3.:

function findFailedTests(testNames, testResults) {
  const failed = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failed.push(testNames[i]);
    }
  }
  return failed;
}

const sampleResults = ["PASS", "FAIL", "PASS", "SKIP", "FAIL"];
const sampleNames = ["Login", "Signup", "Logout", "Profile", "Payment"];

console.log("Passed tests:", countPassedTests(sampleResults));
console.log("Time (200ms):", formatExecutionTime(200));
console.log("Time (1000ms):", formatExecutionTime(1000));
console.log("Failed tests:", findFailedTests(sampleNames, sampleResults));
