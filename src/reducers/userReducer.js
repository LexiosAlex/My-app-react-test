const userReducer = (
  state = {
    loggedIn: false,
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "LOGGING_IN":
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "LOGIN_SUCCESS":
      return {
        loggedIn: true,
        isLoading: false,
        isError: false
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false
      };

    default:
      return state;
  }
};

export default userReducer;
