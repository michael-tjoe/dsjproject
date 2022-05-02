import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";
import { yellowMain } from "@styles/variables/colors";

export const styRecommendationWrapper = css`
  position: relative;
  margin: 0 -16px;
  padding: 16px 0px;
  background-color: ${yellowMain};

  > h1 {
    padding-left: 16px;
  }

  ${mq(MD)} {
    padding: 32px;
    border-radius: 8px;
    justify-content: center;
  }

  .slider {
    padding-left: 16px;
    margin-top: 16px;
    display: flex;
    column-gap: 16px;
    flex-wrap: nowrap;
    overflow: auto;
    overflow-y: hidden;

    > div {
      width: 100px;
      flex-shrink: 0;
    }

    ${mq(MD)} {
      margin-top: 24px;
      border-radius: 8px;
      column-gap: 24px;

      > div {
        width: 180px;
        flex-shrink: 0;
      }
    }
  }
`;
