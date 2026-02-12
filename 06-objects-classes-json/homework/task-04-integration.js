let testUser1 = {
  username: "Mimi.Ivanova",
  email: "mimi.ivanova@gmail.com",
  password: "obichamdaqm1!",
  role: "expert",
  active: true,
};

let testUser2 = {
  username: "Nina.Ivanova",
  email: "nina.ivanova@gmail.com",
  password: "obichamdaqm123!",
  role: "senior expert",
  active: true,
};

let testCases = [
  { name: "login_test", status: "PASS", duration: 200, priority: "high" },
  { name: "logout_test", status: "FAIL", duration: 580, priority: "medium" },
  { name: "register_test", status: "PASS", duration: 1200, priority: "high" },
  { name: "profile_test", status: "SKIP", duration: 800, priority: "low" },
  {
    name: "shoppingCart_test",
    status: "PASS",
    duration: 200,
    priority: "high",
  },
];

testCases[1].status = "PASS";
testCases[3].duration = 1000;

function getFailedTests(cases) {
  return cases.filter((test) => test.status === "FAIL");
}

function getHighPriorityNames(cases) {
  return cases
    .filter((test) => test.priority === "high")
    .map((test) => test.name);
}

function getTotalDuration(cases) {
  return cases.reduce((sum, test) => sum + test.duration, 0);
}

class TestUser {
  constructor(username, email, password, role = "user", active = true) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }

  isValidEmail() {
    return this.email.includes("@");
  }

  isValidPassword() {
    return this.password.length >= 8;
  }

  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }

  getInfo() {
    return (
      "User: " +
      this.username +
      ", Role: " +
      this.role +
      ", Active: " +
      this.active
    );
  }
}

class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
  }

  start() {
    this.status = "RUNNING";
  }

  finishPass() {
    this.status = "PASS";
    this.duration = 1000;
  }

  finishFail() {
    this.status = "FAIL";
    this.duration = 1500;
  }

  getSummary() {
    return (
      "TestCase: " +
      this.name +
      ", Status: " +
      this.status +
      ", Duration: " +
      this.duration +
      "ms"
    );
  }
}

function toJson(value) {
  return JSON.stringify(value);
}

function fromJson(jsonString) {
  return JSON.parse(jsonString);
}

let totalCases = testCases.length;
let totalDuration = getTotalDuration(testCases);
let failedTests = getFailedTests(testCases);
let failedCount = failedTests.length;
let highPriorityNames = getHighPriorityNames(testCases);

console.log("=== BASIC METRICS ===");
console.log("Total cases:", totalCases);
console.log("Total duration (ms):", totalDuration);
console.log("Number of FAILs:", failedCount);

console.log("\n=== PRIORITY HIGHLIGHTS ===");
console.log("High priority test names:", highPriorityNames);

console.log("\n=== USER VALIDATION ===");
let user1 = new TestUser(
  "Mimi.Ivanova",
  "mimi.ivanova@gmail.com",
  "obichamdaqm1!"
);
let user2 = new TestUser(
  "Nina.Ivanova",
  "nina.ivanova@gmail.com",
  "obichamdaqm123!"
);
let users = [user1, user2];
for (let i = 0; i < users.length; i++) {
  console.log(users[i].getInfo(), "| Valid:", users[i].validate());
}

console.log("\n=== JSON SUMMARY ===");
let report = {
  suiteName: "Test Suite",
  environment: "staging",
  totalCases: totalCases,
  failedCount: failedCount,
  highPriorityNames: highPriorityNames,
};

let jsonReport = toJson(report);
console.log("JSON string:", jsonReport);

let parsedReport = fromJson(jsonReport);
console.log("Parsed field (suiteName):", parsedReport.suiteName);
