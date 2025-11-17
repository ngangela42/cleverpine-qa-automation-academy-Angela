import { test, expect } from "@playwright/test";

test("filter posts by userId", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  expect(response.status()).toBe(200);

  const posts = await response.json();
  console.log(`Received ${posts.length} posts for userId=1`);
  posts.forEach((post) => {
    expect(post.userId).toBe(1);
  });
});

test("limit results", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  expect(response.status()).toBe(200);

  const posts = await response.json();
  console.log(`Requested 5 posts, received ${posts.length}`);
  expect(posts.length).toBe(5);
});

test("find a specific post in the collection", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  expect(response.status()).toBe(200);

  const posts = await response.json();
  const specificPost = posts.find((p) => p.id === 1);

  expect(specificPost).toBeTruthy();
  expect(specificPost).toHaveProperty("userId");
  expect(specificPost).toHaveProperty("id");
  expect(specificPost).toHaveProperty("title");
  expect(specificPost).toHaveProperty("body");

  console.log("Found post with ID 1:", specificPost);
});

test("extract and check titles with map", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  expect(response.status()).toBe(200);

  const posts = await response.json();
  const titles = posts.map((p) => p.title);

  console.log(`Extracted titles: ${titles.length}`);
  expect(titles.length).toBe(100);

  const hasSunt = titles.some((t) => t.includes("sunt"));
  expect(hasSunt).toBeTruthy();
});
