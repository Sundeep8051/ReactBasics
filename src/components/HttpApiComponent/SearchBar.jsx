import "./SearchBar.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter search term: </label>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
