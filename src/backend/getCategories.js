import axios from "axios";

const getCategories = () => {
  axios.get("/api/categories").then(res => {
    console.log(res);
    return res.data.CategoriesData;
  });
};

export default getCategories;
