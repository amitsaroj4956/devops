import React from "react";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import RightBar from "./DashboardMenu/RightBar";
import VerticalMenu from "./DashboardMenu/VerticalMenu";
import Project from "./Project/Project";
import Login from "../Login/Login";

import Profile from "./Profile/Profile";

function Dashboard() {
  const history = useHistory();
  const curentuseremail = localStorage.getItem("email");
  if (curentuseremail) {
    history.push("/Dashboard");
  } else {
    history.push("/");
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Dashboard">
          <div id="layout-wrapper">
            <Header />

            <VerticalMenu />

            <div className="main-content" id="result">
              {/* main section Component */}
            </div>

            <Footer />
          </div>
          <RightBar />

          <div className="rightbar-overlay"></div>
        </Route>
        <Route exact path="/Dashboard/Project">
          <Project />
        </Route>
        <Route exact path="/Profile">
          <Redirect to="/Dashboard/Profile" />
        </Route>
        <Route exact path="/Dashboard/Profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="">
          <pageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Dashboard;
