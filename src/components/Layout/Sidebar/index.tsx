import React from "react";
import { useRouter } from "next/router";
import SidebarItem from "./SidebarItem";
import { styAsideWrapper } from "./styles";

interface SidebarProps {
  display: boolean;
  onClickMenu: () => void;
}

function Sidebar({ display, onClickMenu }: SidebarProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <aside
      data-testid="shipperSidebar"
      {...(display && { "data-open": true })}
      className={styAsideWrapper}
    >
      <ul>
        <li>
          <SidebarItem
            onClick={onClickMenu}
            path="/"
            image="/icons/ic-home.svg"
            title="Beranda"
            isActive={currentPath === "/"}
          />
        </li>

        <li>
          <SidebarItem
            onClick={onClickMenu}
            path="/DriverManagement"
            image="/icons/ic-user.svg"
            title="Driver Management"
            isActive={currentPath === "/DriverManagement"}
          />
        </li>

        <li>
          <SidebarItem
            onClick={onClickMenu}
            path="/Pickup"
            image="/icons/ic-calendar.svg"
            title="Pickup"
            isActive={currentPath === "/Pickup"}
          />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
