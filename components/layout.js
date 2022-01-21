import Header from "./header";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <div className="container hack">
        <Header />
        <main>{children}</main>
      </div>
      <Meta />
    </>
  );
}
