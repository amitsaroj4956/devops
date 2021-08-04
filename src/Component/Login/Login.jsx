import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  var handleSubmitClick = (e) => {
    console.log("sendDetailsToServer");
    const email = e.email;
    const password = e.password;
    if (email && password) {
      // alert('sendDetailsToServer is called');
      const loadData = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:4000/api/login", loadData).then(function (response) {
          console.log("logindata", response.data);
          const logindata = response.data.email;
          console.log(logindata);
          if (response.status === 200) {
            localStorage.setItem("email", email);
            return history.push("/Dashboard");
          } else {
            alert("Please enter valid Password");
          }
        })
        .catch(function (error) {
          alert("Please enter valid username and password");
          console.log("catch error",error);
        });
    }
  };

  const history = useHistory();

  if (localStorage.getItem("email")) {
    history.push("/Dashboard");
  }

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
                            <form onSubmit={handleSubmit(handleSubmitClick)}>
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
                                  {...register("email",
                                  {
                                  required: "Email is Required",
                                  pattern: {
                                          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                                    aria-label="Password"
                                    autoComplete="password"
                                    id="password"
                                    name="password"
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
