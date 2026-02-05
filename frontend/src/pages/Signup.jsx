import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

const Signup = () => {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [pwd, setPwd]= useState('')
  const navigate= useNavigate()

  const handleSignup= async(e)=>{
    e.preventDefault();
    await API.post('/auth/signup', {name, email, password: pwd})
    navigate('/login')
  }
  return (
    <div className="container mt-5">
      <h3>Signup</h3>
      <form onSubmit={handleSignup}>
        <input style={{ width: '270px' }} className="form-control mb-2" placeholder="Name" onChange={e=>setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e=>setPwd   (e.target.value)} />
        <button className="btn btn-primary">Signup</button>
      </form>
      <p className='mt-4 text-center text-gray-600'>Already Registered? <Link className='text-blue-500 hover:text-blue-600' to='/'>Login</Link></p>
    </div>
  )
}

export default Signup