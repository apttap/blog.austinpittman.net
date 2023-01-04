import { ComponentChildren } from "preact";
import { Link } from "./Link";
import logo from "./logo.svg";
import { PageContext } from "@local-types/page";
import { PageContextProvider } from "./usePageContext";
import style from "@style/page/PageShell.module.scss";

export { PageShell };

const PageShell = function ({
  children,
  pageContext,
}: {
  children: ComponentChildren;
  pageContext: PageContext;
}) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>
        <div className={style.layout}>
          <h1>Austin Pittman</h1>
          <h2>User Interface Engineer</h2>
          <nav className={style.pageNav}>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/about">Projects</Link>
              </li>
              <li>
                <Link href="/about">Contact Me</Link>
              </li>
            </ul>
          </nav>
          <Content>{children}</Content>
        </div>
      </Layout>
    </PageContextProvider>
  );
};

const Layout = function ({ children }: { children: ComponentChildren }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

const Sidebar = function ({ children }: { children: ComponentChildren }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
};

const Content = function ({ children }: { children: ComponentChildren }) {
  return <div id="page-content" className={style.content}>{children}</div>;
};
