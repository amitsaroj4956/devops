import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
const ProfileInfo = () => {
    return (
        <>
        <Router>
        <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Full Name</h5>
            </div>
            <div className="col-sm-9 text-secondary">
            {sessionStorage.getItem('name')}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Email</h5>
            </div>
            <div className="col-sm-9 text-secondary">
              {localStorage.getItem('email')}
            </div>
          </div>
          <hr />
          
          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Mobile</h5>
            </div>
            <div className="col-sm-9 text-secondary">
            {sessionStorage.getItem('mobile')}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Address</h5>
            </div>
            <div className="col-sm-9 text-secondary">
            {sessionStorage.getItem('address')}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <Link to="/Dashboard/Profile/Edit" className="btn btn-outline-primary" >Edit</Link>
            </div>
          </div>
        </div>
    </div>
    </Router>
</>
    )
}

export default ProfileInfo
