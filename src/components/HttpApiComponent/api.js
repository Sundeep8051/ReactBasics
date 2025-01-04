import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID hUC8luZwUylms4uh23S6cUS-AHbtqkRgXuBrVOYTqJA",
    },
    params: {
      query: searchTerm,
    },
  });
  return response.data.results;
};

export default searchImages;
