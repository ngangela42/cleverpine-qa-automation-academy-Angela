import { test, expect } from "@playwright/test";

test("post has required top-level fields", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const post = await response.json();

  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("id");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");
});

test("post field types are correct", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const post = await response.json();

  expect(typeof post.userId).toBe("number");
  expect(typeof post.id).toBe("number");
  expect(typeof post.title).toBe("string");
  expect(typeof post.body).toBe("string");
});

test("post strings are non-empty", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const post = await response.json();

  expect(post.title.length).toBeGreaterThan(0);
  expect(post.body.length).toBeGreaterThan(0);
});
