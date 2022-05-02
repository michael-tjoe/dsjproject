import React from "react";
import { useRouter } from "next/router";
import SidebarItem from "./SidebarItem";
import { styAsideWrapper } from "./styles";
import Link from "next/link";

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
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/">Category</Link>
        </li>

        <li>
          <Link href="/bookmark">Bookmark List</Link>
        </li>

        <li>
          <Link href="/feedback">Feedback</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
