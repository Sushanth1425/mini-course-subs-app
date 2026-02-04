import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5>{course.title}</h5>
          <p>{course.description}</p>
          <p><b>{course.price === 0 ? "Free" : `₹${course.price}`}</b></p>
          <Link to={`/courses/${course._id}`} className="btn btn-outline-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard