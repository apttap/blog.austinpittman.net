import { ComponentChildren } from "preact";
import { Link } from "./Link";
import logo from "./logo.svg";
import { PageContext } from "@local-types/page";
import { PageContextProvider } from "./usePageContext";
import style from "@style/page/PageShell.module.scss";
import { urlToFile } from "vite-plugin-ssr/dist/cjs/utils/urlToFile";

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
          <svg viewBox={"0 0 115 30"}>
            <defs>
              <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop
                  offset="0%"
                  style="stop-color:rgb(26,26,26);stop-opacity:1.00"
                />
                <stop
                  offset="100%"
                  style="stop-color:rgb(193,193,193);stop-opacity:1.00"
                />
              </linearGradient>
            </defs>
            <text fill="#999" className={style.heading} x={0} y={14}>
              Austin Pittman
            </text>
            <text fill="deeppink" className={style.subheading} x={0} y={23}>
              User Interface Engineer
            </text>
          </svg>
          <h2></h2>
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
        width: "100%",
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
  return (
    <div id="page-content" className={style.content}>
      {children}
    </div>
  );
};
