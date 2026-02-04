import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import MyCourses from './pages/MyCourses'
import CourseDetail from './pages/CourseDetail'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<PrivateRoute> <Home /> </PrivateRoute>}  />
        <Route path='/courses/:id' element={<PrivateRoute> <CourseDetail /> </PrivateRoute>}  />
        <Route path='/my-courses' element={<PrivateRoute> <MyCourses /> </PrivateRoute>}  />
      </Routes>
    </>
  )
}

export default App
