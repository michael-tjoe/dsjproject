import { memo } from "react";
import Image from "next/image";
import { styBookCard } from "./styles";

function BookCard({ cover, title, author, withBookmark = false }) {
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
          <div>
            <svg
              enableBackground="new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M70.715,0v512L256,326.715L441.285,512V0H70.715z M411.239,439.462L256,284.224L100.761,439.462V30.046h310.477V439.462z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(BookCard);
