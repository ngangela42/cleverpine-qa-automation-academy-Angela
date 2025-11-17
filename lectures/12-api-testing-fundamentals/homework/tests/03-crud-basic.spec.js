// lectures/12-api-testing-fundamentals/homework/tests/03-crud-basic.spec.js
import { test, expect } from "@playwright/test";

test("create post with POST", async ({ request }) => {
  const payload = {
    title: "qui est esse",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad",
    userId: 1,
  };

  console.log("Creating new post:", JSON.stringify(payload, null, 2));

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    { data: payload }
  );

  expect(response.status()).toBe(201);
  const responseBody = await response.json();

  expect(responseBody.title).toBe(payload.title);
  expect(responseBody.body).toBe(payload.body);
  expect(responseBody.userId).toBe(payload.userId);
  expect(responseBody).toHaveProperty("id");

  console.log(`Created post ID: ${responseBody.id}`);
});

test("update post with PUT", async ({ request }) => {
  const updatedPost = {
    title: "Updated title",
    body: "Updated body",
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    { data: updatedPost }
  );

  expect(response.status()).toBe(200);
  const result = await response.json();

  expect(result.title).toBe(updatedPost.title);
  expect(result.body).toBe(updatedPost.body);

  console.log("Post updated successfully!");
});

test("delete post with DELETE", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);
  const result = await response.json();

  console.log("Deleted response:", result);
  console.log("Post deleted successfully!");
});
