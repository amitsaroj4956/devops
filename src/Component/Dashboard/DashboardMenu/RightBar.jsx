import React from "react";
import { Link } from "react-router-dom";

function RightBar() {
  return (
    <>
      <div className="right-bar">
        <div className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">
            <h5 className="m-0 me-2">Settings</h5>

            <Link to="/Dashboard" className="right-bar-toggle ms-auto">
              <i className="mdi mdi-close noti-icon"></i>
            </Link>
          </div>

          <hr className="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>
        </div>
      </div>
    </>
  );
}

export default RightBar;
