import React from "react";
import ProjectDemo from "./ProjectDemo";
import ProjectProduction from "./ProjectProduction";
import Header from "../Header_Footer/Header";
import Footer from "../Header_Footer/Footer";
import VerticalMenu from "../DashboardMenu/VerticalMenu";
import RightBar from "../DashboardMenu/RightBar";
import { useHistory } from "react-router-dom";

function Project() {
  const history = useHistory();

  if (localStorage.getItem("email") === "") {
    history.push("/");
  }
  return (
    <>
      <div id="layout-wrapper" data-sidebar="dark">
        <Header />

        <VerticalMenu />

        <div className="main-content" id="result">
          <ProjectDemo />
          <ProjectProduction />
        </div>
        <Footer />
      </div>
      <RightBar />

      <div className="rightbar-overlay"></div>
    </>
  );
}

export default Project;
