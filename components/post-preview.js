import Date from "../components/date";
import Link from "next/link";
export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <nav className="post-listitem">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>{title}</a>
      </Link>
      <Date dateString={date} />
    </nav>
  );
}
