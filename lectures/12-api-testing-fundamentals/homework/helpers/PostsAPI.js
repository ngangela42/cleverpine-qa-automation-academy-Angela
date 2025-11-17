export class PostsAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  async getAllPosts() {
    const response = await this.request.get(`${this.baseUrl}/posts`);
    const data = await response.json();
    return { status: response.status(), data };
  }

  async getPostById(postId) {
    const response = await this.request.get(`${this.baseUrl}/posts/${postId}`);
    const data = await response.json();
    return { status: response.status(), data };
  }

  async getPostsByUser(userId) {
    const response = await this.request.get(
      `${this.baseUrl}/posts?userId=${userId}`
    );
    const data = await response.json();
    return { status: response.status(), data };
  }

  async createPost(postData) {
    const response = await this.request.post(`${this.baseUrl}/posts`, {
      data: postData,
    });
    const data = await response.json();
    return { status: response.status(), data };
  }

  async updatePost(postId, postData) {
    const response = await this.request.put(`${this.baseUrl}/posts/${postId}`, {
      data: postData,
    });
    const data = await response.json();
    return { status: response.status(), data };
  }

  async deletePost(postId) {
    const response = await this.request.delete(
      `${this.baseUrl}/posts/${postId}`
    );
    const data = await response.json();
    return { status: response.status(), data };
  }

  async searchPostsByTitle(keyword) {
    const { data } = await this.getAllPosts();
    const lower = keyword.toLowerCase();
    const filtered = data.filter((post) =>
      post.title.toLowerCase().includes(lower)
    );
    return filtered;
  }
}
