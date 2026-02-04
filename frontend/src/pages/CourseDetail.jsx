import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../services/api'

const CourseDetail = () => {
  const {id}= useParams()
  const [course, setCourse]= useState(null)
  const [promo, setPromo]= useState('');
  const [validPromo, setValidPromo]= useState(false);

  useEffect(()=>{
    const fetchCourse= async()=>{
      try {
        const res= await API.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, [id])

  const applyPromo= ()=>{
    if (promo==='BFSALE25') setValidPromo(true)
    else alert("Invalid promo code")
  }

  const subscribe= async()=>{
    await API.post('/subscribe', {courseId: id, promoCode: validPromo ? promo : null});
    alert("Subscribed!")
  }

  if (!course) return <p>Loading...</p>

  return (
    <div className="container mt-4">
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <p> Price:{" "} {course.price === 0 ? "Free" : validPromo ? <><del>₹{course.price}</del> ₹{course.price / 2}</> : `₹${course.price}`} </p>

      {course.price > 0 && (
        <>
          <input className="form-control mb-2" placeholder="Promo Code" onChange={e => setPromo(e.target.value)} />
          <button className="btn btn-warning mb-2" onClick={applyPromo}>Apply Promo</button>
        </>
      )}
      <button className="btn btn-success" disabled={course.price > 0 && !validPromo} onClick={subscribe}>Subscribe</button>
    </div>
  )
}

export default CourseDetail