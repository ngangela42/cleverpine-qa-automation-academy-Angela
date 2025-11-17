import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI.js";

test("Create → Get → Update → Delete post flow + search demo", async ({
  request,
}) => {
  const api = new PostsAPI(request);

  const newPost = {
    title: "My first API post",
    body: "This is created from Playwright test.",
    userId: 1,
  };

  const { status: createStatus, data: created } = await api.createPost(newPost);

  console.log("Created post:", created);
  expect(createStatus).toBe(201);
  expect(created).toHaveProperty("id");
  expect(created.title).toBe(newPost.title);

  const createdId = created.id;

  const { status: getStatus, data: fetched } = await api.getPostById(createdId);

  console.log("Fetched post:", fetched);
  expect(getStatus).toBe(200);
  expect(fetched.id).toBe(createdId);
  expect(fetched.title).toBe(newPost.title);

  const updatedPost = {
    title: "Updated API post title",
    body: "Updated body text for Playwright demo.",
    userId: 1,
  };

  const { status: updateStatus, data: updated } = await api.updatePost(
    createdId,
    updatedPost
  );

  console.log("Updated post:", updated);
  expect(updateStatus).toBe(200);
  expect(updated.title).toBe(updatedPost.title);
  expect(updated.body).toBe(updatedPost.body);

  const { status: deleteStatus, data: deleted } =
    await api.deletePost(createdId);

  console.log("Deleted post:", deleted);
  expect(deleteStatus).toBe(200);

  const results = await api.searchPostsByTitle("sunt");
  console.log(`Found ${results.length} posts containing "sunt"`);

  expect(Array.isArray(results)).toBeTruthy();
  expect(results.length).toBeGreaterThan(0);
  expect(results[0]).toHaveProperty("title");
});
