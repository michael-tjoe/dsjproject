import Image from "next/image";
import Link from "next/link";

import noop from "src/helpers/noop";

import { styContainer } from "@styles/base";
import { styBurgerButton, styHeaderWrapper } from "./styles";
import { BookCategoryData } from "@src/types";

interface HeaderProps {
  displayMobileNav: boolean;
  categories: Array<BookCategoryData>;
  onClickBurgerButton: () => void;
}

function Header({
  displayMobileNav = true,
  categories,
  onClickBurgerButton = noop,
}: HeaderProps) {
  return (
    <header className={styHeaderWrapper}>
      <div className={styContainer}>
        <div className="left-content">
          <button
            data-testid="btnMobileNavWrapper"
            onClick={onClickBurgerButton}
            aria-label="sidebar"
            className={styBurgerButton}
            type="button"
          >
            <div
              {...(displayMobileNav && { ["data-open"]: true })}
              data-testid="btnMobileNav"
              className="mobile-button"
            >
              <span />
            </div>
          </button>

          <div className="logo">
            <Image src="/logo.webp" alt="" layout="fill" />
          </div>
        </div>

        <nav className="right-content">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              Category
              <ul className="submenu">
                {categories.map((category) => {
                  return (
                    <li key={category.id}>
                      <Link href={`/category/${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </li>
            <li>
              <Link href="/bookmark">Bookmark List</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
