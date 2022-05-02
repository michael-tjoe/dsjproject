import { BOOKS_API } from "@constants/api";
import useFetch from "@hooks/useFetch";
import { styRecommendationWrapper } from "./styles";

import { tag1 } from "@styles/typography";
import BookCard from "@components/BookCard";
import { BookData } from "@src/types";

interface BookShowcaseProps {
  books: Array<BookData>;
  title: string;
}

function BookShowcase({
  books = [],
  title = "Popular Booku This Week",
}: BookShowcaseProps) {
  return (
    <section className={styRecommendationWrapper}>
      <h1 className={tag1}>{title}</h1>

      <div className="slider">
        {books.map((book) => {
          const bookId = book.id || 0;
          const title = book.title || "";
          const author = book.authors?.[0] || "";
          const cover = book.cover_url;

          return (
            <BookCard
              key={bookId}
              title={title}
              author={author}
              cover={cover}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BookShowcase;
