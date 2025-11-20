import { Link } from "react-router-dom";

function BlogPostsPage() {
  const posts = [
    { id: 1, title: "My First Blog Post", author: "Henny & Dw" },
    { id: 2, title: "Second Blog Post", author: "Henny & Dw" },
  ];

  return (
    <div className="posts-page">
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className="blogs"key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link> by {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostsPage;
