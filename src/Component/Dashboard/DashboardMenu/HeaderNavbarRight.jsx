import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import avatar_3 from "../../../assets/images/users/avatar-3.jpg";
import avatar_4 from "../../../assets/images/users/avatar-4.jpg";
import avatar_1 from "../../../assets/images/users/avatar-1.jpg";
function HeaderNavbarRight(userData) {
  const history = useHistory();

  const Logout = () => {
    localStorage.removeItem("email");
    if (localStorage.getItem("email")) {
      history.push("/Dashboard");
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="dropdown d-inline-block d-lg-none ms-2">
          <button
            type="button"
            className="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="mdi mdi-magnify"></i>
          </button>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form className="p-3">
              <div className="form-group m-0">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="mdi mdi-magnify"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="dropdown d-none d-lg-inline-block ms-1">
          <button
            type="button"
            className="btn header-item noti-icon waves-effect"
            data-toggle="fullscreen"
          >
            <i className="bx bx-fullscreen"></i>
          </button>
        </div>

        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item noti-icon waves-effect"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bx bx-bell bx-tada"></i>
            <span className="badge bg-danger rounded-pill">3</span>
          </button>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <div className="p-3">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="m-0" key="t-notifications">
                    {" "}
                    Notifications{" "}
                  </h6>
                </div>
                <div className="col-auto">
                  <a href="#!" className="small" key="t-view-all">
                    {" "}
                    View All
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Link to="/order" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart"></i>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mt-0 mb-1" key="t-your-order">
                      Your order is placed
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-grammer">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i>{" "}
                        <span key="t-min-ago">3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/notification" className="text-reset notification-item">
                <div className="d-flex">
                  <img
                    src={avatar_3}
                    className="me-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mt-0 mb-1">James Lemire</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-simplified">
                        It will seem like simplified English.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i>{" "}
                        <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/notification-item"
                className="text-reset notification-item"
              >
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="bx bx-badge-check"></i>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mt-0 mb-1" key="t-shipped">
                      Your item is shipped
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-grammer">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i>{" "}
                        <span key="t-min-ago">3 min ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/notification-item"
                className="text-reset notification-item"
              >
                <div className="d-flex">
                  <img
                    src={avatar_4}
                    className="me-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mt-0 mb-1">Salena Layfield</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-occidental">
                        As a skeptical Cambridge friend of mine occidental.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i>{" "}
                        <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-2 border-top d-grid">
              <Link
                to="/ViewMore"
                className="btn btn-sm btn-link font-size-14 text-center"
              >
                <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                <span key="t-view-more">View More..</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="rounded-circle header-profile-user"
              src={avatar_1}
              alt="Header Avatar"
            />
            <span className="d-none d-xl-inline-block ms-1" key="t-henry">
            {localStorage.getItem('email')}


              {console.log('email',userData[0])}
             
            </span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            <Link to="Profile" className="dropdown-item" href="#">
              <i className="bx bx-user font-size-16 align-middle me-1"></i>
              <span key="t-profile">Profile</span>
            </Link>

            <Link to="/Settings" className="dropdown-item d-block" href="#">
              <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
              <span key="t-settings">Settings</span>
            </Link>

            <div className="dropdown-divider"></div>
            <button
              onClick={Logout}
              className="dropdown-item text-danger"
              href="#"
            >
              <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
              <span key="t-logout">Logout</span>
            </button>
          </div>
        </div>

        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item noti-icon right-bar-toggle waves-effect"
          >
            <i className="bx bx-cog bx-spin"></i>
          </button>
        </div>
      </div>
    </>
  );
}
export default HeaderNavbarRight;
