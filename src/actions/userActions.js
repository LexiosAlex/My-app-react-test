import axios from "axios";

export const logOut = () => {
  return {
    type: "LOGOUT"
  };
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

