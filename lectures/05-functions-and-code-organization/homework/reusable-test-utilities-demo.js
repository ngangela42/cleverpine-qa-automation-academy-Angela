// Task 1:
function countPassedTests(results) {
  let count = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS") count++;
  }
  return count;
}

function formatExecutionTime(milliseconds) {
  if (milliseconds < 1000) return milliseconds + "ms";
  const seconds = milliseconds / 1000;
  return seconds.toFixed(1) + "s";
}

function findFailedTests(names, results) {
  const failed = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "FAIL") failed.push(names[i]);
  }
  return failed;
}

// Task 2:
function isValidEmail(email) {
  const hasAt = email.includes("@");
  const hasDot = email.includes(".");
  const isNotEmpty = email.length > 0;
  return hasAt && hasDot && isNotEmpty;
}

function formatDuration(milliseconds) {
  if (milliseconds < 1000) return milliseconds + "ms";
  const seconds = milliseconds / 1000;
  return seconds.toFixed(1) + "s";
}

// Task 3:
let formatTestResultArrow = (testName, status) => {
  const icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + " - " + status;
};

const names = ["Login", "Signup", "Logout", "Profile", "Payment", "Settings"];
const results = ["PASS", "FAIL", "PASS", "PASS", "FAIL", "SKIP"];
const times = [350, 1250, 800, 2500, 975, 1800];

// 1.

console.log("=== BASIC METRICS ===");
const total = results.length;
const passed = countPassedTests(results);
const successRate = ((passed / total) * 100).toFixed(1);

console.log("Total tests:", total);
console.log("Passed:", passed);
console.log("Success rate:", successRate + "%");

// 2.:

console.log("\n=== FAILURES ===");
console.log(findFailedTests(names, results));

// 3.:

console.log("\n=== FORMATTED TIMES ===");
const formattedTimes = times.map((t) => formatExecutionTime(t));
console.log(formattedTimes);

// 4.:

console.log("\n=== EMAIL VALIDATION (SAMPLE) ===");
console.log("user@example.com ->", isValidEmail("user@example.com"));
console.log("invalidemail ->", isValidEmail("invalidemail"));
console.log(" ->", isValidEmail(""));

// 5.

console.log("\n=== FORMATTED RESULTS ===");
for (let i = 0; i < names.length; i++) {
  console.log(formatTestResultArrow(names[i], results[i]));
}
