import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RightBar from "../DashboardMenu/RightBar";
import VerticalMenu from "../DashboardMenu/VerticalMenu";
import Footer from "../Header_Footer/Footer";
import Header from "../Header_Footer/Header";
import AssignProject from "./AssignProject";
import Edit from "./Edit";
import ProfileInfo from "./ProfileInfo";
import ProfileLogo from "./ProfileLogo";
import ProfileSocial from "./ProfileSocial";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();

  if (localStorage.getItem("email") == "") {
    history.push("/");
  }
  return (
    <>
      <div id="layout-wrapper" data-sidebar="dark">
        <Header />

        <VerticalMenu />

        <div className="main-content" id="result">
          <div className="container-fluid">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <ProfileLogo />
                  <ProfileSocial />
                </div>
                <div className="col-md-8">
                  
                  <Router>
                    <Switch>

                      <Route exact path="/Dashboard/Profile"> 
                        <ProfileInfo />
                      </Route>
                      <Route exact path="/Dashboard/Profile/Edit"> 
                        <Edit />
                      </Route>
                    </Switch>
                  </Router>
                  <AssignProject />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Component */}
        </div>
        <Footer />
      </div>
      <RightBar />

      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Profile;
