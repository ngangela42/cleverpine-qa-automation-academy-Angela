//1.:
const { delayedLog, delay } = require("../task-01/task-01-sync-vs-async.js");
const simulateApiCall = require("../task-02/task-02-then-catch.js");
const runSafeOperation = require("../task-04/task-04-async-await-try-catch.js");

//2.:
async function run() {
  console.log("Preparing test data...");

  delayedLog("Preparation step A done", 500);
  await delay(700);

  console.log("Preparation complete!");

  const operations = ["login", "fetch-profile", "get-report", "upload", "broken-item"];
  const results = [];
  let passed = 0;
  let failed = 0;

  //3.:
  for (let name of operations) {
    const shouldFail = name.includes("broken") || name.includes("report");

    const result = await runSafeOperation(name, shouldFail);
    results.push(result);

    if (result.ok) {
      passed++;
    } else {
      failed++;
    }
  }

  const summary = {
    total: operations.length,
    passed: passed,
    failed: failed,
  };

  console.log("All operations complete!");
  console.log("Summary:", summary);
}

run();
