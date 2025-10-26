let userProfile = {
  username: "mimi.ivanova",
  email: "mimi.ivaonva@gmail.com",
  role: "user",
  active: true,
};

userProfile.role = "QA";

userProfile.retryCount = 2;

delete userProfile["active"];

let caseList = [
  { name: "login_test", status: "PASS", duration: 120 },
  { name: "logout_test", status: "FAIL", duration: 400 },
  { name: "register_test", status: "PASS", duration: 250 },
  { name: "profile_test", status: "SKIP", duration: 50 },
];

let failedTests = caseList.filter((c) => c.status === "FAIL");
let caseNames = caseList.map((c) => c.name);
let totalDuration = caseList.reduce((sum, c) => sum + c.duration, 0);

function toJson(value) {
  return JSON.stringify(value);
}

function fromJson(jsonString) {
  return JSON.parse(jsonString);
}

console.log("Before:", typeof userProfile);
let userJson = toJson(userProfile);
console.log("After stringify:", typeof userJson);
console.log("JSON text:", userJson);

let parsedUser = fromJson(userJson);
console.log("After parse:", typeof parsedUser);
console.log("Parsed user email:", parsedUser.email);
console.log("Parsed user role:", parsedUser["role"]);

console.log("\nBefore:", typeof caseList);
let casesJson = toJson(caseList);
console.log("After stringify:", typeof casesJson);
console.log("JSON text:", casesJson);

let parsedCases = fromJson(casesJson);
console.log("Parsed type:", typeof parsedCases);
console.log("Parsed array length:", parsedCases.length);
console.log("First test name:", parsedCases[0].name);

let avgDuration = (totalDuration / caseList.length).toFixed(1);
console.log(`Average duration: ${avgDuration}ms`);

console.log("Case names include 'login':", caseNames.includes("login_test"));
