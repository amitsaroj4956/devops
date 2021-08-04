import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Social from "./Social";
import ForgetPassword from "./ForgetPassword";
import LeftSection from "./LeftSection";
import Register from "./Register";
import axios from "axios";

const Login = (props) => {

  const history = useHistory();

  if (localStorage.getItem("email")) {
    history.push("/Dashboard");
  }

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.email && state.password !== "") {
      sendDetailsToServer();
      console.log("sendDetailsToServer");
    } else {
      console.log("please fill all field");
    }
  };

  const sendDetailsToServer = () => {
    if (state.email && state.password) {
      // alert('sendDetailsToServer is called');
      const loadData = {
        email: state.email,
        password: state.password,
      };
     axios.post("http://localhost:4000/api/login", loadData).then(function (response) {
      
        console.log("logindata",response.data);  
        const logindata=response.data;
        console.log(logindata);
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Login successful. Redirecting to Dashboard page Component",
            }));
            redirectToDashboard();
          } else {
            alert("Please enter valid username and password");
          }
        })
        .catch(function (error) {
          console.log("error", error);
          alert("Error Data not found");
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };

  const redirectToDashboard = () => {
    localStorage.setItem("email", state.email);
    return history.push("/Dashboard");
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/ForgetPassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>

        <Route exact path="/">
          <div>
            <div className="container-fluid p-0">
              <div className="row g-0">
                <LeftSection />

                <div className="col-xl-4">
                  <div className="auth-full-page-content p-md-5 p-4">
                    <div className="w-100">
                      <div className="d-flex flex-column h-100">
                        <div className="mb-4 mb-md-5">
                          <Link to="/" className="d-block auth-logo">
                            <img
                              src="assets/images/logo-dark.png"
                              alt=""
                              height="18"
                              className="auth-logo-dark"
                            />
                            <img
                              src="assets/images/logo-light.png"
                              alt=""
                              height="18"
                              className="auth-logo-light"
                            />
                          </Link>
                        </div>
                        <div className="my-auto">
                          <div>
                            <h5 className="text-primary">Welcome Back !</h5>
                            <p className="text-muted">
                              Sign in to continue to CRM.
                            </p>
                          </div>

                          <div className="mt-4">
                            <form onSubmit={handleSubmitClick}>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  E-mail
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Enter email"
                                  value={state.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>

                              <div className="mb-3">
                                <div className="float-end">
                                  <Link
                                    to="/ForgetPassword"
                                    className="text-muted"
                                  >
                                    Forgot password?
                                  </Link>
                                </div>
                                <label className="form-label">Password</label>
                                <div className="input-group ">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    aria-label="Password"
                                    autoComplete="password"
                                    id="password"
                                    value={state.password}
                                    onChange={handleChange}
                                    required
                                  />
                                  <button
                                    className="btn btn-light "
                                    type="button"
                                    id="password-addon"
                                  >
                                    <i className="mdi mdi-eye-outline"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="mt-3 d-grid">
                                <button
                                  className="btn btn-primary waves-effect waves-light"
                                  type="submit"
                                >
                                  Log In
                                </button>
                              </div>
                              <div className="mt-3 d-grid">
                                <Link
                                  to="/Register"
                                  className="btn btn-primary waves-effect waves-light"
                                  type="submit"
                                >
                                  Register
                                </Link>
                              </div>
                            </form>
                          </div>
                        </div>
                        <Social />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Login;
