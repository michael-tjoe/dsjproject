import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";

export const styHomePageWrapper = css`
  > section {
    margin-top: 16px;

    ${mq(MD)} {
      margin-top: 32px;
    }
  }
`;
