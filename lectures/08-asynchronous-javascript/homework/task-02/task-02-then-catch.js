//1.:
function simulateApiCall(name, shouldFail) {
  return new Promise(function (resolve, reject) {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(function () {
      if (shouldFail) {
        reject(new Error("Request failed: " + name));
      } else {
        resolve({ name: name, status: "OK" });
      }
    }, delay);
  });
}

//2.:
simulateApiCall("login", false)
  .then(function (result) {
    console.log("Success:", result);
  })
  .catch(function (error) {
    console.log("Error:", error.message);
  });

//3.:
simulateApiCall("broken", true)
  .then(function (result) {
    console.log("Unexpected ", result);
  })
  .catch(function (error) {
    console.log("Caught error: ", error.message);
  });

//4.:
simulateApiCall("data-process", false)
  .then(function (result) {
    result.processed = true;
    return result;
  })
  .then(function (transformed) {
    console.log("Transformed result", transformed);
  })
  .catch(function (error) {
    console.log("Error message: ", error.message);
  });

module.exports = simulateApiCall;
