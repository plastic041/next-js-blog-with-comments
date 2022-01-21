import { format, isValid, parseISO } from "date-fns";

export default function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return "No date";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
}
