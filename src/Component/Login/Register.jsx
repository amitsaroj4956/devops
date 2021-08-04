import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// component import
import Social from "./Social";
import ForgetPassword from "./ForgetPassword";
import LeftSection from "./LeftSection";
import Login from "./Login";
const Register = (props) => {
  const history = useHistory();
  if (localStorage.getItem("email")) {
    history.push("/Dashboard");
  }

  // validation library
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState({
    successMessage: "",
    errorMessage: "",
  });
  const handleSubmitClick = (e) => {
    // alert("sendDetailsToServer function called");
    if (e.email) {
      // alert("sendDetailsToServer if condtion ");
      const loadData = {
        fullName: e.name,
        email: e.email,
        password: e.password,
        contact: e.mobile,
        about: e.about,
        address: e.address,
        gender: e.gender,
      };
      axios
        .post("http://localhost:4000/api/register", loadData)
        .then(function (response) {
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
                            <form onSubmit={handleSubmit(handleSubmitClick)}>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  placeholder="Enter Your Name"
                                  name="name"
                                  className={`form-control ${
                                    errors.name && "invalid"
                                  }`}
                                  {...register("name", {
                                    required: "Name is Required",
                                  })}
                                  onKeyUp={() => {
                                    trigger("name");
                                  }}
                                />
                                {errors.name && (
                                  <small className="text-danger">
                                    {errors.name.message}
                                  </small>
                                )}
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
                                  id="email"
                                  name="email"
                                  placeholder="Enter email"
                                  className={`form-control ${
                                    errors.email && "invalid"
                                  }`}
                                  {...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                  onKeyUp={() => {
                                    trigger("email");
                                  }}
                                />
                                {errors.email && (
                                  <small className="text-danger">
                                    {errors.email.message}
                                  </small>
                                )}
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
                                  id="mobile"
                                  name="mobile"
                                  className={`form-control ${
                                    errors.mobile && "invalid"
                                  }`}
                                  {...register("mobile", {
                                    required: "mobile Number is Required",
                                    pattern: {
                                      value:
                                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                      message: "Invalid phone no",
                                    },
                                  })}
                                  onKeyUp={() => {
                                    trigger("mobile");
                                  }}
                                />
                                {errors.phone && (
                                  <small className="text-danger">
                                    {errors.mobile.message}
                                  </small>
                                )}
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="username"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <textarea
                                  className={`form-control ${
                                    errors.address && "invalid"
                                  }`}
                                  {...register("address", {
                                    required: "address is Required",
                                    minLength: {
                                      value: 10,
                                      message: "Minimum Required length is 10",
                                    },
                                    maxLength: {
                                      value: 100,
                                      message: "Maximum allowed length is 100 ",
                                    },
                                  })}
                                  onKeyUp={() => {
                                    trigger("address");
                                  }}
                                ></textarea>
                                {errors.address && (
                                  <small className="text-danger">
                                    {errors.address.message}
                                  </small>
                                )}
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
                                  id="about"
                                  name="about"
                                  className={`form-control ${
                                    errors.about && "invalid"
                                  }`}
                                  {...register("about", {
                                    required: "About is Required",
                                  })}
                                  onKeyUp={() => {
                                    trigger("about");
                                  }}
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
                                    placeholder="Enter password"
                                    id="password"
                                    name="password"
                                    aria-label="Password"
                                    className={`form-control ${
                                      errors.password && "invalid"
                                    }`}
                                    {...register("password", {
                                      required: "password is Required",
                                      pattern: {
                                        value:
                                          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/,
                                        message:
                                          "password must be at least 8 characters with lowercase letters , Number and special Characters ",
                                      },
                                    })}
                                    onKeyUp={() => {
                                      trigger("password");
                                    }}
                                  />
                                  <button
                                    className="btn btn-light "
                                    type="button"
                                    id="password-addon"
                                  >
                                    <i className="mdi mdi-eye-outline"></i>
                                  </button>
                                  {errors.password && (
                                    <small className="text-danger">
                                      {errors.password.message}
                                    </small>
                                  )}
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
