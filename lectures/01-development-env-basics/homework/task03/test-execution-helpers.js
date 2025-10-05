// Create Test Execution Helpers

// Start Test Suite
function startTestSuite(suiteName) {
  console.log(`Starting the test suite: ${suiteName}`);
  const startTime = "new Date().toISOString()";
  console.log(`Start time: ${startTime}`);
  return startTime;
}
// End Test Suite
function endTestSuite(suiteName, startTime) {
  const endTime = new Date().toDateString();
  const durationSec = new Date(endtTime) - new Date(startTime);

  console.log(`Test suite: ${suiteName}`);
  console.log(`End time: ${endTime}`);
  console.log(`Duration: ${durationSec}`);

  return durationSec;
}

// Log Test Step
function logTestStep(stepNumber, description, status){
    const timestamp = new Date().toDateString();

    if (status === "pass") {
        `[${timestamp}] Step ${stepNumber}: ${description} — PASSED`;

        else if (status == "fail") {
            console.error(`[${timestamp}] Step ${stepNumber}: ${description} — FAILED`);

            else{
                console.warn(`[${timestamp}] Step ${stepNumber}: ${description} — STATUS: ${status}`);

                
            }
        }
    }
}

//Generate Test Report
function generateTestReport(testResults) {
const {passed, failed, skipped} = testResults;
const total = passed + failed + skipped;
const passPercentage = ((passed / total) * 100);

console.log ("Test result");
console.log(`Total tests: ${total}`);
console.log(`Passed tests: ${passed}`);
console.log(`Failed tests: ${failed}`);
console.log (`Skipped testw: ${skipped}`);
console.log(`Pass rate %: ${passPercentage}`);

return {total, passed, failed, skipped, passPercentage};

}

//Create Debugging Utilities
function debugVariable(variableName, variableValue) {
 console.log (`Variable name: ${variableName}`);
 console.log(`Variable value: ${variableValue}`); 
 console.log (`Variable type: ${typeof variableValue}`);
}


function compareExpectedActual (ExpectedVsActual){
    const isEqual = expected === actual;
    console.log(`Actual result:${actualResult}`);
    console.log(`Expected result: ${expectedResult}`);
    console.log(`Expected vs Actual result`);
    console.log(`Results match: ${true}: ${false}`);
    return isEqual;
    
}
function logSystemInfo() {
  const info = {
    timestamp: Date.now(),
    platform: process.platform,
    version: process.version,
    cwd: process.cwd()
  };

  console.log('System Information:');
  console.log(info);
  console.log();

  return info;
}

