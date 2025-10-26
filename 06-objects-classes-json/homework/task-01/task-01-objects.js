//Task1. 1:
let testConfig = {
  suiteName: "New basic test",
  environment: "staging",
  maxTimeoutMs: 3000,
};

testConfig.retryCount = 3;

console.log("Test configuration: ", testConfig);

let testUser1 = {
  username: "Mimi.Ivanova",
  email: "mimi.ivanova@gmail.com",
  password: "obichamdaqm1!",
  role: "user",
  active: true,
};

let testUser2 = {
  username: "Pesho.Ivanov",
  email: "pesho.ivanov@gmail.com",
  password: "obichamdaqm2!",
  role: "admin",
  active: true,
};

let testUser3 = {
  username: "Nina.Ivanova",
  email: "nina.ivanova@gmail.com",
  password: "obichamdaqm123!",
  role: "user",
  active: true,
};

console.log("Role of user2:", testUser2["role"]);

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

console.log("Failed tests:", getFailedTests(testCases));
console.log("High priority test names:", getHighPriorityNames(testCases));
console.log("Total duration:", getTotalDuration(testCases) + "ms");
