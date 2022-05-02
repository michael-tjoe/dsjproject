import { useContext } from "react";
import { useRouter } from "next/router";
import Search from "@components/Search";
import { CategoriesContext } from "@context/categories/categoriesContext";
import { tag1 } from "@styles/typography";

import { styCategoryWrapper } from "./styles";
import useFetch from "@hooks/useFetch";
import { BOOKS_API } from "@constants/api";
import BookCard from "@components/BookCard";

function Category({ initialData }) {
  const router = useRouter();
  const { id } = router.query;
  const { categories } = useContext(CategoriesContext);

  const { isLoading, data } = useFetch(`${BOOKS_API}?categoryId=${id}&size=10`);
  const bookData = data ?? [];

  const selectedCategory = categories.find(
    (category) => category.id === Number(id)
  );

  return (
    <section className={styCategoryWrapper}>
      <h1 className={tag1}>{selectedCategory?.name || ""}</h1>
      <div className="page-control">
        <Search />
      </div>

      <div className="book-list">
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

export default Category;
