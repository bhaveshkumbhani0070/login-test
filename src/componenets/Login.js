import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { stroreDataInLocalStorage } from "../actions/Auth/Auth";

function Login() {
  const [loginInfo, setlofinInfo] = React.useState({
    email: null,
    password: null,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.getItem("user") !== null) {
    return <Redirect to="/Home" />;
  }

  const LoginRedirect = () => {
    dispatch(stroreDataInLocalStorage(loginInfo, history));
  };

  console.log(loginInfo);
  return (
    <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="container">
            <form>
                      <h3>Sign In</h3>

                      <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" placeholder="Enter email" onChange={(e) =>
                    setlofinInfo({ ...loginInfo, [e.target.name]: e.target.value })
                  }/>
                      </div>

                      <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Enter password" onChange={(e) =>
                    setlofinInfo({ ...loginInfo, [e.target.name]: e.target.value })
                  } />
                      </div>

                      <div className="form-group">
                          <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                          </div>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block" onClick={LoginRedirect}>Submit</button>
                      <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                      </p>
                  </form>
          </div>

        </div>
        </div>
  );
}

export default Login;
