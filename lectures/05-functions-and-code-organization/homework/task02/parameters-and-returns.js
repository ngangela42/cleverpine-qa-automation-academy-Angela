// 1.:
function isValidEmail(email) {
  const hasAtSymbol = email.includes("@");
  const hasDotSymbol = email.includes(".");
  const isNotEmpty = email.length > 0;
  return hasAtSymbol && hasDotSymbol && isNotEmpty;
}

// 2.:
function formatDuration(milliseconds) {
  if (milliseconds < 1000) {
    return milliseconds + "ms";
  } else {
    const seconds = milliseconds;
    return seconds.toFixed(1) + "s";
  }
}

//3/:

function generateTestEmail(baseName, domain) {
  if (!domain) {
    domain = "testcompany.com";
  }
  return baseName + "@" + domain;
}

console.log("Valid email:", isValidEmail("user@example.com"));
console.log("Invalid email:", isValidEmail("userexamplecom"));
console.log("Empty email:", isValidEmail(""));

console.log("Duration 450ms:", formatDuration(450));
console.log("Duration 1789ms:", formatDuration(1789));

console.log("With custom domain:", generateTestEmail("maria", "mail.com"));
console.log("With default domain:", generateTestEmail("ivan"));
