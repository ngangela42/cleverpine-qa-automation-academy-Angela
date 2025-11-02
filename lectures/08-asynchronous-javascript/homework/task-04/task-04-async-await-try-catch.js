//1.:

const simulateApiCall = require("../task-02/task-02-then-catch.js");

async function runSafeOperation(name, shouldFail) {
  try {
    const result = await simulateApiCall(name, shouldFail);

    console.log("Succes: ", result);

    return { ok: true, name: name };
  } catch (error) {
    console.log("Error:", error.message);

    return { ok: false, name: name };
  }
}

runSafeOperation("profile", false).then(function (result) {
  console.log("Returned object - fail: ", result);
});

module.exports = runSafeOperation;
