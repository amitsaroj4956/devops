import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

var subMenu = () => {
  var element = document.getElementById("root");
  element.classList.toggle("show");
};

function VerticalMenu() {
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="t-menu">
                Menu
              </li>

              <li>
                <Link to="/Dashboard" className="waves-effect">
                  <i className="bx bx-home-circle"></i>
                  <span key="t-dashboards">Dashboard</span>
                </Link>
              </li>

              <li>
                <span
                  onClick={subMenu}
                  className="mx-4 main_dropdown_men waves-effect "
                >
                  <i className="bx bx-badge-check"></i>

                  <span key="t-customers" className="dropdown-toggle">
                    Projects
                  </span>
                  <ul className="submenu" id="submenu">
                    <li>
                      <Link to="/Dashboard/Project" className="waves-effect">
                        <i className="bx bx-badge-check"></i>
                        <span key="t-customers">CRM</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashboard/Project" className="waves-effect">
                        <i className="bx bx-badge-check"></i>
                        <span key="t-customers">Projects2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashboard/Project" className="waves-effect">
                        <i className="bx bx-badge-check"></i>
                        <span key="t-customers">Projects3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Dashboard/Project" className="waves-effect">
                        <i className="bx bx-badge-check"></i>
                        <span key="t-customers">Projects4</span>
                      </Link>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalMenu;
