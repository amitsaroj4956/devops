import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Social from "./Social";
import ForgetPassword from "./ForgetPassword";
import LeftSection from "./LeftSection";
import Login from "./Login";
const Register = (props) => {
  const history = useHistory();

  if (localStorage.getItem("email")) {
    history.push("/Dashboard");
  }

  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    about: "",
    address: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    // alert("sendDetailsToServer function called");
    if (state.email) {
      // alert("sendDetailsToServer if condtion ");
      const loadData = {
        fullName: state.name,
        email: state.email,
        password: state.password,
        contact: state.mobile,
        about: state.about,
        address: state.address,
        gender: state.gender,
      };
      axios.post("http://localhost:4000/api/register", loadData).then(function (response) {
  
      if (response.status === 200) {
            setState((prevState) => ({
                           ...prevState,
                           successMessage:
                          "Registration successful. Redirecting to home page..",
            }));
            redirectToLogin();
            alert("Registration successful");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please enter valid username and password");
    }
  };

  const redirectToLogin = () => {
    history.push("/");
  };
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendDetailsToServer();
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/ForgetPassword">
          <ForgetPassword />
        </Route>

        <Route exact path="/Register">
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
                            <h5 className="text-primary">Welcome </h5>
                            <p className="text-muted">
                              Register in to continue to CRM.
                            </p>
                          </div>
                            <h1>{state.successMessage}</h1>
                          <div className="mt-4">
                            <form onSubmit={handleSubmitClick}>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter Your Name"
                                  name="name"
                                  onChange={handleChange}
                                  value={state.name}
                                  required
                                />
                              </div>
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
                                  onChange={handleChange}
                                  value={state.email}
                                  required
                                />
                                
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="mobile"
                                  placeholder="Enter Your Mobile Number"
                                  onChange={handleChange}
                                  value={state.mobile}
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  placeholder="Enter Your Address"
                                  onChange={handleChange}
                                  value={state.address}
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  About
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="about"
                                  placeholder="Enter About Your Self"
                                  onChange={handleChange}
                                  value={state.about}
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
                                    id="password"
                                    aria-label="Password"
                                    onChange={handleChange}
                                    value={state.password}
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
                                  Register
                                </button>
                              </div>

                              <div className="mt-3 d-grid">
                                <Link
                                  to="/"
                                  className="btn btn-primary waves-effect waves-light"
                                >
                                  Log In
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
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Register;
