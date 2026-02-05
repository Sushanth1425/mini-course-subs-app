import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm h-100">
        <img src={course.image} alt={course.title} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text text-muted">{course.description}</p>
          <div className="mt-auto">
            <p className="fw-bold"> {course.price === 0 ? "Free" : `₹${course.price}`} </p>
            <Link to={`/courses/${course._id}`} className="btn btn-outline-primary w-100"> View Course </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard