import React from 'react'

const ProfileSocial = () => {
    return (
        <>
           
        <div className="card mt-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="mb-0">
          <i className="fab fa-chrome"></i> Website</h5>
            <span className="text-secondary">www.arivani.com</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
         
          <h5 className="mb-0">
          <i className="fa fa-github"></i> Github</h5>
            <span className="text-secondary">@arivani</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="mb-0"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</h5>
            <span className="text-secondary">@arivani</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="mb-0"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</h5>
            <span className="text-secondary">@arivani</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="mb-0"><i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</h5>
            <span className="text-secondary">@arivani</span>
          </li>
        </ul>
      </div> 
        </>
    )
}

export default ProfileSocial
