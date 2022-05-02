import { useState, useRef, useMemo } from "react";
import { useRouter } from "next/router";

import Search from "@components/Search";
import BookCard from "@components/BookCard";

import { BOOKS_API, PAGE_SIZE } from "@constants/api";

import { tag1 } from "@styles/typography";
import { styCategoryWrapper } from "./styles";
import { BookData } from "@src/types";
import Button from "@src/components/Button";

function Category({ initialData, selectedCategory }) {
  const router = useRouter();
  const { id } = router.query;

  const [searchKeyword, setSearchKeyword] = useState("");

  const [books, setBooks] = useState<Array<BookData>>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const currentPage = useRef(0);

  const hasMore = useRef(true);
  const lastPage = useRef(null);

  const handleFetchData = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const apiResponse = await fetch(
        `${BOOKS_API}?categoryId=${id}&page=${currentPage.current}&size=${PAGE_SIZE}`
      );

      const data = await apiResponse.json();
      hasMore.current = data.length >= PAGE_SIZE;

      setBooks(data);

      if (data.length < PAGE_SIZE) {
        lastPage.current = currentPage.current;
      }
    } catch (err) {
      const updatedPage = currentPage.current - 1;

      lastPage.current = updatedPage;
      currentPage.current = updatedPage;
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickNext = () => {
    if (isLoading) return;

    if (!lastPage.current || currentPage.current < lastPage.current) {
      currentPage.current = currentPage.current += 1;
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      handleFetchData();
    }
  };

  const handleClickPrev = () => {
    if (isLoading) return;
    if (currentPage.current <= 0) return;

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });

    currentPage.current = currentPage.current -= 1;
    handleFetchData();
  };

  const handleChangeKeyword = (value) => {
    setSearchKeyword(value);
  };

  const filteredBooks = useMemo(() => {
    if (!searchKeyword) {
      return books;
    }

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchKeyword) ||
        book.authors
          .map((author) => author.toLowerCase())
          .join(" ")
          .includes(searchKeyword)
    );
  }, [books, searchKeyword]);

  return (
    <section className={styCategoryWrapper}>
      <h1 className={tag1}>
        {selectedCategory?.name || ""} - Page: {currentPage.current + 1}
      </h1>
      <div className="page-control">
        <Search onChange={handleChangeKeyword} value={searchKeyword} />
      </div>

      <div className="book-list">
        {filteredBooks.map((book) => {
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
              withBookmark
            />
          );
        })}
      </div>
      <div className="cta">
        <Button
          className={`${
            lastPage.current && currentPage.current >= lastPage.current
              ? "invisible"
              : ""
          }`}
          onClick={handleClickNext}
          primary
          block
        >
          Next
        </Button>

        <Button
          className={`${currentPage.current <= 0 ? "invisible" : ""}`}
          onClick={handleClickPrev}
          block
        >
          Prev
        </Button>
      </div>
    </section>
  );
}

export default Category;
