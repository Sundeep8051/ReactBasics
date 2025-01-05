import { useState } from "react";

/* eslint-disable react/prop-types */
const BookCreate = ({ onCreate }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    onCreate(input);
    setInput("");
  };
  return (
    <div>
      <form>
        <label>Title: </label>
        <input value={input} onChange={handleOnChange} />
        <button onClick={handleAddBook}>Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
