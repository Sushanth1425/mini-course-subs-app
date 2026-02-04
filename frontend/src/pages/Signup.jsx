import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
        <input className="form-control mb-2" placeholder="Name" onChange={e=>setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}

export default Signup