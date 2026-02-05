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
    try {
      await API.post('/subscribe', {courseId: id, promoCode: course.price===0 ? undefined  : promo })
      alert("Subscribed!") 
    } 
    catch (err) {
      alert(err.response?.data?.message || "Subscription failed")
    }    
  }

  if (!course) return (
    <div className="container mt-4 placeholder-glow">
      <div style={{ height: 250, background: '#e0e0e0' }} className="mb-3" />
      <h3><span className="placeholder col-6"></span></h3>
      <p><span className="placeholder col-8"></span></p>
      <p><span className="placeholder col-4"></span></p>
      <span className="btn btn-success disabled placeholder col-4"></span>
    </div>
  )

  return (
    <div className="container mt-4">
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <p> Price:{" "} {course.price === 0 ? "Free" : validPromo ? <><del>₹{course.price}</del> ₹{course.price / 2}</> : `₹${course.price}`} </p>

      {course.price > 0 && (
        <>
          <input className="form-control mb-2" placeholder="Promo Code" onChange={e => setPromo(e.target.value)} />
          <div className='d-flex justify-content-around p-2'>
            <button className="btn btn-warning mb-2 mr-2" onClick={applyPromo}>Apply Promo</button>
          </div>
        </>
      )}
      <button className="btn btn-success h-100" disabled={course.price > 0 && !validPromo} onClick={subscribe}>Subscribe</button>
    </div>
  )
}

export default CourseDetail