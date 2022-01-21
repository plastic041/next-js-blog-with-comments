import Header from "./header";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <div className="container terminal">
        <Header />
        <main>{children}</main>
      </div>
      <Meta />
    </>
  );
}
