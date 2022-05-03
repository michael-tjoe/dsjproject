import React from "react";
import Link from "next/link";

import type { BookCategoryData } from "@src/types";
import { styAsideWrapper } from "./styles";

interface SidebarProps {
  display: boolean;
  categories: Array<BookCategoryData>;
  onClickMenu: () => void;
}

function Sidebar({ display, categories, onClickMenu }: SidebarProps) {
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
          <p>Category</p>
          <ul className="submenu">
            {categories.map((category) => (
              <li onClick={onClickMenu} key={category.id}>
                <Link href={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
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
