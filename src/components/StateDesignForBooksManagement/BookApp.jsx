import { useContext, useEffect } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import BooksContext from "../../context/BooksContext";

const BookApp = () => {
  const { stableFetchBooks } = useContext(BooksContext);
  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default BookApp;
