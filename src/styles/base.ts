import { css } from "@emotion/css";
import { XL } from "./variables/breakpoints";

export const styContainer = css`
  padding: 0 16px;
  margin: 0 auto;
  max-width: ${XL};
`;

export const styRow = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
`;
