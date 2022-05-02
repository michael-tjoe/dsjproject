import { css } from "@emotion/css";
import { primary } from "@src/styles/variables/colors";
import { body1, body3 } from "@styles/typography";

export const styBookCard = css`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  .book-cover {
    position: relative;
    aspect-ratio: 2/3;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .book-detail {
    display: flex;
    column-gap: 16px;
    align-items: center;

    > div {
      svg {
        width: 16px;
        height: 16px;
        cursor: pointer;
      }

      &.active {
        svg {
          fill: ${primary};
        }
      }
    }

    .book-info {
      flex-grow: 1;
      display: block;

      > h2 {
        ${body1};
        font-weight: bold;
        margin-bottom: 4px;
      }

      > p {
        ${body3};
        opacity: 0.5;
      }
    }
  }
`;
