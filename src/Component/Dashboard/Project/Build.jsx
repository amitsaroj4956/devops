import React from "react";
import { Link } from "react-router-dom";

const Build = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="bg-da clearfix">
            <div className="row ">
              <div className="col main_col1">
                <span className="badge bg-dark date">
                  <h5 className="text-white">
                    June 2021 <br /> 24 <br />
                    5:37:06 AM{" "}
                  </h5>
                </span>
              </div>
              <div className="col pt-4">
                <div className="row bg-success  p-1">
                  <div className="col">
                    <h3 className="text-white">28 days 6 hours 40 mins ago</h3>
                  </div>
                  <div className="col">
                    <h3 className="text-white text-center">Build</h3>
                  </div>
                  <div className="col">
                    <Link to="/Artifact" className="btn  btn-outline-light mx-1">
                      Artifact
                    </Link>
                    <Link to='/Output1' type="button" className="btn  btn-outline-light mx-1">
                       Output1
                    </Link>
                    <Link to='/Output2' className="btn  btn-outline-light mx-1">
                      Output2
                     </Link>

                    <button
                      type="button"
                      className="btn float-end  btn-outline-light "
                    >
                      Success
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
