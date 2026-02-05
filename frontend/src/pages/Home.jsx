import React, { useEffect, useState } from 'react'
import API from '../services/api'
import CourseCard from '../components/CourseCard';
import CourseSkeleton from '../components/CourseSkeleton';

const Home = () => {
  const [courses, setCourses]= useState([])
  const [loading, setLoading]= useState(true)

  useEffect(()=> {
    const fetchCourses= async()=>{
      try {
        const res= await API.get("/courses")
        setCourses(res.data)
      } catch (err) {
        console.error(err)
      } finally{
        setLoading(false)
      }
    }
    fetchCourses();
  }, [])

  return (
    <div className="container mt-4">
      <h3>Courses</h3>
      <div className="row">
        {loading? [...Array(6)].map((_, i) => <CourseSkeleton key={i} />)
          : courses.map(course => <CourseCard key={course._id} course={course} />)}
        {courses.map(course => <CourseCard key={course._id} course={course} />)}
      </div>
    </div>
  )
}

export default Home