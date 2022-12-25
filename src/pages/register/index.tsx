import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input type="email" className="form-control mt-1" placeholder="e.g Jane Doe" />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" className="form-control mt-1" placeholder="Email Address" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" placeholder="Password" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-primary" onClick={() => routeChange('/')}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
