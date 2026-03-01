import { test, expect } from "@playwright/test";

const API_BASE = "https://jsonplaceholder.typicode.com";

let createdPostId;

test.beforeEach(async ({ request }) => {
  const response = await request.post(`${API_BASE}/posts`, {
    data: {
      title: "Test",
      body: "Hello",
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const json = await response.json();
  createdPostId = json.id;
});

test.afterEach(async ({ request }) => {
  const del = await request.delete(`${API_BASE}/posts/${createdPostId}`);

  expect(del.status()).toBe(200);
});

test("Create comment", async ({ request }) => {
  const response = await request.post(`${API_BASE}/comments`, {
    data: {
      postId: createdPostId,
      title: "TestUser",
      body: "This is a comment",
    },
  });

  expect(response.status()).toBe(201);

  const json = await response.json();
  expect(json.postId).toBe(createdPostId);
});

test("Update existing post title", async ({ request }) => {
  const response = await request.put(`${API_BASE}/posts/1`, {
    data: {
      id: 1,
      title: `Updated with ${createdPostId}`,
      body: "dummy",
      userId: 1,
    },
  });

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data.title).toContain(String(createdPostId));
});
