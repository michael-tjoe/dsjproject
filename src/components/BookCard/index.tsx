import Image from "next/image";
import { styBookCard } from "./styles";

function BookCard({ cover, title, author }) {
  return (
    <div className={styBookCard}>
      <div className="book-cover">
        <Image alt="" src={cover} layout="fill" />
      </div>

      <div className="book-info">
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default BookCard;
