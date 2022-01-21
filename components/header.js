import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a className="home">스넙</a>
      </Link>
    </header>
  );
}
