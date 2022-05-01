import { styContainer } from "@styles/base";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
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
        displayMobileNav={displaySidebar}
        onClickBurgerButton={handleToggleSidebar}
      />
      <Sidebar onClickMenu={handleCloseSidebar} display={displaySidebar} />
      <main className={styContainer}>{children}</main>
    </>
  );
}

export default Layout;
