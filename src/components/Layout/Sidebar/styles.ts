import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { body2 } from "@styles/typography";
import { LG, MD } from "@styles/variables/breakpoints";
import { primary, white } from "@styles/variables/colors";

export const styAsideWrapper = css`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 0 20px;
  opacity: 0;
  background: ${white};
  z-index: 2;
  height: calc(100% - 70px);
  transition: 0.2s ease-out;
  visibility: hidden;
  
  &[data-open] {
    visibility: visible;
    opacity: 1;
  }

  ${mq(MD)} {
    transition: unset;
    display: none;
    opacity: 1;
    visibility: visible;
  }

  ${mq(LG)} {
    display: none;
  }

  > ul {
    padding-top: 48px;

    > li {
      > a {
        position: relative;
        display: grid;
        grid: auto / auto-flow 24px 1fr;
        grid-column-gap: 16px;
        align-items: center;
        text-decoration: none;
        padding: 16px 0;

        p {
          ${body2};
          color: ${primary};
          font-weight: 600;
        }

        .icon {
          width: 24px;
          height: 24px;
          position: relative;
        }

        &.active {
          p {
            color: ${primary};
          }
        }
      }
    }
  }
`;
