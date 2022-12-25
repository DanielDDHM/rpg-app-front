import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recover = () => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Recover Password</h3>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" className="form-control mt-1" placeholder="Email Address" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-primary" onClick={() => routeChange('/')}>
              Back To Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Recover;
