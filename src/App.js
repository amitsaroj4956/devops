import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Login from "./Component/Login/Login";
import ForgetPassword from "./Component/Login/ForgetPassword";
import Dashboard from "./Component/Dashboard/Dashboard";
import Project from "./Component/Dashboard/Project/Project";
import Register from "./Component/Login/Register";
import Profile from "./Component/Dashboard/Profile/Profile";
import Edit from "./Component/Dashboard/Profile/Edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/ForgetPassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Dashboard/Project">
          <Project />
        </Route>
        <Route exact path="/Dashboard/Profile">
          <Profile />
        </Route>
        <Route path="/Profile">
          <Redirect to="/Dashboard/Profile" />
        </Route>
        

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="">
          <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                  <span class="display-1 d-block text-danger">404</span>
                  <div class="mb-4 lead">
                    The page you are looking for was not found.
                  </div>
                  <Link to="/" class="btn btn-link">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
