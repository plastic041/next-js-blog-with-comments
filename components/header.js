import Link from "next/link";

export default function Header() {
  return (
    <header className="terminal-nav">
      <div className="terminal-logo">
        <div className="logo terminal-prompt">
          <Link href="/">
            <a>스넙</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
