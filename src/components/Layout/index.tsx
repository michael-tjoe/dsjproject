import { ReactNode, useState } from "react";
import { BookCategoryData } from "@src/types";
import { styContainer } from "@styles/base";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  categories: Array<BookCategoryData>;
  children: ReactNode;
}

function Layout({ children, categories }: LayoutProps) {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleToggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };

  const handleCloseSidebar = () => {
    if (displaySidebar) {
      setDisplaySidebar(false);
    }
  };

  return (
    <>
      <Header
        categories={categories}
        displayMobileNav={displaySidebar}
        onClickBurgerButton={handleToggleSidebar}
      />
      <Sidebar
        categories={categories}
        onClickMenu={handleCloseSidebar}
        display={displaySidebar}
      />
      <main className={styContainer}>{children}</main>
    </>
  );
}

export default Layout;
