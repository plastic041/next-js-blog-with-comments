import Date from "../components/date";
import Link from "next/link";
export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  );
}
