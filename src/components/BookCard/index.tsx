import Image from "next/image";
import { styBookCard } from "./styles";
import noop from "@src/helpers/noop";

interface BookCardProps {
  cover: string;
  title: string;
  author: string;
  withBookmark?: boolean;
  isBookmarked?: boolean;
  onClickBookmark?: () => void;
  onDeleteBookmark?: () => void;
}

function BookCard({
  cover,
  title,
  author,
  withBookmark = false,
  isBookmarked = false,
  onClickBookmark = noop,
  onDeleteBookmark = noop,
}: BookCardProps) {
  const handleClickBookmark = () => {
    if (isBookmarked) {
      onDeleteBookmark();
    } else {
      onClickBookmark();
    }
  };
  return (
    <div className={styBookCard}>
      <div className="book-cover">
        <Image alt="" src={cover} layout="fill" />
      </div>

      <div className="book-detail">
        <div className="book-info">
          <h2>{title}</h2>
          <p>{author}</p>
        </div>

        {withBookmark && (
          <div
            className={isBookmarked ? "active" : ""}
            onClick={handleClickBookmark}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              stroke="#000000"
              className="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookCard;
