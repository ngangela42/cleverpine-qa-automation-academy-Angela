import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  testUser: async ({}, use) => {
    const user = {
      username: "testuser",
      password: "password123",
      email: "testuser@example.com",
      age: 30,
    };

    console.log("Setting up testUser fixture");
    await use(user);
    console.log("Cleaning up testUser fixture");
  },
});

export { expect };
