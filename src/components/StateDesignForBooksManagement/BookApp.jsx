import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const BookApp = () => {
  const [books, setBooks] = useState([]);

  const onCreateBook = (book) => {
    console.log(book);
    console.log("Books: ", books);
    setBooks([...books, { id: books.length + 1, title: book }]);
  };

  const onDeleteBook = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  const onEditBook = (editedBook) => {
    const updateBooks = books.filter((book) => {
      return book.id === editedBook.id ? (book.title = editedBook.title) : book;
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
