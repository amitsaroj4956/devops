import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../src/assets/images/logo.svg";
import logo_dark from "../../../../src/assets/images/logo-dark.png";
import logo_light from "../../../../src/assets/images/logo-light.png";

var verticalMenu = () => {
  var element = document.getElementById("root");
  element.classList.toggle("addcss");
};

function HeaderNavbarLogo() {
  return (
    <>
      <div className="d-flex">
        <div className="navbar-brand-box">
          <Link to="/Dashboard" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logo_dark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/Dashboard" className="logo logo-light">
            <span className="logo-sm">
              <img src={logo_light} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logo_light} alt="" height="19" />
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={verticalMenu}
          className="btn btn-sm px-3 font-size-16 header-item waves-effect"
          id="vertical-menu-btn"
        >
          <i className="fa fa-fw fa-bars"></i>
        </button>

        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <span className="bx bx-search-alt"></span>
          </div>
        </form>
      </div>
    </>
  );
}
export default HeaderNavbarLogo;
