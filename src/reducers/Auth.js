export default (user = [], actions) => {
  switch (actions.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(actions.payload));
      return actions.payload;
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("user", JSON.stringify(actions.payload));
      return [];
    default:
      return [];
  }
};
