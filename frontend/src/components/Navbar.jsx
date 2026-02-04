import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate= useNavigate()
  const logout= ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">MiniCourses</Link>
      <div>
        <Link to="/my-courses" className="btn btn-outline-primary me-2"> My Courses </Link>
        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  )
}

export default Navbar