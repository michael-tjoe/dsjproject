import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/router";

import Search from "@components/Search";
import BookCard from "@components/BookCard";
import Button from "@components/Button";

import useLocalStorage from "@hooks/useLocalStorage";
import { MAX_STORAGE, BOOK_STORAGE_KEY } from "@constants/bookStorage";
import { BOOKS_API, PAGE_SIZE } from "@constants/api";

import type { BookData } from "@src/types";
import { tag1 } from "@styles/typography";
import { styCategoryWrapper } from "./styles";

function Category({ initialData, selectedCategory }) {
  const router = useRouter();
  const { id } = router.query;

  const [searchKeyword, setSearchKeyword] = useState("");
  const [bookmarkList, setBookmarkList] = useLocalStorage(
    BOOK_STORAGE_KEY,
    [] as Array<BookData>
  );

  console.log("bookmarkList: ", bookmarkList);

  const [books, setBooks] = useState<Array<BookData>>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const currentPage = useRef(0);

  const lastPage = useRef(null);

  useEffect(() => {
    currentPage.current = 0;
    lastPage.current = null;
    setSearchKeyword("");
    setBooks(initialData);
    setIsLoading(false);
  }, [initialData]);

  const handleBookmarkBook = (book: BookData) => {
    const isAlreadyExists = bookmarkList.find((bookmarkedBook: BookData) => {
      return (
        bookmarkedBook.id === book.id &&
        bookmarkedBook.category_id === book.category_id
      );
    });

    if (isAlreadyExists) return;

    if (bookmarkList.length < MAX_STORAGE) {
      alert("bookmarked!");
      setBookmarkList([...bookmarkList, book]);
    } else {
      alert(`Your storage is full  (${MAX_STORAGE})`);
    }
  };

  const handleDeleteBookmark = (book: BookData) => {
    const result = bookmarkList.filter(
      (bookmarkedBook) =>
        bookmarkedBook.id !== book.id ||
        bookmarkedBook.category_id !== book.category_id
    );
    alert("bookmark deleted");
    setBookmarkList(result);
  };

  const handleFetchData = async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const apiResponse = await fetch(
        `${BOOKS_API}?categoryId=${id}&page=${currentPage.current}&size=${PAGE_SIZE}`
      );

      const data = await apiResponse.json();

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
          const categoryId = book.category_id || 0;
          const title = book.title || "";
          const author = book.authors?.[0] || "";
          const cover = book.cover_url;

          const bookmarkedBook = bookmarkList.find((bookmarkedBook) => {
            return (
              bookmarkedBook.id === bookId &&
              bookmarkedBook.category_id === categoryId
            );
          });

          return (
            <BookCard
              key={bookId}
              title={title}
              author={author}
              cover={cover}
              withBookmark
              isBookmarked={Boolean(bookmarkedBook)}
              onClickBookmark={() => handleBookmarkBook(book)}
              onDeleteBookmark={() => handleDeleteBookmark(book)}
            />
          );
        })}
      </div>
      <div className="cta">
        <Button
          className={`${
            books.length < PAGE_SIZE ||
            (lastPage.current !== null &&
              currentPage.current >= lastPage.current)
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
