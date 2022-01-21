import Date from "../components/date";
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <h1>{title}</h1>
      <Date dateString={date} />
    </>
  );
}
