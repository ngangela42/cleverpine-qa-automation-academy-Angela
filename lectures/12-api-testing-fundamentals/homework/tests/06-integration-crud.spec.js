import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI.js";

test("complete CRUD workflow", async ({ request }) => {
  const api = new PostsAPI(request);

  const newPost = {
    title: "Test post",
    body: "This post is created for the final task",
    userId: 1,
  };

  const { status: createStatus, data: created } = await api.createPost(newPost);

  console.log("Created post:", created);
  expect(createStatus).toBe(201);
  expect(created).toHaveProperty("id");
  expect(created.title).toBe(newPost.title);
  expect(created.body).toBe(newPost.body);

  const postId = 1;

  const { status: getStatus, data: fetched } = await api.getPostById(postId);

  console.log("Fetched post:", fetched);
  expect(getStatus).toBe(200);
  expect(fetched).toHaveProperty("id", 1);
  expect(fetched).toHaveProperty("title");
  expect(fetched).toHaveProperty("body");

  const updatedPost = {
    title: "Updated test post",
    body: "This post has been updated successfully.",
    userId: 1,
  };

  const { status: updateStatus, data: updated } = await api.updatePost(
    postId,
    updatedPost
  );

  console.log("Updated post:", updated);
  expect(updateStatus).toBe(200);
  expect(updated.title).toBe(updatedPost.title);
  expect(updated.body).toBe(updatedPost.body);

  const { status: deleteStatus, data: deleted } = await api.deletePost(postId);

  console.log("Deleted post:", deleted);
  expect(deleteStatus).toBe(200);

  console.log("CRUD workflow completed successfully!");
});
