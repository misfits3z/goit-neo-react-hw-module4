
import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/'
const ACCESS_KEY = '6JqFItpWR-xu3bcQEEwde7oZMrram741QWQjm90jU3Q';

const getImages = async (query, page = 1, perPage = 20) => {
    return await axios('search/photos', {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        page: page,
        per_page: perPage,
        orientation: "landscape",
      },
    });
  };

export default getImages;