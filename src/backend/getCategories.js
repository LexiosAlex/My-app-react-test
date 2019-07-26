import axios from "axios";

const getCategories = () => {
  axios.get("http//localhost:5000/api/categories").then(res => {
    console.log(res);
    return res.categoriesData;
  });
};

export default getCategories;
