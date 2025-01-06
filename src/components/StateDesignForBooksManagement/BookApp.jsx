import { useEffect, useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import axios from "axios";

const baseBooksDbUrl = "http://localhost:3001/books";

const BookApp = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const result = await axios.get(baseBooksDbUrl);
    setBooks(result.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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

  return (
    <div>
      <BookCreate onCreate={onCreateBook} />
      <BookList books={books} onDelete={onDeleteBook} onEdit={onEditBook} />
    </div>
  );
};

export default BookApp;
