import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <aside>
      <nav className="flexbox">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </nav>
    </aside>
  );
}
