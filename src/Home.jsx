import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const Home = () => {
  return (
    <div className="home-wrapper">
        <h1>home</h1>
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
  );
};

export default Home;
