import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import './SignUp.css';
const Signup = () => {
  return (
    <div className="signup-card">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="curved-lines">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 200C50 117.157 117.157 50 200 50C282.843 50 350 117.157 350 200" stroke="#2A2A2A" strokeWidth="1" fill="none"/>
            <path d="M30 200C30 106.112 106.112 30 200 30C293.888 30 370 106.112 370 200" stroke="#252525" strokeWidth="1" fill="none"/>
            <path d="M10 200C10 95.067 95.067 10 200 10C304.933 10 390 95.067 390 200" stroke="#202020" strokeWidth="1" fill="none"/>
            <path d="M-10 200C-10 84.022 84.022 -10 200 -10C315.978 -10 410 84.022 410 200" stroke="#1A1A1A" strokeWidth="1" fill="none"/>
            <path d="M70 200C70 128.203 128.203 70 200 70C271.797 70 330 128.203 330 200" stroke="#333333" strokeWidth="1" fill="none"/>
            <path d="M90 200C90 139.249 139.249 90 200 90C260.751 90 310 139.249 310 200" stroke="#3A3A3A" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="left-content">
          <h1 className="headline">
            <span className="gradient-text">We answer every call. </span>{' '}
            <span>So you never miss an opportunity.</span>
          </h1>
          <p className="subtitle">ZubaAI powers the next generation of business communication.</p>
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="rating-text">based on 10,000+ reviews<br/>from top automotive e-commerces</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="logo">
        <img src={Logo} alt="ZubaAI Logo" className="logo-icon" />
          <span className="logo-text">ZubaAI</span>
        </div>
        <h2 className="form-title">Sign up</h2>
        <form className="signup-form">
            <div className="input-field">
            <label className="input-label">FirstName</label>
            <input type="text" placeholder="Enter your first name" className="input"/>
          </div>
          <div className="input-field">
            <label className="input-label">LastName</label>
            <input type="text" placeholder="Enter your last name" className="input"/>
          </div>
          <div className="input-field">
            <label className="input-label">Email</label>
            <input type="email" placeholder="Enter your email" className="input"/>
          </div>
          <div className="input-field">
            <label className="input-label">Password</label>
            <input type="password" placeholder="Create a password" className="input"/>
          </div>
           <div className="input-field">
            <label className="input-label">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="input"/>
          </div>
          <button type="button" className="button button-primary">Get started</button>
          <button type="button" className="button button-secondary google-button">
            <svg className="google-icon" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71c-.18-.54-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </button>
        </form>
        <div className="form-footer">
        <p className="footer-text">
  Already have an account?{" "}
  <Link to="/login" className="footer-link">
    Log in
  </Link>
</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;