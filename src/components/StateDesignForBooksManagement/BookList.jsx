import "./BookList.css";

/* eslint-disable react/prop-types */
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  var renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} book={book} key={book.id} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
