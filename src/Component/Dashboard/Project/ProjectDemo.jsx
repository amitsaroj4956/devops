import React from "react";
import DemoNavTab from "./DemoNavTab";
import GitSource from "./GitSource";
import Build from "./Build";
import Release from "./Release";
const ProjectDemo = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row heading">
          <h3>Customer Relationship Management</h3>
        </div>

        <h3 className="mt-5">Demo</h3>

        <DemoNavTab />
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <GitSource />
            <Build />
            <Release />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            API Component is here
            <GitSource />
            <Build />
            <Release />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            Devopes Admin Component is here
            <GitSource />
            <Build />
            <Release />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDemo;
