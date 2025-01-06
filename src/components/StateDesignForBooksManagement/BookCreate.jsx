import { useContext, useState } from "react";
import BooksContext from "../../context/BooksContext";

function BookCreate() {
  const [input, setInput] = useState("");

  const { onCreateBook } = useContext(BooksContext);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    onCreateBook(input);
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
}

export default BookCreate;
