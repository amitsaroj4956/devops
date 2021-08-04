import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Social from "./Social";
import Login from "./Login";

import logo_Light from "../../assets/images/logo-light.png";
import logo_dark from "../../assets/images/logo-dark.png";
import LeftSection from "./LeftSection";

const ForgetPassword = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/ForgetPassword">
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
                              src={logo_dark}
                              alt=""
                              height="18"
                              className="auth-logo-dark"
                            />
                            <img
                              src={logo_Light}
                              alt=""
                              height="18"
                              className="auth-logo-light"
                            />
                          </Link>
                        </div>
                        <div className="my-auto">
                          <div>
                            <h5 className="text-primary"> Reset Password</h5>
                            <p className="text-muted">Re-Password with CRM.</p>
                          </div>

                          <div className="mt-4">
                            <div
                              className="alert alert-success text-center mb-4"
                              role="alert"
                            >
                              Enter your Email and instructions will be sent to
                              you!
                            </div>
                            <form>
                              <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="useremail"
                                  placeholder="Enter email"
                                  required
                                />
                              </div>

                              <div className="text-end">
                                <button
                                  className="btn btn-primary w-md waves-effect waves-light"
                                  type="submit"
                                >
                                  Reset
                                </button>
                              </div>
                            </form>
                            <div className="mt-4 text-center">
                              <p>
                                Remember It ?{" "}
                                <Link to="/" className="fw-medium text-primary">
                                  Sign In here
                                </Link>{" "}
                              </p>
                            </div>
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
export default ForgetPassword;
