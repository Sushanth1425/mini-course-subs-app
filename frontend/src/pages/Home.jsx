import React, { useEffect, useState } from 'react'
import API from '../services/api'
import CourseCard from '../components/CourseCard';

const Home = () => {
  const [courses, setCourses]= useState([])

  useEffect(()=> {
    const fetchCourses= async ()=>{
      try {
        const res= await API.get("/courses")
        setCourses(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCourses();
  }, [])

  return (
    <div className="container mt-4">
      <h3>Courses</h3>
      <div className="row">
        {courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
  )
}

export default Home