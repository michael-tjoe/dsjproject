import { styBurgerButton, styHeaderWrapper } from "./styles";
import Image from "next/image";
import { styContainer } from "@styles/base";
import noop from "src/helpers/noop";

function Header({ displayMobileNav = true, onClickBurgerButton = noop }) {
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
      </div>
    </header>
  );
}

export default Header;
