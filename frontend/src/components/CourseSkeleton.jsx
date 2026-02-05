import React from 'react'

const CourseSkeleton=()=>{
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="placeholder-glow" style={{ height: '180px', background: '#e0e0e0' }} />
        <div className="card-body">
          <h5 className="placeholder-glow"> <span className="placeholder col-8"></span> </h5>
          <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-10"></span>
          </p>
          <p className="placeholder-glow"> <span className="placeholder col-4"> </span> </p>
          <span className="btn btn-outline-secondary disabled placeholder col-12"></span>
        </div>
      </div>
    </div>
  )
}

export default CourseSkeleton