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
        <input
          className="border-4 bg-amber-50"
          value={input}
          onChange={handleOnChange}
        />
        <button
          className="mx-3 border-4 bg-blue-400 px-2 py-1 rounded"
          onClick={handleAddBook}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
