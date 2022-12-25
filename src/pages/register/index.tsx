import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../config/axios';
// import checkIcon from '../../assets/icons/check.svg';

const Register = () => {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  const register = async (event: any) => {
    event.preventDefault();
    await request({
      url: '/v1/user',
      method: 'POST',
      data: {
        nick,
        email,
        name,
        password,
        phone,
      },
    })
      .then((res) => res.data)
      .catch((e) => e.messages);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center"></div>
          <div className="form-group mt-3">
            <label>Nick</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={(e) => setNick(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={async (e) => await register(e)}
            >
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
