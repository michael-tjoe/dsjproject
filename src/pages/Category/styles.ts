import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";

export const styCategoryWrapper = css`
  margin-top: 16px;

  ${mq(MD)} {
    margin-top: 32px;
  }

  .page-control {
    margin-top: 16px;
    display: grid;
    grid: auto / 1fr auto;

    ${mq(MD)} {
      margin-top: 24px;
    }
  }

  .book-list {
    margin-top: 16px;
    display: grid;
    grid: auto / repeat(2, 1fr);
    grid-gap: 16px;

    ${mq(MD)} {
      margin-top: 40px;
      grid: auto / repeat(5, 1fr);
    }
  }

  .cta {
    margin: 16px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    > button {
      min-height: 40px;

      &.invisible {
        opacity: 0;
        visibility: hidden;
      }
    }

    ${mq(MD)} {
      width: 320px;
      margin-left: auto;
      flex-direction: row-reverse;
      margin-top: 32px;
      column-gap: 24px;
    }
  }
`;
