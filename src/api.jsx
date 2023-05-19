import axios from "axios";

const fetchPopularMedia = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular/?api_key=f2b580f39c0f246e03a7e0285fd99147"
  );

  return response.data.results;
};

export default fetchPopularMedia;
