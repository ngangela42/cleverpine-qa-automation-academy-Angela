function validateRequired(value, fieldName) {
  if (!value) {
    throw new Error(fieldName + " is required");
  }
  return true;
}

function validateArray(data, fieldName) {
  if (!Array.isArray(data)) {
    throw new TypeError(fieldName + " must be an array");
  }
  return true;
}

function validateRange(value, min, max, fieldName) {
  if (value < min || value > max) {
    throw new RangeError(fieldName + " must be between " + min + " and " + max);
  }
  return true;
}

function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".") || email.length < 5) {
    throw new Error("Invalid email format");
  }
  return true;
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Password doesn't meet minimum requirements");
  }

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let hasNumber = false;

  for (let i = 0; i < digits.length; i++) {
    if (password.includes(digits[i])) {
      hasNumber = true;
      break;
    }
  }

  if (!hasNumber) {
    throw new Error("Password doesn't meet minimum requirements");
  }

  return true;
}

function validateTestResults(results) {
  validateArray(results, "Test results");

  for (let i = 0; i < results.length; i++) {
    const item = results[i];
    if (
      typeof item !== "object" ||
      !item.status ||
      (item.status !== "PASS" &&
        item.status !== "FAIL" &&
        item.status !== "SKIP") ||
      typeof item.duration !== "number" ||
      item.duration < 0
    ) {
      throw new Error("Invalid test result at index " + i);
    }
  }

  return true;
}

try {
  validateRequired("", "Username");
} catch (err) {
  console.log(err.name, ":", err.message);
}

try {
  validateArray("abc", "Data");
} catch (err) {
  console.log(err.name, ":", err.message);
}

try {
  validateRange(15, 1, 10, "Score");
} catch (err) {
  console.log(err.name, ":", err.message);
}

try {
  validateEmail("invalidemail");
} catch (err) {
  console.log(err.name, ":", err.message);
}

try {
  validatePassword("abcdefg");
} catch (err) {
  console.log(err.name, ":", err.message);
}

try {
  validateTestResults([
    { status: "PASS", duration: 100 },
    { status: "INVALID", duration: -5 },
  ]);
} catch (err) {
  console.log(err.name, ":", err.message);
}
