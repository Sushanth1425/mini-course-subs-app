import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

const Login = () => {
  const [email, setEmail]= useState('');
  const [pwd, setPwd]= useState('');
  const navigate= useNavigate();

  const handleLogin= async(e)=>{
    e.preventDefault();
    try {
      const res= await API.post('/auth/login', {email, password: pwd});
      localStorage.setItem("token", res.data.token);
      navigate('/')
    } catch (err) {
      alert("Invalid Credentials")
    }
  }
  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form action="" onSubmit={handleLogin}>
        <input type="text" className='form-control mb-2' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
        <input type="password" className='form-control mb-2' placeholder='Password' onChange={e=>setPwd(e.target.value)} />
        <button>Login</button>
      </form>
      <p className="mt-4 text-center text-gray-600">Don't have an account? <Link className='text-blue-500 hover:text-blue-600' to='/signup' >SignUp</Link></p>
    </div>
  )
}

export default Login