/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();
const baseBooksDbUrl = "http://localhost:3001/books";

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const result = await axios.get(baseBooksDbUrl);
    setBooks(result.data);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

  const onCreateBook = async (title) => {
    const res = await axios.post(baseBooksDbUrl, {
      title,
    });
    setBooks([...books, res.data]);
  };

  const onDeleteBook = async (id) => {
    await axios.delete(`${baseBooksDbUrl}/${id}`);

    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  const onEditBook = async (editedBook) => {
    const res = await axios.put(baseBooksDbUrl + "/" + editedBook.id, {
      title: editedBook.title,
    });

    const updateBooks = books.map((book) => {
      if (book.id === editedBook.id) return { ...book, ...res.data };

      return book;
    });
    setBooks(updateBooks);
  };

  const valueToShare = {
    onCreateBook,
    onEditBook,
    onDeleteBook,
    stableFetchBooks,
    books,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
