function buildVisualStatuses(results) {
  return results.map((result) => {
    if (result === "PASS") return "PASSED";
    if (result === "FAIL") return "FAILED";
    return "SKIPPED";
  });
}

function formatExecutionTimes(times) {
  return times.map((time) => `${time}ms`);
}

function generateTestEmails(ids) {
  return ids.map((id) => `testuser${id}@example.com`);
}

function ratePerformance(times) {
  return times.map((t) => {
    if (t < 300) return "Fast";
    if (t < 1000) return "Normal";
    return "Slow";
  });
}

// Demo
console.log("Statuses:", buildVisualStatuses(["PASS", "FAIL", "SKIP"]));
console.log("Times:", formatExecutionTimes([150, 980, 2000]));
console.log("Emails:", generateTestEmails([1, 2, 3]));
console.log("Performance:", ratePerformance([150, 800, 1500]));
