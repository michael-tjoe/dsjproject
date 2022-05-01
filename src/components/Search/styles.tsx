import { css } from "@emotion/css";
import {
  blackPrimary,
  primaryHover,
  primaryOutline,
  smoke,
} from "@styles/variables/colors";

export const styInputWrapper = css`
  display: flex;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  > input {
    width: 100%;
    color: ${blackPrimary};
    line-height: 1.5715;
    border-radius: 2px;
    border: 1px solid ${smoke};
    padding: 4px 11px;
    outline: 0;
    &:focus {
      outline: 0;
      border-color: ${primaryHover};
      box-shadow: 0 0 0 2px ${primaryOutline};
    }
  }
  > .input-addon {
    .addon-button {
      border-radius: 0;
    }
    
    .icon {
      color: inherit;
      font-style: normal;
      line-height: 1;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
    }
  }
`;
