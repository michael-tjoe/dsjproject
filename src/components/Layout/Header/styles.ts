import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";
import { primary, white } from "@styles/variables/colors";

export const styHeaderWrapper = css`
  background-color: ${primary};
  padding: 16px 0;

  .left-content {
    display: flex;
    align-items: center;

    .logo {
      position: relative;
      height: 48px;
      aspect-ratio: 3589/1610;

      ${mq(MD)} {
        height: 48px;
      }
    }
  }
`;

export const styBurgerButton = css`
  height: 32px;
  width: 32px;
  position: relative;
  top: -3px;
  border: none;
  padding: 0;
  margin: 0;
  outline: 0;
  margin-right: 20px;
  background-color: transparent;
  cursor: pointer;

  ${mq(MD)} {
    display: none;
  }

  .mobile-button {
    padding: 17px 3px 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;

    > span {
      position: relative;
      display: block;
      width: 32px;
      height: 4px;
      background-color: ${white};
      transition: all 0.4s ease 0s;
      float: right;

      &:before,
      &:after {
        content: "";
        display: block;
        height: 4px;
        right: 0px;
        background: inherit;
        position: absolute;
        transition: all 0.4s ease 0s;
      }

      &:before {
        top: -9px;
        width: 32px;
        transform: rotate(0deg);
      }

      &:after {
        bottom: -9px;
        width: 32px;
        transform: rotate(0deg);
      }
    }

    &[data-open] {
      > span {
        width: 0px;

        &:before {
          top: 0px;
          transform: rotate(45deg);
        }

        &:after {
          bottom: 0px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
