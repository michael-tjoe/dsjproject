import { css } from "@emotion/css";
import { mq } from "./mixins";
import { LG, MD } from "./variables/breakpoints";

export const tagStyle = css`
  font-family: "Quicksand", sans-serif;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

export const tag1 = css`
  ${tagStyle};
  font-size: 20px;

  ${mq(MD)} {
    font-size: 34px;
  }
`;

export const tag2 = css`
  ${tagStyle};
  font-size: 28px;
`;

export const tag3 = css`
  ${tagStyle};
  font-size: 24px;
`;

export const tag4 = css`
  ${tagStyle};
  font-size: 22px;
`;

export const tag5 = css`
  ${tagStyle};
  font-size: 20px;
`;

export const body1 = css`
  font-size: 12px;
  line-height: 1.5715;

  ${mq(MD)} {
    font-size: 18px;
  }
`;

export const body2 = css`
  font-size: 14px;
  line-height: 22px;

  ${mq(MD)} {
    font-size: 16px;
    line-height: 1.5715;
  }
`;

export const body3 = css`
  font-size: 10px;
  line-height: 1.5715;

  ${mq(MD)} {
    font-size: 12px;
  }
`;
