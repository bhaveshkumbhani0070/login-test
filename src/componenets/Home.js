import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOutFunctionCall } from "./../actions/Auth/Auth";

function Home() {
  const [userInfo, setUerInfo] = React.useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => {
    return state.Auth;
  });

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUerInfo(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  if (localStorage.getItem("user") === null) {
    return <Redirect to="/Login" />;
  }

  const LogOut = () => {
    dispatch(LogOutFunctionCall(history));
  };
  return (
    <div>
      <div className="btn btn-primary" onClick={LogOut}>
        logout
      </div>
      <br />
      Hello ! <p>Your email from localStorage : {userInfo?.email}</p>
      Hello ! <p>Your email from reducer state : {state?.email}</p>
    </div>
  );
}

export default Home;
