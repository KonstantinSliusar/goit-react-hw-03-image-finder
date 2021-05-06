import axios from "axios";

const fetchImg = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20874623-da315c02bf395d576f7082eb6&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImg };
