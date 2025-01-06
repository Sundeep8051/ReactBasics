/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import BooksContext from "../../context/BooksContext";

const BookEdit = ({ book, onBookEdit }) => {
  const [input, setInput] = useState(book.title);
  const { onEditBook } = useContext(BooksContext);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleEdit = () => {
    onBookEdit();
    onEditBook({ id: book.id, title: input });
  };

  return <input value={input} onChange={handleOnChange} onBlur={handleEdit} />;
};

export default BookEdit;
