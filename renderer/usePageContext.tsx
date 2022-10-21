import { createContext, ComponentChildren } from "preact";
import { PageContext } from "@local-types/page";
import { useContext } from "preact/hooks";

export { PageContextProvider };
export { usePageContext };

const Context = createContext(undefined);

const PageContextProvider = function ({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ComponentChildren;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
