import React from 'react'

const AssignProject = () => {
    return (
        <>
        <div className="row gutters-sm">
        <div className="col-sm-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="d-flex align-items-center mb-3">Assign Project Status</h1>
              <small>Web Design</small>
              <div className="progress mb-3" >
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small>Website Markup</small>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small>Page</small>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '30%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small>Mobile Template</small>
              <div className="progress mb-3" >
                <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <small>Backend API</small>
              <div className="progress mb-3" >
                <div className="progress-bar bg-primary" role="progressbar"  style={{width: '90%'}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
        </>
    )
}

export default AssignProject
