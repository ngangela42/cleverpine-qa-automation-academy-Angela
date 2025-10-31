// 1.:

function formatTestResultDecl(testName, status) {
  const icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + " - " + status;
}

let formatTestResultExpr = function (testName, status) {
  const icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + " - " + status;
};

let formatTestResultArrow = (testName, status) => {
  const icon = status === "PASS" ? "✅" : "❌";
  return icon + " " + testName + " - " + status;
};

// 2.:

function calculateAverageDecl(numbers) {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
}

let calculateAverageExpr = function (numbers) {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
};

let calculateAverageArrow = (numbers) => {
  const sum = numbers.reduce((total, n) => total + n, 0);
  return sum / numbers.length;
};

console.log("=== formatTestResult variants ===");
console.log(formatTestResultDecl("Login", "PASS"));
console.log(formatTestResultExpr("Signup", "FAIL"));
console.log(formatTestResultArrow("Profile", "PASS"));

console.log("\n=== calculateAverage variants ===");
const times = [10, 20, 30];
console.log("Declaration average:", calculateAverageDecl(times));
console.log("Expression average:", calculateAverageExpr(times));
console.log("Arrow average:", calculateAverageArrow(times));
