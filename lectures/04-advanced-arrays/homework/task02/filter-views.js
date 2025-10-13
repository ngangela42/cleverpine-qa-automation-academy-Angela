function getFailedResults(results) {
  return results.filter((r) => r === "FAIL");
}

function getHighPriorityTests(tests) {
  return tests.filter(([name, status, time, priority]) => priority === "HIGH");
}

function getSlowTests(tests) {
  return tests.filter(([name, status, time]) => time > 1000);
}

function findTestsByKeyword(names, keyword) {
  return names.filter((n) => n.toLowerCase().includes(keyword.toLowerCase()));
}

const testData = [
  ["login", "PASS", 200, "LOW"],
  ["checkout", "FAIL", 1500, "HIGH"],
  ["search", "SKIP", 800, "MEDIUM"],
  ["payment", "FAIL", 1200, "HIGH"],
];

console.log("Failed:", getFailedResults(["PASS", "FAIL", "FAIL", "SKIP"]));
console.log("High priority:", getHighPriorityTests(testData));
console.log("Slow:", getSlowTests(testData));
console.log(
  "By keyword:",
  findTestsByKeyword(["login_test", "payment_test"], "pay")
);
