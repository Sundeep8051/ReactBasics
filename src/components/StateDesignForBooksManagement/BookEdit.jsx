/* eslint-disable react/prop-types */
import { useState } from "react";

const BookEdit = ({ book, onBookEdit }) => {
  const [input, setInput] = useState(book.title);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleEdit = () => {
    onBookEdit(input);
  };

  return <input value={input} onChange={handleOnChange} onBlur={handleEdit} />;
};

export default BookEdit;
