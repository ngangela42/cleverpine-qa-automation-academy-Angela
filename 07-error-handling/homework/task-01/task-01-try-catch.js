function safeParse(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return { ok: true, data: parsed };
  } catch (error) {
    console.log("JSON parse failed:", error.message);
    return { ok: false, error: error.message };
  }
}

function safeGetEmail(user) {
  try {
    if (!user || typeof user.email !== "string") {
      throw new Error("Invalid or missing email property");
    }
    return user.email;
  } catch (error) {
    console.log("safeGetEmail error:", error.message);
    return "<no-email>";
  }
}

function safePush(resultsArray, value) {
  try {
    if (!Array.isArray(resultsArray)) {
      throw new TypeError("resultsArray is not a valid array");
    }
    resultsArray.push(value);
    return true;
  } catch (error) {
    console.log("safePush error:", error.message);
    return false;
  }
}
function safeSuccessRate(passed, total) {
  try {
    if (typeof passed !== "number" || typeof total !== "number") {
      throw new TypeError("Inputs must be numbers");
    }
    if (total === 0) {
      return "0.00%";
    }
    const rate = (passed / total) * 100;
    return rate.toFixed(2) + "%";
  } catch (error) {
    console.log("safeSuccessRate error:", error.message);
    return "N/A";
  }
}

console.log("safeParse tests:");
console.log(safeParse('{"name":"Mimi'));
console.log(safeParse("invalid json"));

console.log("safeGetEmail tests:");
console.log(safeGetEmail({ email: "example@test.com" }));
console.log(safeGetEmail(null));

console.log("safePush tests:");
const arr = [];
console.log(safePush(arr, "result 1"));
console.log(arr);
console.log(safePush(undefined, "error"));

console.log("safeSuccessRate tests:");
console.log(safeSuccessRate(8, 10));
console.log(safeSuccessRate(0, 0));
console.log(safeSuccessRate("a", 5));
