  import React, { useState } from 'react';
  import axios from 'axios';
  import { Navigate } from 'react-router-dom';
  import {ToastContainer,toast} from 'react-toastify'


  function LogIn() {
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/auth/loginAdmin', {
          method: 'POST',
        //  mode:'cors',
          headers: {
            'Content-Type': 'application/json',
          //  'Access-Control-Allow-Origin' : '*'
          },
         // credentials: 'include',
          body: JSON.stringify({
            email,
            password
          })
        });
    
        if (response.ok) {
          // Login successful, do something with the response
          const data = await response.json();
          console.log(data); // Example: log the response data
        } else {
          // Login failed, handle the error response
          const errorData = await response.json();
          console.error(errorData); // Example: log the error response
        }
      } catch (error) {
        // Handle network errors or exceptions
        console.error(error);
      }
    };
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name='email'
                className="form-control mt-1"
                onChange={e=>setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name='password'
                className="form-control mt-1"
                onChange={e=>setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  export default LogIn;
