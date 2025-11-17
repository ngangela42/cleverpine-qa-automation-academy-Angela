import { test, expect } from "@playwright/test";

test("fetch a single post – basics", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const post = await response.json();

  expect(post.id).toBe(1);
  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");
});

test("fetch all posts – basics", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  expect(response.status()).toBe(200);

  const posts = await response.json();

  expect(Array.isArray(posts)).toBeTruthy();
  expect(posts.length).toBeGreaterThan(0);
});
