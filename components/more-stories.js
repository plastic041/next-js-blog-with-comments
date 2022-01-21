import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <aside>
      <nav className="post-list">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </nav>
    </aside>
  );
}
