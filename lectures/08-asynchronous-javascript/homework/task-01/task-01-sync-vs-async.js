// Add a function logSynchronousFlow() that logs three messages in order (e.g., "Start", "Middle", "End"). Run it to see the immediate order.
// Add a function delayedLog(message, delayMs) that uses setTimeout(function() { /* log message */ }, delayMs) to log a message after the specified delay.
// Demonstrate ordering:
// Log "Before delay".
// Call delayedLog("After 1000ms", 1000).
// Log "After scheduling delay".
// Observe the order in the console.
// Add a function delay(ms) that returns a Promise using new Promise(function(resolve, reject) { setTimeout(function() { resolve(/* any simple value, e.g., true */); }, ms); });.
// Export both helpers (or plan to copy-paste later): delayedLog and delay for reuse in later tasks.

//1.:
function logSynchronousFlow() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}
console.log("**Synchronous flow**");
logSynchronousFlow();

//2.:
function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}

console.log("\n ***Asynchronous flow***");
console.log("Before delay");

delayedLog("After 1000ms", 1000);
console.log("After scheduling delay");

//3.:
function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
    }, ms);
  });
}

console.log("\n ****Delay promise demo****");

delay(2000).then(function (result) {
  console.log("Promise resolved after 2000ms", result);
});

//4.:
module.exports = {
  delayedLog,
  delay,
};
