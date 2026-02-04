import React, { useEffect, useState } from 'react'
import API from '../services/api'

const MyCourses = () => {
  const [courses, setCourses]= useState([])

  useEffect(()=>{
    const fetchMyCourses= async ()=>{
      try {
        const res= await API.get("/my-courses")
        setCourses(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchMyCourses()
  }, [])
  
  return (
    <div className="container mt-4">
      <h3>My Courses</h3>
      <ul className="list-group"> {courses.map(c => <li key={c._id} className="list-group-item"> {c.courseId.title} — ₹{c.pricePaid} </li> )} </ul>
    </div>
  )
}

export default MyCourses