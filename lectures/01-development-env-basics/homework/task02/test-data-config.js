// Step 1.1: Create Your QA Automation Project Structure

// Constants
const BASE_URL = "https://demo-qa-site.com";
const DEFAULT_TIMEOUT = 30000;

// Example API endpoints (placeholder URLs)
const API_ENDPOINTS = {
  login: `${BASE_URL}/api/login`,
  users: `${BASE_URL}/api/users`,
  products: `${BASE_URL}/api/products`,
};

// Variables for common test data
let testUserEmail = "test.user@example.com";
let testUserPassword = "StrongPass123!";
let adminUserEmail = "admin.user@example.com";
let expectedWelcomeMessage = "Welcome to your dashboard";

// Boolean Flags
let debugMode = true;
let runSlowTests = false;
let useTestData = true;

// Step 2.2: Build Data Validation Functions
//1.
function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    console.log(`Email valid: "${email}"`);
    return true;
  } else {
    console.log(`Email valid: "${email}"`);
    return false;
  }
}

//2.
function validatePassword(password) {
  if (password.length >= 8) {
    console.log(`Password "${password}" meets requirements.`);
    return true;
  } else {
    console.log(`Password "${password}" is too short.`);
    return false;
  }
}

//3.
function generateUniqueEmail(testUser) {
  const timestamp = Date.now();
  const uniqueEmail = `${testUser}, ${timestamp}, @testmail.com`;
  console.log(`Generated unique email: ${uniqueEmail}`);
  return uniqueEmail;
}

//4.
function logTestConfiguration(testConfig) {
  console.log(`BASE_URL: ${BASE_URL}`);
  console.log(`DEFAULT_TIMEOUT: ${DEFAULT_TIMEOUT}`);
  console.log(`API_ENDPOINTS: ${API_ENDPOINTS}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Test user: ${testUser}`);
  console.log(`Generated unique email: ${uniqueEmail}`);
  console.log(`time stamp:`, Date.now());
}
