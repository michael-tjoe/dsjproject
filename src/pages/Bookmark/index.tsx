import { useMemo, useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";

import Search from "@components/Search";
import BookCard from "@components/BookCard";

import { BOOK_STORAGE_KEY } from "@constants/bookStorage";
import { tag1 } from "@styles/typography";
import type { BookData } from "@src/types";
import { styBookmarkWrapper } from "./styles";

function BookmarkPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [bookmarkList, setBookmarkList] = useLocalStorage(
    BOOK_STORAGE_KEY,
    [] as Array<BookData>
  );

  const handleDeleteBookmark = (book: BookData) => {
    const result = bookmarkList.filter(
      (bookmarkedBook) =>
        bookmarkedBook.id !== book.id ||
        bookmarkedBook.category_id !== book.category_id
    );
    alert("bookmark deleted");
    setBookmarkList(result);
  };

  const handleChangeKeyword = (value) => {
    setSearchKeyword(value);
  };

  const filteredBooks = useMemo(() => {
    if (!searchKeyword) {
      return bookmarkList;
    }

    return bookmarkList.filter(
      (book) =>
        book.title.toLowerCase().includes(searchKeyword) ||
        book.authors
          .map((author) => author.toLowerCase())
          .join(" ")
          .includes(searchKeyword)
    );
  }, [bookmarkList, searchKeyword]);

  return (
    <section className={styBookmarkWrapper}>
      <h1 className={tag1}>My Bookmark</h1>

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
              onDeleteBookmark={() => handleDeleteBookmark(book)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BookmarkPage;
