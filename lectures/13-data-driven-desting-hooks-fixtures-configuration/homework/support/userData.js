export const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "manager", password: "manager123" },
  { username: "developer", password: "dev123" },
];

export const invalidUsers = [
  { username: "admin", password: "", description: "empty password" },
  { username: "", password: "123", description: "empty username" },
  { username: "", password: "", description: "empty username and password" },
  { username: "wrong", password: "wrong", description: "invalid credentials" },
];
