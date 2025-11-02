// 1.:
const simulateApiCall = require("../task-02/task-02-then-catch.js"); // с import и копиране не успях да разбера как работи и оставих require,за да добави частта от зад2.

async function runSingleOperation(name, shouldFail) {
  console.log("Starting operation:", name);

  const result = await simulateApiCall(name, shouldFail);

  console.log("Result:", result);

  return result;
}

runSingleOperation("fetch-user", false).then(function (finalResult) {
  console.log("Final returned value:", finalResult);
});

runSingleOperation("broken-call", true);

module.exports = runSingleOperation;
