import { css } from "@emotion/css";
import { body1 } from "@src/styles/typography";
import { mq } from "@styles/mixins";
import { MD } from "@styles/variables/breakpoints";

export const styFeedbackWrapper = css`
  margin-top: 16px;

  ${mq(MD)} {
    margin-top: 32px;
  }

  ul {
    list-style-type: circle;

    > li {
      margin-top: 16px;
      ${body1};
    }
  }
`;
