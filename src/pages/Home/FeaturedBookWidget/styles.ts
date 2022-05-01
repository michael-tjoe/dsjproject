import { css } from "@emotion/css";
import { mq } from "@styles/mixins";
import { body1 } from "@styles/typography";
import { MD } from "@styles/variables/breakpoints";

export const styFeaturedBookWrapper = css`
  position: relative;
  border-radius: 8px;
  margin: 0 -16px;
  margin-top: 0;
  background-color: rgba(237, 231, 246, 0.4);
  display: grid;
  grid: auto / auto 1fr;
  grid-column-gap: 16px;
  padding: 12px 16px;
  align-items: center;
  overflow: hidden;

  ${mq(MD)} {
    padding: 32px 48px;
    grid-column-gap: 24px;
  }

  .bg-circle {
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    aspect-ratio: 1/1;
    width: 70%;
    transform: translate(60%, -60%);
    border: 40px solid rgba(237, 231, 246, 0.4);
    right: 0;
    background-color: transparent;

    ${mq(MD)} {
      border: 140px solid rgba(237, 231, 246, 0.4);
    }
  }

  .book-cover {
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 2 / 3;
    position: relative;
    width: 100px;

    ${mq(MD)} {
      width: 180px;
    }
  }

  .book-info {
    > p {
      ${body1};
      font-weight: 700;

      ${mq(MD)} {
        max-width: 800px;
      }
    }

    .cta {
      margin-top: 16px;

      ${mq(MD)} {
        > button {
          height: 48px;
          padding: 16px 32px;
        }
      }
    }
  }
`;
