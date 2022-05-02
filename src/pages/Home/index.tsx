import { useMemo } from "react";
import type { BookCategoryData, BookData } from "@src/types";

import CategoriesWidget from "./CategoriesWidget";
import BookShowcase from "./BookShowcase";
import FeaturedBookWidget from "./FeaturedBookWidget";

import { styHomePageWrapper } from "./styles";

interface HomeProps {
  categories: Array<BookCategoryData>;
  bookRecommendations: Array<BookData>;
}

function Home({ categories, bookRecommendations }: HomeProps) {
  const featuredBook = useMemo(() => {
    const featuredIndex = Math.floor(
      Math.random() * bookRecommendations.length
    );

    return bookRecommendations.find((_, index) => {
      return index === featuredIndex;
    });
  }, [bookRecommendations]);

  return (
    <div className={styHomePageWrapper}>
      <FeaturedBookWidget book={featuredBook} />
      <BookShowcase
        title="Popular Booku This Week"
        books={bookRecommendations}
      />
      <CategoriesWidget categories={categories} />
    </div>
  );
}

export default Home;
