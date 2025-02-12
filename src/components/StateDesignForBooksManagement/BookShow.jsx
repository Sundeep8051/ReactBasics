import { useContext, useState } from "react";
import "./BookShow.css";
import BookEdit from "./BookEdit";
import BooksContext from "../../context/BooksContext";

/* eslint-disable react/prop-types */
const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(true);

  const { onDeleteBook } = useContext(BooksContext);

  const handleDelete = () => {
    onDeleteBook(book.id);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleBookEdit = () => {
    setShowEdit(!showEdit);
  };

  const content = showEdit ? (
    <h3>{book.title}</h3>
  ) : (
    <BookEdit book={book} onBookEdit={handleBookEdit} />
  );
  return (
    <div className="card">
      <p>Id: {book.id}</p>
      <div>Title: {content}</div>
      <button onClick={handleShowEdit} className="edit-btn">
        <i className="fa fa-pencil"></i>
      </button>
      <button onClick={handleDelete} className="cancel-btn">
        X
      </button>
    </div>
  );
};

export default BookShow;
