import axios from "axios";

// handleSubmit = e => {
//   const {onChangeLoginStatus} = this.props;
//   e.preventDefault();
//   this.props.form.validateFields((err, values) => {
//     console.log(values);
//     if (err) {
//       console.log(err);
//     }

export const onUnLogin = () => {
  return {
    type: "UNLOGIN"
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

// });
