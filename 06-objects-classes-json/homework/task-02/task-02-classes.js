class TestUser {
  constructor(username, email, password, role = "user", active = true) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.аctive = active;
  }

  isValidEmail() {
    return this.email.includes("@") && this.email.length > 5;
  }

  isValidPassword() {
    return this.password.length >= 8;
  }

  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }

  getInfo() {
    return `User: ${this.username}, Role: ${this.role}, Active: ${this.аctive}`;
  }
}

class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
  }

  start() {
    this.status = "RUNNING";
  }

  complete(status, durationMs) {
    this.status = status;
    this.duration = durationMs;
  }

  getSummary() {
    return (
      "TestCase: " +
      this.name +
      ", Status: " +
      this.status +
      ", Duration: " +
      this.duration +
      "ms"
    );
  }
}

let user1 = new TestUser("testuser1", "user1@test.com", "password1234");
let user2 = new TestUser("testuser2", "user2@test.com", "short");

console.log(user1.getInfo());
console.log("User1 valid:", user1.validate());
console.log(user2.getInfo());
console.log("User2 valid:", user2.validate());

let testcase1 = new TestCase("Login test", "Checks user login functionality");
testcase1.start();
testcase1.complete("PASS", 1500);
console.log(testcase1.getSummary());
