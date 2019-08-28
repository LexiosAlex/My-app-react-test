import axios from "axios";

export const logOut = () => {
  return {
    type: "LOGOUT"
  };
};

export const getProductById = (id) => dispatch => {
  dispatch({type: "LOADING_PRODUCT"});
  axios
    .get("/api/products/id",{
    params: { id }
  }).then(response => {
    console.log(response);
    dispatch({type: "PRODUCT_LOADED_SUCCESS", product: response.data.product})
  })
    .catch(error => {
      console.log(error);
      dispatch({type: "PRODUCT_LOADING_ERROR"})
    })
};

export const onAdminLogin = (username, password) => dispatch => {
  dispatch({ type: "LOGGING_IN" });
  axios
    .post("/login/user", {
      userName: username,
      password: password
    })
    .then(response => {
      console.log("login response: ");
      console.log(response);
      dispatch({ type: "LOGIN_SUCCESS" });
    })
    .catch(error => {
      console.log("login error: ");
      console.log(error);
      dispatch({ type: "LOGIN_ERROR" });
    });
};

