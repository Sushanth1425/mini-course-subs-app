import React, { useEffect, useState } from 'react'
import API from '../services/api'

const MyCourses = () => {
  const [courses, setCourses]= useState([])
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    const fetchMyCourses= async ()=>{
      try {
        const res= await API.get("/my-courses")
        setCourses(res.data)
      } catch (err) {
        console.error(err)
      } finally{
        setLoading(false)
      }
    }
    fetchMyCourses()
  }, [])
  
  return (
    <div className="container mt-4">
      <h3>My Courses</h3>
      {loading ? (
        <ul className="list-group placeholder-glow">{[...Array(3)].map((_, i)=>(<li key={i} className="list-group-item"><span className="placeholder col-6"></span></li>))}</ul>
        ) : (
        <ul className="list-group">{courses.map(c=>(<li key={c._id} className="list-group-item">{c.courseId.title} — ₹{c.pricePaid}</li>))}</ul>)}
    </div>
  )
}

export default MyCourses