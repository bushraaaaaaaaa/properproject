import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'; 
const Login = () => {
  return (
    <div>Login
 <div className="home-wrapper">
      <ul>
        <li>
          <Link to="/" className="home-link">
            Home
          </Link>
          <Link to="/signup" className="home-link">
            Signup
          </Link>
          <Link to="/login" className="home-link">
            Login
          </Link>
        </li>
      </ul>
    </div>


    </div>
  )
}

export default Login