import { useContext } from "react";
import "./BookList.css";

import BookShow from "./BookShow";
import BooksContext from "../../context/BooksContext";

function BookList() {
  const { books } = useContext(BooksContext);
  var renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
