import { useState } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import searchImages from "./api";

const HttpApi = () => {
  const [result, setResult] = useState([]);
  const handleSubmit = async (searchTerm) => {
    const response = await searchImages(searchTerm);

    setResult(response);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={result} />
    </div>
  );
};

export default HttpApi;
