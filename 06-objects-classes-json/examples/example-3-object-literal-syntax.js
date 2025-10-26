let testCase = {
    name: "longin_functionality",
    status: "PASS", 
    executionTime: 1250, 
    environment: "staging",
};

let emptyTestResult = {};
console.log("Empty test result:", emptyTestResult);

let testSuite = {
    name: "User Authentication tests", 
    testCount: 5, 
    passed: ["login, logout, password_reset"],
    failed: ["registration"], 
    isComplete: true,

};

console.log("Test suite", testSuite);