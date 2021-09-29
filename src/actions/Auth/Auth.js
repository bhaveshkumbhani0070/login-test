export const stroreDataInLocalStorage =
  (loginUser, history) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_SUCCESS", payload: loginUser });
      history.push("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };

export const LogOutFunctionCall = (history) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_SUCCESS" });
    history.push("/Login");
  } catch (error) {
    console.log(error.message);
  }
};
