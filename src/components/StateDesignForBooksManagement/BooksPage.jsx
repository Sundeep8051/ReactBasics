import { Provider } from "../../context/BooksContext.jsx";
import BookApp from "./BookApp.jsx";

const BooksPage = () => {
  return (
    <Provider>
      <BookApp />
    </Provider>
  );
};
export default BooksPage;
