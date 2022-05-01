import { css } from "@emotion/css";
import { body1 } from "@styles/typography";
import { blackPrimary, smoke } from "@styles/variables/colors";

export const styChipContainer = css`
  ${body1};
  display: flex;
  flex: 0;
  border-radius: 8px;
  border: 1px solid ${smoke};
  padding: 12px 16px;
  white-space: nowrap;
  color: ${blackPrimary};
  cursor: pointer;
`;
