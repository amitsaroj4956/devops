import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header_Footer/Header";
import Footer from "./Header_Footer/Footer";
import RightBar from "./DashboardMenu/RightBar";
import VerticalMenu from "./DashboardMenu/VerticalMenu";
import Project from "./Project/Project";
import Login from "../Login/Login";

function Dashboard() {
  const history = useHistory();
  if (localStorage.getItem("email")) {
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
                {/* here is project Component */}
              </div>

              <Footer />
            </div>
            <RightBar />

            <div className="rightbar-overlay"></div>
          </Route>
          <Route exact path="/Dashboard/Project">
            <Project />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>

  );
}

export default Dashboard;
