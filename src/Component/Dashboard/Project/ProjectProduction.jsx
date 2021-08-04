import React from "react";
import ProductionNavTab from "./ProductionNavTab";
import GitSource from "./GitSource";
import Build from "./Build";
import Release from "./Release";
const ProjectProduction = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row heading"></div>
        <h3 className="mt-5">Production</h3>
        <ProductionNavTab />
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="production_nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <GitSource />
            <Build />
            <Release />
          </div>
          <div
            className="tab-pane fade"
            id="production_nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            production API Component is here
            <GitSource />
            <Build />
            <Release />
          </div>
          <div
            className="tab-pane fade"
            id="production_nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            production Devopes Admin Component is here
            <GitSource />
            <Build />
            <Release />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectProduction;
