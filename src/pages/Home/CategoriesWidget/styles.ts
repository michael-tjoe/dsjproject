import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";

export const styBookCategories = css`
  ${mq(MD)} {
    padding: 32px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    column-gap: 8px;
    row-gap: 8px;

    ${mq(MD)} {
      margin-top: 24px;
      column-gap: 16px;
      row-gap: 16px;
    }
  }
`;
