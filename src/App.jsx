import BookApp from "./components/StateDesignForBooksManagement/BookApp";
import { Provider } from "./context/BooksContext";

function App() {
  return (
    <Provider>
      <BookApp />
    </Provider>
  );
}

export default App;
