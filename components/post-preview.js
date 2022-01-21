import Date from "../components/date";
import Link from "next/link";
export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <nav>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>{title}</a>
      </Link>
      <div>
        <Date dateString={date} />
      </div>
    </nav>
  );
}
