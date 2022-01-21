import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <nav>
      <ul className="post-list">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </ul>
    </nav>
  );
}
