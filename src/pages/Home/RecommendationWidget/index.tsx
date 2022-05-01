import { BOOKS_API } from "@constants/api";
import Image from "next/image";
import useFetch from "@hooks/useFetch";
import { styRecommendationWrapper } from "./styles";

import { tag1 } from "@styles/typography";
import BookCard from "@components/BookCard";

function RecommendationWidget() {
  const { isLoading, data } = useFetch(`${BOOKS_API}?categoryId=11&size=5`);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const bookData = data ?? [];

  return (
    <section className={styRecommendationWrapper}>
      <h1 className={tag1}>Popular Booku This Week</h1>
      <div className="slider">
        {bookData.map((book) => {
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

export default RecommendationWidget;
